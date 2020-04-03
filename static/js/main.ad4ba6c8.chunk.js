(this["webpackJsonpcord-19-ui"]=this["webpackJsonpcord-19-ui"]||[]).push([[0],{188:function(e,n,t){e.exports=t.p+"static/media/VespaIcon.aefa1e1f.png"},189:function(e,n,t){e.exports=t.p+"static/media/VespaLogoWhite.2fad86a7.png"},207:function(e,n,t){e.exports=t(352)},212:function(e,n,t){},352:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(47),o=t.n(l),c=(t(212),t(213),t(35)),i=t(27),s=t(16),u=t(17),m=t(193),d=t(372),h=t(365),g=t(38),f=t(362),p=t(60);var E=function(e){let n=e.to,t=Object(p.a)(e,["to"]);return"download"in t?r.a.createElement("a",Object.assign({},t,{href:n}),t.children):!n||n.startsWith("http")||n.startsWith("/api/")?r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},t,{href:n}),t.children):r.a.createElement(c.a,Object.assign({to:n},t))};function b(){const e=Object(s.a)(["\n  &&& {\n    height: 64px;\n    margin: 0;\n\n    border-bottom: 1px solid rgba(63, 157, 216, 0.25);\n\n    .item.header {\n      font-weight: bold;\n      font-size: 1.4em;\n    }\n\n    .item,\n    .item > a,\n    .item > a:not(.ui) {\n      color: white;\n      font-weight: bold;\n    }\n\n    .item > a:hover {\n      color: #ffc43c;\n    }\n\n    .item:last-child {\n      padding-right: 0 !important;\n      margin-right: 0 !important;\n    }\n\n    .ui.image {\n      width: 100px;\n    }\n\n    span {\n      color: #ffc43c;\n    }\n\n    .dropdown.item .menu {\n      background: #005a8e;\n      box-shadow: none;\n    }\n  }\n"]);return b=function(){return e},e}function v(){const e=Object(s.a)(["\n  background-color: #005a8e;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n  a {\n    cursor: pointer;\n    font-weight: 600;\n  }\n"]);return v=function(){return e},e}const j=Object(u.a)(i.a)(v()),O=Object(u.a)(m.a)(b()),w=r.a.createElement(E,{to:"/"},r.a.createElement("span",null,"CORD-19")," Search and Navigate"),y=[{content:r.a.createElement(E,{to:"https://github.com/vespa-engine/cord-19/blob/master/cord-19-queries.md"},"API")},{content:r.a.createElement(E,{to:"https://github.com/vespa-engine/cord-19/blob/master/README.md"},"Open source")},{content:r.a.createElement(E,{to:"https://github.com/vespa-engine/cord-19/blob/master/README.md#Contact"},"Contact us")}];function x({children:e}){return r.a.createElement(O,{secondary:!0,inverted:!0,fluid:!0},r.a.createElement(m.a.Item,{header:!0,fitted:!0},w),e)}function S(){return r.a.createElement(d.a,d.a.onlyMobile,r.a.createElement(x,null,r.a.createElement(m.a.Menu,{position:"right"},r.a.createElement(h.a,{item:!0,icon:null,trigger:r.a.createElement(g.a,{name:"bars"})},r.a.createElement(h.a.Menu,{items:y},y.map((e,n)=>r.a.createElement(h.a.Item,Object.assign({key:n},e))))))))}function k(){return r.a.createElement(d.a,{minWidth:d.a.onlyTablet.minWidth},r.a.createElement(x,null,r.a.createElement(m.a.Menu,{position:"right"},y.map((e,n)=>r.a.createElement(m.a.Item,Object.assign({key:n},e))))))}var C=function(){return r.a.createElement(j,{sx:{paddingLeft:"0px",paddingRight:"0px"},width:1},r.a.createElement(f.a,null,r.a.createElement(k,null),r.a.createElement(S,null)))},_=t(196),A=t(366),I=t(192),D=t(94),P=t(30),R=t(364);function M(){const e=Object(s.a)(["\n  &&& {\n    font-size: 1.1rem;\n    margin: 0 auto;\n\n    input[type='text'] {\n      border-radius: 1.3rem;\n    }\n  }\n"]);return M=function(){return e},e}const F=Object(u.a)(R.a)(M());var z=function({onSearch:e,query:n=""}){const t=Object(a.useState)(n),l=Object(P.a)(t,2),o=l[0],c=l[1];return Object(a.useEffect)(()=>{n!==o&&c(n)},[n]),r.a.createElement(F,{onSubmit:()=>e({query:o})},r.a.createElement(R.a.Input,{fluid:!0,icon:"search",placeholder:"Search...",className:"input",onChange:(e,{value:n})=>c(n),value:o}))};const L="all(\n     all(group(source) order(-count()) each(output(count())))\n     all(group(journal) max(10) order(-count()) each(output(count())))\n     all(group(authors.name) max(10) order(-count()) each(output(count())) as(author))\n     all(group(time.year(timestamp)) max(10) order(-count()) each(output(count())) as(year))\n     all(group(has_full_text) each(output(count())))\n   )".split("\n").map(e=>e.trim()).join(""),Y=(e,n,t=!1)=>n.length?"+("+n.map(n=>t?"".concat(e,":[").concat(n,"]"):"".concat(e,':"').concat(n,'"')).join(" ")+")":null,q=e=>Date.UTC(e,0,1)/1e3,T=e=>{const n=new URLSearchParams(window.location.search);for(var t=0,a=Object.entries(e);t<a.length;t++){let e=Object(P.a)(a[t],2),r=e[0],l=e[1];n.delete(r),Array.isArray(l)?l.forEach(e=>n.append(r,e)):l&&n.set(r,l)}e.hasOwnProperty("offset")||n.delete("offset"),n.entries().next().done||Object(c.c)("/search?"+n)},N=()=>{const e=new URLSearchParams(window.location.search);return{query:e.get("query")||"",journal:e.getAll("journal"),source:e.getAll("source"),year:e.getAll("year"),author:e.getAll("author"),has_full_text:e.getAll("has_full_text"),ranking:e.get("ranking"),fieldset:e.get("fieldset")}};var U=t(188),V=t.n(U),H=t(132),W=t(189),B=t.n(W);function J(){const e=Object(s.a)(["\n  &&& {\n    width: 100%;\n    margin: auto 0 0;\n    background-color: ",";\n\n    .ui {\n      margin: 0;\n      border: 0;\n      color: white;\n      box-shadow: none;\n    }\n\n    .ui.segment {\n      padding: 1em 0em;\n    }\n\n    .ui.segment.sides {\n      width: 200px;\n      padding: 0;\n    }\n\n    a {\n      font-weight: bold;\n      color: white;\n    }\n\n    a:hover {\n      color: #ffc43c;\n    }\n\n    .ui.image {\n      width: 100px;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0px;\n      margin: auto;\n    }\n  }\n"]);return J=function(){return e},e}const K=Object(u.a)(i.a)(J(),({page:e})=>"main"===e?"transparent":"#005a8e");var $=function({page:e=null}){return r.a.createElement(K,{page:e},r.a.createElement(f.a,null,r.a.createElement(H.a.Group,{horizontal:!0,size:"small"},r.a.createElement(H.a,{basic:!0,textAlign:"main"===e?"center":"left"},r.a.createElement(E,{to:"https://pages.semanticscholar.org/coronavirus-research"},"COVID-19 Open Research Dataset (CORD-19)"),". 2020. Version 2020-03-27. Accessed 2020-03-28."," ",r.a.createElement(E,{to:"https://doi.org/10.5281/zenodo.3727291"},"doi:10.5281/zenodo.3727291"),r.a.createElement("br",null),"Copyright Verizon Media 2020 Licensed under"," ",r.a.createElement(E,{to:"https://github.com/vespa-engine/cord-19/blob/master/LICENSE"},"Apache License 2.0")),"main"!==e&&r.a.createElement(H.a,{className:"sides",basic:!0},r.a.createElement(E,{to:"https://vespa.ai"},r.a.createElement(I.a,{src:B.a}))))))};function G(){const e=Object(s.a)(["\n  &&& {\n    min-height: calc(100vh - 130px);\n    color: white;\n    font-size: 1.1rem;\n    margin-top: 0;\n\n    .column {\n      padding: 0;\n    }\n\n    h1 {\n      font-size: 3.5rem;\n      font-weight: 300;\n    }\n\n    h4 {\n      font-size: 1.1rem;\n      margin: 3rem 0 0;\n    }\n\n    & .ui.list {\n      margin: 0.5rem 0;\n    }\n\n    .ui.form {\n      max-width: 800px;\n      padding: 0 2rem;\n    }\n\n    a {\n      color: #b3e5fc !important;\n      font-weight: 600;\n      font-weight: normal;\n    }\n\n    a:hover {\n      color: #ffc43c !important;\n    }\n  }\n"]);return G=function(){return e},e}function Z(){const e=Object(s.a)(["\n  background-image: linear-gradient(0deg, #98c1db 7%, #005a8e 100%);\n  min-height: calc(100vh - 66px);\n"]);return Z=function(){return e},e}const Q=["+covid-19 +temperature impact on viral transmission",'basic reproduction numbers for covid-19 in +"south korea"',"Impact of school closure to handle COVID-19 pandemic",'+title:"reproduction number" +abstract:MERS',"+authors.last:knobel",'+("SARS-COV-2" "coronavirus 2" "novel coronavirus")',"+chloroquine +(covid-19 coronavirus)"],X=Object(u.a)(i.a)(Z()),ee=Object(u.a)(_.a)(G());function ne(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Try searching for..."),r.a.createElement(A.a,null,Object(D.shuffle)(Q).slice(0,3).map((e,n)=>r.a.createElement(A.a.Item,{key:n},r.a.createElement(E,{to:"/search?query="+encodeURIComponent(e)},e)))))}function te(){return r.a.createElement(i.a,{my:4},r.a.createElement(I.a,{src:V.a,size:"tiny",centered:!0}),r.a.createElement(i.c,{mt:3},"This is an"," ",r.a.createElement(E,{to:"https://github.com/vespa-engine/cord-19/blob/master/README.md"},"open source application"," "),"on ",r.a.createElement(E,{to:"https://vespa.ai"},"Vespa.ai")),r.a.createElement(i.c,{mt:1},"The big data serving engine."))}var ae=function(){return r.a.createElement(X,{width:1},r.a.createElement(ee,{verticalAlign:"middle",textAlign:"center"},r.a.createElement(_.a.Column,null,r.a.createElement("h1",{size:"huge"},"CORD-19 Search"),r.a.createElement(z,{onSearch:T}),r.a.createElement(ne,null),r.a.createElement(te,null))),r.a.createElement($,{page:"main"}))},re=t(194),le=t(367),oe=t(97),ce=t.n(oe);function ie({first:e,middle:n,last:t}){if(!t)return e||n;const a=[e,n].filter(e=>e).join(" ").match(/(?:(?=^|\s)(\w)|([A-Z]))/g);return(a?a.join("")+" ":"")+t}function se(){const e=Object(s.a)(["\n  && {\n    box-shadow: none;\n    margin-bottom: 2em;\n\n    a {\n      color: #005a8e;\n    }\n\n    a:hover {\n      color: #1a7db6;\n    }\n  }\n\n  &.card {\n    width: 100%;\n  }\n\n  .header {\n    font-weight: bold;\n    padding: 5px;\n  }\n\n  &.card .meta {\n    font-size: 0.9em;\n    padding: 0 0.5em;\n    color: rgba(48, 48, 48, 0.5);\n\n    a.doi {\n      float: right;\n    }\n  }\n\n  .meta:after {\n    content: '';\n    display: table;\n    clear: both;\n  }\n\n  && .content {\n    padding: 0.3em 0.5em;\n    border: 0;\n  }\n"]);return se=function(){return e},e}const ue=Object(u.a)(le.a)(se()),me=/<hi>(.*?)<\/hi>/g,de=e=>{let n=e.onClick,t=Object(p.a)(e,["onClick"]);return r.a.createElement("a",{href:"#root",onClick:e=>{e.preventDefault(),n()}},t.children)};function he({journal:e,timestamp:n}){const t=e?" (YYYY-MM-DD)":"YYYY-MM-DD";return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Journal:")," ",e),n>0?r.a.createElement(ce.a,{format:t,unix:!0,utc:!0},1e3*n):null)}function ge({doi:e}){return e?r.a.createElement(E,{className:"ui doi",to:e},e.replace("https://doi.org/","doi:")):null}function fe({source:e,citations_count_total:n}){const t=n>0;return e||t?r.a.createElement("div",null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Source: "),e),e&&t&&r.a.createElement(r.a.Fragment,null,", "),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Citations: "),n)):null}function pe({authors:e}){const n=Object(a.useState)(!1),t=Object(P.a)(n,2),l=t[0],o=t[1];if(!e)return null;const c=l||e.length<12?e.length:10;return r.a.createElement("div",null,r.a.createElement("b",null,"Authors: "),e.map(ie).slice(0,c).join(", "),c<e.length?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(de,{onClick:()=>o(!0)},"and ",e.length-c," more")):null)}var Ee=function({fields:{id:e,title:n,timestamp:t,journal:a,doi:l,abstract:o,body_text:c,authors:i,source:s,citations_count_total:u},onSearchSimilar:m,isFieldSetAll:d}){const h=(g=o+(d?" "+c:""))?g.replace(/<sep \/>/g,"\u2026").split(me).map((e,n)=>n%2===0?e:r.a.createElement("b",{key:n},e)):null;var g;const f=n.replace(me,"$1");return r.a.createElement(ue,null,r.a.createElement(le.a.Header,null,r.a.createElement(E,{to:"/article/".concat(e)},f)),r.a.createElement(le.a.Meta,null,r.a.createElement(he,{journal:a,timestamp:t}),r.a.createElement(ge,{doi:l}),r.a.createElement(fe,{source:s,citations_count_total:u}),r.a.createElement(pe,{authors:i})),(h||m)&&r.a.createElement(le.a.Content,null,h&&r.a.createElement("p",null,h),m&&r.a.createElement(de,{onClick:m},"Search for similar articles")))},be=t(41),ve=t(363),je=t(370);function Oe(){const e=Object(s.a)(["\n  && {\n    display: block;\n    padding: 2px;\n    font-size: 0.9em;\n    label {\n      color: #303030;\n    }\n  }\n"]);return Oe=function(){return e},e}const we=[{name:"Source",field:"source"},{name:"Journal",field:"journal"},{name:"Published",field:"year"},{name:"Author",field:"author"},{name:"Full text",field:"has_full_text"}],ye=Object(u.a)(ve.a)(Oe());function xe({name:e,field:n,values:t,onSearch:a}){if(!t||0===t.length)return null;const l=(e,{value:r,checked:l})=>{const o=t.filter(({value:e,checked:n})=>e===r?l:n).map(({value:e})=>e);a({[n]:o})};return r.a.createElement(R.a.Field,null,r.a.createElement("label",null,e),t.filter(({value:e})=>e.length>0&&!("year"===n&&"1970"===e)).map(({value:n,count:t,checked:a},o)=>r.a.createElement(ye,{key:o,name:e,value:n,onChange:l,label:"".concat(n," (").concat(t,")"),checked:a})))}var Se=function(e){let n=e.onSearch,t=Object(p.a)(e,["onSearch"]);const a=!0!==Object.values(t).flatMap(e=>e.map(({checked:e})=>e)).find(e=>e);return r.a.createElement("div",{id:"sidebar",className:"ui form",style:{backgroundColor:"#e6eff5"}},r.a.createElement(je.a,{disabled:a,onClick:()=>n(we.reduce((e,{field:n})=>Object(be.a)({},e,{[n]:[]}),{}))},"Clear all"),we.map(({name:e,field:a})=>r.a.createElement(xe,{key:a,name:e,field:a,values:t[a],onSearch:n})))};function ke(){const e=Object(s.a)(["\n  &&& {\n    margin: 0.32em;\n    > span {\n      float: right;\n    }\n  }\n"]);return ke=function(){return e},e}const Ce=u.a.div(ke()),_e=[{text:"title and abstract",value:"default"},{text:"all fields",value:"all"}],Ae=[{text:"Vespa BM25",value:"bm25"},{text:"Vespa nativeRank",value:"default"},{text:"date",value:"freshness"}];var Ie=function({totalCount:e,fieldset:n,ranking:t,onSearch:a}){return r.a.createElement(Ce,null,e>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,e)," matches"),r.a.createElement("span",null,"Searching in"," ",r.a.createElement(h.a,{inline:!0,defaultValue:_e.find(({value:e},t)=>n===e||!n&&0===t).value,options:_e.map((e,n)=>Object(be.a)({id:n},e)),onChange:(e,{value:n})=>a({fieldset:n})})," and sorting by ",r.a.createElement(h.a,{inline:!0,defaultValue:Ae.find(({value:e},n)=>t===e||!t&&0===n).value,options:Ae.map((e,n)=>Object(be.a)({id:n},e)),onChange:(e,{value:n})=>a({ranking:n})})))};const De=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://api.cord19.vespa.ai";function Pe(e,n){return Re("GET",e,n)}function Re(e,n,t){function r(e,n){return Object(be.a)({},e,{},n)}n.startsWith("http")||(n=De+n),(t=t||{}).method=e,t.credentials="same-origin";const l=()=>fetch(n,t).then(e=>e.ok?e:e.text().then(n=>{let t=n;try{const e=JSON.parse(n);"message"in e&&(t=e.message)}catch(a){}return Promise.reject({message:t,code:e.status})})).then(e=>{const n=e.headers.get("content-type");return!n||t.returnRaw?e:n.includes("application/json")?e.json():n.includes("text/plain")?e.text():e});let o=!1;return{promise:l,state:e=>{const t=e||0,c={url:n,loading:null,cancel:()=>{o=!0},response:null,error:null,version:t},i=Object(a.useReducer)(r,c),s=Object(P.a)(i,2),u=s[0],m=s[1];return n===u.url&&t===u.version||m(c),null===u.loading&&(m({loading:!0}),l().then(e=>{o||m({loading:!1,response:e,version:t})}).catch(e=>{o||m({loading:!1,error:e,version:t})})),Object(be.a)({},u,{loading:null===u.loading||u.loading})}}}var Me=t(368);function Fe(){const e=Object(s.a)(["\n  &&& {\n    width: 100%;\n    margin: 0;\n    .ui.message {\n      background: transparent;\n      box-shadow: none;\n    }\n    .ui.warning.message {\n      background: #fffaf3;\n    }\n    .ui.error.message {\n      background: #fff6f6;\n    }\n  }\n"]);return Fe=function(){return e},e}const ze=Object(u.a)(H.a)(Fe()),Le=({header:e,message:n})=>r.a.createElement(ze,{basic:!0,textAlign:"center"},r.a.createElement(Me.a,null,e&&r.a.createElement(Me.a.Header,null,e),r.a.createElement(Me.a.Content,null,n))),Ye=({header:e,message:n})=>r.a.createElement(ze,{basic:!0,textAlign:"center"},r.a.createElement(Me.a,{error:!0},e&&r.a.createElement(Me.a.Header,null,e),r.a.createElement(Me.a.Content,null,n)));var qe=t(373);function Te(){const e=Object(s.a)(["\n  width: fit-content;\n  margin: 0 auto;\n"]);return Te=function(){return e},e}const Ne=u.a.div(Te());var Ue=function({total:e,offset:n,onOffsetChange:t,numPerPage:a=10}){const l=Math.min(100,Math.floor((e+a-1)/a));return l<=1?null:r.a.createElement(Ne,null,r.a.createElement(qe.a,{firstItem:null,lastItem:null,prevItem:null,nextItem:null,totalPages:l,defaultActivePage:1+n/a,onPageChange:(e,{activePage:n})=>t((n-1)*a)}))};function Ve(){const e=Object(s.a)(["\n  &&& {\n    font-size: 1rem;\n    width: 100%;\n    margin: 0.5em auto 0;\n    padding: 1rem 0;\n    display: flex;\n\n    #sidebar {\n      width: 30%;\n      max-width: 250px;\n      height: fit-content;\n      margin-right: 1em;\n      padding: 0.5em;\n      border-radius: 0.28571429rem;\n\n      .ui.button {\n        width: calc(100% - 1em);\n        padding: 0.78125rem 0.4rem;\n        line-height: 1.4285em;\n        border-radius: 1.3rem;\n        margin: 0 0.5em 0.5em;\n        background: rgba(0, 90, 142, 0.1);\n        color: #3f9dd8;\n      }\n    }\n\n    #search_results {\n      flex: 1;\n      margin-top: 0.5em; // Must match #sidebar top padding\n    }\n\n    #no_matches {\n      text-align: center;\n      margin: 2rem;\n    }\n  }\n"]);return Ve=function(){return e},e}const He=Object(u.a)(f.a)(Ve()),We=(e,n)=>e.replace(/(?:^|\s)(\+?related_to:[0-9]+)(?:$|\s)/," ").trim()+" related_to:"+n;function Be({query:e}){return r.a.createElement("div",{id:"no_matches"},r.a.createElement("h1",null,"\xaf\\_(\u30c4)_/\xaf"),r.a.createElement("br",null),"No matches for ",r.a.createElement("b",null,e))}function Je({articles:e,query:n,isFieldSetAll:t,loading:a,error:l}){return a?r.a.createElement(Le,{message:"Searching..."}):l?r.a.createElement(Ye,{message:l.message||"Unknown search error..."}):0===e.length?r.a.createElement(Be,{query:n}):r.a.createElement(r.a.Fragment,null,e.map((e,a)=>r.a.createElement(Ee,Object.assign({key:a},e,{isFieldSetAll:t,onSearchSimilar:()=>T({query:We(n,e.fields.id)})}))))}var Ke=function(){var e,n,t;const l=N(),o=(()=>{const e=N(),n=e.journal,t=e.source,a=e.year,r=e.author,l=e.has_full_text,o=a.map(e=>parseInt(e)).map(e=>q(e)+";"+(q(e+1)-1)),c=[Y("journal",n),Y("source",t),Y("timestamp",o,!0),Y("authors.name",r),Y("has_full_text",l)].filter(e=>e).join(" "),i=new URLSearchParams(window.location.search),s=i.get("ranking"),u=i.get("fieldset");return["journal","source","year","author","has_full_text","ranking","fieldset"].forEach(e=>i.delete(e)),c&&i.set("filter",c),s&&i.set("ranking.profile",s),u&&i.set("model.defaultIndex",u),i.set("select",L),i})();o.set("type","any"),o.set("summary","short"),o.set("restrict","doc"),o.set("hits",10);const c=Pe("/search/?"+o.toString()).state(),i=c.loading,s=c.response,u=c.error,m=Object(a.useState)(),d=Object(P.a)(m,2),h=d[0],g=d[1],f=((null===s||void 0===s||null===(e=s.root)||void 0===e?void 0:e.children)||[]).sort(({id:e,relevance:n},{id:t,relevance:a})=>"group:root:0"===e?-1:"group:root:0"===t?1:a-n),p=Object(re.a)(f),E=p[0],b=p.slice(1);Object(a.useEffect)(()=>{i||g(E)},[E,g,i]);const v=(null===s||void 0===s||null===(n=s.root)||void 0===n||null===(t=n.fields)||void 0===t?void 0:t.totalCount)||0,j=(null===h||void 0===h?void 0:h.children)?h.children.reduce((e,{label:n,children:t})=>(e[n]=t.map(({value:e,fields:t})=>({value:e,count:t["count()"],checked:l[n].includes(e)})),e),{}):{};return r.a.createElement(r.a.Fragment,null,r.a.createElement(He,null,r.a.createElement(Se,Object.assign({onSearch:T},j)),r.a.createElement("div",{id:"search_results"},r.a.createElement(z,Object.assign({onSearch:T},l)),r.a.createElement(Ie,Object.assign({totalCount:v,onSearch:T},l)),r.a.createElement(Je,Object.assign({query:l.query,isFieldSetAll:"all"===l.fieldset},{articles:b,loading:i,error:u})),r.a.createElement(Ue,{total:v,offset:parseInt(o.get("offset"))||0,onOffsetChange:e=>T({offset:e})}))),r.a.createElement($,null))},$e=t(371),Ge=t(374);function Ze(){const e=Object(s.a)(["\n  &&& {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n"]);return Ze=function(){return e},e}const Qe=Object(u.a)(f.a)(Ze());function Xe({authors:e}){return e?r.a.createElement($e.a.Subheader,null,e.map(ie).join(", ")):null}function en({journal:e,timestamp:n,source:t,license:a,doi:l}){const o=e?" (YYYY-MM-DD)":"YYYY-MM-DD",c=n?r.a.createElement(ce.a,{format:o,unix:!0,utc:!0},1e3*n):null;return r.a.createElement(A.a,null,l&&r.a.createElement(A.a.Item,null,r.a.createElement(A.a.Header,null,"Doi"),r.a.createElement(E,{to:l},l.replace("https://doi.org/",""))),e?r.a.createElement(A.a.Item,null,r.a.createElement(A.a.Header,null,"Journal"),e," ",c):r.a.createElement(A.a.Item,null,r.a.createElement(A.a.Header,null,"Date"),c),t&&r.a.createElement(A.a.Item,null,r.a.createElement(A.a.Header,null,"Source"),t),a&&r.a.createElement(A.a.Item,null,r.a.createElement(A.a.Header,null,"License"),a))}function nn({title:e,abstract:n,authors:t,doi:a,journal:l,timestamp:o,source:c,license:i}){return r.a.createElement(Qe,null,r.a.createElement($e.a,{as:"h1"},e),r.a.createElement(Xe,{authors:t}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement($e.a,{as:"h3"},"Abstract"),r.a.createElement("p",null,n)),r.a.createElement(en,{journal:l,timestamp:o,source:c,license:i,doi:a}))}function tn({id:e}){const n=new URLSearchParams;n.set("id",e),n.set("searchChain","related-ann"),n.set("summary","short"),n.set("ranking.profile","related-ann"),n.set("use-abstract",!0),n.set("hits",5);const t=Pe("/search/?"+n.toString()).state(),a=t.loading,l=t.response,o=t.error;return a?r.a.createElement(Le,{message:"Searching..."}):o?r.a.createElement(Ye,{message:o.message||"Unknown search error..."}):(console.log(l),"children"in l.root?r.a.createElement(Ge.a.Pane,null,r.a.createElement(r.a.Fragment,null,l.root.children.map((e,n)=>r.a.createElement(Ee,Object.assign({key:n},e))),r.a.createElement(E,{to:"/search/?query=related_to:".concat(e)},"Show more"))):null)}function an({citedBy:e,total:n,offset:t,onOffsetChange:a}){return r.a.createElement(f.a,null,e.slice(t,t+10).map(e=>r.a.createElement(rn,{key:e,id:e})),r.a.createElement(Ue,{total:n,offset:t,onOffsetChange:a}))}function rn({id:e}){const n=Pe("/document/v1/covid-19/doc/docid/".concat(e)).state(),t=n.loading,a=n.response,l=n.error;return t?r.a.createElement(Le,{message:"Loading..."}):l?r.a.createElement(Ye,{message:l.message||"Failed to load article #".concat(e)}):(console.log(a),r.a.createElement(Ee,a))}var ln=function({id:e}){const n=new URL(window.location),t=Pe("/document/v1/covid-19/doc/docid/".concat(e)).state(),a=t.loading,l=t.response,o=t.error;if(a)return r.a.createElement(Le,{message:"Loading..."});if(o)return r.a.createElement(Ye,{message:o.message||"Failed to load article #".concat(e)});console.log(l);const i=Object(D.uniq)([...l.fields.cited_by||[],...(l.fields.citations_inbound||[]).map(e=>e.source_id).filter(e=>!isNaN(e))]),s=[{menuItem:"Similar articles",render:()=>r.a.createElement(tn,{id:l.fields.id})},{menuItem:{key:"citations",content:"".concat(i.length," citing articles"),disabled:0===i.length},render:()=>r.a.createElement(an,{citedBy:i,offset:parseInt(n.searchParams.get("offset"))||0,total:i.length,onOffsetChange:e=>{n.searchParams.set("offset",e),Object(c.c)(n)}})}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe,null,r.a.createElement(nn,l.fields),r.a.createElement(Ge.a,{panes:s,defaultActiveIndex:n.searchParams.get("tab")||0,onTabChange:(e,t)=>{[...n.searchParams.keys()].forEach(e=>n.searchParams.delete(e)),n.searchParams.set("tab",t.activeIndex),Object(c.c)(n)}})),r.a.createElement($,null))};function on(){const e=Object(s.a)(["\n  height: 80vh;\n"]);return on=function(){return e},e}function cn(){const e=Object(s.a)(["\n  font-weight: 400;\n  color: #3f9dd8;\n"]);return cn=function(){return e},e}const sn=u.a.h2(cn()),un=Object(u.a)(_.a)(on());var mn=function({code:e=404}){const n=(e=>{switch(e){case 403:return"Sorry, you are not authorized to view this page.";case 404:return"Sorry, the page you were looking for does not exist.";case 500:return"Oops... something went wrong.";default:return"Unknown error - really, I have no idea what is going on here."}})(e);return r.a.createElement(un,{textAlign:"center",verticalAlign:"middle"},r.a.createElement(_.a.Row,null,r.a.createElement(_.a.Column,{width:8},r.a.createElement(sn,null,n))))};var dn=function(){return r.a.createElement(i.b,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(i.a,{width:1},r.a.createElement(C,null)),r.a.createElement(c.b,{primary:!1,component:r.a.Fragment},r.a.createElement(ae,{path:"/"}),r.a.createElement(Ke,{path:"/search"}),r.a.createElement(ln,{path:"/article/:id"}),r.a.createElement(mn,{default:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[207,1,2]]]);
//# sourceMappingURL=main.ad4ba6c8.chunk.js.map