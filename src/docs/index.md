---
layout: Docs
---

# Documentation

## Background

Operate's design is heavily influenced by (and cross-compatible with) unwriter's [Bitcom](https://bitcom.planaria.network). If you are one of the many developers already following Bitcom's conventions to power your app, you will find Operate fits nicely into how you already reason about your application.

Operate offers some distinct advantages over native Bitcom.

### Protocols are functions

In Operate, protocols are functions, called "Ops". Anyone can write an Op and publish it to the blockchain and anyone can read the source of an Op to verify what it does. Ops are incredibly powerful and can be used to process data, perform calculations and operations, and return any computable value.

Application developers no longer need to spend time implementing protocol specifications. Operate is a decentralised repository of pre-built, ready to roll, immutable functions.

* [View the Op library](/library)

### Referencing Ops

Ops are referenced by the first 4 bytes of the SHA-256 hash of the function. This allows programs to keep a compact and succinct form, whilst retaining all the benefits of a decentralised universal naming mechanism.

*(In the unlikely but possible scenario of two Ops sharing the same first 4 bytes from it's SHA-256 hash, the second function will be referred to by the first 5 bytes).*


### Functional programming

Operate takes advantage of two other of unwriter's innovations: the [Bitcom pipeline](https://github.com/unwriter/Bitcom/issues/2) and [BOB (Bitcoin OP_RETURN Bytecode)](https://medium.com/@_unwriter/hello-bob-94701d278afb).

BOB views Bitcoin input and output scripts as "tapes" made up of "cells", where each cell is a single atomic procedure call. This metaphor fits Operate like a glove. In fact it's not even a metaphor, each cell IS a procedure call, it's an Op!

<figure class="mv4 mh0 pa0">
  <img src="~@assets/images/cells.png"
    srcset="~@assets/images/cells@2x.png 2x"
    alt="Operate tape" />
</figure>


Each Op takes a number of parameters and returns a result known as the "state". The state is passed as an argument to the next Op, along with any other parameters, and a new state is returned. Each subsequent Op returns a new state until the last Op returns result of the tape.

This approach is analogous to pure functional programming, all encapsulated in Bitcoin transactions. It is an incredibly flexible and powerful system.


## Creating a program / tape

No new tools are needed to craft a transaction that is a valid Operate program. If you are already familiar with Bitcom's conventions to construct transactions, the same conventions are used by Operate. In fact, many of these legacy transactions are already perfectly valid Operate programs! <span class="pl2 f2 v-top">🤯</span>

The following example pipes together two Ops:

* [`math/fib` - `0x2E25B1BD`](/library/op/?ref=2e25b1bd) - returns a list of Fibonacci numbers from the given list of integers.
* [`object/put_new` - `0x0CA59130`](/library/op/?ref=0ca59130) - puts the given state into a new object at the specified path, and adds any other key/value attributes to the object.

```bash
OP_FALSE OP_RETURN
  0x2E25B1BD
    "10"
    "20"
    "30"
    "40"
    "50"
    |
  0x0CA59130
    "fibs"
    "name"
    "Satoshi Nakamoto"
```

### Using JavaScript

We can use familiar tools and libraies to help construct the above scripts. For example, using [bsv.js](https://github.com/moneybutton/bsv):

```javascript
chunks = [
  bsv.OpCode.OP_FALSE,
  bsv.OpCode.OP_RETURN,
  bsv.deps.Buffer.from('2E25B1BD', 'hex'),
  bsv.deps.Buffer.from('10'),
  bsv.deps.Buffer.from('20'),
  bsv.deps.Buffer.from('30'),
  bsv.deps.Buffer.from('40'),
  bsv.deps.Buffer.from('50'),
  bsv.deps.Buffer.from('|'),
  bsv.deps.Buffer.from('0CA59130', 'hex'),
  bsv.deps.Buffer.from('fibs'),
  bsv.deps.Buffer.from('name'),
  bsv.deps.Buffer.from('Satoshi Nakamoto')
]

script = new bsv.Script({ chunks })
```

### Using Elixir

Or alternatively using [BSV-ex](https://hexdocs.pm/bsv) (Elixir):

```elixir
chunks = [
  :OP_FALSE,
  :OP_RETURN,
  Base.decode16!("2E25B1BD"),
  "10",
  "20",
  "30",
  "40",
  "50",
  "|",
  Base.decode16!("0CA59130"),
  "fibs",
  "name",
  "Satoshi Nakamoto"
]

script = %BSV.Script{chunks: chunks}
```

In true Blue Peter style, here's one we made earlier:

* [View on WhatsOnChain.com](https://whatsonchain.com/tx/0442b8de08b338c2fd262b2639372eaaf6d16dbf1f8e8eeb821a83ed639e75df)
* [View in the inspector](/playground/?txid=0442b8de08b338c2fd262b2639372eaaf6d16dbf1f8e8eeb821a83ed639e75df)

## Loading and running programs

The [Operate agent](https://hexdocs.pm/operate) (Elixir) is used to load and run programs from transactions. To install the agent in your application, add it to your list of dependencies in `mix.exs`.

::: warning
The most recent `luerl` package published on hex.pm is based on Lua 5.2 which may not be compatible with all Ops. It is suggested to override the `luerl` dependency with the latest development version to benefit from Lua 5.3.
:::

```elixir
def deps do
  [
    {:operate, "~> 0.1.0-beta.1"},
    {:luerl, github: "rvirding/luerl", branch: "develop", override: true}
  ]
end
```

The API for loading and running tapes is very simple:

```elixir
txid = "0442b8de08b338c2fd262b2639372eaaf6d16dbf1f8e8eeb821a83ed639e75df"
{:ok, tape} = Operate.load_tape(txid)
{:ok, tape} = Operate.run_tape(tape)

tape.result

# returns
%{
  "fibs" => [
    55,
    6765,
    832040,
    102334155,
    12586269025
  ],
  "name" => "Satoshi Nakamoto"
}
```

### Compatibility with Bitcom protocols

Many existing transactions using Bitcom protocols are already fully compatible with Operate. By configuring the agent's `aliases` option, we can alias legacy protocols to Ops designed to implement that protocol.

Most applications make use of a small number of protocols, so by adding just a handful of aliases, your application is already compatible with Operate.

```elixir
aliases = %{
  "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut" => "6232de04", # b://
  "1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5" => "1fec30d4", # map
  "15PciHG22SNLQJXMoSUaWVi7WSqc7hCfva" => "577953fb", # aip
  "1LtyME6b5AnMopQrBPLk4FGN8UBuhxKqrn" => "5ad609a8", # weatherSV
} 

{:ok, tape} = Operate.load_tape(txid, aliases: aliases)
{:ok, tape} = Operate.run_tape(tape)
```

For more information on how to use and configure Operate, read the agent's [full documentation](https://hexdocs.pm/operate).

## Writing Ops

It wont always be necessary for developers to write their own Ops, but occaisionally you may find an Op that doesn't quite work exactly how you want it to. Or maybe you want to implement your own new protocol. It's time to write an Op.

### Anatomy of an Op

An Op is a function written in Lua.

```lua
--[[
Document the function
]]--
return function(state, arg1, arg2, ...)
  state = state or {}
  -- Code here
  return state
end
```

The first argument of the function is always the `state`. Where a function is called in the first cell of a tape, the state will default to `nil` so your function should handle that.

The function can receive any number of arguments, as defined by your protocol's parameters. Within the body of the function, those arguments can be used to mutate the state in any way before returning a new, modified state.

The comment block immediately prior to the function should be used to add documentation and examples. Any Markdown formatted text can be placed here.

### What can an Op do?

Most Ops will probably be simple, single purpose functions, designed to do one thing and do it well. However, the Lua VM and agent can be combined to very powerful effect.

A function can return any value, including other functions. Returned functions can then be called in your own application's code, outside of Lua. This is a great way of passing in private data such as keys, without permanently attaching them to the Lua VM.

Developers can also chose to extend the Lua VM with their own modules, even writing Elixir code in their own application that is called from within the Lua VM.

This kind of flexibility is powerful and opens up use cases limited only by your imagination.

### Publishing Ops with the CLI

The [Operate CLI](https://github.com/operate-bsv/op_cli) provides a set of tools to help create, manage and publish Ops. It can be installed using `npm` or `yarn`.

```bash
# Install with npm
> npm install -g @operate/cli

# Install with yarn
> yarn global add @operate/cli
```

You can list all available commands and/or get usage help for a specific command.

```bash
# List available commands
> operate --help 

# Get help on any command
> operate [command] --help
```

Use the `init` command to initialise a working directory for your Op(s). This will generate a `.bit` environment file in your working directory containing your publishing address and private key.

```bash
> operate init path/to/directory
```

You will need to fund your publishing wallet before publishing any Op. From within your working directory, use the `wallet` command to see your wallet address and balance.

```bash
> operate wallet
```

Use the `new` command to generate a new blank function in the `src` folder of your working directory.

```bash
> operate new my/function -a arg1 -a arg2
```

When ready (and your publishing wallet is funded), use the `publish` command to publish the Op to the blockchain.

```bash
> operate publish my/function
```

It is recommended to test functions thoroughly before publishing on the blockchain. View the [operate/op_library](https://github.com/operate-bsv/op_library) repository for examples of setting up an Op library with an Ex-Unit test suite.