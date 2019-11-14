---
title: Introducing Operate
date: 2019-11-15
description: Celebrating a year of BSV with the launch of our most ambitious project yet.
image: /social-card.png
banner: /2019/11/pipes.png
card: /2019/11/pipes-card.png
dark: true
author: Libs
---

Can you believe 12 months ago Bitcoin SV didn't even exist? Ten months ago unwriter's Bitcom was not a thing. The f\*\*ked was not yet unf\*\*kened. There was no `B://`, Bitpaste or Bico. Even six months ago no-one really understood what the Metanet was, and Twetch was but a twinkle in a frogs eye.

Yet here we are, celebrating a year of BSV, [250 new products and services](https://twitter.com/PeergameCom/status/1191990553442783232), 50 new libraries and major ecosystem resources, [transaction volume parity with BTC](https://twitter.com/_unwriter/status/1187436107807543300), [blocks big enough](https://stn.satoshi.io/block-height/4185) to make your eyes water, and a fast incoming Genesis upgrade returning Bitcoin to it's original unbounded design.

Everyone involved in BSV development should give each other a collective 🤜fist-bump🤛 for this years explosion of development. The relentless pace of new tools and innovations has been mind-blowing.

And so it is with pleasure (and some relief after months of hard work) that I can add one more piece to this amazing jigsaw - my most ambitious piece of work yet. **Introducing Operate, a toolset to help developers build applications, games and services on top of Bitcoin.**

## Background

In January, soon after unwriter released [Bitcom](https://bitcom.planaria.network), I began [experimenting](https://github.com/libitx/functional-bitcoin) with putting code on chain and executing functions in transactions, to see if I could push Bitcom's claim to be a "universal Bitcoin computer" further. I wanted to see protocols represented as functions, and be able to "pipe" functions together to create an extensible protocol "language".

These experiments led to me developing something I called **Functional Bitcoin**, which in turn became the secret sauce powering the three main products I worked on: [Bitpaste](https://www.bitpaste.app), [Audio B](https://www.audiob.app) and [Preserve](https://preserve.bitpaste.app). Functional Bitcoin is the beating heart in each of those applications and it has proven itself as a valuable and useful tool.

Functional Bitcoin was a working title, and it was work I kept close to my chest. Until today. Functional Bitcoin is now Operate - rewritten from the ground up, improving on everything I've learned over the past 10 months, and repackaged as a complete toolset to help developers create ambitious and new types of apps and services on top of Bitcoin.

## What is Operate?

Operate is a toolset and protocol that lets you publish functions on-chain, called "Ops", and then call those functions in `OP_RETURN` output scripts. This enables transactions to become small but powerful programs capable of delivering new classes of services layered over Bitcoin.

An Op can be designed to do just about anything imaginable. Ops can manipulate data into structured objects, they can perform calculations and operations. Ops can verify signatures and conditionally return different results. You can start to encapsulate parts of your application logic in Bitcoin transactions.

Ops can also return anonymous functions, which you can call in your own application. Or inversely you can write modules in your application that you expose to your Ops. This kind of flexibility is powerful and opens up use cases limited only by your imagination.

## Functional programming

Operate's design is heavily influenced by unwriter's Bitcom, and makes full use of the [Bitcom pipeline](https://github.com/unwriter/Bitcom/issues/2) and [BOB (Bitcoin OP_RETURN Bytecode)](https://medium.com/@_unwriter/hello-bob-94701d278afb).

Using the tape/cell metaphor from BOB, we can view our `OP_RETURN` outputs as tapes of cells, where each cell is a single atomic procedure call... or an Op!

<figure class="mv4 mh0 pa0">
  <img src="~@assets/images/cells.png"
    srcset="~@assets/images/cells@2x.png 2x"
    alt="Operate tape" />
</figure>

Each Op takes a number of parameters and returns a result known as the "state". The state is passed as an argument to the next Op, along with any other parameters, and a new state is returned. Each subsequent Op returns a new state until the last Op returns the result of the tape.

This approach is analogous to pure functional programming, all encapsulated in Bitcoin transactions. It is an incredibly flexible and powerful system.

## Writing Ops

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

Yes... Lua!

Using Lua is a design choice that may raise a few eyebrows, and it's a decision I'll try and cover in detail in a future article. But Lua really is a great choice for a system like Operate.

Lua is designed to be used as an embedded scripting language. It is a lightweight language that can be safely sandboxed. This will allow us to create agents in different languages, and run Operate programs across platforms in a consistent, safe and reliable way.

Lua is a simple language with few concepts, and can be easily learned in a few hours. Its simplicity does come at the cost of elegant design or useful features. Lua is a nimble, stable and reliable language - traits that fit the BSV ethos well.

## How to get started

Operate launches with a couple of tools:

* [**Operate | CLI**](https://www.npmjs.com/package/@operate/cli) - a command line utility to help you create and publish Ops to the blockchain.
* [**Operate | Agent**](https://hexdocs.pm/operate/Operate.html) - an Elixir agent for loading and running tapes from Bitcoin transactions.

[Read the documentation](/docs) to get started with these tools and learn the concepts behind Operate.

There is already a [library of public Ops](/library) that anyone can use in their transactions. Over time this library will continue to grow and become an invaluable resource of building blocks that developers can use to craft imaginative transaction types. Refer to the [library repo on Github](https://github.com/operate-bsv/op_library) for an example of how Ops can be developed and tested locally.

Over the coming weeks and months, I plan to extend the documentation and publish more articles and examples here. [Follow @operate_bsv](https://twitter.com/operate_bsv) to keep up to date with these pages.

If you have a question or need help, I'm here to help so feel free to ask [@operate_bsv](https://twitter.com/operate_bsv) or [@libitx](https://twitter.com/libitx), or open a [Github issue](https://github.com/operate-bsv) or find me in [Atlantis Slack](https://bitdb.network/atlantis).
