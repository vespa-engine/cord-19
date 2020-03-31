(this["webpackJsonpcord-19-ui"]=this["webpackJsonpcord-19-ui"]||[]).push([[0],{168:function(e,n,t){e.exports=t.p+"static/media/VespaLogoWhite.2fad86a7.png"},203:function(e,n,t){e.exports=t(346)},208:function(e,n,t){},346:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(44),o=t.n(c),l=(t(208),t(209),t(57)),i=t(35),u=t(16),s=t(17),m=t(187),d=t(186),h=t(189);var g=function(e){let n=e.to,t=Object(h.a)(e,["to"]);return"download"in t?r.a.createElement("a",Object.assign({},t,{href:n}),t.children):!n||n.startsWith("http")||n.startsWith("/api/")?r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},t,{href:n}),t.children):r.a.createElement(l.a,Object.assign({to:n},t))},E=t(168),p=t.n(E);function f(){const e=Object(u.a)(["\n  &&& {\n    height: 64px;\n    margin: 0;\n\n    border-bottom: 1px solid rgba(63, 157, 216, 0.25);\n\n    .item,\n    .item > a,\n    .item > a:not(.ui) {\n      color: white;\n      font-weight: bold;\n    }\n\n    .item > a:hover {\n      color: #ffc43c;\n    }\n\n    .ui.image {\n      width: 100px;\n    }\n  }\n"]);return f=function(){return e},e}const b=Object(s.a)(m.a)(f());var v=function(){return r.a.createElement(i.a,{sx:{paddingLeft:"16px",paddingRight:"16px"},width:1},r.a.createElement(b,{secondary:!0,inverted:!0,fluid:!0},r.a.createElement(m.a.Item,{fitted:!0},r.a.createElement(g,{to:"/"},r.a.createElement(d.a,{src:p.a}))),r.a.createElement(m.a.Menu,{position:"right"},r.a.createElement(m.a.Item,null,r.a.createElement(g,{to:"https://twitter.com/vespaengine"},"Twitter")),r.a.createElement(m.a.Item,null,r.a.createElement(g,{to:"https://github.com/vespa-engine/cord-19/blob/master/README.md"},"Read more")))))};function j(){const e=Object(u.a)(["\n  &&& {\n    width: 100%;\n    margin: auto 0 0;\n    padding: 1rem 0;\n    border-top: 1px solid rgba(63, 157, 216, 0.25);\n    background-color: #3f9cd8;\n    color: white;\n    text-align: center;\n\n    a {\n      font-weight: bold;\n      color: white;\n    }\n\n    a:hover {\n      color: #ffc43c;\n    }\n  }\n"]);return j=function(){return e},e}const w=Object(s.a)(i.a)(j());var O=function(){return r.a.createElement(w,null,r.a.createElement(g,{to:"https://pages.semanticscholar.org/coronavirus-research"},"COVID-19 Open Research Dataset (CORD-19)"),". 2020. Version 2020-03-27. Accessed 2020-03-28."," ",r.a.createElement(g,{to:"https://doi.org/10.5281/zenodo.3727291"},"doi:10.5281/zenodo.3727291"),r.a.createElement("br",null),"Copyright Verizon Media 2020 Licensed under"," ",r.a.createElement(g,{to:"https://github.com/vespa-engine/cord-19/blob/master/LICENSE"},"Apache License 2.0"))},x=t(191),y=t(358),_=t(34),S=t(357);function k(){const e=Object(u.a)(["\n  &&& {\n    font-size: 1.1rem;\n    display: flex;\n    width: 100%;\n    max-width: 800px;\n    margin: 0 auto;\n\n    .input {\n      width: 100%;\n    }\n  }\n"]);return k=function(){return e},e}const C=Object(s.a)(S.a)(k());var D=function({onSearch:e,query:n=""}){const t=Object(a.useState)(n),c=Object(_.a)(t,2),o=c[0],l=c[1];return r.a.createElement(C,{onSubmit:()=>e({query:o})},r.a.createElement(S.a.Input,{icon:"search",placeholder:"Search...",className:"input",onChange:(e,{value:n})=>l(n),value:o}))};const A="all(\n     all(group(source) order(-count()) each(output(count())))\n     all(group(journal) max(10) order(-count()) each(output(count())))\n     all(group(authors.name) max(10) order(-count()) each(output(count())) as(author))\n     all(group(time.year(timestamp)) max(10) order(-count()) each(output(count())) as(year))\n     all(group(has_full_text) each(output(count())))\n   )".split("\n").map(e=>e.trim()).join(""),I=(e,n,t=!1)=>n.length?"+("+n.map(n=>t?"".concat(e,":[").concat(n,"]"):"".concat(e,':"').concat(n,'"')).join(" ")+")":null,R=e=>Date.UTC(e,0,1)/1e3,L=e=>{const n=new URLSearchParams("query"in e?"":window.location.search);for(var t=0,a=Object.entries(e);t<a.length;t++){let e=Object(_.a)(a[t],2),r=e[0],c=e[1];n.delete(r),Array.isArray(c)?c.forEach(e=>n.append(r,e)):c&&n.set(r,c)}n.entries().next().done||Object(l.c)("/search?"+n)},Y=()=>{const e=new URLSearchParams(window.location.search);return{query:e.get("query")||"",journal:e.getAll("journal"),source:e.getAll("source"),year:e.getAll("year"),author:e.getAll("author"),has_full_text:e.getAll("has_full_text")}};function F(){const e=Object(u.a)(["\n  &&& {\n    font-size: 1.1rem;\n\n    .column {\n      margin-top: 150px;\n      padding: 0;\n    }\n\n    h1 {\n      font-size: 3.5rem;\n      font-weight: 300;\n    }\n\n    h4 {\n      font-size: 1.1rem;\n      margin: 3rem 0 0;\n    }\n\n    & .ui.list {\n      margin: 0.5rem 0;\n    }\n  }\n"]);return F=function(){return e},e}const M=Object(s.a)(x.a)(F());function P(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Try searching for..."),r.a.createElement(y.a,null,r.a.createElement(y.a.Item,null,r.a.createElement(g,{to:"/search?query=%2Bcovid-19+%2Btemperature+impact+on+viral+transmission"},"+covid-19 +temperature impact on viral transmission")),r.a.createElement(y.a.Item,null,r.a.createElement(g,{to:"/search?query=basic+reproduction+numbers+for+covid-19+in+%2B%22south+korea%22"},'basic reproduction numbers for covid-19 in +"south korea"')),r.a.createElement(y.a.Item,null,r.a.createElement(g,{to:"/search?query=Impact+of+school+closure+to+handle+COVID-19+pandemic"},"Impact of school closure to handle COVID-19 pandemic"))))}function T(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Powered by ",r.a.createElement(g,{to:"https://vespa.ai"},"Vespa.ai")),"The open big data serving engine: Store, search, rank and organize big data at user serving time.")}var H=function(){return r.a.createElement(M,{verticalAlign:"middle",textAlign:"center"},r.a.createElement(x.a.Column,null,r.a.createElement("h1",{size:"huge"},"CORD-19 Search"),r.a.createElement(D,{onSearch:L}),r.a.createElement(P,null),r.a.createElement(T,null)))},z=t(188),U=t(125),q=t(360);function B(){const e=Object(u.a)(["\n  &&& {\n    width: 100%;\n    margin: 0;\n    .ui.message {\n      background: transparent;\n      box-shadow: none;\n    }\n    .ui.warning.message {\n      background: #fffaf3;\n    }\n    .ui.error.message {\n      background: #fff6f6;\n    }\n  }\n"]);return B=function(){return e},e}const N=Object(s.a)(U.a)(B()),W=({header:e,message:n})=>r.a.createElement(N,{basic:!0,textAlign:"center"},r.a.createElement(q.a,null,e&&r.a.createElement(q.a.Header,null,e),r.a.createElement(q.a.Content,null,n))),V=({header:e,message:n})=>r.a.createElement(N,{basic:!0,textAlign:"center"},r.a.createElement(q.a,{error:!0},e&&r.a.createElement(q.a.Header,null,e),r.a.createElement(q.a.Content,null,n)));var J=t(126);const K=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://api.cord19.vespa.ai";function Z(e,n){return $("GET",e,n)}function $(e,n,t){function r(e,n){return Object(J.a)({},e,{},n)}n.startsWith("http")||(n=K+n),(t=t||{}).method=e,t.credentials="same-origin";const c=()=>fetch(n,t).then(e=>e.ok?e:e.text().then(n=>{let t=n;try{const e=JSON.parse(n);"message"in e&&(t=e.message)}catch(a){}return Promise.reject({message:t,code:e.status})})).then(e=>{const n=e.headers.get("content-type");return!n||t.returnRaw?e:n.includes("application/json")?e.json():n.includes("text/plain")?e.text():e});let o=!1;return{promise:c,state:e=>{const t=e||0,l={url:n,loading:null,cancel:()=>{o=!0},response:null,error:null,version:t},i=Object(a.useReducer)(r,l),u=Object(_.a)(i,2),s=u[0],m=u[1];return n===s.url&&t===s.version||m(l),null===s.loading&&(m({loading:!0}),c().then(e=>{o||m({loading:!1,response:e,version:t})}).catch(e=>{o||m({loading:!1,error:e,version:t})})),Object(J.a)({},s,{loading:null===s.loading||s.loading})}}}var G=t(359),Q=t(92),X=t.n(Q);function ee(){const e=Object(u.a)(["\n  && {\n    box-shadow: none;\n  }\n\n  &.card {\n    width: 100%;\n  }\n\n  .header {\n    font-weight: bold;\n    padding: 5px;\n  }\n\n  &.card .meta {\n    padding: 3px 5px;\n    color: rgba(0, 0, 0, 0.5);\n\n    a.doi {\n      float: right;\n    }\n  }\n\n  .meta:after {\n    content: '';\n    display: table;\n    clear: both;\n  }\n\n  && .content {\n    padding: 0.5em;\n    border: 0;\n  }\n"]);return ee=function(){return e},e}const ne=Object(s.a)(G.a)(ee()),te=(e,n)=>e.replace(/<(\/?)hi>/g,n),ae=({first:e,middle:n,last:t})=>{if(!t)return e||n;const a=[e,n].filter(e=>e).join(" ").match(/(?:(?=^|\s)(\w)|([A-Z]))/g);return(a?a.join("")+" ":"")+t};function re({journal:e,timestamp:n}){const t=e?" (YYYY-MM-DD)":"YYYY-MM-DD";return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Journal:")," ",e),n>0?r.a.createElement(X.a,{format:t,unix:!0,utc:!0},1e3*n):null)}function ce({doi:e}){return e?r.a.createElement(g,{className:"ui doi",to:e},e.replace("https://doi.org/","doi:")):null}function oe({source:e,citations_count_total:n}){const t=n>0;return e||t?r.a.createElement("div",null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Source: "),e),e&&t&&r.a.createElement(r.a.Fragment,null,", "),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Citations: "),n)):null}function le({authors:e}){const n=Object(a.useState)(!1),t=Object(_.a)(n,2),c=t[0],o=t[1];if(!e)return null;const l=c||e.length<12?e.length:10;return r.a.createElement("div",null,r.a.createElement("b",null,"Authors: "),e.map(ae).slice(0,l).join(", "),l<e.length?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("a",{href:"#root",onClick:e=>{e.preventDefault(),o(!0)}},"and ",e.length-l," more")):null)}var ie=function({fields:{id:e,title:n,timestamp:t,journal:a,doi:c,abstract:o,authors:l,source:i,citations_count_total:u}}){const s=(e=>{if(!e)return null;const n=te(e.replace(/<sep \/>/g,"\u2026"),"<$1b>");return r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}})})(o),m=te(n,"");return r.a.createElement(ne,null,r.a.createElement(G.a.Header,null,r.a.createElement(g,{to:"/article/".concat(e)},m)),r.a.createElement(G.a.Meta,null,r.a.createElement(re,{journal:a,timestamp:t}),r.a.createElement(ce,{doi:c}),r.a.createElement(oe,{source:i,citations_count_total:u}),r.a.createElement(le,{authors:l})),s&&r.a.createElement(G.a.Content,null,s))},ue=t(355);function se(){const e=Object(u.a)(["\n  && {\n    display: block;\n    padding: 2px;\n  }\n"]);return se=function(){return e},e}const me=Object(s.a)(ue.a)(se());function de({name:e,field:n,values:t,onSearch:a}){if(0===t.length)return null;const c=(e,{value:r,checked:c})=>{const o=t.filter(({value:e,checked:n})=>e===r?c:n).map(({value:e})=>e);a({[n]:o})};return r.a.createElement(S.a.Field,null,r.a.createElement("label",null,e),t.map(({value:n,count:t,checked:a},o)=>r.a.createElement(me,{key:o,name:e,value:n,onChange:c,label:"".concat(n," (").concat(t,")"),checked:a})))}var he=function({journal:e,source:n,year:t,author:a,has_full_text:c,onSearch:o}){return r.a.createElement("div",{id:"sidebar",className:"ui form"},r.a.createElement(de,{name:"Source",field:"source",values:n,onSearch:o}),r.a.createElement(de,{name:"Journal",field:"journal",values:e,onSearch:o}),r.a.createElement(de,{name:"Published",field:"year",values:t,onSearch:o}),r.a.createElement(de,{name:"Author",field:"author",values:a,onSearch:o}),r.a.createElement(de,{name:"Full text",field:"has_full_text",values:c,onSearch:o}))};function ge(){const e=Object(u.a)(["\n  &&& {\n    font-size: 1.1rem;\n    width: 100%;\n    max-width: 1500px;\n    margin: 0 auto;\n    padding: 2rem 0.5rem;\n\n    #wrapper {\n      display: flex;\n      margin-top: 1em;\n    }\n\n    #sidebar {\n      width: 30%;\n      max-width: 300px;\n      height: fit-content;\n      margin-right: 1em;\n      padding: 0.5em;\n      box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n      border-radius: 0.28571429rem;\n    }\n\n    #search_results {\n      flex: 1;\n    }\n\n    #no_matches {\n      text-align: center;\n      margin: 2rem;\n    }\n  }\n"]);return ge=function(){return e},e}const Ee=s.a.div(ge());function pe({query:e}){return r.a.createElement("div",{id:"no_matches"},r.a.createElement("h1",null,"\xaf\\_(\u30c4)_/\xaf"),r.a.createElement("br",null),"No matches for ",r.a.createElement("b",null,e))}function fe(e){const n=(()=>{const e=Y(),n=e.journal,t=e.source,a=e.year,r=e.author,c=e.has_full_text,o=a.map(e=>parseInt(e)).map(e=>R(e)+";"+(R(e+1)-1)),l=[I("journal",n),I("source",t),I("timestamp",o,!0),I("authors.name",r),I("has_full_text",c)].filter(e=>e).join(" "),i=new URLSearchParams(window.location.search);return["journal","source","year","author","has_full_text"].forEach(e=>i.delete(e)),l&&i.set("filter",l),i.set("select",A),i})();n.set("type","any"),n.set("summary","short"),n.set("restrict","doc"),n.set("hits","20");const t=Z("/search/?"+n.toString()).state(),a=t.loading,c=t.response,o=t.error;if(a)return r.a.createElement(W,{message:"Searching..."});if(o)return r.a.createElement(V,{message:o.message||"Unknown search error..."});console.log(c);const l=Object(z.a)(c.root.children),i=l[0],u=l.slice(1);if(0===u.length)return r.a.createElement(pe,e);const s=i.children.reduce((n,{label:t,children:a})=>(n[t]=a.map(({value:n,fields:a})=>({value:n,count:a["count()"],checked:e[t].includes(n)})),n),{});return r.a.createElement("div",{id:"wrapper"},r.a.createElement(he,Object.assign({onSearch:L},e,s)),r.a.createElement("div",{id:"search_results"},u.map((e,n)=>r.a.createElement(ie,Object.assign({key:n},e)))))}var be=function(){const e=Y();return r.a.createElement(Ee,null,r.a.createElement(D,Object.assign({onSearch:L},e)),r.a.createElement(fe,e))},ve=t(356),je=t(361),we=t(362);function Oe(){const e=Object(u.a)(["\n  &&& {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n"]);return Oe=function(){return e},e}const xe=Object(s.a)(ve.a)(Oe()),ye=({first:e,middle:n,last:t})=>{if(!t)return e||n;const a=[e,n].filter(e=>e).join(" ").match(/(?:(?=^|\s)(\w)|([A-Z]))/g);return(a?a.join("")+" ":"")+t};function _e({authors:e}){const n=e.length;return r.a.createElement(je.a.Subheader,null,e.map(ye).slice(0,n).join(", "))}function Se({journal:e,timestamp:n,source:t,license:a,doi:c}){const o=e?" (YYYY-MM-DD)":"YYYY-MM-DD",l=n?r.a.createElement(X.a,{format:o,unix:!0,utc:!0},1e3*n):null;return r.a.createElement(y.a,null,r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Header,null,"Doi"),r.a.createElement(g,{to:c},c.replace("https://doi.org/",""))),e?r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Header,null,"Journal"),e," ",l):r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Header,null,"Date"),l),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Header,null,"Source"),t),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Header,null,"License"),a))}function ke({title:e,abstract:n,authors:t,doi:a,journal:c,timestamp:o,source:l,license:i}){return r.a.createElement(xe,null,r.a.createElement(je.a,{as:"h1"},e),r.a.createElement(_e,{authors:t}),r.a.createElement(je.a,{as:"h3"},"Abstract"),r.a.createElement("p",null,n),r.a.createElement(Se,{journal:c,timestamp:o,source:l,license:i,doi:a}))}function Ce({id:e}){const n=new URLSearchParams;n.set("id",e),n.set("searchChain","related-ann"),n.set("summary","short"),n.set("hits","3");const t=Z("/search/?"+n.toString()).state(),a=t.loading,c=t.response,o=t.error;return a?r.a.createElement(W,{message:"Searching..."}):o?r.a.createElement(V,{message:o.message||"Unknown search error..."}):(console.log(c),"children"in c.root?r.a.createElement(we.a.Pane,null,r.a.createElement(r.a.Fragment,null,c.root.children.map((e,n)=>r.a.createElement(ie,Object.assign({key:n},e))))):null)}function De({citedBy:e}){return e.map((e,n)=>{const t=Z("/document/v1/covid-19/doc/docid/".concat(e)).state(),a=t.loading,c=t.response,o=t.error;return a?r.a.createElement(W,{message:"Loading..."}):o?r.a.createElement(V,{message:o.message||"Failed to load article #".concat(e)}):(console.log(c),r.a.createElement(ie,Object.assign({key:e},c)))})}var Ae=function({id:e}){const n=Z("/document/v1/covid-19/doc/docid/".concat(e)).state(),t=n.loading,a=n.response,c=n.error;if(t)return r.a.createElement(W,{message:"Loading..."});if(c)return r.a.createElement(V,{message:c.message||"Failed to load article #".concat(e)});console.log(a);const o=[{menuItem:"Related",render:()=>r.a.createElement(Ce,{id:a.fields.id})},{menuItem:"Cited by",render:()=>r.a.createElement(De,{citedBy:a.fields.cited_by})}];return r.a.createElement(xe,null,r.a.createElement(ke,a.fields),r.a.createElement(we.a,{panes:o}))};function Ie(){const e=Object(u.a)(["\n  height: 80vh;\n"]);return Ie=function(){return e},e}function Re(){const e=Object(u.a)(["\n  font-weight: 400;\n  color: #3f9dd8;\n"]);return Re=function(){return e},e}const Le=s.a.h2(Re()),Ye=Object(s.a)(x.a)(Ie());var Fe=function({code:e=404}){const n=(e=>{switch(e){case 403:return"Sorry, you are not authorized to view this page.";case 404:return"Sorry, the page you were looking for does not exist.";case 500:return"Oops... something went wrong.";default:return"Unknown error - really, I have no idea what is going on here."}})(e);return r.a.createElement(Ye,{textAlign:"center",verticalAlign:"middle"},r.a.createElement(x.a.Row,null,r.a.createElement(x.a.Column,{width:8},r.a.createElement(Le,null,n))))};var Me=function(){return r.a.createElement(i.b,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(i.a,{width:1,bg:"#3F9CD8"},r.a.createElement(v,null)),r.a.createElement(i.a,{width:1},r.a.createElement(l.b,{primary:!1,component:r.a.Fragment},r.a.createElement(H,{path:"/"}),r.a.createElement(be,{path:"/search"}),r.a.createElement(Ae,{path:"/article/:id"}),r.a.createElement(Fe,{default:!0}))),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[203,1,2]]]);
//# sourceMappingURL=main.e98f0217.chunk.js.map