(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(309)},113:function(e,t,n){},115:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=(n(113),n(18)),l=n(19),s=n(21),m=n(20),u=n(22),d=n(98),h=n.n(d);n(115),a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=n(99),g=n.n(p),f=n(41),v=n(100),E=n.n(v),y=function(e){var t=e.text;return r.a.createElement(a.Fragment,null,r.a.createElement(E.a,{color:"secondary",fontSize:"large"}),t)},b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.center,n=e.name,a=(e.address,e.zoom);return console.log(t),r.a.createElement("div",{style:{height:"100vh",minWidth:"80%"}},r.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyBs-MSKD9Xoh6UuwB-LpE2lKYKKndq3ASM",language:"en",region:"en"},zoom:a||11,center:t,heatmapLibrary:!0},r.a.createElement(y,{lat:t?t.lat:59.95,lng:t?t.lng:30.33,text:n})))}}]),t}(a.Component),w=n(106),k=n.n(w),j=n(105),O=n.n(j),S=n(32),x=n.n(S),C=n(102),B=n.n(C),K=n(103),P=n.n(K),z=n(104),A=n.n(z),L=n(40),W=n.n(L),R=n(107),T=n.n(R),U=(n(214),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:"https://d3n8a8pro7vhmx.cloudfront.net/bnaibrithcanada/pages/2436/attachments/original/1518020966/MAR22_POTTER_POST02.jpg?1518020966",name:"Kreyser Avrora",address:"",error:"",center:{lat:59.955413,lng:30.337844},inProgress:!1},n.handleChange=function(e){n.setState({url:e.target.value})},n.callBackend=function(){var e=n.state.url;console.log("try calling api using url ".concat(e)),n.setState({inProgress:!0}),window.fetch("https://vision-backend-codejam.herokuapp.com/image?url="+e).then(function(e){return e.json()}).then(function(e){e.Label;var t=e.address,a=e.location,r=e.name;n.setState({center:a,address:t,name:r}),console.log(e)},function(e){n.setState({error:"call failed"})}).catch(function(e){return console.log("catch error ".concat(e))})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state.name!==t.name&&this.setState({inProgress:!1})}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(B.a,{position:"static",color:"primary"},r.a.createElement(P.a,null,r.a.createElement(A.a,{variant:"h6",color:"inherit"},"Take a picture to find where you are!"))),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(W.a,{style:{padding:"10px",margin:"10px",minWidth:"80%"}},r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(O.a,{fullWidth:!0,id:"standard-name",label:"Enter picture URL:",value:this.state.url,onChange:this.handleChange,margin:"normal"})),r.a.createElement(k.a,{variant:"contained",color:"primary",onClick:this.callBackend},"Submit"))),this.state.inProgress&&r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(T.a,{color:"secondary"})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(b,{url:this.state.url,center:this.state.center,name:this.state.name,address:this.state.address,zoom:16}))))}}]),t}(a.Component));a.Component;c.a.render(r.a.createElement(U,null),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[108,2,1]]]);
//# sourceMappingURL=main.72d0409b.chunk.js.map