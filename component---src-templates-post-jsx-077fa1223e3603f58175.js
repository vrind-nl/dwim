(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{AYpS:function(e,t,n){e.exports={tags:"Tag-module--tags--3_1Dj"}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("YwZP"),l=n("ma3e"),s=(n("YT/5"),n("kiQV"));t.a=function(e){var t=e.page,n=e.children,r=Object(i.c)("1056462243"),u=r.site,c=r.allOrgContent,f=u.siteMetadata,p=f.title,m=f.description,d=c.nodes;return a.a.createElement(a.a.Fragment,null,a.a.createElement("title",null,p+(t?" - "+t:"")),a.a.createElement("div",{className:"header"},a.a.createElement(i.a,{to:"/",style:{float:"left"}},a.a.createElement("h1",null,p)),a.a.createElement("p",{style:{float:"right"}},a.a.createElement("i",null,m))),a.a.createElement("div",{className:"header"},a.a.createElement("div",{style:{float:"left"}},a.a.createElement("button",{onClick:function(){return Object(o.navigate)("/")}},"Home"),a.a.createElement("button",{onClick:function(){return Object(o.navigate)("/tags")}},"Tags"),a.a.createElement("button",{onClick:function(){return Object(o.navigate)("/archive")}},"Archive")),a.a.createElement("div",{style:{float:"right"}},d.map((function(e){return a.a.createElement("button",{key:e.fields.slug,onClick:function(){return Object(o.navigate)(e.fields.slug)}},e.metadata.title)})),a.a.createElement("button",{onClick:function(){return Object(o.navigate)("/rss.xml")}},a.a.createElement(l.e,null)),a.a.createElement("button",{onClick:function(){return Object(o.navigate)("https://github.com/vrind-nl/dwim")}},a.a.createElement(l.d,null)))),n,a.a.createElement("footer",null,"© 2020 ",a.a.createElement("a",{href:"mailto:"+s.email},s.author),", v",s.version))}},GNkg:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("tcVi"),l=n.n(o),s=n("ma3e"),u=n("Bl7J"),c=n("AYpS"),f=n.n(c);function p(e){var t=e.children;return a.a.createElement("a",{href:"/tags#"+t},t)}function m(e){var t=e.tags,n=e.children;return t.length<=0?a.a.createElement("p",null):a.a.createElement("p",{className:f.a.tags},n," ",t.map((function(e,t){return[t>0&&", ",a.a.createElement(p,{key:t},e)]})))}function d(e){var t=e.fields,n=e.metadata,r=e.side;return t?a.a.createElement("div",{style:{float:r}},a.a.createElement(i.a,{to:t.slug},"left"===r?a.a.createElement(s.a,null):null," ",n.title," ","right"===r?a.a.createElement(s.b,null):null)):""}t.default=function(e){var t=e.data,n=e.pageContext,r=t.orgContent,i=r.metadata,o=r.html,s=n.previous,c=n.next;return a.a.createElement(u.a,{page:i.title},a.a.createElement("p",{style:{textAlign:"right",fontSize:"80%"}},i.date),a.a.createElement("h1",null,i.title),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),a.a.createElement(m,{tags:i.tags},"tags:"),a.a.createElement("div",{style:{overflow:"hidden"}},a.a.createElement(d,Object.assign({},s,{side:"left"})),a.a.createElement(d,Object.assign({},c,{side:"right"}))),a.a.createElement(l.a,{repo:"vrind-nl/dwim",type:"pathname"}))}},J5OX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.identifierTypes=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI")),i=(r=n("17x9"))&&r.__esModule?r:{default:r};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=["pathname","url","title","og:title","issue-number","issue-term"],p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,u(t).call(this,e))).myRef=a.default.createRef(),n.state={pending:!0},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.repo,r=t.type,a=t.specificTerm,i=t.issueNumber,o=function(e){if(!(f.indexOf(e)<0))return"issue-number"===e?"issue-number":"issue-term";console.warn("Wrong type: "+e)}(r),l=function(e,t,n){if(!(f.indexOf(e)<0))return"pathname"===e?"pathname":"url"===e?"url":"title"===e?"title":"og:title"===e?"og:title":"issue-term"===e?t:"issue-number"===e?n:void 0;console.warn("Wrong type: "+e)}(r,a,i);if("issue-term"!==r||l)if("issue-number"===r&&(isNaN(l)||l<1))console.warn("When type is '".concat(r,"', valid 'issueNumber' prop must be provided"));else{var s=document.createElement("script");s.src="https://utteranc.es/client.js",s.async=!0,s.setAttribute("repo",n),s.setAttribute("crossorigin","anonymous"),s.setAttribute(o,l),s.onload=function(){return e.setState({pending:!1})},this.myRef.current.appendChild(s)}else console.warn("When type is '".concat(r,"', 'specificTerm' prop must be provided"))}},{key:"render",value:function(){return a.default.createElement("div",{className:"react-utterences",ref:this.myRef},this.props.debug&&a.default.createElement("pre",{style:{background:"#cccccc",padding:10}},"\nthis.props: ".concat(JSON.stringify(this.props,null,2),'\nlocation.pathname: "').concat(window.location.pathname,'"\nlocation.href: "').concat(window.location.href,'"\n          ').trim()),this.props.debug&&a.default.createElement("div",null,"👇👇If the settings are valid, the comment widget appear below👇👇"),this.state.pending&&a.default.createElement("div",null,"Loading script..."))}}])&&l(n.prototype,r),i&&l(n,i),t}(a.Component);t.identifierTypes={pathname:{attrValue:"",summary:"Issue title contains page pathname"},url:{attrValue:"url",summary:"Issue title contains page URL"},title:{attrValue:"title",summary:"Issue title contains page title"},"og:title":{attrValue:"og:title",summary:"Issue title contains page og:title"},"issue-number":{attrValue:-1,summary:"Specific issue number"},"issue-term":{attrValue:"",summary:"Issue title contains specific term"}},p.propTypes={type:i.default.string.isRequired,repo:i.default.string.isRequired,specificTerm:i.default.string,issueNumber:i.default.number,hashKey:i.default.string,debug:i.default.bool};var m=p;t.default=m},"YT/5":function(e,t,n){},kiQV:function(e){e.exports=JSON.parse('{"name":"dwim","version":"0.3.0","description":"Do What I Mean","main":"index.js","scripts":{"start":"gatsby develop -o","build":"gatsby build","serve":"gatsby serve -o"},"keywords":["blog","gatsby"],"author":"Vrind","email":"vrind@dwim.nl","license":"ISC","dependencies":{"@mdx-js/mdx":"^1.5.7","@mdx-js/react":"^1.5.7","gatsby":"^2.20.2","gatsby-plugin-feed":"^2.4.0","gatsby-source-filesystem":"^2.2.1","gatsby-transformer-orga":"^1.8.4","prism-react-renderer":"^1.0.2","react":"^16.13.1","react-dom":"^16.13.1","react-icons":"^3.9.0","react-utterances":"^0.6.4"}}')},tcVi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"identifierTypes",{enumerable:!0,get:function(){return r.identifierTypes}});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("J5OX"))}}]);
//# sourceMappingURL=component---src-templates-post-jsx-077fa1223e3603f58175.js.map