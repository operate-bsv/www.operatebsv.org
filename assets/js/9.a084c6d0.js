(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{305:function(t,e,s){"use strict";var a=s(5),i=s(3),n=s(91),r=s(11),l=s(6),o=s(17),c=s(313),p=s(43),u=s(1),f=s(30),C=s(62).f,v=s(25).f,h=s(8).f,A=s(311).trim,b=i.Number,d=b.prototype,g="Number"==o(f(d)),m=function(t){var e,s,a,i,n,r,l,o,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=A(c)).charCodeAt(0))||45===e){if(88===(s=c.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+c}for(r=(n=c.slice(2)).length,l=0;l<r;l++)if((o=n.charCodeAt(l))<48||o>i)return NaN;return parseInt(n,a)}return+c};if(n("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var w,N=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof N&&(g?u((function(){d.valueOf.call(s)})):"Number"!=o(s))?c(new b(m(e)),s,N):m(e)},B=a?C(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;B.length>y;y++)l(b,w=B[y])&&!l(N,w)&&h(N,w,v(b,w));N.prototype=d,d.constructor=N,r(i,"Number",N)}},306:function(t,e,s){},307:function(t,e,s){},308:function(t,e,s){},309:function(t,e,s){"use strict";s(42),s(61);var a={props:{items:{type:Array,required:!0}},data:function(){return{open:!1}},computed:{openDropdown:function(){return this.open?"db":"dn"}}},i=(s(316),s(41)),n={props:{dropDown:{default:!0}},methods:{navItemLiClasses:function(t){return"Home"===t.title?"dn dib-ns mr3 mr4-l":"Docs"===t.title&&this.dropDown?"dib mr3":"dib mr3 mr4-l"},navItemAClasses:function(t){return"nav-item-".concat(t.title.toLowerCase().replace(/\W/g,"-"))}},components:{NavDropdown:Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative pv2",on:{mouseenter:function(e){t.open=!0},mouseleave:function(e){t.open=!1}}},[t._t("default"),t._v(" "),s("div",{staticClass:"absolute top-100 z-5 | navdrop"},[s("transition",{attrs:{name:"drop"}},[t.open?s("ul",{staticClass:"ph0 pv2 list f6 lh-block bg-white ba b--light-gray br1"},t._l(t.items,(function(e){return s("li",{staticClass:"fw4 nowrap"},[s("router-link",{staticClass:"db ph3 pv2 link mid-gray hover-hot-pink bl bw1 b--transparent outline-0",attrs:{to:e.path}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1)})),0):t._e()])],1)],2)}),[],!1,null,"52777367",null).exports,MenuIcon:s(323).a}},r=(s(317),Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"ma0 pa0 list f5 lh-block cf"},t._l(t.$site.themeConfig.nav,(function(e){return s("li",{staticClass:"fw5",class:t.navItemLiClasses(e)},[t.dropDown&&e.children?s("NavDropdown",{attrs:{items:e.children}},[e.path?s("router-link",{staticClass:"pv2 link mid-gray hover-hot-pink bb bw1 b--transparent outline-0",class:t.navItemAClasses(e),attrs:{to:e.path}},[t._v("\n        "+t._s(e.title)+"\n        "),s("MenuIcon",{staticClass:"v-mid"})],1):t._e()],1):s("router-link",{staticClass:"pv2 link mid-gray hover-hot-pink bb bw1 b--transparent outline-0",class:t.navItemAClasses(e),attrs:{to:e.path}},[t._v("\n      "+t._s(e.title)+"\n    ")])],1)})),0)}),[],!1,null,"036a0346",null));e.a=r.exports},311:function(t,e,s){var a=s(24),i="["+s(312)+"]",n=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$"),l=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(n,"")),2&t&&(s=s.replace(r,"")),s}};t.exports={start:l(1),end:l(2),trim:l(3)}},312:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},313:function(t,e,s){var a=s(4),i=s(92);t.exports=function(t,e,s){var n,r;return i&&"function"==typeof(n=e.constructor)&&n!==s&&a(r=n.prototype)&&r!==s.prototype&&i(t,r),t}},314:function(t,e){t.exports="data:image/png;base64,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"},315:function(t,e){t.exports="data:image/png;base64,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"},316:function(t,e,s){"use strict";var a=s(306);s.n(a).a},317:function(t,e,s){"use strict";var a=s(307);s.n(a).a},318:function(t,e,s){"use strict";var a=s(308);s.n(a).a},319:function(t,e,s){"use strict";var a={props:{logo:{default:!0}},components:{NavLinks:s(309).a}},i=(s(318),s(41)),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-between ph3 ph4-l | navbar"},[e("div",{staticClass:"dn db-ns pt1"},[this.logo?e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:s(314),srcset:s(315)+" 2x",alt:"Operate | BSV"}})]):this._e()],1),this._v(" "),e("NavLinks")],1)}),[],!1,null,null,null);e.a=n.exports},320:function(t,e,s){"use strict";var a=s(309),i=s(321),n=s(322),r={props:{narrow:Boolean},computed:{widthClass:function(){return this.narrow?"mw7":"mw8"}},components:{NavLinks:a.a,TwitterIcon:i.a,GithubIcon:n.a}},l=s(41),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"ph3 ph4-l pv4 pt5-l bt b--light-gray"},[s("div",{staticClass:"w-100 center",class:t.widthClass},[s("NavLinks",{staticClass:"mb4",attrs:{"drop-down":!1}}),t._v(" "),s("div",{staticClass:"pt4 measure-wide bt b--light-gray"},[t._m(0),t._v(" "),s("ul",{staticClass:"dib list ma0 ph0 pt0 pb4 f6 lh-copy bb b--light-gray"},[s("li",{staticClass:"dib mr3"},[s("a",{staticClass:"link blue hover-hot-pink",attrs:{href:"https://twitter.com/operate_bsv",target:"_blank"}},[s("TwitterIcon",{staticClass:"mr1 v-mid",attrs:{size:20}}),t._v(" "),s("span",[t._v("Follow @operate_bsv")])],1)]),t._v(" "),s("li",{staticClass:"dib mr3"},[s("a",{staticClass:"link blue hover-hot-pink",attrs:{href:"https://github.com/operate-bsv",target:"_blank"}},[s("GithubIcon",{staticClass:"mr1 v-mid",attrs:{size:20}}),t._v(" "),s("span",[t._v("View on Github")])],1)])]),t._v(" "),s("p",{staticClass:"mt4 mb3 f7 lh-copy"},[t._v("© Copyright 2019-2020 Chronos Labs Ltd.")])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt0 mb4 f7 lh-copy"},[this._v("Have questions? Need help getting started? Feel free to reach out to us on Twitter, open a Github issue, or find us in "),e("a",{staticClass:"link blue hover-hot-pink",attrs:{href:"https://bitdb.network/atlantis"}},[this._v("Atlantis Slack")]),this._v(".")])}],!1,null,null,null);e.a=o.exports},321:function(t,e,s){"use strict";s(305);var a={name:"TwitterIcon",props:{title:{type:String,default:"Twitter icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},i=s(41),n=Object(i.a)(a,(function(t,e){var s=e._c;return s("span",e._g(e._b({staticClass:"material-design-icon twitter-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}},[s("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null);e.a=n.exports},322:function(t,e,s){"use strict";s(305);var a={name:"GithubIcon",props:{title:{type:String,default:"Github icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},i=s(41),n=Object(i.a)(a,(function(t,e){var s=e._c;return s("span",e._g(e._b({staticClass:"material-design-icon github-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}},[s("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null);e.a=n.exports},323:function(t,e,s){"use strict";s(305);var a={name:"MenuDownIcon",props:{title:{type:String,default:"Menu Down icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},i=s(41),n=Object(i.a)(a,(function(t,e){var s=e._c;return s("span",e._g(e._b({staticClass:"material-design-icon menu-down-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[s("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M7,10L12,15L17,10H7Z"}},[s("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null);e.a=n.exports},608:function(t,e,s){"use strict";s.r(e);var a=s(319),i=s(320),n={computed:{isCustomRoute:function(){return!!this.$route.meta.component}},components:{NavBar:a.a,Footer:i.a}},r=s(41),l=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"helvetica dark-gray"},[e("header",{staticClass:"bb b--light-gray"},[e("NavBar")],1),this._v(" "),e("main",{staticClass:"pv4 ph3 ph4-l"},[e("div",{staticClass:"w-100 mw8 center"},[this.isCustomRoute?e(this.$route.meta.component,{tag:"component"}):e("Content")],1)]),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=l.exports}}]);