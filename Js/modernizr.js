/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-appearance-backgroundsize-boxsizing-cssall-cssanimations-cssexunit-cssfilters-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransitions-cssvalid-flexwrap-fontface-hsla-lastchild-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-rgba-shapes-siblinggeneral-subpixelfont-supports-target-textalignlast-textshadow-wrapflow-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,s,a;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],t=x[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function o(e){var t=k.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?k.className.baseVal=t:k.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return!!~(""+e).indexOf(t)}function l(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&l(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function c(e,n,i,r){var o,a,l,d,c="modernizr",f=s("div"),p=u();if(parseInt(i,10))for(;i--;)l=s("div"),l.id=r?r[i]:c+(i+1),f.appendChild(l);return o=s("style"),o.type="text/css",o.id="s"+c,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",d=k.style.overflow,k.style.overflow="hidden",k.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),k.style.overflow=d,k.offsetHeight):f.parentNode.removeChild(f),!!a}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?f(r,n||t):r);return!1}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(h(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+h(t[r])+":"+i+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function b(e,t,r,o){function l(){c&&(delete L.style,delete L.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var u=m(e,r);if(!i(u,"undefined"))return u}for(var c,f,p,h,b,g=["modernizr","tspan"];!L.style;)c=!0,L.modElem=s(g.shift()),L.style=L.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],b=L.style[h],a(h,"-")&&(h=d(h)),L.style[h]!==n){if(o||i(r,"undefined"))return l(),"pfx"==t?h:!0;try{L.style[h]=r}catch(v){}if(L.style[h]!=b)return l(),"pfx"==t?h:!0}return l(),!1}function g(e,t,n,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+R.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?b(a,t,r,o):(a=(e+" "+B.join(s+" ")+s).split(" "),p(a,t,n))}function v(e,t,i){return g(e,n,n,t,i)}var y=[],x=[],T={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr;var w="CSS"in e&&"supports"in e.CSS,C="supportsCSS"in e;Modernizr.addTest("supports",w||C),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}});var k=t.documentElement;Modernizr.addTest("cssall","all"in k.style);var S="svg"===k.nodeName.toLowerCase();Modernizr.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("csspointerevents",function(){var e=s("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("cssremunit",function(){var e=s("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var z={elem:s("modernizr")};Modernizr._q.push(function(){delete z.elem}),Modernizr.addTest("cssexunit",function(){var e,t=z.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});var _=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];T._prefixes=_,Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=_.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=s("a"),i=n.style;return i.cssText=e+_.join(t+";"+e).slice(0,-e.length),-1!==i.position.indexOf(t)}),Modernizr.addTest("hsla",function(){var e=s("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",a(e.backgroundColor,"rgba")||a(e.backgroundColor,"hsla")});var j;!function(){var e={}.hasOwnProperty;j=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),T._l={},T.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},T._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){T.addTest=l});var E=T.testStyles=c,q=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>t&&e.match(/android/gi);return n||r||i}();q?Modernizr.addTest("fontface",!1):E('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",s=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)}),Modernizr.addTest("cssinvalid",function(){return E("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=s("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),E("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),E("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5),E("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+_.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return E("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),E("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",e.getComputedStyle?"44px"!==e.getComputedStyle(n,null).getPropertyValue("width"):!1)},1,["subpixel"]),Modernizr.addTest("cssvalid",function(){return E("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=s("input");return e.appendChild(t),t.clientWidth>10})});var P=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return c("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();T.mq=P,Modernizr.addTest("mediaqueries",P("only all"));var L={style:z.elem.style};Modernizr._q.unshift(function(){delete L.style});var M="Moz O ms Webkit",R=T._config.usePrefixes?M.split(" "):[];T._cssomPrefixes=R;var A=function(t){var i,r=_.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var s=0;r>s;s++){var a=_[s],l=a.toUpperCase()+"_"+i;if(l in o)return"@-"+a.toLowerCase()+"-"+t}return!1};T.atRule=A;var B=T._config.usePrefixes?M.toLowerCase().split(" "):[];T._domPrefixes=B;var N=T.testProp=function(e,t,i){return b([e],n,t,i)};Modernizr.addTest("textshadow",N("textShadow","1px 1px")),T.testAllProps=g,T.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("appearance",v("appearance")),Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("boxsizing",v("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return v("filter","blur(2px)");var e=s("a");return e.style.cssText=_.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexwrap",v("flexWrap","wrap",!0)),Modernizr.addAsyncTest(function(){function n(){function r(){try{var e=s("div"),n=s("span"),i=e.style,r=0,o=0,a=!1,l=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,l),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,o=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+_.join("hyphens:auto; "),a=n.offsetHeight!=r||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),a}catch(d){return!1}}function o(e,n){try{var i=s("div"),r=s("span"),o=i.style,a=0,l=!1,d=!1,u=!1,c=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(r),t.body.insertBefore(i,c),r.innerHTML="mm",a=r.offsetHeight,r.innerHTML="m"+e+"m",d=r.offsetHeight>a,n?(r.innerHTML="m<br />m",a=r.offsetWidth,r.innerHTML="m"+e+"m",u=r.offsetWidth>a):u=!0,d===!0&&u===!0&&(l=!0),t.body.removeChild(i),i.removeChild(r),l}catch(f){return!1}}function a(n){try{var i,r=s("input"),o=s("div"),a="lebowski",l=!1,d=t.body.firstElementChild||t.body.firstChild;o.innerHTML=a+n+a,t.body.insertBefore(o,d),t.body.insertBefore(r,o),r.setSelectionRange?(r.focus(),r.setSelectionRange(0,0)):r.createTextRange&&(i=r.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select());try{e.find?l=e.find(a+a):(i=e.self.document.body.createTextRange(),l=i.findText(a+a))}catch(u){l=!1}return t.body.removeChild(o),t.body.removeChild(r),l}catch(u){return!1}}return t.body||t.getElementsByTagName("body")[0]?(l("csshyphens",function(){if(!v("hyphens","auto",!0))return!1;try{return r()}catch(e){return!1}}),l("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void l("softhyphensfind",function(){try{return a("&#173;")&&a("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),Modernizr.addTest("cssmask",v("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",v("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",v("boxReflect","above",!0)),Modernizr.addTest("cssresize",v("resize","both",!0)),Modernizr.addTest("shapes",v("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",v("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",v("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var t=!1;if(!Modernizr.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t});var O=T.prefixed=function(e,t,n){return 0===e.indexOf("@")?A(e):(-1!=e.indexOf("-")&&(e=d(e)),t?g(e,t,n):g(e,"pfx"))};Modernizr.addTest("objectfit",!!O("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("wrapflow",function(){var e=O("wrapFlow");if(!e||S)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),i=s("div"),r=s("div"),o=s("span");r.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",i.appendChild(r),i.appendChild(o),k.appendChild(i);var a=o.offsetLeft;return k.removeChild(i),r=o=i=n,150==a}),r(),o(y),delete T.addTest,delete T.addAsyncTest;for(var H=0;H<Modernizr._q.length;H++)Modernizr._q[H]();e.Modernizr=Modernizr}(window,document);