(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{306:function(t,s,e){},307:function(t,s,e){},308:function(t,s,e){},309:function(t,s,e){"use strict";e(42),e(61);var n={props:{items:{type:Array,required:!0}},data:function(){return{open:!1}},computed:{openDropdown:function(){return this.open?"db":"dn"}}},a=(e(316),e(41)),i={props:{dropDown:{default:!0}},methods:{navItemLiClasses:function(t){return"Home"===t.title?"dn dib-ns mr3 mr4-l":"Docs"===t.title&&this.dropDown?"dib mr3":"dib mr3 mr4-l"},navItemAClasses:function(t){return"nav-item-".concat(t.title.toLowerCase().replace(/\W/g,"-"))}},components:{NavDropdown:Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"relative pv2",on:{mouseenter:function(s){t.open=!0},mouseleave:function(s){t.open=!1}}},[t._t("default"),t._v(" "),e("div",{staticClass:"absolute top-100 z-5 | navdrop"},[e("transition",{attrs:{name:"drop"}},[t.open?e("ul",{staticClass:"ph0 pv2 list f6 lh-block bg-white ba b--light-gray br1"},t._l(t.items,(function(s){return e("li",{staticClass:"fw4 nowrap"},[e("router-link",{staticClass:"db ph3 pv2 link mid-gray hover-hot-pink bl bw1 b--transparent outline-0",attrs:{to:s.path}},[t._v("\n            "+t._s(s.title)+"\n          ")])],1)})),0):t._e()])],1)],2)}),[],!1,null,"52777367",null).exports,MenuIcon:e(323).a}},r=(e(317),Object(a.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"ma0 pa0 list f5 lh-block cf"},t._l(t.$site.themeConfig.nav,(function(s){return e("li",{staticClass:"fw5",class:t.navItemLiClasses(s)},[t.dropDown&&s.children?e("NavDropdown",{attrs:{items:s.children}},[s.path?e("router-link",{staticClass:"pv2 link mid-gray hover-hot-pink bb bw1 b--transparent outline-0",class:t.navItemAClasses(s),attrs:{to:s.path}},[t._v("\n        "+t._s(s.title)+"\n        "),e("MenuIcon",{staticClass:"v-mid"})],1):t._e()],1):e("router-link",{staticClass:"pv2 link mid-gray hover-hot-pink bb bw1 b--transparent outline-0",class:t.navItemAClasses(s),attrs:{to:s.path}},[t._v("\n      "+t._s(s.title)+"\n    ")])],1)})),0)}),[],!1,null,"036a0346",null));s.a=r.exports},314:function(t,s){t.exports="data:image/png;base64,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"},315:function(t,s){t.exports="data:image/png;base64,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"},316:function(t,s,e){"use strict";var n=e(306);e.n(n).a},317:function(t,s,e){"use strict";var n=e(307);e.n(n).a},318:function(t,s,e){"use strict";var n=e(308);e.n(n).a},319:function(t,s,e){"use strict";var n={props:{logo:{default:!0}},components:{NavLinks:e(309).a}},a=(e(318),e(41)),i=Object(a.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex items-center justify-between ph3 ph4-l | navbar"},[s("div",{staticClass:"dn db-ns pt1"},[this.logo?s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:e(314),srcset:e(315)+" 2x",alt:"Operate | BSV"}})]):this._e()],1),this._v(" "),s("NavLinks")],1)}),[],!1,null,null,null);s.a=i.exports},320:function(t,s,e){"use strict";var n=e(309),a=e(321),i=e(322),r={props:{narrow:Boolean},computed:{widthClass:function(){return this.narrow?"mw7":"mw8"}},components:{NavLinks:n.a,TwitterIcon:a.a,GithubIcon:i.a}},l=e(41),c=Object(l.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"ph3 ph4-l pv4 pt5-l bt b--light-gray"},[e("div",{staticClass:"w-100 center",class:t.widthClass},[e("NavLinks",{staticClass:"mb4",attrs:{"drop-down":!1}}),t._v(" "),e("div",{staticClass:"pt4 measure-wide bt b--light-gray"},[t._m(0),t._v(" "),e("ul",{staticClass:"dib list ma0 ph0 pt0 pb4 f6 lh-copy bb b--light-gray"},[e("li",{staticClass:"dib mr3"},[e("a",{staticClass:"link blue hover-hot-pink",attrs:{href:"https://twitter.com/operate_bsv",target:"_blank"}},[e("TwitterIcon",{staticClass:"mr1 v-mid",attrs:{size:20}}),t._v(" "),e("span",[t._v("Follow @operate_bsv")])],1)]),t._v(" "),e("li",{staticClass:"dib mr3"},[e("a",{staticClass:"link blue hover-hot-pink",attrs:{href:"https://github.com/operate-bsv",target:"_blank"}},[e("GithubIcon",{staticClass:"mr1 v-mid",attrs:{size:20}}),t._v(" "),e("span",[t._v("View on Github")])],1)])]),t._v(" "),e("p",{staticClass:"mt4 mb3 f7 lh-copy"},[t._v("© Copyright 2019-2020 Chronos Labs Ltd.")])])],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"mt0 mb4 f7 lh-copy"},[this._v("Have questions? Need help getting started? Feel free to reach out to us on Twitter, open a Github issue, or find us in "),s("a",{staticClass:"link blue hover-hot-pink",attrs:{href:"https://bitdb.network/atlantis"}},[this._v("Atlantis Slack")]),this._v(".")])}],!1,null,null,null);s.a=c.exports},466:function(t,s,e){},478:function(t,s,e){var n={"./af":332,"./af.js":332,"./ar":333,"./ar-dz":334,"./ar-dz.js":334,"./ar-kw":335,"./ar-kw.js":335,"./ar-ly":336,"./ar-ly.js":336,"./ar-ma":337,"./ar-ma.js":337,"./ar-sa":338,"./ar-sa.js":338,"./ar-tn":339,"./ar-tn.js":339,"./ar.js":333,"./az":340,"./az.js":340,"./be":341,"./be.js":341,"./bg":342,"./bg.js":342,"./bm":343,"./bm.js":343,"./bn":344,"./bn.js":344,"./bo":345,"./bo.js":345,"./br":346,"./br.js":346,"./bs":347,"./bs.js":347,"./ca":348,"./ca.js":348,"./cs":349,"./cs.js":349,"./cv":350,"./cv.js":350,"./cy":351,"./cy.js":351,"./da":352,"./da.js":352,"./de":353,"./de-at":354,"./de-at.js":354,"./de-ch":355,"./de-ch.js":355,"./de.js":353,"./dv":356,"./dv.js":356,"./el":357,"./el.js":357,"./en-au":358,"./en-au.js":358,"./en-ca":359,"./en-ca.js":359,"./en-gb":360,"./en-gb.js":360,"./en-ie":361,"./en-ie.js":361,"./en-il":362,"./en-il.js":362,"./en-in":363,"./en-in.js":363,"./en-nz":364,"./en-nz.js":364,"./en-sg":365,"./en-sg.js":365,"./eo":366,"./eo.js":366,"./es":367,"./es-do":368,"./es-do.js":368,"./es-us":369,"./es-us.js":369,"./es.js":367,"./et":370,"./et.js":370,"./eu":371,"./eu.js":371,"./fa":372,"./fa.js":372,"./fi":373,"./fi.js":373,"./fil":374,"./fil.js":374,"./fo":375,"./fo.js":375,"./fr":376,"./fr-ca":377,"./fr-ca.js":377,"./fr-ch":378,"./fr-ch.js":378,"./fr.js":376,"./fy":379,"./fy.js":379,"./ga":380,"./ga.js":380,"./gd":381,"./gd.js":381,"./gl":382,"./gl.js":382,"./gom-deva":383,"./gom-deva.js":383,"./gom-latn":384,"./gom-latn.js":384,"./gu":385,"./gu.js":385,"./he":386,"./he.js":386,"./hi":387,"./hi.js":387,"./hr":388,"./hr.js":388,"./hu":389,"./hu.js":389,"./hy-am":390,"./hy-am.js":390,"./id":391,"./id.js":391,"./is":392,"./is.js":392,"./it":393,"./it-ch":394,"./it-ch.js":394,"./it.js":393,"./ja":395,"./ja.js":395,"./jv":396,"./jv.js":396,"./ka":397,"./ka.js":397,"./kk":398,"./kk.js":398,"./km":399,"./km.js":399,"./kn":400,"./kn.js":400,"./ko":401,"./ko.js":401,"./ku":402,"./ku.js":402,"./ky":403,"./ky.js":403,"./lb":404,"./lb.js":404,"./lo":405,"./lo.js":405,"./lt":406,"./lt.js":406,"./lv":407,"./lv.js":407,"./me":408,"./me.js":408,"./mi":409,"./mi.js":409,"./mk":410,"./mk.js":410,"./ml":411,"./ml.js":411,"./mn":412,"./mn.js":412,"./mr":413,"./mr.js":413,"./ms":414,"./ms-my":415,"./ms-my.js":415,"./ms.js":414,"./mt":416,"./mt.js":416,"./my":417,"./my.js":417,"./nb":418,"./nb.js":418,"./ne":419,"./ne.js":419,"./nl":420,"./nl-be":421,"./nl-be.js":421,"./nl.js":420,"./nn":422,"./nn.js":422,"./oc-lnc":423,"./oc-lnc.js":423,"./pa-in":424,"./pa-in.js":424,"./pl":425,"./pl.js":425,"./pt":426,"./pt-br":427,"./pt-br.js":427,"./pt.js":426,"./ro":428,"./ro.js":428,"./ru":429,"./ru.js":429,"./sd":430,"./sd.js":430,"./se":431,"./se.js":431,"./si":432,"./si.js":432,"./sk":433,"./sk.js":433,"./sl":434,"./sl.js":434,"./sq":435,"./sq.js":435,"./sr":436,"./sr-cyrl":437,"./sr-cyrl.js":437,"./sr.js":436,"./ss":438,"./ss.js":438,"./sv":439,"./sv.js":439,"./sw":440,"./sw.js":440,"./ta":441,"./ta.js":441,"./te":442,"./te.js":442,"./tet":443,"./tet.js":443,"./tg":444,"./tg.js":444,"./th":445,"./th.js":445,"./tk":446,"./tk.js":446,"./tl-ph":447,"./tl-ph.js":447,"./tlh":448,"./tlh.js":448,"./tr":449,"./tr.js":449,"./tzl":450,"./tzl.js":450,"./tzm":451,"./tzm-latn":452,"./tzm-latn.js":452,"./tzm.js":451,"./ug-cn":453,"./ug-cn.js":453,"./uk":454,"./uk.js":454,"./ur":455,"./ur.js":455,"./uz":456,"./uz-latn":457,"./uz-latn.js":457,"./uz.js":456,"./vi":458,"./vi.js":458,"./x-pseudo":459,"./x-pseudo.js":459,"./yo":460,"./yo.js":460,"./zh-cn":461,"./zh-cn.js":461,"./zh-hk":462,"./zh-hk.js":462,"./zh-mo":463,"./zh-mo.js":463,"./zh-tw":464,"./zh-tw.js":464};function a(t){var s=i(t);return e(s)}function i(t){if(!e.o(n,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=478},505:function(t,s,e){"use strict";var n=e(466);e.n(n).a},606:function(t,s,e){"use strict";e.r(s);var n=e(303),a=e.n(n),i=e(502),r=e(503),l=e(319),c=e(320),o={data:function(){return{iconSize:20}},mounted:function(){var t=this;window.addEventListener("resize",(function(s){t.setIconSize(s.target.outerWidth)})),this.setIconSize(window.outerWidth)},methods:{cardStyles:function(t){return{backgroundImage:"url(".concat(t.frontmatter.card,")"),backgroundSize:"640px 300px"}},pubDateDB:function(t){return a()(t.frontmatter.date).format("YYYY-MM-DD")},pubDateStr:function(t){return a()(t.frontmatter.date).format("Do MMM YYYY")},setIconSize:function(t){this.iconSize=t<960?16:20}},components:{NavBar:l.a,Footer:c.a,AccountBoxIcon:i.a,CalendarIcon:r.a}},p=(e(505),e(41)),u=Object(p.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"helvetica dark-gray"},[e("header",{staticClass:"bb b--light-gray"},[e("NavBar")],1),t._v(" "),e("main",{staticClass:"pv4 ph3 ph4-l"},[e("div",{staticClass:"w-100 mw8 center"},[e("h1",{staticClass:"f2 lh-title"},[t._v("Articles")]),t._v(" "),t._l(t.$pagination.pages,(function(s){return e("article",{staticClass:"mb4 flex-ns justify-between-ns",attrs:{itemscope:"",itemtype:"http://schema.org/Article"}},[e("meta",{attrs:{itemprop:"url",content:t.$site.themeConfig.domain+s.path}}),t._v(" "),e("div",{staticClass:"w-60-ns w-two-thirds-l pr2-ns pr3-l mb3"},[e("a",{staticClass:"db link bg-center cover article-card",style:t.cardStyles(s),attrs:{href:s.path}},[t._v("\n             \n          ")])]),t._v(" "),e("div",{staticClass:"w-40-ns w-third-l pl2-ns pl3-l pb3"},[e("a",{staticClass:"no-underline",attrs:{href:s.path}},[e("h2",{staticClass:"mt0 mb1 f3 lh-title link dark-gray hover-hot-pink",attrs:{itemprop:"name"}},[t._v("\n              "+t._s(s.title)+"\n            ")]),t._v(" "),e("p",{staticClass:"mt0 mb3 mb4-l f5 lh-copy link gray hover-hot-pink",attrs:{itemprop:"description"}},[t._v("\n              "+t._s(s.frontmatter.description)+"\n            ")])]),t._v(" "),e("ul",{staticClass:"list ma0 pa0 f7 f6-l lh-copy gray"},[s.frontmatter.date?e("li",{staticClass:"dib mr3"},[e("time",{attrs:{date:t.pubDateDB(s),pubdate:""}},[e("CalendarIcon",{staticClass:"dib silver v-mid",attrs:{size:t.iconSize}}),t._v(" "),e("span",{attrs:{itemprop:"datePublished"}},[t._v(t._s(t.pubDateStr(s)))])],1)]):t._e(),t._v(" "),s.frontmatter.author?e("li",{staticClass:"dib mr3"},[e("AccountBoxIcon",{staticClass:"dib silver v-mid",attrs:{size:t.iconSize}}),t._v(" "),e("span",{attrs:{itemprop:"author"}},[t._v(t._s(s.frontmatter.author))])],1):t._e()])])])}))],2)]),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);s.default=u.exports}}]);