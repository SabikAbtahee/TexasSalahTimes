import './polyfills.server.mjs';
import{$ as I,B as m,C as o,D as s,E as p,F as d,G as h,W as q,b as x,d as b,e as v,g as y,j as c,k as z,na as P,u as C,v as r,w as M}from"./chunk-ULHSUZ2C.mjs";import"./chunk-VVCT4QZE.mjs";var T="../../assets/youthIftar.jpeg",w="../../assets/mosque.png";var E={PrayerTimings:"https://us.mohid.co/tx/dallas/ialfm/masjid/widget/api/index/?m=prayertimings"};var O=(()=>{let t=class t{constructor(n){this.http=n}getTimes(){return this.http.get(E.PrayerTimings,{responseType:"text"})}};t.\u0275fac=function(i){return new(i||t)(y(I))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();var S=(()=>{let t=class t{constructor(){this.mosqueImage=w}set time(n){if(n){let i=n.split(" ");this.timeNumber=i[0],this.timeText=i[1]}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c({type:t,selectors:[["app-timer-card"]],inputs:{text:"text",time:"time"},decls:10,vars:4,consts:[[1,"container"],["alt","Image",1,"image",3,"src"],[1,"text1"],[1,"rounded-bg"],[1,"text2"],[1,"ampm"]],template:function(i,e){i&1&&(o(0,"div",0),p(1,"img",1),o(2,"div",2),d(3),s(),o(4,"div",3)(5,"div",4)(6,"div"),d(7),s(),o(8,"div",5),d(9),s()()()()),i&2&&(r(),m("src",e.mosqueImage,C),r(2),h(e.text),r(4),h(e.timeNumber),r(2),h(e.timeText))},styles:[".container[_ngcontent-%COMP%]{position:relative;text-align:center;width:188px;height:128px}.image[_ngcontent-%COMP%]{display:inline-block;width:74px;height:74px;background-color:#fff;border-radius:50%}.text1[_ngcontent-%COMP%]{position:absolute;bottom:0;left:-44px;text-align:right;font-size:36px;color:#ffe3e3;font-weight:700;font-family:cursive;width:138px}.text2[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;font-size:24px;font-weight:700;font-family:cursive;color:#890909}.rounded-bg[_ngcontent-%COMP%]{position:absolute;bottom:4px;right:4px;background-color:#ffeaea;border-radius:50%;display:flex;width:88px;height:88px}.ampm[_ngcontent-%COMP%]{font-size:16px}"]});let a=t;return a})();var j=(()=>{let t=class t{constructor(n){this.salahTimings=n,this.iqama=null,this.azaan=null,this.iqamas=[],this.azaans=[],this.image=T}ngOnInit(){this.prepareTimings()}prepareTimings(){this.salahTimings.getTimes().pipe(x()).subscribe(n=>{let e=new DOMParser().parseFromString(n,"text/html"),u=/\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g;e.querySelectorAll(".prayer_iqama_div").forEach(g=>{let l=g.textContent.match(u);l&&(this.iqamas=[...this.iqamas,...l])}),e.querySelectorAll(".prayer_azaan_div").forEach(g=>{let l=g.textContent.match(u);l&&(this.azaans=[...this.azaans,...l])}),this.loadTime()})}loadTime(){this.iqama={Fazr:this.iqamas[0],Zohr:this.iqamas[1],Asr:this.iqamas[2],Magrib:this.iqamas[3],Esha:this.iqamas[4],Jummah:this.iqamas[6]},this.azaan={Fazr:this.azaans[0],Zohr:this.azaans[1],Asr:this.azaans[2],Magrib:this.azaans[3],Esha:this.azaans[4],Jummah:this.iqamas[6]}}};t.\u0275fac=function(i){return new(i||t)(M(O))},t.\u0275cmp=c({type:t,selectors:[["app-salah-timings"]],decls:11,vars:10,consts:[[1,"background-container"],[1,"box-1"],[3,"text","time"],[1,"box-2"],[1,"box-3"],[1,"box-4"],[1,"box-5"]],template:function(i,e){i&1&&(o(0,"div",0)(1,"div",1),p(2,"app-timer-card",2),s(),o(3,"div",3),p(4,"app-timer-card",2),s(),o(5,"div",4),p(6,"app-timer-card",2),s(),o(7,"div",5),p(8,"app-timer-card",2),s(),o(9,"div",6),p(10,"app-timer-card",2),s()()),i&2&&(r(2),m("text","Fazr")("time",e.azaan==null?null:e.azaan.Fazr),r(2),m("text","Dhuhr")("time",e.azaan==null?null:e.azaan.Zohr),r(2),m("text","Asr")("time",e.azaan==null?null:e.azaan.Asr),r(2),m("text","Maghrib")("time",e.azaan==null?null:e.azaan.Magrib),r(2),m("text","Isha")("time",e.azaan==null?null:e.azaan.Esha))},dependencies:[S],styles:['.background-container[_ngcontent-%COMP%]{background-image:url("./media/youthIftar-U4MAEFXS.jpeg");background-size:contain;background-position:center;background-repeat:no-repeat;height:100vh;display:flex;flex-direction:row;justify-content:center;align-items:flex-end}.box-1[_ngcontent-%COMP%]{margin-bottom:70px}.box-2[_ngcontent-%COMP%]{margin-bottom:188px}.box-3[_ngcontent-%COMP%]{margin-bottom:70px}.box-4[_ngcontent-%COMP%]{margin-bottom:188px}.box-5[_ngcontent-%COMP%]{margin-bottom:70px}']});let a=t;return a})();var W=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=z({type:t}),t.\u0275inj=v({imports:[q,P.forChild([{path:"",component:j}])]});let a=t;return a})();export{W as SalahTimingsModule};
