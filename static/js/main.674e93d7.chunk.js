(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(22),o=c.n(a),s=(c(29),c(7)),i=c(8),l=c(10),j=c(9),h=(c(30),c(0));var d=function(e){return Object(h.jsx)("div",{className:"wrapper",children:e.children})},u=c(23),b=c.n(u),p=function(){return b.a.get("https://randomuser.me/api/?results=20")};var m=function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:e.employeeKey}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{alt:e.firstName,src:e.image})}),Object(h.jsx)("td",{children:e.firstName}),Object(h.jsx)("td",{children:e.lastName}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.phone}),Object(h.jsx)("td",{children:e.location})]})},y=(c(50),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],shownEmployees:[]},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({employees:t.data.results,shownEmployees:t.data.results}),console.log(e.state.employees)})).catch((function(e){return console.log(e)}))}},{key:"updateEmployees",value:function(){var e=this;this.state.employees.filter((function(t){return t.location.contry===e.props.contrySearched}))}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"responsive-table table-styles",children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Picture"}),Object(h.jsx)("th",{scope:"col",children:"First Name"}),Object(h.jsx)("th",{scope:"col",children:"Last Name"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"Phone Number"}),Object(h.jsx)("th",{scope:"col",children:"Location"})]})}),Object(h.jsx)("tbody",{children:this.state.shownEmployees.map((function(e,t){return Object(h.jsx)(m,{employeeKey:t+1,image:e.picture.thumbnail,firstName:e.firstName,lastName:e.lastName,phone:e.phone,email:e.email,location:"".concat(e.location.city,", ").concat(e.location.country)},t)}))})]})})}}]),c}(n.Component));c(51);var O=function(){return Object(h.jsx)("header",{className:"header",children:"Employee Directory"})},f=c(12),x=c(24);var v=function(e){return Object(h.jsxs)(f.a,{className:"mb-3",children:[Object(h.jsx)(f.a.Prepend,{children:Object(h.jsx)(f.a.Text,{children:"Search"})}),Object(h.jsx)(x.a,{placeholder:"Employee Name","aria-label":"Employee Name","aria-describedby":"basic-addon1",onChange:function(t){return e.findCountry(t.target.value)}})]})},N=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={countrySearched:""},e.findCountry=function(t){e.setState({countrySearched:t})},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsxs)(d,{children:[Object(h.jsx)(O,{}),Object(h.jsx)(v,{findCountry:this.findCountry}),Object(h.jsx)(y,{contrySearched:this.state.countrySearched})]})}}]),c}(n.Component),g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),g()}},[[57,1,2]]]);
//# sourceMappingURL=main.674e93d7.chunk.js.map