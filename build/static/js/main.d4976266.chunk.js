(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},107:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var r,a=n(0),s=n.n(a),c=n(26),i=n.n(c),o=(n(102),n(6)),l=(n(103),n(41)),u={body:"hsl(0, 0%, 98%)",text:"hsl(200, 15%, 8%)",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)",element:"hsl(0, 0%, 100%)",grayText:"hsl(0, 0%, 52%)"},d={body:"hsl(207, 26%, 17%)",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",element:"hsl(209, 23%, 22%)",grayText:"hsl(0, 0%, 52%)"},h=n(72),j=Object(l.b)(r||(r=Object(h.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    align-items: center;\n    background: ",";\n    color: ",";\n    // display: flex;\n    // flex-direction: column;\n    // justify-content: center;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: Nunito Sans;\n    transition: all 0.25s linear;\n  }\n  .card,.card-body{\n    background: ",";\n    color: ",";\n  }\n  .input-group-text , .form-control{\n    border:none;\n    color: ",";\n    background: ",";\n  }\n  .form-control::placeholder{\n    color: ",";\n  }\n  .lightGray{\n    color: hsl(0, 0%, 52%);\n    font-weight: 700;\n  }\n  select, .dropdown option, .dropdown option:hover,.dropdown option:active{\n      background-color:  "," !important;\n      color: "," !important;\n      border: none;\n  }\n  .detail-view button{\n    background-color:  "," !important;\n    color: "," !important;\n    border: none;\n  }\n  .list-group-item span{\n    color: "," !important;\n  }\n  .list-group-item, .detail-view h4{\n    color: "," !important;\n  }\n  "])),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.element}),(function(e){return e.theme.text}),(function(e){return e.theme.grayText}),(function(e){return e.theme.element}),(function(e){return e.theme.text}),(function(e){return e.theme.element}),(function(e){return e.theme.text}),(function(e){return e.theme.element}),(function(e){return e.theme.text}),(function(e){return e.theme.grayText}),(function(e){return e.theme.text})),b=(n(107),n(36)),m=n(2);var x=function(e){return Object(m.jsxs)("div",{className:["navbar",e.theme].join(" "),children:[Object(m.jsx)("div",{className:"title",children:"Where in the World?"}),Object(m.jsxs)("div",{className:"theme-button",onClick:e.toogleTheme,children:[Object(m.jsx)(b.b,{}),"\xa0 Dark mode"]})]})},f=n(7),g=n(13),p=n.n(g),O=n(21),v=n(16),y=n(18),C=n(20),N=n(19),w=n(93),S=n(125),k=n(121),L="https://restcountries.eu/rest/v2",D=n(122),R=n(29);function F(e){var t=e.data.name;return Object(m.jsx)(R.b,{to:"/detail/".concat(t),children:Object(m.jsxs)(D.a,{className:"me-0 me-md-5",children:[Object(m.jsx)(D.a.Img,{variant:"top",alt:"",src:e.data.flag}),Object(m.jsxs)(D.a.Body,{children:[Object(m.jsx)(D.a.Title,{className:"fw-bold",children:e.data.name}),Object(m.jsxs)("ul",{className:" mt-4 mb-4 list-unstyled",children:[Object(m.jsxs)("li",{className:"border-0 p-0",children:[" Population:",Object(m.jsxs)("span",{className:"lightGray",children:[" ",e.data.population.toLocaleString("en-US")]})]}),Object(m.jsxs)("li",{className:"border-0 p-0",children:["Region: ",Object(m.jsxs)("span",{className:"lightGray",children:[" ",e.data.region]})]}),Object(m.jsxs)("li",{className:"border-0 p-0",children:["Capital: ",Object(m.jsxs)("span",{className:"lightGray",children:[" ",e.data.capital]})]})]})]})]})})}var I=n(116),B=n(117),M=n(123),T=n(124);var A=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(I.a,{className:"d-flex",children:[Object(m.jsx)(B.a,{xs:12,xl:4,children:Object(m.jsx)("div",{className:"pb-5 search-container",children:Object(m.jsxs)(M.a,{size:"lg",className:"shadow rounded",children:[Object(m.jsx)(M.a.Text,{className:"p-4",id:"inputGroup-sizing-lg",children:Object(m.jsx)(b.c,{})}),Object(m.jsx)(T.a,{"aria-label":"Large",onKeyUp:e.onHandleSearch,placeholder:"Search for Country...","aria-describedby":"inputGroup-sizing-sm"})]})})}),Object(m.jsx)(B.a,{xs:12,xl:8,className:"d-flex justify-content-xl-end",children:Object(m.jsxs)("select",{className:"dropdown shadow mb-5",title:"Filter by Region",onChange:e.filterByRegion,children:[Object(m.jsx)("option",{value:"",children:"Filter by Region"}),e.regions&&e.regions.map((function(e,t){return e&&Object(m.jsx)("option",{value:e,children:e},t)}))]})})]})})},P=(n(69),10),E=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(v.a)(this,n),(r=t.call(this,e)).validateResponse=function(e,t){return e||!t.length&&!t.message?(w.b.error("Could not fetch countries. Check that the backend is running, reachable and returns valid JSON."),!1):!!t.length||(w.b.error(t.message||"No countries found in database"),!1)},r.performAPICall=Object(O.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},n=!1,r.setState({loading:!0}),e.prev=3,e.next=6,fetch("".concat(L,"/all"));case 6:return e.next=8,e.sent.json();case 8:t=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),n=!0;case 14:if(r.setState({loading:!1}),!r.validateResponse(n,t)){e.next=17;break}return e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[3,11]])}))),r.getCountries=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.performAPICall();case 2:(t=e.sent)&&(r.countries=t,r.setState({setList:t.slice(0,P)}),r.getRegions());case 4:case"end":return e.stop()}}),e)}))),r.getRegions=function(){var e=r.countries.reduce((function(e,t){return e.includes(t.region)?e:[].concat(Object(f.a)(e),[t.region])}),[]);r.setState({regions:e})},r.getCountryElement=function(e,t){return Object(m.jsx)(S.a,{sm:24,md:12,xl:6,className:"mb-5",children:Object(m.jsx)(F,{data:e})},t)},r.loadMore=function(){var e=[],t=r.state.index+P,n=t<r.countries.length-1;r.state.filteredbyRegion.length>0?(e=r.state.setList.concat(r.state.filteredbyRegion.slice(r.state.index,t)),n=t<r.state.filteredbyRegion.length-1):r.state.filteredbyCountry.length>0?(e=r.state.setList.concat(r.state.filteredbyCountry.slice(r.state.index,t)),n=t<r.state.filteredbyCountry.length-1):e=r.state.setList.concat(r.countries.slice(r.state.index,t)),r.setState({index:t,setList:e,showMore:n})},r.onHandleSearch=function(e){if(e.target.value.length>=3){var t=r.countries.filter((function(t){if(t.name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1)return t}));r.setState({setList:t.slice(0,P),filteredbyCountry:t}),r.setStateforFilter(t)}else r.backtoDefaultState()},r.filterByRegion=function(e){if(e.target.value){var t=r.countries.filter((function(t){if(t.region.toLowerCase().indexOf(e.target.value.toLowerCase())>-1)return t}));r.setState({setList:t.slice(0,P),filteredbyRegion:t}),r.setStateforFilter(t)}else r.backtoDefaultState()},r.setStateforFilter=function(e){e.length>P?r.setState({showMore:!0}):r.setState({showMore:!1}),e.length>0&&r.setState({index:P})},r.backtoDefaultState=function(){r.setState({setList:r.countries.slice(0,P),showMore:!0,index:P,filteredbyRegion:[],filteredbyCountry:[]})},r.countries=[],r.state={showMore:!0,setList:[],index:P,regions:[],filteredbyRegion:[],filteredbyCountry:[]},r}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.getCountries(),document.addEventListener("scroll",this.trackScrolling)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"country-home p-5",children:[Object(m.jsx)(A,{onHandleSearch:this.onHandleSearch,regions:this.state.regions,filterByRegion:this.filterByRegion}),Object(m.jsx)(k.a,{children:0!==this.countries.length?this.state.setList.map((function(t,n){return e.getCountryElement(t,n)})):this.state.loading?Object(m.jsx)("div",{className:"loading-text",children:"Loading countries..."}):Object(m.jsx)("div",{className:"loading-text",children:"No Country to list"})}),this.state.showMore&&Object(m.jsx)("button",{className:" loadMore",onClick:this.loadMore,children:" Load More "})]})}}]),n}(s.a.Component),G=n(8),z=n(119),H=n(118),J=n(120),U=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(v.a)(this,n),(r=t.call(this,e)).validateResponse=function(e,t){return e||!t.length&&!t.message?(w.b.error("Could not fetch countries. Check that the backend is running, reachable and returns valid JSON."),!1):!!t.length||(w.b.error(t.message||"No countries found in database"),!1)},r.performAPICall=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},a=!1,r.setState({loading:!0}),e.prev=3,e.next=6,fetch("".concat(L,"/").concat(t));case 6:return e.next=8,e.sent.json();case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),a=!0;case 14:if(r.setState({loading:!1}),!r.validateResponse(a,n)){e.next=17;break}return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),r.getCountryDetail=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="name/".concat(t,"?fullText=true"),e.next=3,r.performAPICall(n);case 3:(a=e.sent)&&(r.setState({countryDetails:a[0]}),a[0].borders.length>0&&r.getBorderCountries());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.getBorderCountries=Object(O.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.countryDetails){e.next=8;break}return t=r.state.countryDetails.borders.join(";"),n="alpha?codes=".concat(t),e.next=5,r.performAPICall(n);case 5:return a=e.sent,r.setState({borderCountries:a}),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)}))),r.getCountryDetailElement=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(B.a,{xs:24,sm:12,xl:6,className:"mb-5 me-5",children:Object(m.jsx)(H.a,{src:e.flag,alt:""})}),Object(m.jsxs)(B.a,{xs:24,sm:12,xl:5,className:"mb-5",children:[Object(m.jsx)("h4",{className:"fw-bold",children:e.name}),Object(m.jsx)(J.a,{className:"my-5 d-flex flex-wrap",children:Object(m.jsxs)(I.a,{children:[Object(m.jsxs)(B.a,{xs:24,md:6,xl:6,children:[Object(m.jsxs)(J.a.Item,{children:["Native Name: ",Object(m.jsx)("span",{children:e.nativeName})]}),Object(m.jsxs)(J.a.Item,{children:["Population: ",Object(m.jsx)("span",{children:e.population})]}),Object(m.jsxs)(J.a.Item,{children:["Region: ",Object(m.jsx)("span",{children:e.region})]}),Object(m.jsxs)(J.a.Item,{children:["Sub Region: ",Object(m.jsx)("span",{children:e.subregion})]}),Object(m.jsxs)(J.a.Item,{children:["Capital: ",Object(m.jsx)("span",{children:e.capital})]})]}),Object(m.jsxs)(B.a,{xs:24,md:6,xl:6,children:[Object(m.jsxs)(J.a.Item,{children:["Top Level Domain: ",Object(m.jsx)("span",{children:e.topLevelDomain})]}),Object(m.jsxs)(J.a.Item,{children:["Currencies: ",Object(m.jsx)("span",{children:e.currencies&&e.currencies[0].name})]}),Object(m.jsxs)(J.a.Item,{children:["Languages: ",Object(m.jsx)("span",{children:e.languages&&Array.prototype.map.call(e.languages,(function(e){return e.name})).toString()})]})]})]})}),r.state.borderCountries.length>0?Object(m.jsxs)("div",{className:"d-md-flex  align-items-center fw-bold",children:["Borders:",Object(m.jsx)("div",{class:"flex-wrap d-flex",children:r.state.borderCountries.map((function(e,t){return Object(m.jsx)(R.b,{to:"/detail/".concat(e.name),children:Object(m.jsx)(z.a,{className:"mt-4 ms-4 p-2 p-md-3",children:e.name})},t)}))})]}):""]})]})},r.state={country_name:e.name,loading:!1,errored:!1,countryDetails:null,borderCountries:[]},r}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.getCountryDetail(this.state.country_name)}},{key:"componentDidUpdate",value:function(e){var t=!1;if(e.name!==this.props.name&&!t){t=!0,this.getCountryDetail(this.props.name);var n=[{prev:e.name,current:this.props.name}];this.props.handleClick(n)}}},{key:"render",value:function(){var e=this.state.countryDetails;return Object(m.jsx)(I.a,{children:this.state.countryDetails?Object(m.jsx)(m.Fragment,{children:this.getCountryDetailElement(e)}):this.state.loading?Object(m.jsx)("div",{className:"loading-text",children:"Loading country..."}):Object(m.jsx)("div",{className:"loading-text",children:"Not found any record!"})})}}]),n}(s.a.Component);function W(){var e=Object(G.h)().name,t=Object(a.useState)("/"),n=Object(o.a)(t,2),r=n[0],s=n[1];return Object(m.jsxs)("div",{className:"detail-view p-5",children:[Object(m.jsx)(R.b,{to:r,children:Object(m.jsxs)(z.a,{className:"shadow mt-3 mb-5",children:[Object(m.jsx)(b.a,{}),"\xa0 Back"]})}),Object(m.jsx)(U,{name:e,handleClick:function(e){e&&e[0].prev&&s("/detail/".concat(e[0].prev)),r.indexOf(e[0].current)>-1&&s("/")}})]})}var _=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(m.jsx)(R.a,{children:Object(m.jsxs)(l.a,{theme:"light"===n?u:d,children:[Object(m.jsx)(j,{}),Object(m.jsx)(x,{toogleTheme:function(){r("light"===n?"dark":"light")},theme:n}),Object(m.jsxs)(G.c,{children:[Object(m.jsx)(G.a,{path:"/",element:Object(m.jsx)(E,{})}),Object(m.jsx)(G.a,{path:"/detail/:name",element:Object(m.jsx)(W,{})})]})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};n(112),n(113);i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root")),K()},69:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.d4976266.chunk.js.map