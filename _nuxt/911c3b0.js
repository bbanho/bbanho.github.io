(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{190:function(t,e,r){"use strict";r.r(e);var n=r(28),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-right":"10px"}},[e("p",{staticClass:"text-4x1",staticStyle:{color:"#333","font-size":"24px","font-family":"monospace"}},[this._v("memory_leak")])])}],!1,null,null,null);e.default=component.exports},192:function(t,e,r){var content=r(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("90f0709c",content,!0,{sourceMap:!1})},198:function(t,e,r){"use strict";r(192)},199:function(t,e,r){(e=r(39)(!1)).push([t.i,".article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}",""]),t.exports=e},212:function(t,e,r){"use strict";r.r(e);r(131),r(29);var n=r(2),l={data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}},c=r(28),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"on",placeholder:"Buscar"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,r){"use strict";r.r(e);var n=r(28),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"flex"},[e("NuxtLink",{attrs:{to:"/"}},[e("Logo",{staticClass:"mb-4"})],1),this._v(" "),e("AppSearchInput")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(190).default,AppSearchInput:r(212).default})},219:function(t,e,r){"use strict";r.r(e);r(29);var n=r(2),l={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 3:return l=e.sent,e.next=6,r("tags",n.slug).only(["name","description","img","slug"]).sortBy("createdAt","asc").fetch();case 6:return c=e.sent,e.abrupt("return",{articles:l,tags:c});case 8:case"end":return e.stop()}}),e)})))()}},c=(r(198),r(28)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-8"},[r("TheHeader"),t._v(" "),r("ul",{staticClass:"mt-4 flex flex-wrap"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[article.img?r("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:article.img}}):t._e(),t._v(" "),r("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[r("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v("por "+t._s(article.author.name))]),t._v(" "),r("p",{staticClass:"font-bold text-gray-600 text-sm"},[t._v("\n            "+t._s(article.description)+"\n          ")])])])],1)})),0),t._v(" "),r("h3",{staticClass:"mb-4 font-bold text-2xl uppercase text-center"},[t._v("Tags")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap mb-4 text-center"},t._l(t.tags,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"},[r("NuxtLink",{attrs:{to:"/blog/tag/"+e.slug}},[r("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\n          "+t._s(e.name)+"\n        ")])])],1)})),0),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"flex justify-center border-gray-500 border-t-2"},[e("p",{staticClass:"mt-4"},[this._v("\n      Com tecnologia\n      "),e("a",{staticClass:"font-bold hover:underline",attrs:{href:"https://nuxtjs.org/"}},[this._v("Nuxt.js")]),this._v("\n      .\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:r(214).default})}}]);