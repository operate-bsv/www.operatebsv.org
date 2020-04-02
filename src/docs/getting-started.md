---
permalink: /docs/getting-started
layout: Docs
---

# Getting started

## Understanding Ops

The functions, or "Ops", that turn transactions into small, powerful executables are the beating heart of Operate.

The [repository of public Ops](/library) is packed with useful functions for common use cases, so it won't always be necessary to write your own Ops. However, it's worth understanding how Ops work and the role they play in helping you build apps and products on top of Bitcoin.

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

The first argument of the function is always the `state`, and it can receive any number of other arguments. Within the body of the function, those arguments can be used to mutate the state in any way before returning a new, modified state.

### Hello World!

Lets imagine a hypothetical "Hello World!" Op. It might look something like this:

```lua
--[[
Returns a string concatenating "Hello" with the given phrase.
]]--
return function(_state, phrase)
  -- Concatenate Hello World! phrase
  state = "Hello "..phrase
  return state
end
```

This is a pretty simple function - even those unfamiliar with Lua should be able to grok this one. The function simply returns a string which concatenates "Hello " with the `phrase` parameter.

### Referencing Ops

Each Op has a unique reference derived from the content of the function itself. The `SHA-256` hash of the function is calculated and the first 4+n unique bytes are used as the reference.

For example, the reference to our Hello World Op can be determined like this:

```bash
# The hash of the Hello World! function is:
"768d1461ec6d2c6a5f552fe48c861c6e85a13655d43684b4da3f49e7a6ca1831"

# The first 4 bytes, and therefore the Op reference, is:
"768d1461"
```

In the unlikely scenario that the first 4 bytes collides with an existing Op reference, the second Op would be referenced by the first 5 bytes, then 6 and so on. In practice, it is mathematically very unlikely that 6 byte references will be seen any time soon, but a rare 5 byte reference is a possibility.

## Creating Tapes

A Tape is an `OP_RETURN` output that references one or more Ops and passes data parameters to each function.

For example, a simple Tape that just calls our Hello World Op might look like this:

```bash
OP_FALSE OP_RETURN
  0x768D1461
    "Mum"
```

When running this Tape, the Operate agent would return the result:

```bash
"Hello Mum"
```

This simple example shows how Operate takes data from transactions, and uses Ops to return that data in some other kind of state. But Operate really begins to flex its muscles when we create transactions that pipe multiple Ops together.

### String splitting Op

So lets imagine another hypothetical Op:

```lua
--[[
Assumes the state is a string, and splits it into chunks of the given size.
Returns a table of chunks.
]]--
return function(state, size)
  local chunks = {}
  state = state or ""
  size = tonumber(size)
  
  if size then
    -- Iterate over the state string, and split into a table of chunks
    for i=1, string.len(state), size do
      local chunk = string.sub(state, i, i+size-1)
      table.insert(chunks, chunk)
    end
  end
  
  return chunks
end
```

This one's a little more complex than the Hello World Op, so lets go through it step-by-step to understand what's going on.

The first argument in every Op is the `state`. The state is the result from the previous cell in the tape, unless the Op is being called in the first cell of the tape, in which case the state will be `nil`. This particular Op assumes the state is a string of some length.

The Op also expects a `size` parameter. This value is used to iterate over the state and split the string into a table of chunks of the given size. The table of chunks is returned as the new state.

When hashed, we can derive the unique reference of this Op as `8d4c1fea`.

### The pipe operator

Anyone who has worked with bash scripts or used functional programming languages such as Elixir or Elm will be familiar with the pipe operator. In Operate, the `|` operator is used in a similar way. There is semantic significance in using the pipe operator - we are literally piping the output from one Op in to the next.

Using both the Hello World Op and string splitting Op together, we would end up with a Tape like this:

```bash
OP_FALSE OP_RETURN
  0x768D1461
    "World!"
    "|"
  0x8D4C1FEA
    "3"
```

Running this Tape through Operate would return the following array-like result:

```bash
["Hel", "lo ", "Wor", "ld!"]
```

## What next?

Of course, none of us are here to build "Hello World" apps - we're here to build a new world of apps, games and services only deliverable over Bitcoin. The examples on this page, whilst slightly contrived, offer a simple demonstration of how Operate works and some of the key concepts of its design.

With a bit of imagination, Operate can be used to much more powerful effect. Ops can be designed to process data, perform calculations and operations, and return structured interactive objects with functions and callbacks that we can utilise in our host applications.

You can extend the Lua environment that Ops are executed in with your own modules and functions, so your Bitcoin transactions can interface directly with code in your own applications.

This kind of flexibility is very powerful and opens up use cases limited only by your imagination.