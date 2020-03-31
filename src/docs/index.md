---
image: /social-card.png
layout: Docs
---

# Introduction

## What is Operate

Operate is a set of tools to help developers build applications, games and services on top of Bitcoin (SV).

Operate allows you to create functions, called "Ops", and deploy them on-chain. Transactions can then be created that call and pass data attributes to functions - effectively turning your transactions into small but powerful programs (called "Tapes").

Ops are written using Lua, a high-level and simple to learn scripting language. Ops can be designed to do just about anything imaginable. If you can code it, Operate can do it.

Whilst Ops and Tapes are all stored on-chain, the Operate Agent software is needed to load and run the programs. There are agent implementations written for:

* [Elixir](https://github.com/operate-bsv/op_agent)
* [JavaScript](https://github.com/operate-bsv/op_agent-js) (Browser and Node.js compatible)

## Who is Operate for

Operate can be useful to different people for a variety of reasons. Here's a few key groups that may be able to use Operate in their work:

### Bitcoin App developers

Any individual or team building on Bitcoin can benefit from using Operate in their apps and services. Developers using Bitcom style data protocols can work more productively and efficiently by adopting Operate. Developers no longer need to spend time implementing protocol specifications. With Operate, protocols are functions and anyone can contribute to and benefit from the decentralised repository of pre-built, ready to roll, immutable functions.

Operate brings a number of developer tools to Bitcoin developer ecosystem:

* [Operate CLI](https://github.com/operate-bsv/op_cli) - a command line utility to help create, manage and publish your own library of Ops.
* [Elixir agent](https://github.com/operate-bsv/op_agent) - the original agent software, designed for use in performant and scallable application back-ends.
* [JavaScript agent](https://github.com/operate-bsv/op_agent-ls) - a cross-platform agent, easy to learn and usable in both Node.js and browser environments.

### Students and beginners

Leaning to build on Bitcoin is an increasingly popular topic of study for students and new developers, but it remains a challenging area to get started in. Bitcoin (SV) is uniquely blessed with a fantasic ecosystem of beginner-friendly developer tools, such as [Money Button](https://www.moneybutton.com), [Bitbus](https://bitbus.network) and [Handcash Connect](https://connect.handcash.io).

Operate plays nicely with these other ecosystem participants, and the JavaScript agent makes Operate more accessible to new developers than ever before.

### Open source developers

Operate is for people who want to build on Bitcoin. Whether by using Operate as a dependency in your own projects and libraries, or [creating extensions](/docs/extending-operate) for Operate itself, we'd love to have you contribute to the Operate ecosystem.

## Key concepts

Operate offers a unique approach to building on Bitcoin. Whilst some similarities can be drawn with systems like [Run](https://runonbitcoin.com), Operate introduces some unique concepts and conventions not found in other systems.

### Ops

Ops are functions - small pieces of arbitrary code written in Lua. Anyone can write an Op and publish it to the blockchain. Ops are incredibly powerful and can be used to process data, perform calculations and operations, and return any computable value.

Operate is a decentralised repository of pre-built, ready to roll, immutable functions.

### Tape

A tape is an `OP_RETURN` output script containing data that is formatted in such a way that Operate can parse and evaluate the script. Operate views the script as a "tape" of "cells" where each cell is a single atomic procedure call. When Operate runs a tape, it executes each cell in turn before returning a result.

### Cell

A cell is a single atomic procedure call. Encoded in a tape, a cell consists of an [Op reference](/docs/getting-started/#referencing-ops) and any number of arbitrary data parameters. When Operate executes a cell, the specific Op the cell references is called, and the cell's parameters are passed to the function as arguments.

### State

Each cell returns a value known as the state. When a tape consists of more than one cell, the state is piped into the next cell and passed as the Op's first argument. Each subsequent Op returns a new state, so cell by cell, function by function, the state is mutated until the last cell returns the result of the tape.

<figure class="mv4 mh0 pa0">
  <img src="~@assets/images/cells.png"
    srcset="~@assets/images/cells@2x.png 2x"
    alt="Operate tape" />
</figure>

This approach is analogous to pure functional programming, and is the essence of what Operate is about. It is an incredibly flexible and powerful system, capable of delivering entirely new classes of services over Bitcoin.