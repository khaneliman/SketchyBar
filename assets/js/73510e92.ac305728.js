"use strict";(self.webpackChunksketchybar_site=self.webpackChunksketchybar_site||[]).push([[141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"components",title:"Special Components",sidebar_position:1},o=void 0,s={unversionedId:"config/components",id:"config/components",title:"Special Components",description:"Components -- Special Items with special properties",source:"@site/docs/config/Components.md",sourceDirName:"config",slug:"/config/components",permalink:"/SketchyBar/config/components",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"components",title:"Special Components",sidebar_position:1},sidebar:"docs",previous:{title:"Item Properties",permalink:"/SketchyBar/config/items"},next:{title:"Popup Menus",permalink:"/SketchyBar/config/popups"}},l={},p=[{value:"Components -- Special Items with special properties",id:"components----special-items-with-special-properties",level:2},{value:"Data Graph -- Draws an arbitrary graph into the bar",id:"data-graph----draws-an-arbitrary-graph-into-the-bar",level:3},{value:"Space -- Associate mission control spaces with an item",id:"space----associate-mission-control-spaces-with-an-item",level:3},{value:"Item Bracket -- Group Items in e.g. colored sections",id:"item-bracket----group-items-in-eg-colored-sections",level:3},{value:"Item Alias -- Mirror items of the original macOS status bar into sketchybar",id:"item-alias----mirror-items-of-the-original-macos-status-bar-into-sketchybar",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"components----special-items-with-special-properties"},"Components -- Special Items with special properties"),(0,r.kt)("p",null,"Components are essentially items, but with special properties.\nCurrently there are the components (more details in the corresponding sections below):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"graph"),": showing a graph,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"space"),": representing a mission control space"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"bracket"),": brackets together other items"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"alias"),": an alias of a menu bar item from the macOS bar")),(0,r.kt)("h3",{id:"data-graph----draws-an-arbitrary-graph-into-the-bar"},"Data Graph -- Draws an arbitrary graph into the bar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --add graph <name> <position> <width in points>\n")),(0,r.kt)("p",null,"Additional graph properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"<property",">"),(0,r.kt)("th",{parentName:"tr",align:"center"},"<value",">"),(0,r.kt)("th",{parentName:"tr",align:"center"},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"graph.color")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<argb_hex>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"0xcccccc")),(0,r.kt)("td",{parentName:"tr",align:null},"Color of the graph line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"graph.fill_color")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<argb_hex>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"0xcccccc")),(0,r.kt)("td",{parentName:"tr",align:null},"Fill color of the graph")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"graph.line_width")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<float>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"0.5")),(0,r.kt)("td",{parentName:"tr",align:null},"Width of the line in points")))),(0,r.kt)("p",null,"Push data points into the graph via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --push <name> <data point> ... <data point>\n")),(0,r.kt)("p",null,"where the ",(0,r.kt)("inlineCode",{parentName:"p"},"<data point>")," is a floating point number between 0 and 1."),(0,r.kt)("p",null,"Graphs usually take the entire height of the bar as a drawing canvas, however,\nif you set a background for the graph item and set a height for it, the graph\nwill draw inside of the background. With a background enabled, the graph can\nalso be moved via a ",(0,r.kt)("inlineCode",{parentName:"p"},"y_offset"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --set <graph name> background.color=0xff00ff00 background.height=20 y_offset=2\n")),(0,r.kt)("h3",{id:"space----associate-mission-control-spaces-with-an-item"},"Space -- Associate mission control spaces with an item"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --add space <name> <position>\n")),(0,r.kt)("p",null,"The space component overrides the definition of the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"associated_space"),": Which space this item represents"),(0,r.kt)("li",{parentName:"ul"},"(optional) ",(0,r.kt)("em",{parentName:"li"},"associated_display"),": On which display the ",(0,r.kt)("em",{parentName:"li"},"associated_space")," is shown.\nThe ",(0,r.kt)("inlineCode",{parentName:"li"},"associated_space")," property must be set to properly associate this item with the corresponding mission control space.\nOptionally, you can provide an ",(0,r.kt)("inlineCode",{parentName:"li"},"associated_display")," to force a space item to stay on a specific display, otherwise the\nitem will draw on the screen on which the space is currently located. ")),(0,r.kt)("p",null,"The space component has additional variables available in ",(0,r.kt)("em",{parentName:"p"},"scripts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$SELECTED\n$SID\n$DID\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"$SELECTED")," has the value ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the associated space is selected and\n",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the associated space is not selected, while\n",(0,r.kt)("inlineCode",{parentName:"p"},"$SID")," holds the space id and ",(0,r.kt)("inlineCode",{parentName:"p"},"$DID")," the display id."),(0,r.kt)("p",null,"By default the space component invokes the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --set $NAME icon.highlight=$SELECTED\n")),(0,r.kt)("p",null,"which you can freely configure to your liking by supplying a different script\nto the space component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --set <name> script=<script/path>\n")),(0,r.kt)("p",null,"For performance reasons the space script is only run on a change in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"$SELECTED")," variable, i.e. if the associated space has become active\nor has resigned being active."),(0,r.kt)("h3",{id:"item-bracket----group-items-in-eg-colored-sections"},"Item Bracket -- Group Items in e.g. colored sections"),(0,r.kt)("p",null,"It is possible to create a common background for any number of items, i.e. to bracket together items, via the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --add bracket <name> <member name> ... <member name>\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<member name>")," is a name of any item in the bar that should be added to the bracket.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"<member name>")," can also be a ",(0,r.kt)("inlineCode",{parentName:"p"},"/<regex>/")," expression.\nIt is now possible to set properties for the bracket, just as for any item or component. Brackets currently only support all background features.\nE.g., if I wanted a colored background around my space components (which are named ",(0,r.kt)("em",{parentName:"p"},"space.1"),", ",(0,r.kt)("em",{parentName:"p"},"space.2"),", ",(0,r.kt)("em",{parentName:"p"},"space.3"),") I would set it up like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --add bracket spaces space.1 space.2 space.3     \\\n           --set         spaces background.color=0xffffffff \\\n                                background.corner_radius=4  \\\n                                background.height=20\n")),(0,r.kt)("p",null,"Alternatively, if I had a number of spaces, called ",(0,r.kt)("em",{parentName:"p"},"space.1"),", ",(0,r.kt)("em",{parentName:"p"},"space.2"),", etc. the regex syntax comes in handy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --add bracket spaces '/space\\..*/'               \\\n           --set         spaces background.color=0xffffffff \\\n                                background.corner_radius=4  \\\n                                background.height=20\n")),(0,r.kt)("p",null,"this draws a white background below all my space components."),(0,r.kt)("p",null,"Brackets are very flexible with their members, i.e. it is no problem to bracket together a ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"center")," item,\nthe background will span all the way between those items."),(0,r.kt)("h3",{id:"item-alias----mirror-items-of-the-original-macos-status-bar-into-sketchybar"},"Item Alias -- Mirror items of the original macOS status bar into sketchybar"),(0,r.kt)("p",null,"It is possible to create an alias for default menu bar items\n(such as MeetingBar, etc.) in sketchybar. The default menu bar can be set to\nautohide and this should still work."),(0,r.kt)("p",null,"To create an alias of a default menu bar item use the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --add alias <application_name> <position>\n")),(0,r.kt)("p",null,"this operation requires ",(0,r.kt)("em",{parentName:"p"},"screen capture permissions"),", which should be granted\nin the system preferences."),(0,r.kt)("p",null,"This will put the default macOS menu bar item into sketchybar. If an\napplication has multiple menu bar widgets the command can be overloaded by\nproviding a ",(0,r.kt)("em",{parentName:"p"},"window_owner")," and a ",(0,r.kt)("em",{parentName:"p"},"window_name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sketchybar --add alias "<window_owner>,<window_name>" <position>\n')),(0,r.kt)("p",null,"this way the default system items can also be aliased in sketchybar as well,\ne.g.:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Control Center,Bluetooth"'),(0,r.kt)("li",{parentName:"ul"},'"Control Center,WiFi"'),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,"Or the individual widgets of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/exelban/stats"},"Stats"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Stats,CPU_Mini"'),(0,r.kt)("li",{parentName:"ul"},"etc...")),(0,r.kt)("p",null,"All further macOS menu bar items currently available on your system can be\nfound via the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --query default_menu_items\n")),(0,r.kt)("p",null,"where all items with their respective owner and name are listed."),(0,r.kt)("p",null,"You can override the color of an alias via the property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --set <name> alias.color=<argb_hex>\n")),(0,r.kt)("p",null,"Aliases currently are not clickable but can be modified with all the options\navailable for simple items."))}m.isMDXComponent=!0}}]);