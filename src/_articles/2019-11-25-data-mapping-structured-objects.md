---
title: Data mapping structured objects with Operate
date: 2019-11-25
description: See how Operate can be used to map data encapsulated in Bitcoin transactions in to structured objects.
image: /2019/11/structure-card.jpg
banner: /2019/11/structure.jpg
card: /2019/11/structure-card.jpg
author: Libs
---

One of the most common use cases for Operate is being able to map data encapsulated in Bitcoin transactions in to structured objects.

Until now, Unwriter's [Bitcom](https://bitcom.planaria.network/) has been the "go-to" approach of encapsulating data on-chain - either using app-specific protocols like [WeatherSV](https://weathersv.app/docs), or building upon generic data protocols such as [`B://`](https://b.bitdb.network/) and [`MAP`](https://map.sv/).

A Bitcom protocol only gets us so far. It describes how the data is encapsulated, but developers still have to implement that protocol. This leads to a repetition of efforts but also some ambiguity as implementations will inevitably diverge slightly from app to app which hinders interoperability.

Operate fixes this by replacing protocols with functions, known as "Ops", which themselves are stored on the blockchain. This means we could have 1,000 different "file" or "user profile" Ops, and Operate would always return the data structured how the transaction author intended, without an application developer needing to write a single line of code.

## Example: On-chain business directory

Imagine you're building a business directory and would like to encapsulate a listing using a data structure similar to below (based on the [Schema.org Organization](https://schema.org/Organization) schema):

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
  ]
}
```

It's tempting to just serialize the JSON data into a single string, but then you'd lose the benefit of being able to index the data and query by specific attributes using a tool such as [Planaria](https://docs.planaria.network/). Operate can do better and already boasts a number of incredibly flexible and powerful Ops that can be used to map any data structure imaginable. In this example we'll use just two:

* [`object/extend`](/library/op/?ref=2432924b) - takes a list of parameters in key/value pairs and merges them into the state.
* [`object/put`](/library/op/?ref=d0138187) - is very similar to `object/extend` but takes an initial `path` parameter and the key/values are placed in the state at the given path.

Both of the above Ops have a trick up their sleeve. Dot delimited keys (eg: `deeply.nested.path`) are iterated over setting the value in a deeply nested object. Additionally, if a key ends with square brackets (eg: `mylist[]` ), the value is pushed into an array.

### Constructing the transaction

Lets begin constructing an `OP_RETURN` script starting off using `object/extend`:

```bash
OP_FALSE OP_RETURN
  0x2432924B  # object/extend
    "@type"
    "Organization"
    "name"
    "Acme Ltd"
    # ...
```

So far so simple. The Op parameters are key/value pairs, where each odd parameter is a key and each even parameter is its respective value.

But now we need to tackle a nested object. You could carry on defining key/value pairs using the dot-delimited syntax. Eg:

```bash
    # ...
    "address.@type"
    "PostalAddress"
    "address.streetAddress"
    "10 Downing Street"
    # ...
```

But it's possible to save a few bytes (and is arguably more semantically pleasing) if we pipe the state into a new Op, using `object/put`:

```bash
    # ...
    |
  0xD0138187  # object/put
    "address"
    "@type"
    "PostalAddress"
    "streetAddress"
    "10 Downing Street"
    "addressLocality"
    "London"
    "postalCode"
    "SW1A 2AA"
    # ...
```

The first Op parameter is the path where we intend to place the object, and the remaining parameters are the key/value pairs of that object.

Finally, by using `object/put` in combination with the square bracket syntax, you can add the list of contact points to the data structure. Setting the path as `contacts[]` denotes that the key/value pairs will be pushed into an array at that path.

```bash
    # ...
    |
  0xD0138187  # object/put
    "contacts[]"
    "@type"
    "ContactPoint"
    "telephone"
    "0800 123 456"
    "contactType"
    "Customer service"
    |
  0xD0138187  # object/put
    "contacts[]"
    "@type"
    "ContactPoint"
    "telephone"
    "0800 100 200"
    "contactType"
    "Sales"
```

### Putting it all together

The entire `OP_RETURN` script looks like this (reformatted slightly for clarity):

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
```

And as a hex script:

<pre><code style="font-size: 0.75rem;">0 OP_RETURN 2432924b 4074797065 4f7267616e697a6174696f6e 6e616d65 41636d65204c7464 7c d0138187 61646472657373 4074797065 506f7374616c41646472657373 73747265657441646472657373 313020446f776e696e6720537472656574 616464726573734c6f63616c697479 4c6f6e646f6e 706f7374616c436f6465 5357314120324141 7c d0138187 636f6e74616374735b5d 4074797065 436f6e74616374506f696e74 74656c6570686f6e65 303830302031323320343536 636f6e7461637454797065 437573746f6d65722073657276696365 7c d0138187 636f6e74616374735b5d 4074797065 436f6e74616374506f696e74 74656c6570686f6e65 303830302031303020323030 636f6e7461637454797065 53616c6573</code></pre>

## Conclusion

From this example you've been able to encapsulate a relatively complex data object - combining both nested objects and array-like structures - in a Bitcoin transaction. The data is encapsulated in a way that is both efficient and indexable and queryable using Planaria.

Operate now handles the rest. When you or anyone else loads and runs the transaction, Operate will return the structured object, without any application code needed to parse and decode the data.

But what if you wanted to verify the authenticity of the data with signatures? Or what if the data contained private information that needed to be encrypted? Well, Operate has got you covered there too... but that's an article for another day.