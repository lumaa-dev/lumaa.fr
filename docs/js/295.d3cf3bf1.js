"use strict";(self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[]).push([[295],{7295:function(o,s,t){t.r(s),t.d(s,{default:function(){return v}});var d=t(3396),e=t(7139);const n={class:"mods"};function l(o,s,t,l,r,a){const c=(0,d.up)("ModPanelView");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",null,[(0,d._)("h1",null,(0,e.zw)(o.$t("pages.mods")),1)]),(0,d._)("div",n,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(r.mods,((o,s)=>((0,d.wg)(),(0,d.j4)(c,{key:s,mod:o},null,8,["mod"])))),128))])],64)}t(7658);const r={class:"main"},a=["src"],c={class:"v"},i={class:"title"};function u(o,s,t,n,l,u){return(0,d.wg)(),(0,d.iD)("div",r,[(0,d._)("img",{src:t.mod.icon_url},null,8,a),(0,d._)("div",c,[(0,d._)("p",i,(0,e.zw)(t.mod.title),1),(0,d._)("p",null,(0,e.zw)(t.mod.downloads)+" "+(0,e.zw)(o.$t("stats.downloads")),1),(0,d._)("p",null,(0,e.zw)(t.mod.followers)+" "+(0,e.zw)(o.$t("stats.followers")),1)])])}var w={props:{mod:String}},m=t(89);const p=(0,m.Z)(w,[["render",u],["__scopeId","data-v-289cbaad"]]);var h=p,_={data(){return{mods:[]}},methods:{addMod(o){this.mods.push(o),this.mods=this.mods.sort(((o,s)=>s.downloads-o.downloads))},getMods(){const o="https://api.modrinth.com/v2/user/N7V42jr4/projects";var s={method:"GET",redirect:"follow"};fetch(o,s).then((o=>o.text())).then((o=>{o=JSON.parse(o),o.forEach((o=>{"mod"==o.project_type&&this.addMod(o)}))})).catch((o=>console.log("error",o)))}},beforeMount(){this.getMods()},components:{ModPanelView:h}};const f=(0,m.Z)(_,[["render",l],["__scopeId","data-v-4eb1227c"]]);var v=f}}]);
//# sourceMappingURL=295.d3cf3bf1.js.map