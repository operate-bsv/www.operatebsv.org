(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{610:function(t,e,n){"use strict";n.r(e);n(21),n(174),n(66);var r={computed:{articles:function(){return this.$site.pages.filter((function(t){return t.frontmatter.blog&&new Date(t.frontmatter.date)<=new Date})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}))}}},a=n(41),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.articles,(function(e){return n("div",[n("h4",[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1)])})),0)}),[],!1,null,null,null);e.default=o.exports}}]);