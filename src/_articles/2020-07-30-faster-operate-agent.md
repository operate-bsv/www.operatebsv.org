---
title: A faster and more reliable Operate agent
date: 2020-07-30
description: Operate takes advantage of Planaria Corp's latest infrastructure to ensure top performance.
image: /2020/07/speed-card.jpg
banner: /2020/07/speed.jpg
card: /2020/07/speed-card.jpg
dark: true
highlight: 'bg-black-50'
author: Libs
---

Operate news has been a little thin recently, whilst my attention has been on some other open source Bitcoin tools and libraries. Today I've been able to incorporate one of my newer tools, [Terminus](https://hexdocs.pm/terminus), in to Operate, and so can announce two small but significant changes.

## Introducing the Terminus adapter

Since launch, the Operate agent's default tape adapter has used the [BOB](https://bob.planaria.network) public Planaria to load Operate tapes from Bitcoin transactions.

The latest version of the Elixir agent now comes with a new adapter, powered by Terminus, which takes advantage of Planaria Corp's most up to date infrastructure: [Bitbus](https://bitbus.network), [Bitsocket](https://bitsocket.network) and [BitFS](https://bitfs.network).

You can switch over to the new adapter by updating to the latest agent and adjusting the agent's configuration:

```elixir
children = [
  {Operate, [
    tape_adapter: {Operate.Adapter.Terminus, [
      token: Application.get_env(:my_app, :planaria_token)
    ]},
  ]}
]

Supervisor.start_link(children, strategy: :one_for_one)
```

You'll need a [Planaria token](https://token.planaria.network) to use the Terminus adapter, but it should be 100% cross compatible with the legacy BOB adapter, plus it is **much faster**, more responsive, and **more reliable**.

In a future release, Terminus will become the default adapter and eventually the legacy BOB adapter will be deprecated.

## The Operate API gets the Terminus treatment too

This update is a little more behind the scenes, but an important one none the less. Historically the Operate API (which every instance of the agent relies on) has depended on a separate Neon Planaria process to scan and index Ops published on the blockchain.

The latest version of the API now uses Terminus as a drop-in replacement - completely recreating the functionality of Neon Planaria, but now taking full advantage of Planaria Corp's top-end grid API endpoints.

You can check out the Operate API source code to see [how Terminus is used](https://github.com/operate-bsv/op_api/blob/master/lib/op_api/scraper.ex). The API can also now be run in a Docker container so you can choose to run the API on your own infrastructure, even without an Elixir environment.

## Ensuring top performance and reliability

The reason for both of these changes is to move away from depending on the legacy Planaria software. We still consider Planaria Corp's suite of tools the absolute best in class for scanning and filtering the blockchain, and so to ensure Operate still benefits from top performance and reliability, we must migrate to the newer Planaria APIs. Thankfully, Terminus makes this switch a simple and painless one.

*The Terminus adapter is currently only available to the Elixir agent. A similar solution for the JavaScript agent will follow in the coming weeks.*