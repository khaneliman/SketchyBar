"use strict";(self.webpackChunksketchybar_site=self.webpackChunksketchybar_site||[]).push([[233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,y=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"querying",title:"Querying Information",sidebar_position:1},o=void 0,u={unversionedId:"config/querying",id:"config/querying",title:"Querying Information",description:"Querying",source:"@site/docs/config/Querying.md",sourceDirName:"config",slug:"/config/querying",permalink:"/SketchyBar/config/querying",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"querying",title:"Querying Information",sidebar_position:1},sidebar:"docs",previous:{title:"Events & Scripting",permalink:"/SketchyBar/config/events"},next:{title:"Animations",permalink:"/SketchyBar/config/animations"}},s={},l=[{value:"Querying",id:"querying",level:2},{value:"Bar Properties",id:"bar-properties",level:3},{value:"Item Properties",id:"item-properties",level:3},{value:"Default Properties",id:"default-properties",level:3},{value:"Event Properties",id:"event-properties",level:3},{value:"macOS Menu Bar Item Names (for use with aliases)",id:"macos-menu-bar-item-names-for-use-with-aliases",level:3}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"querying"},"Querying"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"SketchyBar")," can be queried for information about a number of things."),(0,a.kt)("h3",{id:"bar-properties"},"Bar Properties"),(0,a.kt)("p",null,"Information about the bar can be queried via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query bar\n")),(0,a.kt)("p",null,"The output is a JSON structure containing relevant information about the configuration settings of the bar."),(0,a.kt)("h3",{id:"item-properties"},"Item Properties"),(0,a.kt)("p",null,"Information about an item can be queried via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query <name>\n")),(0,a.kt)("p",null,"The output is a JSON structure containing relevant information about the configuration of the item."),(0,a.kt)("h3",{id:"default-properties"},"Default Properties"),(0,a.kt)("p",null,"Information about the current defaults."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query defaults\n")),(0,a.kt)("h3",{id:"event-properties"},"Event Properties"),(0,a.kt)("p",null,"Information about the events."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query events\n")),(0,a.kt)("h3",{id:"macos-menu-bar-item-names-for-use-with-aliases"},"macOS Menu Bar Item Names (for use with aliases)"),(0,a.kt)("p",null,"The names of the menu bar items in the default macOS bar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query default_menu_items\n")))}p.isMDXComponent=!0}}]);