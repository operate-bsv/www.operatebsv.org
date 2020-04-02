---
permalink: /docs/publishing-ops
layout: Docs
---

# Publishing Ops

## Anatomy of an Op

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

The first argument of the function is always the `state`, and it can receive any number of other arguments. Within the body of the function, those arguments can be used to mutate the state in any way before returning a new, modified state.

## What can an Op do?

Most Ops will probably be simple, single purpose functions, designed to do one thing and do it well. However, Ops can be coded to do whatever you can imagine.

A function can return any value, including other functions. Returned functions can then be called in your own application's code, outside of Lua. This is a great way of passing in private data such as keys, without permanently exposing them to the Lua VM.

Developers can also chose to extend the Lua VM with their own modules, even writing code in their own application that is called from within the Lua VM.

This kind of flexibility is powerful and opens up many innovative use cases.

## Operate CLI

The [Operate CLI](https://github.com/operate-bsv/op_cli) provides a set of tools to help create, manage and publish Ops.

### Installation

It can be installed using `npm` or `yarn`.

```bash
# Install with npm
> npm install -g @operate/cli

# Install with yarn
> yarn global add @operate/cli
```

### Help

You can list all available commands and/or get usage help for a specific command.

```bash
# List available commands
> operate --help 

# Get help on any command
> operate [command] --help
```

### Initialise a new Op library

Use the `init` command to initialise a working directory for your Op(s). This will generate a `.bit` environment file in your working directory containing your publishing address and private key.

```bash
> operate init path/to/directory
```

### Wallet

You will need to fund your publishing wallet before publishing any Op. From within your working directory, use the `wallet` command to see your wallet address and balance.

```bash
> operate wallet
```

### Create a new Op

Use the `new` command to generate a new blank function in the `src` folder of your working directory.

```bash
> operate new my/function -a arg1 -a arg2
```

### Publish an Op

When ready (and your publishing wallet is funded), use the `publish` command to publish the Op to the blockchain.

```bash
> operate publish my/function
```

It is recommended to test functions thoroughly before publishing on the blockchain. View the [operate/op_library](https://github.com/operate-bsv/op_library) repository for examples of setting up an Op library with an Ex-Unit test suite.