---
title: Extending Operate
date: 2020-01-09
description: Extend Operate with your own modules and functions to achieve just about anything imaginable.
image: /2020/01/extending-card.png
banner: /2020/01/extending.png
card: /2020/01/extending-card.png
highlight: 'bg-white-90'
author: Libs
---

Ops are written using the programming language Lua - a very simple language with few concepts. The standard library is useful, but certainly minimal - it's fair to say there are no bells and whistles with Lua.

One feature that Lua lacks is a cryptographic library. For a Bitcoin tool like Operate, this is essential so we have added a `crypto` module jam-packed with common crypto functions. How did we do this?

What we definitely didn't do is develop an entirely new and native crypto module written in Lua. No, for the sake of our own sanity we did things the lazy way. We created a way to extend Lua with modules and functions implemented in the host system - in this case Elixir. That means every time you call a crypto function in an Op, under the hood it is actually being handled by Erlang's robust and battle-tested standard crypto library.

## Anatomy of an extension

The best way to understand how extensions work is to look at some code:

```elixir
defmodule Operate.VM.Extension.JSON do
  @moduledoc """
  Extends the VM state with functions for encoding and decoding JSON.
  """
  use Operate.VM.Extension
  alias Operate.VM

  def extend(vm) do
    vm
    |> VM.set!("json", [])
    |> VM.set_function!("json.decode", fn _vm, args -> apply(__MODULE__, :decode, args) end)
    |> VM.set_function!("json.encode", fn _vm, args -> apply(__MODULE__, :encode, args) end)
  end

  @doc "Decodes the given JSON string."
  def decode(val), do: Jason.decode!(val)

  @doc "Encodes the given value into a JSON string."
  def encode(val), do: VM.decode(val) |> Jason.encode!
  
end
```

The above module is an example of an extension. The `extend/1` function takes the `vm` and defines a table with the variable name `json` and attaches two functions - `encode()` and `decode()` - which are handled by a function in Elixr.

Now within your Ops you can encode a table into a JSON string, and no-one needs to know that Lua is being lazy and passing the job to Elixir to handle.

```lua
local data = {
  foo = 'bar'
}
json.encode(data)
-- => "{\"foo\":\"bar\"}"
```

The Operate Agent has the following extensions enabled by default:

* [`agent`](https://github.com/operate-bsv/op_agent/blob/master/lib/operate/vm/extension/agent.ex) - functions for accessing the agent to load and run other transactions.
* [`base`](https://github.com/operate-bsv/op_agent/blob/master/lib/operate/vm/extension/base.ex) - common functions for converting strings to and from hex and base64 encodings.
* [`context`](https://github.com/operate-bsv/op_agent/blob/master/lib/operate/vm/extension/context.ex) - functions for accessing the transaction context (other inputs and outputs).
* [`crypto`](https://github.com/operate-bsv/op_agent/blob/master/lib/operate/vm/extension/crypto.ex) - extends the VM with common crypto functions.
* [`json`](https://github.com/operate-bsv/op_agent/blob/master/lib/operate/vm/extension/json.ex) - functions for encoding and decoding JSON.

## Taking things further

Now that you understand what an extension is, and how easy it is to write one, things can get interesting because you can extend Operate to do just about anything you can imagine. Now Bitcoin transactions can talk directly to functions inside your application... think about what kind of use cases that can enable!

You can create Bitcoin transactions that trigger off-chain processes such as image or video processing. How about a transaction containing an HTML payload that with the correct payment triggers an offchain process to convert the document into a PDF?

There are all sorts of microservices that can now be built on top of Bitcoin, and all sorts of creative ways Bitcoin can tightly integrate with your application or product.

It's time to build!



