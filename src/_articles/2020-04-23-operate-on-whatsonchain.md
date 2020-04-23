---
title: How to decode transactions with Operate using WhatsOnChain.com
date: 2020-04-23
description: Create a custom decoder to see how Operate parses any data output.
image: /2020/04/woc-decoder-card.jpg
card: /2020/04/woc-decoder-card.jpg
author: Libs
---

Recently [WhatsOnChain.com](https://whatsonchain.com) quietly rolled out a new feature that allows you to use Operate to inspect and decode the data from any transaction output.

WOC has long had the ability to decode data outputs using the built-in or [Bico.media](https://bico.media) decoders. A new feature that has slipped in under the radar now allows you to add your own custom decoders.

Using this feature you can take advantage of some hidden API endpoints that Operate exposes, to inspect and run any Operate tape.

## How to add your own Operate decoders

#### 1. Click the "Decode" button when viewing a transaction data output

<figure class="mv4 mh0 pa0">
  <img src="~@assets/images/woc-decoder-button.png"
    srcset="~@assets/images/woc-decoder-button@2x.png 2x"
    alt="Decode any data transaction on WOC" />
</figure>

#### 2. Click the green "+" button next to the Labs section

This will bring up a form so you can add your own decoder.

<figure class="mv4 mh0 pa0">
  <img src="~@assets/images/woc-decoder-edit.png"
    srcset="~@assets/images/woc-decoder-edit@2x.png 2x"
    alt="Setup a custom decoder on WOC" />
</figure>

#### 3. Fill in the custom decoder form

Most fields should be pretty self explanatory (refer to the screenshot above). Operate exposes two API endpoints you can use in the "Webhook URL" field:

| Name | URL |
| ---- | --- |
| Operate (Inspect) | `https://api.operatebsv.org/woc/tape/inspect?txid={txId}&index={voutIndex}` |
| Operate (Run) | `https://api.operatebsv.org/woc/tape/run?txid={txId}&index={voutIndex}` |

The "Inspect" endpoint returns a JSON representation of the tape, including each cell's Op source code and data parameters. The "Run" endpoint executes the tape and returns its result.

#### 4. Click on the new decoder to inspect the transaction data

<figure class="mv4 mh0 pa0">
  <img src="~@assets/images/woc-decoder-result.png"
    srcset="~@assets/images/woc-decoder-result@2x.png 2x"
    alt="See how Operate parses any data output" />
</figure>

Not all data transactions will work with Operate, but many popular services such as Twetch, Bit.sv and WeatherSV are well handled by Operate. Being able to see both how Operate views the transaction data along with how it evaluates the result, without needing to run the agent software, makes this the easiest way to play around with Operate. It's also a handy way to take a peek at how some of these apps are structuring their transactions and what data protocols they are using.
 
## A neat little feature

WOC seem to have snuck this feature in without much fanfare (edit: Mo's published a video showing [how to use Bitpaste as a decoder](https://www.youtube.com/watch?v=cnKhzdDP8Ak)). I think it's a neat addition and I look forward to seeing how it develops.

It would be nice if I could create these decoders once and share them so anyone can use them (and I guess that's the direction WOC are moving in with the *coming soon &trade;* Marketplace). I would also prefer it if the JSON payload was rendered on the page in a prettified format.

But as it stands this is useful way to inspect and debug transactions and get to play around with Operate at the same time.
