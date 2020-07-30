(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{624:function(t,a,e){"use strict";e.r(a);var s=e(41),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[t._v("#")]),t._v(" Extensions")]),t._v(" "),e("h2",{attrs:{id:"what-is-an-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-extension"}},[t._v("#")]),t._v(" What is an extension")]),t._v(" "),e("p",[t._v("Ops are written using Lua, a simple, high-level scripting language. Lua is an easy language to learn - it is a minimal language with a small standard library and few concepts.")]),t._v(" "),e("p",[t._v("Operate allows you to extend the Lua environment with your own modules and functions. You don't even need to write these extensions in Lua - you can write code in the language of your host application and the Operate agent seamlessly exposes these to the Lua VM and automatically handles the appropriate conversion of types. This allows you to not only extend Lua, but allow "),e("strong",[t._v("Bitcoin transactions to directly interact with code in your application")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"built-in-extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#built-in-extensions"}},[t._v("#")]),t._v(" Built-in extensions")]),t._v(" "),e("p",[t._v("Both the Operate Elixir and JavaScript agents come with a number of built in extensions. These expose helper methods to Lua for commonly used functionality, and are implemented consistently across platforms.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#agent-extension"}},[t._v("Agent extension")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#base-extension"}},[t._v("Base extension")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#context-extension"}},[t._v("Context extension")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#crypto-extension"}},[t._v("Crypto extension")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#json-extension"}},[t._v("JSON extension")])])]),t._v(" "),e("h3",{attrs:{id:"agent-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#agent-extension"}},[t._v("#")]),t._v(" Agent extension")]),t._v(" "),e("p",[t._v("Extends the Lua VM with functions for accessing the running agent.")]),t._v(" "),e("h4",{attrs:{id:"agent-load-tape-txid-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#agent-load-tape-txid-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("agent.load_tape(txid [, opts])")])]),t._v(" "),e("p",[t._v("Loads a tape by the given txid and returns the tape.")]),t._v(" "),e("h4",{attrs:{id:"agent-load-tapes-by-query-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#agent-load-tapes-by-query-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("agent.load_tapes_by(query [, opts])")])]),t._v(" "),e("p",[t._v("Loads a table of tapes by the given query and returns the table.")]),t._v(" "),e("h4",{attrs:{id:"agent-local-tape-index-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#agent-local-tape-index-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("agent.local_tape(index [, opts])")])]),t._v(" "),e("p",[t._v("Gets a tape from the context transaction by its output index.")]),t._v(" "),e("h4",{attrs:{id:"agent-run-tape-tape-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#agent-run-tape-tape-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("agent.run_tape(tape [, opts])")])]),t._v(" "),e("p",[t._v("Runs the given tape, and returns the result.")]),t._v(" "),e("h3",{attrs:{id:"base-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-extension"}},[t._v("#")]),t._v(" Base extension")]),t._v(" "),e("p",[t._v("Extends the Lua VM with functions for encoding and decoding hex and base64 strings.")]),t._v(" "),e("h4",{attrs:{id:"base-encode16-str"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-encode16-str"}},[t._v("#")]),t._v(" "),e("code",[t._v("base.encode16(str)")])]),t._v(" "),e("p",[t._v("Encodes the given string into a hex string.")]),t._v(" "),e("h4",{attrs:{id:"base-encode64-str"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-encode64-str"}},[t._v("#")]),t._v(" "),e("code",[t._v("base.encode64(str)")])]),t._v(" "),e("p",[t._v("Encodes the given string into a base64 string.")]),t._v(" "),e("h4",{attrs:{id:"base-decode16-str"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-decode16-str"}},[t._v("#")]),t._v(" "),e("code",[t._v("base.decode16(str)")])]),t._v(" "),e("p",[t._v("Decodes the given hex string.")]),t._v(" "),e("h4",{attrs:{id:"base-decode64-str"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-decode64-str"}},[t._v("#")]),t._v(" "),e("code",[t._v("base.decode64(str)")])]),t._v(" "),e("p",[t._v("Decodes the given base64 string.")]),t._v(" "),e("h3",{attrs:{id:"context-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context-extension"}},[t._v("#")]),t._v(" Context extension")]),t._v(" "),e("p",[t._v("Extends the Lua VM with functions for accessing the transaction context.")]),t._v(" "),e("h4",{attrs:{id:"ctx-tx-input-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ctx-tx-input-index"}},[t._v("#")]),t._v(" "),e("code",[t._v("ctx.tx_input(index)")])]),t._v(" "),e("p",[t._v("Gets the input from the context transaction, returning a pushdata table.")]),t._v(" "),e("h4",{attrs:{id:"ctx-tx-output-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ctx-tx-output-index"}},[t._v("#")]),t._v(" "),e("code",[t._v("ctx.tx_output(index)")])]),t._v(" "),e("p",[t._v("Gets the output from the context transaction, returning a pushdata table.")]),t._v(" "),e("h4",{attrs:{id:"ctx-get-tape"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ctx-get-tape"}},[t._v("#")]),t._v(" "),e("code",[t._v("ctx.get_tape()")])]),t._v(" "),e("p",[t._v("Gets the current tape from the context tx, returning a pushdata table.")]),t._v(" "),e("h4",{attrs:{id:"ctx-get-cell-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ctx-get-cell-index"}},[t._v("#")]),t._v(" "),e("code",[t._v("ctx.get_cell([index])")])]),t._v(" "),e("p",[t._v("Gets the cell from the context tx, returning a pushdata table. If no index is provided, the current cell is returned.")]),t._v(" "),e("h4",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("ctx.tx")]),t._v(" - the current context tx")]),t._v(" "),e("li",[e("code",[t._v("ctx.tape_index")]),t._v(" - the output index of the current tape")]),t._v(" "),e("li",[e("code",[t._v("ctx.cell_index")]),t._v(" - the index of the current cell from all cells")]),t._v(" "),e("li",[e("code",[t._v("ctx.data_index")]),t._v(" - the index of the start of current cell from all pushdata")])]),t._v(" "),e("h3",{attrs:{id:"crypto-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-extension"}},[t._v("#")]),t._v(" Crypto extension")]),t._v(" "),e("p",[t._v("Extends the Lua VM with common crypto functions.")]),t._v(" "),e("h4",{attrs:{id:"crypto-aes-encrypt-data-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-aes-encrypt-data-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.aes.encrypt(data, key [, opts])")])]),t._v(" "),e("p",[t._v("Encrypts the data with the given secret using AES-GCM.")]),t._v(" "),e("h4",{attrs:{id:"crypto-aes-decrypt-data-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-aes-decrypt-data-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.aes.decrypt(data, key [, opts])")])]),t._v(" "),e("p",[t._v("Decrypts the data with the given secret using AES-GCM.")]),t._v(" "),e("h4",{attrs:{id:"crypto-ecies-encrypt-data-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-ecies-encrypt-data-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.ecies.encrypt(data, key [, opts])")])]),t._v(" "),e("p",[t._v("Encrypts the data with the given ECDSA public key using ECIES.")]),t._v(" "),e("h4",{attrs:{id:"crypto-ecies-decrypt-data-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-ecies-decrypt-data-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.ecies.decrypt(data, key [, opts])")])]),t._v(" "),e("p",[t._v("Decrypts the data with the given ECDSA private key using ECIES.")]),t._v(" "),e("h4",{attrs:{id:"crypto-ecdsa-sign-message-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-ecdsa-sign-message-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.ecdsa.sign(message, key [, opts])")])]),t._v(" "),e("p",[t._v("Signs the message with the given ECDSA private key.")]),t._v(" "),e("h4",{attrs:{id:"crypto-ecdsa-verify-signature-message-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-ecdsa-verify-signature-message-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.ecdsa.verify(signature, message, key [, opts])")])]),t._v(" "),e("p",[t._v("Verifies the signature against the message with the given ECDSA public key.")]),t._v(" "),e("h4",{attrs:{id:"crypto-rsa-encrypt-data-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-rsa-encrypt-data-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.rsa.encrypt(data, key [, opts])")])]),t._v(" "),e("p",[t._v("Encrypts the data with the given RSA public or private key.")]),t._v(" "),e("h4",{attrs:{id:"crypto-rsa-decrypt-data-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-rsa-decrypt-data-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.rsa.decrypt(data, key [, opts])")])]),t._v(" "),e("p",[t._v("Decrypts the data with the given RSA public or private key.")]),t._v(" "),e("h4",{attrs:{id:"crypto-rsa-sign-message-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-rsa-sign-message-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.rsa.sign(message, key [, opts])")])]),t._v(" "),e("p",[t._v("Signs the message with the given RSA private key.")]),t._v(" "),e("h4",{attrs:{id:"crypto-rsa-verify-signature-message-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-rsa-verify-signature-message-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.rsa.verify(signature, message, key [, opts])")])]),t._v(" "),e("p",[t._v("Verifies the signature against the message with the given RSA public key.")]),t._v(" "),e("h4",{attrs:{id:"crypto-hash-ripemd160-data-opt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-hash-ripemd160-data-opt"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.hash.ripemd160(data [, opt])")])]),t._v(" "),e("p",[t._v("Hashes the data using the "),e("code",[t._v("RIPEMD160")]),t._v(" algorithm.")]),t._v(" "),e("h4",{attrs:{id:"crypto-hash-sha1-data-opt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-hash-sha1-data-opt"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.hash.sha1(data [, opt])")])]),t._v(" "),e("p",[t._v("Hashes the data using the "),e("code",[t._v("SHA-1")]),t._v(" algorithm.")]),t._v(" "),e("h4",{attrs:{id:"crypto-hash-sha256-data-opt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-hash-sha256-data-opt"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.hash.sha256(data [, opt])")])]),t._v(" "),e("p",[t._v("Hashes the data using the "),e("code",[t._v("SHA-256")]),t._v(" algorithm.")]),t._v(" "),e("h4",{attrs:{id:"crypto-hash-sha512-data-opt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-hash-sha512-data-opt"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.hash.sha512(data [, opt])")])]),t._v(" "),e("p",[t._v("Hashes the data using the "),e("code",[t._v("SHA-512")]),t._v(" algorithm.")]),t._v(" "),e("h4",{attrs:{id:"crypto-bitcoin-message-sign-message-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-bitcoin-message-sign-message-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.bitcoin_message.sign(message, key [, opts])")])]),t._v(" "),e("p",[t._v("Signs the message using the "),e("code",[t._v("BE1")]),t._v(" algorith with the given ECDSA private key.")]),t._v(" "),e("h4",{attrs:{id:"crypto-bitcoin-message-verify-signature-message-key-opts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crypto-bitcoin-message-verify-signature-message-key-opts"}},[t._v("#")]),t._v(" "),e("code",[t._v("crypto.bitcoin_message.verify(signature, message, key [, opts])")])]),t._v(" "),e("p",[t._v("Verifies the signature against the message using the "),e("code",[t._v("BE1")]),t._v(" algorithm with the given ECDSA public key.")]),t._v(" "),e("h3",{attrs:{id:"json-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-extension"}},[t._v("#")]),t._v(" JSON extension")]),t._v(" "),e("p",[t._v("Extends the Lua VM with functions for encoding and decoding JSON.")]),t._v(" "),e("h4",{attrs:{id:"json-encode-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-encode-data"}},[t._v("#")]),t._v(" "),e("code",[t._v("json.encode(data)")])]),t._v(" "),e("p",[t._v("Encodes the given data table into a JSON string.")]),t._v(" "),e("h4",{attrs:{id:"json-decode-str"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-decode-str"}},[t._v("#")]),t._v(" "),e("code",[t._v("json.decode(str)")])]),t._v(" "),e("p",[t._v("Decodes the given JSON string and returns a data table.")]),t._v(" "),e("h2",{attrs:{id:"creating-an-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-extension"}},[t._v("#")]),t._v(" Creating an extension")]),t._v(" "),e("p",[t._v("Operate makes it simple to expose your own modules and functions to the Lua VM. These can be written in the language of your own application (Elixir or JavaScript) but exposed as native Lua functions.")]),t._v(" "),e("h3",{attrs:{id:"elixir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elixir"}},[t._v("#")]),t._v(" Elixir")]),t._v(" "),e("p",[t._v("To create an Operate extension in Elixir, create your own module and "),e("code",[t._v("use")]),t._v(" the "),e("code",[t._v("Operate.VM.Extension")]),t._v(" module. You must define an "),e("code",[t._v("extend/1")]),t._v(" function which recieves a VM state which you can modify using the "),e("code",[t._v("Operate.VM")]),t._v(" module.")]),t._v(" "),e("p",[t._v("It is possible to add native Lua functions or Elixir code that will be exposed to the Lua VM as a native function.")]),t._v(" "),e("div",{staticClass:"language-elixir extra-class"},[e("pre",{pre:!0,attrs:{class:"language-elixir"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defmodule")]),t._v(" ExampleExtension "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" Operate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Extension\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v(" Operate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VM\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" extend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    vm\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|>")]),t._v(" VM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set!"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msg"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|>")]),t._v(" VM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exec!"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function hello() return msg end"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|>")]),t._v(" VM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_function!"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sum"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" _vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" apply"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__MODULE__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token atom symbol"}},[t._v(":sum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" sum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),e("p",[t._v("The extension can be added to the agent configuration either at startup or at run time.")]),t._v(" "),e("div",{staticClass:"language-elixir extra-class"},[e("pre",{pre:!0,attrs:{class:"language-elixir"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Either define the extension globally when starting the Operate agent process")]),t._v("\nchildren "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Operate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("extensions:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ExampleExtension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nSupervisor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start_link"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("strategy:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token atom symbol"}},[t._v(":one_for_one")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Or pass the extension when running each tape")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token atom symbol"}},[t._v(":ok")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tape"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Operate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_tape"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tape"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("extensions:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ExampleExtension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),e("p",[t._v("To create an Operate extension in JavaScript, define a class that extends from the "),e("code",[t._v("Operate.VM.Extension")]),t._v(" class. You must define a static "),e("code",[t._v("extend()")]),t._v(" method which receives a "),e("code",[t._v("vm")]),t._v(" instance with which you can modify the VM state.")]),t._v(" "),e("p",[t._v("It is possible to add native Lua functions or JavaScript code that will be exposed to the Lua VM as a native function.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Extension "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'operate/vm/extension'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleExtension")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Extension")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vm")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'msg'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function hello() return msg end'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFunction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sum'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sum"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The extension can be added to the agent configuration either at startup or at run time.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Either add the extension to the  global configuration")]),t._v("\nOperate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  extensions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ExampleExtension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or pass the extension when running each tape")]),t._v("\nresult "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Operate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("runTape")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tape"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  extensions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ExampleExtension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);