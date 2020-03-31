---
permalink: /docs/extensions
layout: Docs
---

# Extensions

## What is an extension

Ops are written using Lua, a simple, high-level scripting language. Lua is an easy language to learn - it is a minimal language with a small standard library and few concepts.

Operate allows you to extend the Lua environment with your own modules and functions. You don't even need to write these extensions in Lua - you can write code in the language of your host application and the Operate agent seamlessly exposes these to the Lua VM and automatically handles the appropriate conversion of types. This allows you to not only extend Lua, but allow **Bitcoin transactions to directly interact with code in your application**.

## Built-in extensions

Both the Operate Elixir and JavaScript agents come with a number of built in extensions. These expose helper methods to Lua for commonly used functionality, and are implemented consistently across platforms.

* [Agent extension](#agent-extension)
* [Base extension](#base-extension)
* [Context extension](#context-extension)
* [Crypto extension](#crypto-extension)
* [JSON extension](#json-extension)

### Agent extension

Extends the Lua VM with functions for accessing the running agent.

#### `agent.load_tape(txid [, opts])`

Loads a tape by the given txid and returns the tape.

#### `agent.load_tapes_by(query [, opts])`

Loads a table of tapes by the given query and returns the table.

#### `agent.local_tape(index [, opts])`

Gets a tape from the context transaction by its output index.

#### `agent.run_tape(tape [, opts])`

Runs the given tape, and returns the result.

### Base extension

Extends the Lua VM with functions for encoding and decoding hex and base64 strings.

#### `base.encode16(str)`

Encodes the given string into a hex string.

#### `base.encode64(str)`

Encodes the given string into a base64 string.

#### `base.decode16(str)`

Decodes the given hex string.

#### `base.decode64(str)`

Decodes the given base64 string.

### Context extension

Extends the Lua VM with functions for accessing the transaction context.

#### `ctx.tx_input(index)`

Gets the input from the context transaction, returning a pushdata table.

#### `ctx.tx_output(index)`

Gets the output from the context transaction, returning a pushdata table.

#### `ctx.get_tape()`

Gets the current tape from the context tx, returning a pushdata table.

#### `ctx.get_cell([index])`

Gets the cell from the context tx, returning a pushdata table. If no index is provided, the current cell is returned.

#### Attributes

* `ctx.tx` - the current context tx
* `ctx.tape_index` - the output index of the current tape
* `ctx.cell_index` - the index of the current cell from all cells
* `ctx.data_index` - the index of the start of current cell from all pushdata

### Crypto extension

Extends the Lua VM with common crypto functions.

#### `crypto.aes.encrypt(data, key [, opts])`

Encrypts the data with the given secret using AES-GCM.

#### `crypto.aes.decrypt(data, key [, opts])`

Decrypts the data with the given secret using AES-GCM.

#### `crypto.ecies.encrypt(data, key [, opts])`

Encrypts the data with the given ECDSA public key using ECIES.

#### `crypto.ecies.decrypt(data, key [, opts])`

Decrypts the data with the given ECDSA private key using ECIES.

#### `crypto.ecdsa.sign(message, key [, opts])`

Signs the message with the given ECDSA private key.

#### `crypto.ecdsa.verify(signature, message, key [, opts])`

Verifies the signature against the message with the given ECDSA public key.

#### `crypto.rsa.encrypt(data, key [, opts])`

Encrypts the data with the given RSA public or private key.

#### `crypto.rsa.decrypt(data, key [, opts])`

Decrypts the data with the given RSA public or private key.

#### `crypto.rsa.sign(message, key [, opts])`

Signs the message with the given RSA private key.

#### `crypto.rsa.verify(signature, message, key [, opts])`

Verifies the signature against the message with the given RSA public key.

#### `crypto.hash.ripemd160(data [, opt])`

Hashes the data using the `RIPEMD160` algorithm.

#### `crypto.hash.sha1(data [, opt])`

Hashes the data using the `SHA-1` algorithm.

#### `crypto.hash.sha256(data [, opt])`

Hashes the data using the `SHA-256` algorithm.

#### `crypto.hash.sha512(data [, opt])`

Hashes the data using the `SHA-512` algorithm.

#### `crypto.bitcoin_message.sign(message, key [, opts])`

Signs the message using the `BE1` algorith with the given ECDSA private key.

#### `crypto.bitcoin_message.verify(signature, message, key [, opts])`

Verifies the signature against the message using the `BE1` algorithm with the given ECDSA public key.


### JSON extension

Extends the Lua VM with functions for encoding and decoding JSON.

#### `json.encode(data)`

Encodes the given data table into a JSON string.

#### `json.decode(str)`

Decodes the given JSON string and returns a data table.

## Creating an extension

### Elixir

### JavaScript