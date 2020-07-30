(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{625:function(t,e,s){"use strict";s.r(e);var a=s(41),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),s("h2",{attrs:{id:"understanding-ops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understanding-ops"}},[t._v("#")]),t._v(" Understanding Ops")]),t._v(" "),s("p",[t._v('The functions, or "Ops", that turn transactions into small, powerful executables are the beating heart of Operate.')]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"/library"}},[t._v("repository of public Ops")]),t._v(" is packed with useful functions for common use cases, so it won't always be necessary to write your own Ops. However, it's worth understanding how Ops work and the role they play in helping you build apps and products on top of Bitcoin.")]),t._v(" "),s("h3",{attrs:{id:"anatomy-of-an-op"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anatomy-of-an-op"}},[t._v("#")]),t._v(" Anatomy of an Op")]),t._v(" "),s("p",[t._v("An Op is a function written in Lua.")]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--[[\nDocument the function\n]]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("p",[t._v("The first argument of the function is always the "),s("code",[t._v("state")]),t._v(", and it can receive any number of other arguments. Within the body of the function, those arguments can be used to mutate the state in any way before returning a new, modified state.")]),t._v(" "),s("h3",{attrs:{id:"hello-world"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[t._v("#")]),t._v(" Hello World!")]),t._v(" "),s("p",[t._v('Lets imagine a hypothetical "Hello World!" Op. It might look something like this:')]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('--[[\nReturns a string concatenating "Hello" with the given phrase.\n]]')]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" phrase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Concatenate Hello World! phrase")]),t._v("\n  state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),t._v("phrase\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("p",[t._v('This is a pretty simple function - even those unfamiliar with Lua should be able to grok this one. The function simply returns a string which concatenates "Hello " with the '),s("code",[t._v("phrase")]),t._v(" parameter.")]),t._v(" "),s("h3",{attrs:{id:"referencing-ops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referencing-ops"}},[t._v("#")]),t._v(" Referencing Ops")]),t._v(" "),s("p",[t._v("Each Op has a unique reference derived from the content of the function itself. The "),s("code",[t._v("SHA-256")]),t._v(" hash of the function is calculated and the first 4+n unique bytes are used as the reference.")]),t._v(" "),s("p",[t._v("For example, the reference to our Hello World Op can be determined like this:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The hash of the Hello World! function is:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"768d1461ec6d2c6a5f552fe48c861c6e85a13655d43684b4da3f49e7a6ca1831"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The first 4 bytes, and therefore the Op reference, is:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"768d1461"')]),t._v("\n")])])]),s("p",[t._v("In the unlikely scenario that the first 4 bytes collides with an existing Op reference, the second Op would be referenced by the first 5 bytes, then 6 and so on. In practice, it is mathematically very unlikely that 6 byte references will be seen any time soon, but a rare 5 byte reference is a possibility.")]),t._v(" "),s("h2",{attrs:{id:"creating-tapes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-tapes"}},[t._v("#")]),t._v(" Creating Tapes")]),t._v(" "),s("p",[t._v("A Tape is an "),s("code",[t._v("OP_RETURN")]),t._v(" output that references one or more Ops and passes data parameters to each function.")]),t._v(" "),s("p",[t._v("For example, a simple Tape that just calls our Hello World Op might look like this:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("OP_FALSE OP_RETURN\n  0x768D1461\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mum"')]),t._v("\n")])])]),s("p",[t._v("When running this Tape, the Operate agent would return the result:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Mum"')]),t._v("\n")])])]),s("p",[t._v("This simple example shows how Operate takes data from transactions, and uses Ops to return that data in some other kind of state. But Operate really begins to flex its muscles when we create transactions that pipe multiple Ops together.")]),t._v(" "),s("h3",{attrs:{id:"string-splitting-op"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-splitting-op"}},[t._v("#")]),t._v(" String splitting Op")]),t._v(" "),s("p",[t._v("So lets imagine another hypothetical Op:")]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--[[\nAssumes the state is a string, and splits it into chunks of the given size.\nReturns a table of chunks.\n]]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" chunks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tonumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" size "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Iterate over the state string, and split into a table of chunks")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" chunk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chunk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" chunks\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("p",[t._v("This one's a little more complex than the Hello World Op, so lets go through it step-by-step to understand what's going on.")]),t._v(" "),s("p",[t._v("The first argument in every Op is the "),s("code",[t._v("state")]),t._v(". The state is the result from the previous cell in the tape, unless the Op is being called in the first cell of the tape, in which case the state will be "),s("code",[t._v("nil")]),t._v(". This particular Op assumes the state is a string of some length.")]),t._v(" "),s("p",[t._v("The Op also expects a "),s("code",[t._v("size")]),t._v(" parameter. This value is used to iterate over the state and split the string into a table of chunks of the given size. The table of chunks is returned as the new state.")]),t._v(" "),s("p",[t._v("When hashed, we can derive the unique reference of this Op as "),s("code",[t._v("8d4c1fea")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"the-pipe-operator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-pipe-operator"}},[t._v("#")]),t._v(" The pipe operator")]),t._v(" "),s("p",[t._v("Anyone who has worked with bash scripts or used functional programming languages such as Elixir or Elm will be familiar with the pipe operator. In Operate, the "),s("code",[t._v("|")]),t._v(" operator is used in a similar way. There is semantic significance in using the pipe operator - we are literally piping the output from one Op in to the next.")]),t._v(" "),s("p",[t._v("Using both the Hello World Op and string splitting Op together, we would end up with a Tape like this:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("OP_FALSE OP_RETURN\n  0x768D1461\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"World!"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"|"')]),t._v("\n  0x8D4C1FEA\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n")])])]),s("p",[t._v("Running this Tape through Operate would return the following array-like result:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hel"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lo "')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wor"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ld!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"what-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-next"}},[t._v("#")]),t._v(" What next?")]),t._v(" "),s("p",[t._v('Of course, none of us are here to build "Hello World" apps - we\'re here to build a new world of apps, games and services only deliverable over Bitcoin. The examples on this page, whilst slightly contrived, offer a simple demonstration of how Operate works and some of the key concepts of its design.')]),t._v(" "),s("p",[t._v("With a bit of imagination, Operate can be used to much more powerful effect. Ops can be designed to process data, perform calculations and operations, and return structured interactive objects with functions and callbacks that we can utilise in our host applications.")]),t._v(" "),s("p",[t._v("You can extend the Lua environment that Ops are executed in with your own modules and functions, so your Bitcoin transactions can interface directly with code in your own applications.")]),t._v(" "),s("p",[t._v("This kind of flexibility is very powerful and opens up use cases limited only by your imagination.")])])}),[],!1,null,null,null);e.default=n.exports}}]);