(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(9),i=n.n(r),c=(n(17),n(2)),u=n(3),l=n(5),s=n(4),m=(n(18),n(10)),h=n(11),d=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"quote-box"},a.a.createElement("div",{className:"main-quote",id:"text"},a.a.createElement("h1",null,this.props.myQuote.text)),a.a.createElement("div",{className:"author",id:"author"},a.a.createElement("p",null,this.props.myQuote.author)),a.a.createElement("div",{className:"button-box"},a.a.createElement("div",{className:"social-button-box"},a.a.createElement("a",{href:"",id:"tweet-quote",target:"_blank",className:"social-button",onClick:this.props.tweetMe,title:"Post on Twitter!"},a.a.createElement(m.a,{icon:h.a,id:"twitter-icon"}))),a.a.createElement("div",{className:"new-quote-button-box"},a.a.createElement("button",{onClick:this.props.newQuote,title:"Generate a new quote",id:"new-quote"},"New Quote"))))}}]),n}(o.Component),p=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).GenerateNewQuote=function(){o.setState({quote:o.state.allQuotes[Math.floor(100*Math.random())],error:null,isLoading:!1})},o.TweetCode=function(){document.getElementById("tweet-quote").href="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent('"'+o.state.quote.text+'" '+o.state.quote.author))},o.state={allQuotes:[],quote:{},isLoading:!0,error:null},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(t){console.log("your data",[t]),e.setState({allQuotes:t,quote:t[Math.floor(100*Math.random())],isLoading:!1,error:null})})).catch((function(t){e.setState({error:t}),console.log(t)}))}},{key:"render",value:function(){return this.state.isLoading?a.a.createElement("div",{className:"App"},a.a.createElement(d,{myQuote:{text:"Loading",author:"Loading"},newQuote:null,tweetMe:null})):a.a.createElement("div",{className:"App"},a.a.createElement(d,{myQuote:this.state.quote,newQuote:this.GenerateNewQuote,tweetMe:this.TweetCode}))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.f794489d.chunk.js.map