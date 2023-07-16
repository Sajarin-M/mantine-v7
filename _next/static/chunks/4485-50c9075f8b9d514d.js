"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4485],{64485:function(e,t,r){r.d(t,{h:function(){return tI}});var o=r(67294),n=r(14437),a=r(16371);let[l,i]=(0,a.R)("Combobox component was not found in tree");var s=r(382),c=Object.defineProperty,b=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))f.call(t,r)&&m(e,r,t[r]);return e},O=(e,t)=>b(e,u(t));function v({onKeyDown:e,withKeyboardNavigation:t,withAriaAttributes:r,targetType:n}){let a=i(),[l,s]=(0,o.useState)(null),c=r=>{null==e||e(r),t&&("ArrowDown"===r.nativeEvent.code&&(r.preventDefault(),a.store.dropdownOpened?s(a.store.selectNextOption()):(a.store.openDropdown("keyboard"),s(a.store.selectActiveOption()))),"ArrowUp"===r.nativeEvent.code&&(r.preventDefault(),a.store.dropdownOpened?s(a.store.selectPreviousOption()):(a.store.openDropdown("keyboard"),s(a.store.selectActiveOption()))),"Enter"===r.nativeEvent.code&&(a.store.dropdownOpened?(r.preventDefault(),a.store.clickSelectedOption()):"button"===n&&(r.preventDefault(),a.store.openDropdown("keyboard"))),"Escape"===r.nativeEvent.code&&a.store.closeDropdown("keyboard"),"Space"===r.nativeEvent.code&&"button"===n&&(r.preventDefault(),a.store.toggleDropdown("keyboard")))},b=r?{"aria-haspopup":"listbox","aria-expanded":a.store.listId?a.store.dropdownOpened:void 0,"aria-controls":a.store.listId,"aria-activedescendant":a.store.dropdownOpened&&l||void 0,autoComplete:"off","data-expanded":!!a.store.dropdownOpened||void 0}:{};return O(y({},b),{onKeyDown:c})}var w=r(87810),x=r(75144),g=r(35577),h=r(72521),j=Object.defineProperty,P=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&S(e,r,t[r]);if(P)for(var r of P(t))E.call(t,r)&&S(e,r,t[r]);return e},N=(e,t)=>{var r={};for(var o in e)C.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&P)for(var o of P(e))0>t.indexOf(o)&&E.call(e,o)&&(r[o]=e[o]);return r};let k={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0},A=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxTarget",k,e),{children:n,refProp:a,withKeyboardNavigation:l,withAriaAttributes:c,targetType:b}=r,u=N(r,["children","refProp","withKeyboardNavigation","withAriaAttributes","targetType"]);if(!(0,h.k)(n))throw Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let p=i(),d=v({targetType:b,withAriaAttributes:c,withKeyboardNavigation:l,onKeyDown:n.props.onKeyDown}),f=(0,o.cloneElement)(n,D(D({},d),u));return o.createElement(w.J.Target,{ref:(0,s.Yx)(t,p.store.targetRef)},f)});A.displayName="@mantine/core/ComboboxTarget";var T=r(23803),I=Object.defineProperty,K=Object.defineProperties,R=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,M=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))q.call(t,r)&&M(e,r,t[r]);if(Z)for(var r of Z(t))$.call(t,r)&&M(e,r,t[r]);return e},z=(e,t)=>K(e,R(t)),F=(e,t)=>{var r={};for(var o in e)q.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&Z)for(var o of Z(e))0>t.indexOf(o)&&$.call(e,o)&&(r[o]=e[o]);return r};let H={},J=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxDropdown",H,e),{classNames:n,styles:a,className:l,style:s,hidden:c}=r,b=F(r,["classNames","styles","className","style","hidden"]),u=i();return o.createElement(w.J.Dropdown,_(z(_({},b),{ref:t,role:"presentation","data-hidden":c||void 0}),u.getStyles("dropdown",{className:l,style:s,classNames:n,styles:a})))});J.classes=T.Z,J.displayName="@mantine/core/ComboboxDropdown";var G=r(32582),V=r(13671),Y=Object.defineProperty,L=Object.defineProperties,B=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&X(e,r,t[r]);if(U)for(var r of U(t))W.call(t,r)&&X(e,r,t[r]);return e},et=(e,t)=>L(e,B(t)),er=(e,t)=>{var r={};for(var o in e)Q.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&U)for(var o of U(e))0>t.indexOf(o)&&W.call(e,o)&&(r[o]=e[o]);return r};let eo={},en=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxOptions",eo,e),{classNames:n,className:a,style:l,styles:s,unstyled:c,id:b,onMouseDown:u}=r,p=er(r,["classNames","className","style","styles","unstyled","id","onMouseDown"]),d=i(),f=(0,G.M)(b);return(0,o.useEffect)(()=>{d.store.setListId(f)},[f]),o.createElement(V.x,et(ee(ee({ref:t},d.getStyles("options",{className:a,style:l,classNames:n,styles:s})),p),{id:f,role:"listbox",onMouseDown:e=>{e.preventDefault(),null==u||u(e)}}))});en.classes=T.Z,en.displayName="@mantine/core/ComboboxOptions";var ea=Object.defineProperty,el=Object.defineProperties,ei=Object.getOwnPropertyDescriptors,es=Object.getOwnPropertySymbols,ec=Object.prototype.hasOwnProperty,eb=Object.prototype.propertyIsEnumerable,eu=(e,t,r)=>t in e?ea(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ep=(e,t)=>{for(var r in t||(t={}))ec.call(t,r)&&eu(e,r,t[r]);if(es)for(var r of es(t))eb.call(t,r)&&eu(e,r,t[r]);return e},ed=(e,t)=>el(e,ei(t)),ef=(e,t)=>{var r={};for(var o in e)ec.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&es)for(var o of es(e))0>t.indexOf(o)&&eb.call(e,o)&&(r[o]=e[o]);return r};let em={},ey=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxOption",em,e),{classNames:n,className:a,style:l,styles:s,unstyled:c,vars:b,onClick:u,id:p,active:d,onMouseDown:f,onMouseOver:m,disabled:y,selected:O}=r,v=ef(r,["classNames","className","style","styles","unstyled","vars","onClick","id","active","onMouseDown","onMouseOver","disabled","selected"]),w=i(),x=(0,o.useId)();return o.createElement(V.x,ed(ep(ep({},w.getStyles("option",{className:a,classNames:n,styles:s,style:l})),v),{ref:t,id:p||x,mod:["combobox-option",{"combobox-active":d,"combobox-disabled":y,"combobox-selected":O}],role:"option",onClick:e=>{var t;y?e.preventDefault():(null==(t=w.onOptionSubmit)||t.call(w,r.value,r),null==u||u(e))},onMouseDown:e=>{e.preventDefault(),null==f||f(e)},onMouseOver:e=>{w.resetSelectionOnOptionHover&&w.store.resetSelectedOption(),null==m||m(e)}}))});ey.classes=T.Z,ey.displayName="@mantine/core/ComboboxOption";var eO=r(68267),ev=Object.defineProperty,ew=Object.defineProperties,ex=Object.getOwnPropertyDescriptors,eg=Object.getOwnPropertySymbols,eh=Object.prototype.hasOwnProperty,ej=Object.prototype.propertyIsEnumerable,eP=(e,t,r)=>t in e?ev(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eC=(e,t)=>{for(var r in t||(t={}))eh.call(t,r)&&eP(e,r,t[r]);if(eg)for(var r of eg(t))ej.call(t,r)&&eP(e,r,t[r]);return e},eE=(e,t)=>ew(e,ex(t)),eS=(e,t)=>{var r={};for(var o in e)eh.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&eg)for(var o of eg(e))0>t.indexOf(o)&&ej.call(e,o)&&(r[o]=e[o]);return r};let eD={withAriaAttributes:!0,withKeyboardNavigation:!0},eN=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxSearch",eD,e),{classNames:n,styles:a,unstyled:l,vars:c,withAriaAttributes:b,onKeyDown:u,withKeyboardNavigation:p,size:d}=r,f=eS(r,["classNames","styles","unstyled","vars","withAriaAttributes","onKeyDown","withKeyboardNavigation","size"]),m=i(),y=m.getStyles("search"),O=v({targetType:"input",withAriaAttributes:b,withKeyboardNavigation:p,onKeyDown:u});return o.createElement(eO.I,eE(eC(eC({ref:(0,s.Yx)(t,m.store.searchRef),classNames:[{input:y.className},n],styles:[{input:y.style},a],size:d||m.size},O),f),{__staticSelector:"Combobox"}))});eN.classes=T.Z,eN.displayName="@mantine/core/ComboboxSearch";var ek=Object.defineProperty,eA=Object.getOwnPropertySymbols,eT=Object.prototype.hasOwnProperty,eI=Object.prototype.propertyIsEnumerable,eK=(e,t,r)=>t in e?ek(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eR=(e,t)=>{for(var r in t||(t={}))eT.call(t,r)&&eK(e,r,t[r]);if(eA)for(var r of eA(t))eI.call(t,r)&&eK(e,r,t[r]);return e},eZ=(e,t)=>{var r={};for(var o in e)eT.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&eA)for(var o of eA(e))0>t.indexOf(o)&&eI.call(e,o)&&(r[o]=e[o]);return r};let eq={},e$=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxEmpty",eq,e),{classNames:n,className:a,style:l,styles:s,unstyled:c,vars:b}=r,u=eZ(r,["classNames","className","style","styles","unstyled","vars"]),p=i();return o.createElement(V.x,eR(eR({ref:t},p.getStyles("empty",{className:a,classNames:n,styles:s,style:l})),u))});e$.classes=T.Z,e$.displayName="@mantine/core/ComboboxEmpty";var eM=r(21105),e_=Object.defineProperty,ez=Object.getOwnPropertySymbols,eF=Object.prototype.hasOwnProperty,eH=Object.prototype.propertyIsEnumerable,eJ=(e,t,r)=>t in e?e_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eG=(e,t)=>{for(var r in t||(t={}))eF.call(t,r)&&eJ(e,r,t[r]);if(ez)for(var r of ez(t))eH.call(t,r)&&eJ(e,r,t[r]);return e},eV=(e,t)=>{var r={};for(var o in e)eF.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&ez)for(var o of ez(e))0>t.indexOf(o)&&eH.call(e,o)&&(r[o]=e[o]);return r};let eY={},eL=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxFooter",eY,e),{classNames:n,className:a,style:l,styles:s,unstyled:c,vars:b}=r,u=eV(r,["classNames","className","style","styles","unstyled","vars"]),p=i();return o.createElement(V.x,eG(eG({ref:t},p.getStyles("footer",{className:a,classNames:n,style:l,styles:s})),u))});eL.classes=T.Z,eL.displayName="@mantine/core/ComboboxFooter";var eB=Object.defineProperty,eU=Object.getOwnPropertySymbols,eQ=Object.prototype.hasOwnProperty,eW=Object.prototype.propertyIsEnumerable,eX=(e,t,r)=>t in e?eB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,e0=(e,t)=>{for(var r in t||(t={}))eQ.call(t,r)&&eX(e,r,t[r]);if(eU)for(var r of eU(t))eW.call(t,r)&&eX(e,r,t[r]);return e},e1=(e,t)=>{var r={};for(var o in e)eQ.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&eU)for(var o of eU(e))0>t.indexOf(o)&&eW.call(e,o)&&(r[o]=e[o]);return r};let e3={},e7=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxHeader",e3,e),{classNames:n,className:a,style:l,styles:s,unstyled:c,vars:b}=r,u=e1(r,["classNames","className","style","styles","unstyled","vars"]),p=i();return o.createElement(V.x,e0(e0({ref:t},p.getStyles("header",{className:a,classNames:n,style:l,styles:s})),u))});e7.classes=T.Z,e7.displayName="@mantine/core/ComboboxHeader";var e4=Object.defineProperty,e5=Object.defineProperties,e2=Object.getOwnPropertyDescriptors,e6=Object.getOwnPropertySymbols,e8=Object.prototype.hasOwnProperty,e9=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?e4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tt=(e,t)=>{for(var r in t||(t={}))e8.call(t,r)&&te(e,r,t[r]);if(e6)for(var r of e6(t))e9.call(t,r)&&te(e,r,t[r]);return e},tr=(e,t)=>e5(e,e2(t)),to=(e,t)=>{var r={};for(var o in e)e8.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&e6)for(var o of e6(e))0>t.indexOf(o)&&e9.call(e,o)&&(r[o]=e[o]);return r};let tn={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0},ta=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxEventsTarget",tn,e),{children:n,refProp:a,withKeyboardNavigation:l,withAriaAttributes:c,targetType:b}=r,u=to(r,["children","refProp","withKeyboardNavigation","withAriaAttributes","targetType"]);if(!(0,h.k)(n))throw Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let p=i(),d=v({targetType:b,withAriaAttributes:c,withKeyboardNavigation:l,onKeyDown:n.props.onKeyDown});return(0,o.cloneElement)(n,tr(tt(tt({},d),u),{[a]:(0,s.Yx)(t,p.store.targetRef,null==n?void 0:n.ref)}))});ta.displayName="@mantine/core/ComboboxEventsTarget";let tl={refProp:"ref"},ti=(0,x.d)((e,t)=>{let{children:r,refProp:n}=(0,g.w)("ComboboxDropdownTarget",tl,e);if(i(),!(0,h.k)(r))throw Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return o.createElement(w.J.Target,{ref:t,refProp:n},r)});ti.displayName="@mantine/core/ComboboxDropdownTarget";var ts=Object.defineProperty,tc=Object.getOwnPropertySymbols,tb=Object.prototype.hasOwnProperty,tu=Object.prototype.propertyIsEnumerable,tp=(e,t,r)=>t in e?ts(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,td=(e,t)=>{for(var r in t||(t={}))tb.call(t,r)&&tp(e,r,t[r]);if(tc)for(var r of tc(t))tu.call(t,r)&&tp(e,r,t[r]);return e},tf=(e,t)=>{var r={};for(var o in e)tb.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&tc)for(var o of tc(e))0>t.indexOf(o)&&tu.call(e,o)&&(r[o]=e[o]);return r};let tm={},ty=(0,x.d)((e,t)=>{let r=(0,g.w)("ComboboxGroup",tm,e),{classNames:n,className:a,style:l,styles:s,unstyled:c,vars:b,children:u,label:p}=r,d=tf(r,["classNames","className","style","styles","unstyled","vars","children","label"]),f=i();return o.createElement(V.x,td(td({ref:t},f.getStyles("group",{className:a,classNames:n,style:l,styles:s})),d),p&&o.createElement("div",td({},f.getStyles("groupLabel",{classNames:n,styles:s})),p),u)});ty.classes=T.Z,ty.displayName="@mantine/core/ComboboxGroup";var tO=r(25637),tv=r(95553),tw=r(71350),tx=r(46393),tg=Object.defineProperty,th=Object.defineProperties,tj=Object.getOwnPropertyDescriptors,tP=Object.getOwnPropertySymbols,tC=Object.prototype.hasOwnProperty,tE=Object.prototype.propertyIsEnumerable,tS=(e,t,r)=>t in e?tg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tD=(e,t)=>{for(var r in t||(t={}))tC.call(t,r)&&tS(e,r,t[r]);if(tP)for(var r of tP(t))tE.call(t,r)&&tS(e,r,t[r]);return e},tN=(e,t)=>th(e,tj(t)),tk=(e,t)=>{var r={};for(var o in e)tC.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&tP)for(var o of tP(e))0>t.indexOf(o)&&tE.call(e,o)&&(r[o]=e[o]);return r};let tA={keepMounted:!0,withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0},size:"sm",dropdownPadding:4},tT=(0,tv.Z)((e,{size:t,dropdownPadding:r})=>({options:{"--combobox-option-fz":(0,tw.yv)(t),"--combobox-option-padding":(0,tw.ap)(t,"combobox-option-padding")},dropdown:{"--combobox-padding":(0,tx.h)(r),"--combobox-option-fz":(0,tw.yv)(t),"--combobox-option-padding":(0,tw.ap)(t,"combobox-option-padding")}}));function tI(e){let t=(0,g.w)("Combobox",tA,e),{classNames:r,styles:a,unstyled:i,children:s,store:c,vars:b,onOptionSubmit:u,size:p,dropdownPadding:d,resetSelectionOnOptionHover:f,__staticSelector:m}=t,y=tk(t,["classNames","styles","unstyled","children","store","vars","onOptionSubmit","size","dropdownPadding","resetSelectionOnOptionHover","__staticSelector"]),O=(0,n.K)(),v=c||O,x=(0,tO.y)({name:m||"Combobox",classes:T.Z,props:t,classNames:r,styles:a,unstyled:i,vars:b,varsResolver:tT});return o.createElement(l,{value:{getStyles:x,store:v,onOptionSubmit:u,size:p,resetSelectionOnOptionHover:f}},o.createElement(w.J,tN(tD({opened:v.dropdownOpened},y),{onClose:v.closeDropdown,withRoles:!1}),s))}tI.classes=T.Z,tI.displayName="@mantine/core/Combobox",tI.Target=A,tI.Dropdown=J,tI.Options=en,tI.Option=ey,tI.Search=eN,tI.Empty=e$,tI.Chevron=eM.d,tI.Footer=eL,tI.Header=e7,tI.EventsTarget=ta,tI.DropdownTarget=ti,tI.Group=ty},14437:function(e,t,r){r.d(t,{K:function(){return a}});var o=r(67294),n=r(35179);function a({defaultOpened:e,opened:t,onOpenedChange:r,onDropdownClose:a,onDropdownOpen:l,loop:i=!0,scrollBehavior:s="instant"}={}){let[c,b]=(0,n.C)({value:t,defaultValue:e,finalValue:!1,onChange:r}),u=(0,o.useRef)(null),p=(0,o.useRef)(-1),d=(0,o.useRef)(null),f=(0,o.useRef)(null),m=(0,o.useRef)(-1),y=(0,o.useRef)(-1),O=(0,o.useRef)(-1),v=(0,o.useCallback)((e="unknown")=>{c||(b(!0),null==l||l(e))},[b,l,c]),w=(0,o.useCallback)((e="unknown")=>{c&&(b(!1),null==a||a(e))},[b,a,c]),x=(0,o.useCallback)((e="unknown")=>{c?w(e):v(e)},[w,v,c]),g=(0,o.useCallback)(()=>{let e=document.querySelector(`#${u.current} [data-combobox-selected]`);null==e||e.removeAttribute("data-combobox-selected"),null==e||e.removeAttribute("aria-selected")},[]),h=(0,o.useCallback)(e=>{let t=document.getElementById(u.current),r=null==t?void 0:t.querySelectorAll("[data-combobox-option]");if(!r)return null;let o=e>=r.length?0:e<0?r.length-1:e;return(p.current=o,(null==r?void 0:r[o])&&!r[o].hasAttribute("data-combobox-disabled"))?(g(),r[o].setAttribute("data-combobox-selected","true"),r[o].setAttribute("aria-selected","true"),r[o].scrollIntoView({block:"nearest",behavior:s}),r[o].id):null},[s,g]),j=(0,o.useCallback)(()=>{let e=document.querySelector(`#${u.current} [data-combobox-active]`);if(e){let t=document.querySelectorAll(`#${u.current} [data-combobox-option]`),r=Array.from(t).findIndex(t=>t===e);return h(r)}return h(0)},[h]),P=(0,o.useCallback)(()=>h(function(e,t,r){for(let r=e+1;r<t.length;r+=1)if(!t[r].hasAttribute("data-combobox-disabled"))return r;if(r){for(let e=0;e<t.length;e+=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(p.current,document.querySelectorAll(`#${u.current} [data-combobox-option]`),i)),[h,i]),C=(0,o.useCallback)(()=>h(function(e,t,r){for(let r=e-1;r>=0;r-=1)if(!t[r].hasAttribute("data-combobox-disabled"))return r;if(r){for(let e=t.length-1;e>-1;e-=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(p.current,document.querySelectorAll(`#${u.current} [data-combobox-option]`),i)),[h,i]),E=(0,o.useCallback)(()=>h(function(e){for(let t=0;t<e.length;t+=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t;return -1}(document.querySelectorAll(`#${u.current} [data-combobox-option]`))),[h]),S=(0,o.useCallback)((e="selected")=>{O.current=window.setTimeout(()=>{let t=document.querySelectorAll(`#${u.current} [data-combobox-option]`),r=Array.from(t).findIndex(t=>t.hasAttribute(`data-combobox-${e}`));p.current=r},0)},[]),D=(0,o.useCallback)(()=>{p.current=-1,g()},[g]),N=(0,o.useCallback)(()=>{let e=document.querySelectorAll(`#${u.current} [data-combobox-option]`),t=null==e?void 0:e[p.current];null==t||t.click()},[]),k=(0,o.useCallback)(e=>{u.current=e},[]),A=(0,o.useCallback)(()=>{m.current=window.setTimeout(()=>d.current.focus(),0)},[]),T=(0,o.useCallback)(()=>{y.current=window.setTimeout(()=>f.current.focus(),0)},[]);return(0,o.useEffect)(()=>()=>{window.clearTimeout(m.current),window.clearTimeout(y.current),window.clearTimeout(O.current)},[]),{dropdownOpened:c,openDropdown:v,closeDropdown:w,toggleDropdown:x,selectedOptionIndex:p.current,selectOption:h,selectFirstOption:E,selectActiveOption:j,selectNextOption:P,selectPreviousOption:C,resetSelectedOption:D,updateSelectedOptionIndex:S,listId:u.current,setListId:k,clickSelectedOption:N,searchRef:d,focusSearchInput:A,targetRef:f,focusTarget:T}}}}]);