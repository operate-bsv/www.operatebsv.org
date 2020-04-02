---
permalink: /docs/using-the-agent
layout: Docs
---

# Using the Agent

## What is the Agent

The agent software is used to load and run Operate programs (tapes). The agent is responsible for loading a transaction and converting a transaction output to a valid Tape, it loads all of the necessary Ops, runs the tape and returns a result. There are agent implementations written for the following languages:

* [Elixir](#elixir)
* [JavaScript](#javascript)

Both agents have been built to a similar design, they are broadly feature comparable and aim for cross compatibility so that a tape that runs on one platform should run and return the same result on any other platform.

## Elixir

If you are building an application for scale and performance then Elixir is a great choice.

### Installation

To install the agent in your application, add it to your list of dependencies in `mix.exs`.

::: warning
The most recent `luerl` package published on hex.pm is based on **Lua 5.2** which is not compatible with all Ops. It is recommended to override the `luerl` dependency with the latest development version to benefit from **Lua 5.3**.
:::

```elixir
def deps do
  [
    {:operate, "~> 0.1.0-beta"},
    {:luerl, github: "rvirding/luerl", branch: "develop", override: true}
  ]
end
```

### Loading and running tapes

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

### Documentation

To find out more about the Operate Agent for Elixir:

* [Full API documentation](https://hexdocs.pm/operate)
* [View source code](https://github.com/operate-bsv/op_agent)

## JavaScript

JavaScript is the World's most popular programming language and is very commonly used in Bitcoin application development. The JavaScript agent is fully compatible with both Node.js and modern web browser environments.

### Installation

Install the agent using NPM (or yarn). It will be added to your list of dependencies in `package.json`.

```bash
npm install @operate/agent
```

```javascript
const Operate = require('@operate/agent')
```

Or use in the browser via CDN (adds `Operate` to the global namespace):

```html
<script src="//unpkg.com/@operate/agent@latest/dist/operate.min.js"></script>
```

### Loading and running tapes

Operate can be used straight away to load and run tapes from transactions.

```javascript
const txid = '0442b8de08b338c2fd262b2639372eaaf6d16dbf1f8e8eeb821a83ed639e75df'
const tape = await Operate.loadTape(txid)
const result = await Operate.runTape(tape)
const data = Operate.util.mapToObject(result)

// returns
{
  fibs: [
    55,
    6765,
    832040,
    102334155,
    12586269025
  ],
  name: 'Satoshi Nakamoto'
}
```

### Documentation

To find out more about the Operate Agent for JavaScript:

* [Full API documentation](https://operate-bsv.github.io/op_agent-js)
* [View source code](https://github.com/operate-bsv/op_agent-js)

## Configuration

Both the Elixir and JavaScript agents share the same configuration options.

| Option         | Default                 | Description             |
| -------------- | ----------------------- | ----------------------- |
| `tape_adapter` | `Operate.Adapter.Bob`   | The `Adapter` module used to fetch the tape transaction.                |
| `op_adapter`   | `Operate.Adapter.OpApi` | The `Adapter` module used to fetch the tape's Ops.                      |
| `cache`        | `Operate.Cache.NoCache` | The `Cache` module used for caching Tapes and Ops.                     |
| `extensions`   | `[]`                    | A list of `Extension` modules with to extend the Lua VM.                 |
| `aliases`      | `%{}`                   | A map aliasing references to alternative Op references.                 |
| `strict`       | `true`                  | Set `false` to disable strict mode and ignore missing and/or erring Ops. |

### Elixir

The options in Elixir are passed around as a keyword list.

```elixir
options = [
  cache: Operate.Cache.ConCache,
  extensions: [MyExtension],
  aliases: %{
    "meta" => "ec869026"
  }
]
```

Options can be set globally if/when starting the Operate agent process.

```elixir
children = [
  {Operate, options}
]
Supervisor.start_link(children, strategy: :one_for_one)
```

Alternatively options can be passed when loading or running each tape to override the global options.

```elixir
{:ok, tape} = Operate.load_tape(txid, options)
{:ok, tape} = Operate.run_tape(tape, options)
```

### JavaScript

The options in JavaScript are passed around as an object.

```javascript
options = {
  extensions: [MyExtension],
  aliases: {
    meta: 'ec869026'
  }
}
```

Options can be set globally or if/when creating an Operate agent instance.

```javascript
// Set globally
Operate.config.update(options)

// Optionally create an agent instance with it's own options
const agent = new Operate.Agent(options)
```

Alternatively options can be passed when loading or running each tape to override the global options.

```javascript
const tape = Operate.loadTape(txid, options)
const result = Operate.runTape(tape, options)
```

## Aliasing Bitcom protocols

Compatibility with existing Bitcom protocols is achieved by configuring the agent's `aliases` option. Where an Op exists that implements a Bitcom protocol, you can alias the Bitcom protocol prefix to the Op reference.

Most applications make use of a small number of protocols, so by adding just a handful of aliases, your application is already compatible with Operate.

```elixir
aliases = %{
  "meta" => "ec869026",                               # Metanet
  "15PciHG22SNLQJXMoSUaWVi7WSqc7hCfva" => "a3a83843", # AIP
  "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut" => "6232de04", # B://
  "13SrNDkVzY5bHBRKNu5iXTQ7K7VqTh5tJC" => "a575f641", # Bitkey
  "1L8eNuA8ToLGK5aV4d5d9rXUAbRZUxKrhF" => "c8bca1c8", # Bit.sv
  "1HA1P2exomAwCUycZHr8WeyFoy5vuQASE3" => "ed469ce8", # HAIP
  "1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5" => "b7f56e90", # MAP
  "19dbzMDDg4jZ4pvYzLb291nT8uCqDa61zH" => "5ad609a8", # Preev
  "1LtyME6b5AnMopQrBPLk4FGN8UBuhxKqrn" => "5ad609a8"  # WeatherSV
} 

{:ok, tape} = Operate.load_tape(txid, aliases: aliases)
{:ok, tape} = Operate.run_tape(tape)
```