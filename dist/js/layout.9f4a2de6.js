(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout"],{"036d":function(e,t,n){},"1af6":function(e,t,n){var a=n("63b6");a(a.S,"Array",{isArray:n("9003")})},"25d6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout",class:["nav-theme-"+e.navTheme,"nav-layout-"+e.navLayout]},[n("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-custom-trigger"}},[n("a-layout-sider",{attrs:{trigger:null,theme:e.navTheme,collapsible:"",width:"256px"},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[n("div",{staticClass:"logo"},[e._v("Ant Design Vue Pro")]),n("SideMenu",{attrs:{theme:e.navTheme}})],1),n("a-layout",[n("a-layout-header",{staticStyle:{background:"#fff",padding:"0"}},[n("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:function(){return e.collapsed=!e.collapsed}}}),n("Header")],1),n("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"280px"}},[n("router-view")],1),n("a-layout-footer",{staticStyle:{"text-align":"center"}},[n("Footer"),e._v("\n                Ant Design ©2019 Created by Ant\n            ")],1)],1)],1),n("SettingDrawer")],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._v("header")])},i=[],u={},s=u,c=(n("dc75"),n("2877")),l=Object(c["a"])(s,o,i,!1,null,null,null),p=l.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"256px"}},[n("a-menu",{attrs:{selectedKeys:e.selectedKeys,openKeys:e.openKeys,mode:"inline",theme:e.theme,inlineCollapsed:e.collapsed},on:{"update:openKeys":function(t){e.openKeys=t},"update:open-keys":function(t){e.openKeys=t}}},[e._l(e.menuData,function(t){return[t.children?n("sub-menu",{key:t.path,attrs:{"menu-info":t}}):n("a-menu-item",{key:t.path,on:{click:function(){return e.$router.push({path:t.path,query:e.$route.query})}}},[t.meta.icon?n("a-icon",{attrs:{type:t.meta.icon}}):e._e(),n("span",[e._v(e._s(t.meta.title))])],1)]})],2)],1)},h=[],d=n("a745"),v=n.n(d);function y(e){if(v()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var m=n("774e"),g=n.n(m),b=n("c8bb"),S=n.n(b);function _(e){if(S()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return g()(e)}function L(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function x(e){return y(e)||_(e)||L()}var M=n("268f"),k=n.n(M),w=n("e265"),C=n.n(w),T=n("a4bb"),O=n.n(T),D=n("85f2"),$=n.n(D);function K(e,t,n){return t in e?$()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=O()(n);"function"===typeof C.a&&(a=a.concat(C()(n).filter(function(e){return k()(n,e).enumerable}))),a.forEach(function(t){K(e,t,n[t])})}return e}n("7f7f"),n("ac6a");var A=function(e,t){var n=t._c;return n("a-sub-menu",{key:t.props.menuInfo.path},[n("span",{attrs:{slot:"title"},slot:"title"},[t.props.menuInfo.meta.icon?n("a-icon",{attrs:{type:t.props.menuInfo.meta.icon}}):t._e(),n("span",[t._v(t._s(t.props.menuInfo.meta.title))])],1),t._l(t.props.menuInfo.children,function(e){return[e.children?n("sub-menu",{key:e.path,attrs:{"menu-info":e}}):n("a-menu-item",{key:e.path,on:{click:function(){t.parent.$router.push({path:e.path,query:t.parent.$route.query})}}},[e.meta.icon?n("a-icon",{attrs:{type:e.meta.icon}}):t._e(),n("span",[t._v(t._s(e.meta.title))])],1)]})],2)},I=[],q={props:["menuInfo"]},E=q,P=Object(c["a"])(E,A,I,!0,null,null,null),V=P.exports,H={props:{theme:{type:String,defalult:"dark"}},components:{"sub-menu":V},watch:{"$route.path":function(e){this.selectedKeys=this.selectedKeysMap[e],this.openKeys=this.collapsed?[]:this.openKeysMap[e]}},data:function(){this.selectedKeysMap={},this.openKeysMap={};var e=this.getMenuData(this.$router.options.routes);return{collapsed:!1,menuData:e,selectedKeys:this.selectedKeysMap[this.$route.path],openKeys:this.collapsed?[]:this.openKeysMap[this.$route.path]}},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed},getMenuData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,r=[];return t.forEach(function(t){if(t.name&&!t.hideInMenu){console.log(o),e.openKeysMap[t.path]=n,e.selectedKeysMap[t.path]=[a||t.path];var o=j({},t);delete o.children,t.children&&!t.hideChildrenInMenu?o.children=e.getMenuData(t.children,[].concat(x(n),[t.path])):e.getMenuData(t.children,a?n:[].concat(x(n),[t.path]),a||t.path),r.push(o)}else t.hideInMenu||t.hideChildrenInMenu||!t.children||r.push.apply(r,x(e.getMenuData(t.children,[].concat(x(n),[t.path]))))}),r}}},F=H,G=Object(c["a"])(F,f,h,!1,null,null,null),N=G.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("footer")])},J=[],B={},z=B,Q=Object(c["a"])(z,R,J,!1,null,null,null),U=Q.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-drawer",{attrs:{placement:"right",closable:!1,visible:e.visible},on:{close:e.onClose},scopedSlots:e._u([{key:"handle",fn:function(){return[n("div",{staticClass:"handle",on:{click:e.showDrawer}},[n("a-icon",{attrs:{type:e.visible?"close":"setting"}})],1)]},proxy:!0}])},[n("div",[n("div",[n("h2",[e._v("整体风格定制")]),n("a-radio-group",{attrs:{value:e.$route.query.navTheme||"dark"},on:{change:function(t){return e.handleSettingChange("navTheme",t.target.value)}}},[n("a-radio",{attrs:{value:"dark"}},[e._v("dark")]),n("a-radio",{attrs:{value:"light"}},[e._v("light")])],1),n("h2",[e._v("导航模式")]),n("a-radio-group",{attrs:{value:e.$route.query.navLayout||"left"},on:{change:function(t){return e.handleSettingChange("navLayout",t.target.value)}}},[n("a-radio",{attrs:{value:"left"}},[e._v("左侧")]),n("a-radio",{attrs:{value:"top"}},[e._v("顶部")])],1)],1)])])],1)},X=[],Y={data:function(){return{visible:!1}},methods:{showDrawer:function(){this.visible=!this.visible},onClose:function(){this.visible=!1},handleSettingChange:function(e,t){this.$router.push({query:j({},this.$route.query,K({},e,t))})}}},Z=Y,ee=(n("df75"),Object(c["a"])(Z,W,X,!1,null,"bd743e00",null)),te=ee.exports,ne={data:function(){return{collapsed:!1}},computed:{navTheme:function(){return this.$route.query.navTheme||"dark"},navLayout:function(){return this.$route.query.navLayout||"left"}},components:{Header:p,SideMenu:N,Footer:U,SettingDrawer:te}},ae=ne,re=(n("4008"),Object(c["a"])(ae,a,r,!1,null,"496a2abf",null));t["default"]=re.exports},"268f":function(e,t,n){e.exports=n("fde4")},"32a6":function(e,t,n){var a=n("241e"),r=n("c3a1");n("ce7e")("keys",function(){return function(e){return r(a(e))}})},"3c96":function(e,t,n){},"3edf":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"title"},[e._v("Ant design vue pro")]),n("router-view")],1)},r=[],o={},i=o,u=n("2877"),s=Object(u["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports},4008:function(e,t,n){"use strict";var a=n("036d"),r=n.n(a);r.a},"732e":function(e,t,n){},"774e":function(e,t,n){e.exports=n("d2d5")},"7f7f":function(e,t,n){var a=n("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&a(r,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"85f2":function(e,t,n){e.exports=n("454f")},"8aae":function(e,t,n){n("32a6"),e.exports=n("584a").Object.keys},a4bb:function(e,t,n){e.exports=n("8aae")},a745:function(e,t,n){e.exports=n("f410")},ac6a:function(e,t,n){for(var a=n("cadf"),r=n("0d58"),o=n("2aba"),i=n("7726"),u=n("32e9"),s=n("84f2"),c=n("2b4c"),l=c("iterator"),p=c("toStringTag"),f=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(h),v=0;v<d.length;v++){var y,m=d[v],g=h[m],b=i[m],S=b&&b.prototype;if(S&&(S[l]||u(S,l,f),S[p]||u(S,p,m),s[m]=f,g))for(y in a)S[y]||o(S,y,a[y],!0)}},bf90:function(e,t,n){var a=n("36c3"),r=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(e,t){return r(a(e),t)}})},c8bb:function(e,t,n){e.exports=n("54a1")},ce7e:function(e,t,n){var a=n("63b6"),r=n("584a"),o=n("294c");e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),a(a.S+a.F*o(function(){n(1)}),"Object",i)}},dc75:function(e,t,n){"use strict";var a=n("3c96"),r=n.n(a);r.a},df75:function(e,t,n){"use strict";var a=n("732e"),r=n.n(a);r.a},e265:function(e,t,n){e.exports=n("ed33")},ed33:function(e,t,n){n("014b"),e.exports=n("584a").Object.getOwnPropertySymbols},f410:function(e,t,n){n("1af6"),e.exports=n("584a").Array.isArray},fde4:function(e,t,n){n("bf90");var a=n("584a").Object;e.exports=function(e,t){return a.getOwnPropertyDescriptor(e,t)}}}]);
//# sourceMappingURL=layout.9f4a2de6.js.map