---
title: Flexible, interoperable signature protocols
date: 2019-12-06
description: Take the pain out of working with signatures and see how Operate enables interoperable signature schemes.
image: /2019/12/fingerprint-card.jpg
banner: /2019/12/fingerprint.jpg
card: /2019/12/fingerprint-card.jpg
highlight: 'bg-white-90'
author: Libs
---

Signatures in data transactions can be used to prove ownership or origin of the data, and can form the basis for more complex transaction types such as contracts and agreements.

A number of BSV protocols have emerged for handing signatures in `OP_RETURN` data transactions. The most widely used are the [`AIP`](https://github.com/BitcoinFiles/AUTHOR_IDENTITY_PROTOCOL) and [`HAIP`](https://github.com/torusJKL/BitcoinBIPs/blob/master/HAIP.md) protocols. They have a similar design but make use of different algorithms to construct the message the signature is verified against. We also have Unwriter's draft [su protocol](https://su.planaria.network/), which uses a different algorithm again, and promotes a simpler "convention over configuration" approach.

The problem with all these different protocols is that it's impractical to expect apps to implement every possible protocol. Implementing just one protocol's algorithm is a fiddly enough business - you only need to be one byte out for signatures not to verify. What we inevitably end up with is apps that follow the developer's *interpretation* of a protocol, which isn't all that interoperable.

All of this undermines the notion of users *owning their data* and being free to move their data from app to app. Wouldn't it be handy if a system existed where these protocols could be codified in a function and stored immutably on the blockchain...

## Signature verification Ops

At time of writing, there are already a number of Ops designed to handle signatures. The following Bitcom signature protocols have Op implementations:

* [`bitcom/aip`](/library/op/?ref=a3a83843) - Implements the `AIP` protocol.
* [`bitcom/haip`](/library/op/?ref=1f68937f) - Implements the `HAIP` protocol.

In addition there are a few Ops that are not based on existing Bitcom protocols. Each of the following Ops share the same algorithm, but are designed to be used in different circumstances:

* [`crypto/sig_verify_from`](/library/op/?ref=fe066703) - Verifies the signature against all the data **after** the cell containing the Op.
* [`crypto/sig_verify_to`](/library/op/?ref=280a319f) - Verifies the signature against all the data **before** the cell containing the Op.
* [`crypto/sig_verify_cell`](/library/op/?ref=c8513713) - Verifies the signature against the specified cell of data.
* [`crypto/sig_verify_slice`](/library/op/?ref=724acea6) - Verifies the signature against the specified slice of the data.

The beauty of Operate is that it doesn't matter if we've got 5 or 500 different signature Ops. Every signature in a transaction is always coupled with a reference to the specific Op used to verify it. There need be no ambiguity or confusion between different protocols. Operate takes the pain away and enables true **universally interoperable signature schemes**.

## Example: Signing a business listing

In my previous article I described how to [encapsulate a business listing](/blog/data-mapping-structured-objects/) in a transaction. Lets extend that example and sign the data with the author's private key, which we can verify using [`crypto/sig_verify_to`](/library/op/?ref=280a319f).

This Op expects two parameters - the signature and the author's public key. The public key can be encapsulated in raw binary form, a hex encoded string, or a Bitcoin address.

```bash
0x280A319F  # crypto/sig_verify_to
  <signature>
  "1KKon8nSh6HSRhse82egMVTnTq4nmwF8Eu"
```

The signing algorithm involves concatenating all the data from the previous cells, calculating the `SHA-256` hash of that data, and signing the hash with the author's private key using the [Bitcoin Signed Message](https://docs.moneybutton.com/docs/bsv-message.html) standard.

Here's how you can create the signature using JavaScript:

```javascript
// 1. Concatenate the data we wish to sign
const data = bsv.deps.Buffer.concat([
  new Uint8Array([
    bsv.Opcode.OP_FALSE,
    bsv.Opcode.OP_RETURN
  ]),
  bsv.deps.Buffer.from('2432924B', 'hex'),
  bsv.deps.Buffer.from('@type'),
  bsv.deps.Buffer.from('Organization'),
  bsv.deps.Buffer.from('name'),
  bsv.deps.Buffer.from('Acme Ltd'),
  bsv.deps.Buffer.from('|'),
  bsv.deps.Buffer.from('D0138187', 'hex'),
  bsv.deps.Buffer.from('address'),
  bsv.deps.Buffer.from('@type'),
  bsv.deps.Buffer.from('PostalAddress'),
  bsv.deps.Buffer.from('streetAddress'),
  bsv.deps.Buffer.from('10 Downing Street'),
  bsv.deps.Buffer.from('addressLocality'),
  bsv.deps.Buffer.from('London'),
  bsv.deps.Buffer.from('postalCode'),
  bsv.deps.Buffer.from('SW1A 2AA'),
  bsv.deps.Buffer.from('|'),
  bsv.deps.Buffer.from('D0138187', 'hex'),
  bsv.deps.Buffer.from('contacts[]'),
  bsv.deps.Buffer.from('@type'),
  bsv.deps.Buffer.from('ContactPoint'),
  bsv.deps.Buffer.from('telephone'),
  bsv.deps.Buffer.from('0800 123 456'),
  bsv.deps.Buffer.from('contactType'),
  bsv.deps.Buffer.from('Customer service'),
  bsv.deps.Buffer.from('|'),
  bsv.deps.Buffer.from('D0138187', 'hex'),
  bsv.deps.Buffer.from('contacts[]'),
  bsv.deps.Buffer.from('@type'),
  bsv.deps.Buffer.from('ContactPoint'),
  bsv.deps.Buffer.from('telephone'),
  bsv.deps.Buffer.from('0800 100 200'),
  bsv.deps.Buffer.from('contactType'),
  bsv.deps.Buffer.from('Sales'),
  bsv.deps.Buffer.from('|')
])

// 2. Get the sha256 hash of the data
const hash = bsv.crypto.Hash.sha256(data)

// 3. Sign the hash using a private key
const signature = bsv.Message.sign(hash, privateKey)
```

The code above will return the signature as a `base64` encoded string. You can either use that value in your transaction, or save a few bytes by decoding the signature into binary.

### Putting it all together

Using the generated signature, you can add the new Op to the end of the `OP_RETURN` script:

```bash
OP_FALSE OP_RETURN
  0x2432924B  # object/extend
    "@type"           "Organization"
    "name"            "Acme Ltd"
    |
  0xD0138187  # object/put
    "address"
    "@type"           "PostalAddress"
    "streetAddress"   "10 Downing Street"
    "addressLocality" "London"
    "postalCode"      "SW1A 2AA"
    |
  0xD0138187  # object/put
    "contacts[]"
    "@type"           "ContactPoint"
    "telephone"       "0800 123 456"
    "contactType"     "Customer service"
    |
  0xD0138187  # object/put
    "contacts[]"
    "@type"           "ContactPoint"
    "telephone"       "0800 100 200"
    "contactType"     "Sales"
    |
  0x280A319F  # crypto/sig_verify_to
    "IJKrCakfyeaFpRUNHUU2F/WWb1P1BQlVcgkR3Tw4X3LDcA2rqC4QTEL1wn+Cn1EcPVxFqqnFsbxhgsbx08xi1J0="
    "1KKon8nSh6HSRhse82egMVTnTq4nmwF8Eu"
```

When run through Operate, the script will return the following object:

```json
{
  "@type": "Organization",
  "name": "Acme Ltd",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10 Downing Street",
    "addressLocality": "London",
    "postalCode": "SW1A 2AA"
  },
  "contacts": [
    {
      "@type": "ContactPoint",
      "telephone": "0800 123 456",
      "contactType": "Customer service"
    }, {
      "@type": "ContactPoint",
      "telephone": "0800 100 200",
      "contactType": "Sales"
    }
  ],
  "signatures": [
    {
      "cell": 5,
      "hash": "afebc684bc475f468a7b7cac87dd04b5da4f613142003095fb6693850fac2801",
      "pubkey": "1KKon8nSh6HSRhse82egMVTnTq4nmwF8Eu",
      "signature": "IJKrCakfyeaFpRUNHUU2F/WWb1P1BQlVcgkR3Tw4X3LDcA2rqC4QTEL1wn+Cn1EcPVxFqqnFsbxhgsbx08xi1J0=",
      "verified": true
    }
  ]
}
```

The `signatures` attribute has been added to the state containing a signature object with the message hash, the public key, and the signature itself (which the Op has already verified).

All the `crypto/sig_verify_*` family of Ops work the same way. You can push as many signatures on to the state as needed, and you have fine-grained control over who signs what specific parts of the data.

## Conclusion

Operate takes the pain out of dealing with signatures with its family of simple, flexible signature Ops. But even if these don't quite fit the bill for your app, you are free to publish your own Op with your own bespoke signing algorithm. Anyone using Operate will be able to load and verify your signature without writing any implementation code.

We've begun to see how Ops can do so much more than mapping data into objects. In this case we are verifying a signature, but Ops can be created to perform any data operation or calculation you can imagine. If you can code it, Operate can do it.

