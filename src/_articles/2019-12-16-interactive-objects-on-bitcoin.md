---
title: Building interactive objects on Bitcoin
date: 2019-12-16
description: Learn how Operate can return functions that can be used for decrypting encrypted data and much more.
image: /2019/12/functions-card.jpg
banner: /2019/12/functions.jpg
card: /2019/12/functions-card.jpg
author: Libs
---

Transactions powered by Operate can be made to return any kind of value - from primitives like strings and integers, to arrays and [structured objects](/blog/data-mapping-structured-objects/). One little known superpower of Ops is that they can also return **functions**.

Returning a function allows you to create new, innovative ways of your application interfacing with Bitcoin. We can begin to treat transactions as interactive objects with methods and callbacks, and design transactions to do just about anything imaginable.

You can create transactions that are able to execute HTTP requests, or transactions that can build and broadcast new transactions. You can pass parameters directly from your application and implement some of your app's business logic inside transactions.

## Handling encrypted data

One use-case for functions is to create an interface for decrypting encrypted data. You can securely pass a private key from your application to a function, without permanently exposing the private key to the Lua VM or any other Ops in the program.

A number of Ops currently follow this pattern.

* [`crypto/ecies_data`](/library/op/?ref=714e3702) - puts data encrypted using Electrum's ECIES implementation on to the state.
* [`crypto/rsa_aes_data`](/library/op/?ref=49b32fbe) - as above but uses an RSA/AES encryption algorithm.

Both of these Ops attach a `decrypt` function to the state, which can be called from your application. When passed the correct private key, the function handles decryption and returns the unencrypted data.

For example, the Op `crypto/ecies_data` expects two parameters: the `path` and the encrypted `data`. From the [source code](/library/op/?ref=714e3702), lets take a closer look at the following key parts.

```lua
-- Define the encrypted data table
local encrypted = {
  data = data
}
  
-- Attach the decrypt method
function encrypted.decrypt(privatekey)
  return crypto.ecies.decrypt(encrypted.data, privatekey)
end
  
-- Put the encrypted data on to state
extend(state, path, encrypted)
return state
```

The first part of the code above simply defines a local variable with the variable name `encrypted`, which is a table (like a JavaScript object) with a property containing the raw encrypted data.

The next few lines attach a function named `decrypt` on the `encrypted` table. This function receives a private key, handles decryption and returns the unencrypted data.

Finally the `encrypted` table is added on to the state at the given `path` and the state is returned.

## Example: On-chain paywall

Imagine you're building an on-chain paywall application. You want to design a transaction where part of the data is public and part encrypted. Your app holds the private key and controls access to the encrypted data to users who have paid a fee.

To construct the paywall transaction, you can use the Bitcom [B://](https://b.bitdb.network) protocol combined with the `crypto/ecies_data` Op.

```bash
OP_FALSE OP_RETURN
  "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut"  # B://
    "Hello world"
    "Text/plain"
    |
  0x714E3702  # crypto/ecies_data
    "paywall"
    <encrypted data>
```

Using the `bsv.js` library, you can encrypt the paywall content using your app's public key. The following code will return the encrypted data to use in the transaction above.

```javascript
const ECIES = require('bsv/ecies')
const ecies = new ECIES().publicKey(pubkey)

const paywall = 'Top secret information'
const encrypted = ecies.encrypt(paywall)
```

When the transaction is run through Operate it will return an object like this:

```json
{
  "data": "Hello world",
  "encoding": "utf8",
  "type": "text/plain",
  "paywall": {
    "data": "QklFMQNgUeoXx8LHV4rEbTzUJ9vjTGgKQ+8hZQq6Q5HpD77KReAHK0OS2nkh6BmWULqWWjN88O5vchd3ZEHvdXHzGPc0tsJaD67KGi/np47BLKPyyoBCSpGmuY3+SQcsMvX5S0c=",
    "decrypt": "function(privateKey)"
  }
}
```

Within your application you can now load and run the tape. The result gives you access to the `decrypt` function, which you can call and pass your app's private key, and receive the decrypted data.

```elixir
# Load and run the tape
{:ok, tape} = txid
|> Operate.load_tape!
|> Operate.run_tape

# Access and execute the decrypt function
{:ok, result} = tape.result
|> get_in(["paywall", "decrypt"])
|> Operate.VM.exec_function([private_key])
```

## Conclusion

Functions returning functions is some crazy meta stuff! Suddenly your app's transactions no longer need be limited to containing static data, but can become living, breathing parts of your application. The line between where Bitcoin ends and your application starts can be wherever you decide that line to be. This opens the door to all kinds of creative use-cases.

In this article we're beginning to realize Operate's promise of *limitless possibilities*. In my next article we'll take this one step further and explore how we can extend the Lua VM, and make modules and functions from your application available to your Ops and transactions.
