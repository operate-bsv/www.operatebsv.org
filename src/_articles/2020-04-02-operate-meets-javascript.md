---
title: Operate meets JavaScript
date: 2020-04-02
description: Operate comes to the browser and Node.js environments.
image: /2020/04/javascript-card.png
banner: /2020/04/javascript.png
card: /2020/04/javascript-card.png
author: Libs
---

Released today, Operate now offers a JavaScript agent, **allowing Operate to be used in the browser** and in Node.js apps. This is the next step in Operate's journey, and opens Operate up to pretty much every team and developer actively working on Bitcoin today.

::: success Get started using Operate with JavaScript
* [Quick start documentation](/docs/using-the-agent/#javascript)
* [Source code on Github](https://github.com/operate-bsv/op_agent-js)
* [Full API documentation](https://github.com/operate-bsv/op_agent-js)
:::

## What is the agent for?

To use Operate, the agent is the primary tool developers need in order to integrate Operate in their apps. It can be seen as a Bitcoin interface layer - it is responsible for loading programs (tapes) from transactions, it loads all of the necessary Ops, runs the tape in a VM and returns a result.

Operate initially launched with an agent written in Elixir. But it's always been my intention to get Operate working in the browser for pure front-end apps, and so following up with a JavaScript agent was always part of the plan.

Now Operate offers two alternative agent implementations, and we're committed to supporting both:

* [Elixir](https://github.com/operate-bsv/op_agent) - Original implementation. Ideal for performant and scalable back-end apps.
* [JavaScript](https://github.com/operate-bsv/op_agent-js) - Popular programming language. Cross-platform compatibility.

## Try Operate right now!

The great thing about JavaScript is that you can play with it in a browser. So before you start downloading npm packages, why not just try it right here, right now, on this page? Below is a fully functional embedded JavaScript console with the Operate Agent already loaded. Read on below for help getting started...

<iframe
  src="https://jsconsole.com/?%3Aload%20//cdn.jsdelivr.net/npm/@operate/agent@latest"
  style="width: 100%; height: 540px; margin: 1rem 0; border: 0;" />

::: warning Using Firefox?
You may need to manually load the Operate library. Paste the following in to the console above.

```
:load //cdn.jsdelivr.net/npm/@operate/agent@latest
```
:::

### Aliases

To get started, copy and paste the following line into the console to configure the agent with a number of aliases for common Bitcoin protocols. Not every transaction will be compatible with Operate, but with these common aliases you should be able to play with transactions from some popular Bitcoin apps.

```javascript
Operate.config.quickStartAliases()
```

### Twetch example

Next up, try loading and running a tape from any transaction. Lets try this example from Twetch:

```javascript
// Load a Tape
tape = await Operate
  .loadTape('d732924fdde726203ccec9f0a4589c78f149341b899d864e36af88938efa2553')

// Run the Tape
result = await Operate.runTape(tape)

// Convert Map to Object
data = Operate.util.mapToObject(result)
```

At each step in the above code, try inspecting the returned data. You'll notice the `result` is by default returned as an instance of `Map`. This is because JavaScript Maps are semantically much closer to Lua Tables than Objects. The final line uses a helper method to *optionally* convert Maps to Objects.

### Bit.sv example

Next up, lets try the same with a Bit.sv transaction:

```javascript
tape = await Operate
  .loadTape('9fab521bf3859da182c4bfb85499bba6f1f2a5b5658c96a079be84a56ccd3078')

result = await Operate.runTape(tape)
data = Operate.util.mapToObject(result)

// Traverse the metanet node
parent = await data._META.parent()
```

The final line there gives a hint as to what Operate offers app developers. Not only does Operate parse transactions and implement all these data protocols, but it is returning interactive objects with functions attached. Bit.sv transactions are Metanet nodes, so we can create Ops that [implement the Metanet protocol](/library/op/?ref=ec869026) and provide functions for traversing the tree.

Wouldn't it be great if there was also an Op for the Bit.sv protocol that provides functions handling decryption of the private data, given the correct private key? This is what **interoperability** looks like with Operate.

## Learning more about Operate

As well as releasing the JavaScript agent today, I have also rewritten the Operate documentation from the ground up. The new documentation aims to better explain some of the key concepts behind Operate.

* [Introduction to Operate](/docs)
* [Getting started](/docs/getting-started)
* [Using the JavaScript agent](/docs/using-the-agent/#javascript)

In addition, head over to the [Github repository](https://github.com/operate-bsv/op_agent-js) to browse the source code.

All Operate software is beta software. The JavaScript agent particularly has a few known issues - not least of all the *massive* browser bundle size (over 700kb). I think it will be possible to reduce this to below 300kb, but this will take work and time.

## Finally

In February, when I stood up in front of [\~900 people at CoinGeek London](/blog/cambrian-and-coingeek) and revealed that a JavaScript agent was *coming soon™*, I wasn't even sure if I was being honest. For a few reasons this has been a *really* challenging, and at times frustrating project to work on. To that point I must thank [@unanon_](https://twitter.com/unanon_) who joined me at CambrianSV in Lisbon, helped out with some of the dev work, and got to enjoy some of those laptop-smashingly frustrating moments with me.