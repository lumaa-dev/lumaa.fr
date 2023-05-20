(function(){var t={3482:function(t,e,n){"use strict";n.r(e),e["default"]={motto:t=>{const{normalize:e}=t;return e(["Developer with an empty head"])},usmp:t=>{const{normalize:e}=t;return e(["Unknown SMP"])},pages:{home:t=>{const{normalize:e}=t;return e(["Home"])},mods:t=>{const{normalize:e}=t;return e(["Mods"])}},content:{home:{description:t=>{const{normalize:e}=t;return e(["Website under construction..."])}},usmp:{body:t=>{const{normalize:e}=t;return e(["The Unknown SMP is a half-scripted half-survival private Minecraft server."])},socials:t=>{const{normalize:e}=t;return e(["Find the Unknown SMP now!"])}},mods:{support:t=>{const{normalize:e}=t;return e(["Need help? Click here!"])}},redirect:{redirecting:t=>{const{normalize:e}=t;return e(["Redirecting..."])},back:t=>{const{normalize:e}=t;return e(["Go back"])}}},components:{modal:{close:t=>{const{normalize:e}=t;return e(["Click to dismiss"])}}},languages:{fr:t=>{const{normalize:e}=t;return e(["French"])},en:t=>{const{normalize:e}=t;return e(["English"])}},stats:{downloads:t=>{const{normalize:e}=t;return e(["downloads"])},followers:t=>{const{normalize:e}=t;return e(["followers"])}},error:{unknown_unsafe_link:t=>{const{normalize:e}=t;return e(["Redirection link is unknown or not safe."])},fail_fetch_mods:t=>{const{normalize:e}=t;return e(["Mods couldn't be fetched."])}},footer:{copyright:t=>{const{normalize:e}=t;return e(["© Copyright Lumaa 2022-[now]. All Rights Reserved"])}}}},5627:function(t,e,n){"use strict";n.r(e),e["default"]={motto:t=>{const{normalize:e}=t;return e(["Développeur avec la tête vide"])},usmp:t=>{const{normalize:e}=t;return e(["Unknown SMP"])},pages:{home:t=>{const{normalize:e}=t;return e(["Accueil"])},mods:t=>{const{normalize:e}=t;return e(["Mods"])}},content:{home:{description:t=>{const{normalize:e}=t;return e(["Site web en construction..."])}},usmp:{body:t=>{const{normalize:e}=t;return e(["La Unknown SMP est un serveur Minecraft privé mi-scripté mi-survie."])},socials:t=>{const{normalize:e}=t;return e(["Trouvez la Unknown SMP maintenant !"])}},mods:{support:t=>{const{normalize:e}=t;return e(["Besoin d'aide ? Cliquez ici !"])}},redirect:{redirecting:t=>{const{normalize:e}=t;return e(["Redirection..."])},back:t=>{const{normalize:e}=t;return e(["Retour arrière"])}}},components:{modal:{close:t=>{const{normalize:e}=t;return e(["Cliquez pour fermer"])}}},languages:{fr:t=>{const{normalize:e}=t;return e(["Français"])},en:t=>{const{normalize:e}=t;return e(["Anglais"])}},stats:{downloads:t=>{const{normalize:e}=t;return e(["téléchargements"])},followers:t=>{const{normalize:e}=t;return e(["followers"])}},error:{unknown_unsafe_link:t=>{const{normalize:e}=t;return e(["Le lien de redirection est inconnu ou pas sécurisé."])},fail_fetch_mods:t=>{const{normalize:e}=t;return e(["Les mods n'ont pas pu être récupérés."])}},footer:{copyright:t=>{const{normalize:e}=t;return e(["© Copyright Lumaa 2022-[now]. Tous droits réservés"])}}}},341:function(t,e,n){"use strict";var o=n(9242),r=n(3396),s=n(7139);const a={class:"content"},i={class:"footer"},l=["selected","value"];function c(t,e,n,o,c,u){const d=(0,r.up)("ErrorModalView"),m=(0,r.up)("router-link"),p=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(d),(0,r._)("nav",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.links,((e,n)=>((0,r.wg)(),(0,r.j4)(m,{key:n,to:e.url},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(t.$t(e.name)),1)])),_:2},1032,["to"])))),128))]),(0,r._)("div",a,[(0,r.Wm)(p)]),(0,r._)("div",i,[(0,r._)("p",null,(0,s.zw)(t.$t("footer.copyright").replace("[now]",(new Date).getFullYear())),1),(0,r._)("select",{onInput:e[0]||(e[0]=t=>u.changeLang(t.target.value))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.langs,((e,n)=>((0,r.wg)(),(0,r.iD)("option",{selected:this.lang==e.id,key:n,value:e.id},(0,s.zw)(t.$t(e.name)),9,l)))),128))],32)])],64)}const u=["data-closed"],d={class:"content"},m={class:"dismiss"};function p(t,e,n,o,a,i){return""!=a.string?((0,r.wg)(),(0,r.iD)("div",{key:0,"data-closed":a.closed,class:"modal",onClick:e[0]||(e[0]=t=>i.closeModal())},[(0,r._)("div",d,[(0,r._)("p",null,(0,s.zw)(t.$t("error."+t.$data.string)),1),(0,r._)("p",m,(0,s.zw)(t.$t("components.modal.close")),1)])],8,u)):(0,r.kq)("",!0)}n(7658);var h={data(){return{string:"",closed:!1}},methods:{getError(){let t=this.$route.query.error;return null==t&&void 0==t&&""==t?(this.$router.push("/"),null):t},closeModal(){this.$data.closed=!0}},beforeMount(){setTimeout((()=>{let t=this.getError();null!=t&&void 0!=t&&(this.$data.string=t)}),50)}},f=n(89);const g=(0,f.Z)(h,[["render",p]]);var w=g,v={data(){return{links:[{url:"/",name:"pages.home"},{url:"/unknownsmp",name:"usmp"},{url:"/mods",name:"pages.mods"}],lang:"",langs:[{id:"en",name:"languages.en"},{id:"fr",name:"languages.fr"}]}},methods:{changeLang(t){this.lang=t,this.$i18n.locale=t,this.$store.commit("setLang",t),localStorage.setItem("lang",t)},loadLang(){let t=localStorage.getItem("lang")||"en";this.lang=t,this.$i18n.locale=t}},beforeMount(){this.loadLang()},components:{ErrorModalView:w}};const _=(0,f.Z)(v,[["render",c]]);var b=_,k=n(2483);const z=t=>((0,r.dD)("data-v-5d7c21b0"),t=t(),(0,r.Cn)(),t),y={class:"home"},M=z((()=>(0,r._)("h1",null,"Lumaa",-1))),$={class:"sub"},L=z((()=>(0,r._)("div",{class:"sep"},null,-1)));function O(t,e){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",y,[M,(0,r._)("p",$,(0,s.zw)(t.$t("motto")),1),L,(0,r._)("p",null,(0,s.zw)(t.$t("content.home.description")),1),(0,r.Wm)(n,{to:"/redirect?url=https://lumaa.brebond.com/","data-styled":""},{default:(0,r.w5)((()=>[(0,r.Uk)("Site actuel")])),_:1},8,["to"])])}const E={},S=(0,f.Z)(E,[["render",O],["__scopeId","data-v-5d7c21b0"]]);var P=S;const U={class:"mods"};function j(t,e,n,o,a,i){const l=(0,r.up)("router-link"),c=(0,r.up)("ModPanelView");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",null,[(0,r._)("h1",null,(0,s.zw)(t.$t("pages.mods")),1)]),(0,r._)("div",U,[(0,r.Wm)(l,{class:"x","data-styled":"",to:"/support"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(t.$t("content.mods.support")),1)])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.mods,((t,e)=>((0,r.wg)(),(0,r.j4)(c,{key:e,mod:t},null,8,["mod"])))),128))])],64)}const D={class:"main",tabindex:"0"},C=["src"],T={class:"v"},A={class:"title"};function N(t,e,n,o,a,i){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(l,{to:"/redirect?url=https://modrinth.com/mod/"+n.mod.id,tabindex:"-1"},{default:(0,r.w5)((()=>[(0,r._)("div",D,[(0,r._)("img",{src:n.mod.icon_url,draggable:"false"},null,8,C),(0,r._)("div",T,[(0,r._)("p",A,(0,s.zw)(n.mod.title),1),(0,r._)("p",null,(0,s.zw)(n.mod.downloads)+" "+(0,s.zw)(t.$t("stats.downloads")),1),(0,r._)("p",null,(0,s.zw)(n.mod.followers)+" "+(0,s.zw)(t.$t("stats.followers")),1)])])])),_:1},8,["to"])}var R={props:{mod:Object}};const I=(0,f.Z)(R,[["render",N],["__scopeId","data-v-6b6abb86"]]);var V=I,x={data(){return{mods:[]}},methods:{addMod(t){this.mods.push(t),this.mods=this.mods.sort(((t,e)=>e.downloads-t.downloads))},getMods(){const t="https://api.modrinth.com/v2/user/N7V42jr4/projects";var e={method:"GET",redirect:"follow"};fetch(t,e).then((t=>t.text())).then((t=>{t=JSON.parse(t),t.forEach((t=>{"mod"==t.project_type&&this.addMod(t)}))})).catch((t=>{console.log("error",t),this.$router.push("/?error=fail_fetch_mods")}))}},beforeMount(){this.getMods()},components:{ModPanelView:V}};const B=(0,f.Z)(x,[["render",j],["__scopeId","data-v-0d82bd94"]]);var Y=B;function Z(t,e,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h1",null,(0,s.zw)(t.$t("content.redirect.redirecting")),1),(0,r._)("button",{"data-styled":"",onClick:e[0]||(e[0]=(...t)=>this.goBack&&this.goBack(...t))},(0,s.zw)(t.$t("content.redirect.back")),1)])}var F={data(){return{timeout:null}},methods:{getUrl(){return this.$route.query.url},safeUrl(t){return t.startsWith("https")},addSpecialParam(t){return t.includes("?")?t+"&source=lumaa":t+"?source=lumaa"},goBack(){this.$router.back(),clearTimeout(this.$data.timeout)}},beforeMount(){let t=this.getUrl();void 0!=t&&""!=t||this.goBack(),t=this.addSpecialParam(t),(!this.safeUrl(t)||t.length<1)&&(t="/?error=unknown_unsafe_link"),this.$data.timeout=setTimeout((()=>{window.location.href=t}),3e3)}};const H=(0,f.Z)(F,[["render",Z],["__scopeId","data-v-1cbfceb8"]]);var q=H;const W=t=>((0,r.dD)("data-v-49b4369a"),t=t(),(0,r.Cn)(),t),K=W((()=>(0,r._)("div",{class:"unknownsmp"},[(0,r._)("img",{src:"https://brebond.com/lumaa/assets/unknown.png"})],-1))),G={class:"sep"};function Q(t,e){return(0,r.wg)(),(0,r.iD)(r.HY,null,[K,(0,r._)("p",G,(0,s.zw)(t.$t("content.usmp.body")),1),(0,r._)("h1",null,(0,s.zw)(t.$t("content.usmp.socials")),1)],64)}const J={},X=(0,f.Z)(J,[["render",Q],["__scopeId","data-v-49b4369a"]]);var tt=X;const et=[{path:"/",alias:"/home",name:"home",meta:{title:"Lumaa"},component:P},{path:"/unknownsmp",alias:"/usmp",name:"unknownsmp",meta:{title:"Unknown SMP"},component:tt},{path:"/mods",name:"mods",meta:{title:"Lumaa - Mods"},component:Y},{path:"/redirect",name:"redirect",meta:{title:"Redirecting..."},component:q}],nt=t=>"/redirect?url="+t,ot=[{path:"/support",redirect:nt("https://discord.gg/Rqpn3C7yR5")},{path:"/community",redirect:nt("https://discord.gg/jQ2XcVbpbQ")},{path:"/twitch",redirect:nt("https://twitch.tv/lumaa_dev")},{path:"/youtube",redirect:nt("https://youtube.com/@lumaa_dev")},{path:"/tiktok",redirect:nt("https://tiktok.com/@lumaa_dev")},{path:"/instagram",redirect:nt("https://instagram.com/lumaa_dev")},{path:"/github",redirect:nt("https://github.com/lumaa_dev")},{path:"/v-fast",alias:"/vfast",redirect:nt("https://github.com/v-fast")}];et.push(...ot);const rt=(0,k.p7)({history:(0,k.PO)(),routes:et}),st="Lumaa";rt.afterEach((t=>{(0,r.Y3)((()=>{document.title=t.meta.title||st}))}));var at=rt,it=n(5658);function lt(){const t=n(2528),e={};return t.keys().forEach((n=>{const o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){const r=o[1];e[r]=t(n).default}})),e}const ct=(0,it.o)({legacy:!1,locale:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_I18N_LOCALE||"en",fallbackLocale:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:lt()});var ut=n(65);const dt=(0,ut.MT)({state(){return{lang:""}},getters:{getLang(t){return t.lang}},mutations:{setLang(t,e){t.lang=e}},actions:{},modules:{}});var mt=dt;(0,o.ri)(b).use(ct).use(mt).use(at).mount("#app")},2528:function(t,e,n){var o={"./en.json":3482,"./fr.json":5627};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=s,t.exports=r,r.id=2528}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,s){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],s=t[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(i=!1,s<a&&(a=s));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,a=o[0],i=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(e&&e(o);c<a.length;c++)s=a[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},o=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(341)}));o=n.O(o)})();
//# sourceMappingURL=app.37f18361.js.map