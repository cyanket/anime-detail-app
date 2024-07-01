(function(){"use strict";var t={133:function(t,e,n){var a=n(848),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-content py-3",attrs:{id:"app"}},[e("b-container",[e("b-row",[e("b-col",[e("div",{staticClass:"current-date"},[t._v(t._s(t.currentDate))]),e("div",{staticClass:"d-flex mb-1 justify-content-between"},[e("div",{staticClass:"today-label"},[t._v("Today")]),e("div",{staticClass:"vs-label"},[t._v("VS")])])])],1),e("b-row",[e("b-col",[t.error?e("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.error))]):t._e(),t.animeContent?e("MainContentCardComponent",{attrs:{animeContent:t.animeContent},on:{expand:t.expandView,refresh:t.fetchNewContent}}):t._e(),t.animeContent?e("ExpandedViewComponent",{attrs:{animeContent:t.animeContent,isExpanded:t.isExpanded},on:{close:t.closeView,refresh:t.fetchNewContent}}):t._e()],1)],1)],1)],1)},s=[],i=n(518),r=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"content-card"},[e("b-img",{staticClass:"main-img",attrs:{src:t.animeContent.thumbNailImage,fluid:""},on:{click:t.handleImageClick}}),e("b-row",{staticClass:"align-items-center mt-3 px-3"},[e("b-col",{attrs:{cols:"auto"}},[e("b-img",{staticClass:"logo-img",attrs:{src:t.animeContent.logo}})],1),e("b-col",[e("b-card-title",[t._v(t._s(t.animeContent.title))]),e("b-card-text",[t._v(t._s(t.animeContent.subTitle))])],1),e("b-col",{staticClass:"in-app",attrs:{cols:"auto"}},[e("b-button",{staticClass:"refresh-button",attrs:{pill:""},on:{click:t.handleRefreshClick}},[t._v("REFRESH")]),e("b-card-text",{staticClass:"in-app-text"},[t._v("In-App Purchases")])],1)],1)],1)},c=[],l={props:["animeContent"],methods:{handleImageClick(){this.$emit("expand",this.animeContent)},handleRefreshClick(){this.$emit("refresh")}}},d=l,h=n(656),m=(0,h.A)(d,r,c,!1,null,"5ca89e3f",null),p=m.exports,u=function(){var t=this,e=t._self._c;return e("div",[e("b-modal",{attrs:{"hide-footer":"","hide-header":""},on:{hidden:t.handleModalHidden},model:{value:t.localIsExpanded,callback:function(e){t.localIsExpanded=e},expression:"localIsExpanded"}},[e("div",{staticClass:"image-container mb-3 text-center position-relative"},[e("b-img",{staticClass:"expanded-img",attrs:{src:t.animeContent.mainImage,fluid:""}}),e("span",{staticClass:"update-text"},[t._v("MAJOR UPDATE")]),e("b-card-title",{staticClass:"anime-content-title"},[t._v(t._s(t.animeContent.title))])],1),e("b-row",{staticClass:"align-items-center px-3"},[e("b-col",{attrs:{cols:"auto"}},[e("b-img",{staticClass:"logo-img",attrs:{src:t.animeContent.logo}})],1),e("b-col",[e("b-card-title",{staticClass:"anime-title"},[t._v(t._s(t.animeContent.title))]),e("b-card-text",{staticClass:"anime-subtitle"},[t._v(t._s(t.animeContent.subTitle))])],1),e("b-col",{staticClass:"in-app",attrs:{cols:"auto"}},[e("b-button",{staticClass:"refresh-button",attrs:{pill:""},on:{click:t.handleRefreshClick}},[t._v("REFRESH")]),e("b-card-text",{staticClass:"in-app-text"},[t._v("In-App Purchases")])],1)],1),e("hr",{staticClass:"hr-line"}),e("div",[e("div",{staticClass:"mx-3",domProps:{innerHTML:t._s(t.animeContent.text)}}),e("div",{staticClass:"footer-section text-center py-4"},[e("b-img",{staticClass:"footer-logo-img mb-2",attrs:{src:t.animeContent.logo}}),e("b-card-title",{staticClass:"anime-title mb-2"},[t._v(t._s(t.animeContent.title))]),e("b-card-text",{staticClass:"anime-subtitle mb-4"},[t._v(t._s(t.animeContent.subTitle))]),e("b-button",{staticClass:"refresh-content-btn mb-1",attrs:{pill:""},on:{click:t.handleRefreshClick}},[t._v("REFRESH")]),e("b-card-text",{staticClass:"in-app-text"},[t._v("In-App Purchases")])],1),e("div",{staticClass:"text-center my-5"},[t.showShareOptions?e("div",{staticClass:"share-options mb-2"},[e("b-button",{staticClass:"share-option",on:{click:t.shareOnWhatsApp}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"whatsapp"}}),t._v(" WhatsApp ")],1),e("b-button",{staticClass:"share-option",on:{click:t.shareByEmail}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"envelope-fill"}}),t._v(" Email ")],1),e("b-button",{staticClass:"share-option",on:{click:t.shareOnTwitter}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"twitter"}}),t._v(" Twitter ")],1),e("b-button",{staticClass:"share-option",on:{click:t.shareOnFacebook}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"facebook"}}),t._v(" Facebook ")],1)],1):t._e(),e("b-button",{staticClass:"share-story-btn",attrs:{size:"sm"},on:{click:t.toggleShareOptions}},[e("b-icon",{attrs:{icon:"upload"}}),e("span",{staticClass:"ms-2"},[t._v("Share Story")])],1)],1)]),e("b-icon",{staticClass:"x-btn",attrs:{icon:"x-circle-fill","font-scale":"2.3"},on:{click:t.handleCloseClick}})],1)],1)},C=[],b={props:["animeContent","isExpanded"],data(){return{localIsExpanded:this.isExpanded,showShareOptions:!1}},watch:{isExpanded(t){this.localIsExpanded=t}},methods:{handleCloseClick(){this.localIsExpanded=!1},handleModalHidden(){this.$emit("close")},handleRefreshClick(){this.$emit("refresh")},toggleShareOptions(){this.showShareOptions=!this.showShareOptions},shareByEmail(){const t=encodeURIComponent(`Check out this anime: ${this.animeContent.title}`),e=encodeURIComponent(`Hey,\n\nI wanted to share this anime with you: ${this.animeContent.title}\n\n${this.animeContent.subTitle}\n\n${this.animeContent.text}\n\nBest,\n[Your Name]`);window.location.href=`mailto:?subject=${t}&body=${e}`},shareOnWhatsApp(){const t=encodeURIComponent(`Check out this anime: ${this.animeContent.title} - ${this.animeContent.subTitle}`);window.open(`https://wa.me/?text=${t}`,"_blank")},shareOnTwitter(){const t=encodeURIComponent(`Check out this anime: ${this.animeContent.title} - ${this.animeContent.subTitle}`);window.open(`https://twitter.com/intent/tweet?text=${t}`,"_blank")},shareOnFacebook(){const t=encodeURIComponent(window.location.href),e=encodeURIComponent(`Check out this anime: ${this.animeContent.title}`);window.open(`https://www.facebook.com/sharer/sharer.php?u=${t}&quote=${e}`,"_blank")}}},f=b,w=(0,h.A)(f,u,C,!1,null,"da90e76c",null),v=w.exports,g={name:"App",components:{MainContentCardComponent:p,ExpandedViewComponent:v},data(){return{isExpanded:!1}},computed:{...(0,i.aH)(["animeContent","error"]),currentDate(){const t=new Date,e={weekday:"long",day:"numeric",month:"long"};return t.toLocaleDateString("en-GB",e).toUpperCase()}},methods:{...(0,i.i0)(["getToken","getAnimeContent"]),async fetchNewContent(){await this.getAnimeContent()},expandView(t){this.isExpanded=!0},closeView(){this.isExpanded=!1}},async created(){await this.getToken("sanketk092@gmail.com"),await this.fetchNewContent()}},k=g,x=(0,h.A)(k,o,s,!1,null,"7c311899",null),_=x.exports,y=n(178);a["default"].use(y.Ay);const E=[{path:"/",name:"App",component:_}],O=new y.Ay({routes:E});var A=O,T=n(373);const $=async t=>{try{const e=await T.A.post("https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken",{email:t});return e.data.token}catch(e){throw console.error("Error fetching token:",e),new Error("Unable to fetch token. Please try again later.")}},I=async t=>{try{const e=await T.A.get("https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent",{headers:{Authorization:`Bearer ${t}`}});return e.data.content}catch(e){throw console.error("Error fetching anime content:",e),new Error("Unable to fetch anime content. Please try again later.")}};a["default"].use(i.Ay);var S=new i.Ay.Store({state:{token:"",animeContent:null,error:null},mutations:{setToken(t,e){t.token=e},setAnimeContent(t,e){t.animeContent=e},setError(t,e){t.error=e},clearError(t){t.error=null}},actions:{async getToken({commit:t},e){try{t("clearError");const n=await $(e);t("setToken",n)}catch(n){t("setError",n.message)}},async getAnimeContent({commit:t,state:e}){if(e.token)try{t("clearError");const n=await I(e.token);t("setAnimeContent",n)}catch(n){t("setError",n.message)}else t("setError","Token not available")}}}),R=n(641),P=n(486);n(313);a["default"].config.productionTip=!1,a["default"].use(R.vGs),a["default"].use(P.YS),new a["default"]({router:A,store:S,render:t=>t(_)}).$mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,s){if(!a){var i=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],s=t[d][2];for(var r=!0,c=0;c<a.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(r=!1,s<i&&(i=s));if(r){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,o,s]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,i=a[0],r=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(c)var d=c(n)}for(e&&e(a);l<i.length;l++)s=i[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},a=self["webpackChunkanime_detail_app"]=self["webpackChunkanime_detail_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(133)}));a=n.O(a)})();
//# sourceMappingURL=app.3a81d43c.js.map