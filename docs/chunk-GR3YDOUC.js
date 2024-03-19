import{$ as i,A as R,B as U,D as $,E as H,F as _,O as B,R as l,S as r,T as z,U as q,V as t,W as h,X as o,Y as G,Z as f,_ as K,aa as A,c as O,e as w,f as k,g as F,i as y,j as P,l as T,m as c,n as C,r as L,s as g,t as N,u as d,v as p,w as x,x as J,y as v,z as b}from"./chunk-M3HL7EZJ.js";var Q="../../assets/youthIftar.jpeg",V="../../assets/mosque.jpg",u=function(n){return n.Fazr="Fazr",n.Dhuhr="Dhuhr",n.Asr="Asr",n.Maghrib="Maghrib",n.Isha="Isha",n.Jummah="Jummah",n}(u||{});var rt=G([t({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),r("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",t("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),X=[l("fadeIn",[o(":enter",[t({opacity:0}),r("1.5s ease-in",t({opacity:1}))])]),l("fadeOut",[o(":leave",[t({opacity:1}),r("1.5s ease-out",t({opacity:0}))])]),l("fadeInOut",[o(":enter",[t({opacity:0}),r("1.5s ease-in",t({opacity:1}))]),o(":leave",[t({opacity:1}),r("1.5s ease-out",t({opacity:0}))])]),l("animate",[o("void => *",[K(rt)])]),l("animateStagger",[h("50",t("*")),h("100",t("*")),h("200",t("*")),o("void => 50",i("@*",[A("50ms",[f()])],{optional:!0})),o("void => 100",i("@*",[A("100ms",[f()])],{optional:!0})),o("void => 200",i("@*",[A("200ms",[f()])],{optional:!0}))]),l("slideInOut",[o(":leave",[t({height:"0px"}),r("300ms ease-out",t({height:"*"}))]),o(":enter",[t({height:"*"}),r("300ms ease-in",t({height:"0px"}))])]),l("slideIn",[o("void => left",[t({transform:"translateX(100%)"}),r("300ms ease-in",t({transform:"translateX(0)"}))]),o("left => void",[t({transform:"translateX(0)"}),r("300ms ease-in",t({transform:"translateX(-100%)"}))]),o("void => right",[t({transform:"translateX(-100%)"}),r("300ms ease-in",t({transform:"translateX(0)"}))]),o("right => void",[t({transform:"translateX(0)"}),r("300ms ease-in",t({transform:"translateX(100%)"}))])]),l("slideInLeft",[h("void",t({transform:"translateX(-100%)"})),h("*",t({transform:"translateX(0)"})),o("void => *",r("300ms")),o("* => void",r("300ms"))]),l("slideInRight",[h("void",t({transform:"translateX(100%)"})),h("*",t({transform:"translateX(0)"})),o("void => *",r("300ms")),o("* => void",r("300ms"))]),l("slideInTop",[h("void",t({transform:"translateY(-100%)"})),h("*",t({transform:"translateY(0)"})),o("void => *",r("300ms")),o("* => void",r("300ms"))]),l("slideInBottom",[h("void",t({transform:"translateY(100%)"})),h("*",t({transform:"translateY(0)"})),o("void => *",r("300ms")),o("* => void",r("300ms"))]),l("expandCollapse",[h("void",t({height:"0px"})),h("*",t({height:"*"})),o("void => *",r("300ms ease-out")),o("* => void",r("300ms ease-in"))]),l("routerTransitionLeft",[o("* => *",[i("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({transform:"translateX(100%)",opacity:0})],{optional:!0}),q([z([i("content > :leave",[t({transform:"translateX(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(-100%)",opacity:0}))],{optional:!0}),i("content > :enter",[t({transform:"translateX(100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",f(),{optional:!0}),i("content > :enter",f(),{optional:!0})])])]),l("routerTransitionRight",[o("* => *",[i("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({transform:"translateX(-100%)",opacity:0})],{optional:!0}),q([z([i("content > :leave",[t({transform:"translateX(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(100%)",opacity:0}))],{optional:!0}),i("content > :enter",[t({transform:"translateX(-100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",f(),{optional:!0}),i("content > :enter",f(),{optional:!0})])])]),l("routerTransitionUp",[o("* => *",[i("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({transform:"translateY(100%)",opacity:0})],{optional:!0}),z([i("content > :leave",[t({transform:"translateY(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(-100%)",opacity:0}))],{optional:!0}),i("content > :enter",[t({transform:"translateY(100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",f(),{optional:!0}),i("content > :enter",f(),{optional:!0})])]),l("routerTransitionDown",[o("* => *",[i("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({transform:"translateY(-100%)",opacity:0})],{optional:!0}),q([z([i("content > :leave",[t({transform:"translateY(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(100%)",opacity:0}))],{optional:!0}),i("content > :enter",[t({transform:"translateY(-100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",f(),{optional:!0}),i("content > :enter",f(),{optional:!0})])])]),l("routerTransitionFade",[o("* => *",z([i("content > :enter, content > :leave ",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({opacity:0})],{optional:!0}),i("content > :leave",[t({opacity:1}),r("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({opacity:0}))],{optional:!0}),i("content > :enter",[t({opacity:0}),r("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({opacity:1}))],{optional:!0}),i("content > :enter",f(),{optional:!0}),i("content > :leave",f(),{optional:!0})]))])];var W={PrayerTimings:"https://us.mohid.co/tx/dallas/ialfm/masjid/widget/api/index/?m=prayertimings"};var Z=(()=>{let e=class e{constructor(m,a){this.http=m,this.datePipe=a}getTimes(){return this.http.get(W.PrayerTimings,{responseType:"text"})}getHizriDate(m){let a=m||new Date,s=new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn",{day:"numeric"}).format(a),M=new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn",{month:"long"}).format(a),Y=new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn",{year:"numeric"}).format(a).split(" ")[0];return`${M} ${s}, ${Y}`}getEnglishDate(m){let a=m||new Date;return this.datePipe.transform(a,"E, MMMM dd, YYYY")}};e.\u0275fac=function(a){return new(a||e)(F(_),F($))},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var j=(()=>{let e=class e{constructor(){}getCurrentAnnouncementImage(m){return`assets/${m}`}getLogo(){return"assets/Logo.jpg"}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var et=(()=>{let e=class e{constructor(m){this.fileManager=m}ngOnInit(){this.currentAnnouncementImagePath=this.fileManager.getCurrentAnnouncementImage("RamadanMubarak.png")}};e.\u0275fac=function(a){return new(a||e)(C(j))},e.\u0275cmp=y({type:e,selectors:[["app-announcements"]],standalone:!0,features:[U],decls:2,vars:1,consts:[[1,"flex","justify-center"],[1,"w-full",3,"src"]],template:function(a,s){a&1&&(d(0,"div",0),x(1,"img",1),p()),a&2&&(c(),g("src",s.currentAnnouncementImagePath,T))}});let n=e;return n})();function mt(n,e){n&1&&(d(0,"div",3),x(1,"div",4),p()),n&2&&g("@fadeInOut",void 0)}function lt(n,e){if(n&1&&(d(0,"div",5)(1,"span",6),v(2),p(),d(3,"span",7),v(4),p()()),n&2){let S=J();g("@fadeInOut",void 0),c(2),b(S.timeNumber),c(2),b(S.timeText)}}var nt=(()=>{let e=class e{constructor(){this.mosqueImage=V}set time(m){if(m){let a=m.split(" ");this.timeNumber=a[0],this.timeText=a[1]}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=y({type:e,selectors:[["app-timer-card"]],inputs:{text:"text",time:"time"},decls:6,vars:2,consts:[[1,"flex","flex-col","items-center"],[1,"pb-2"],[1,"text-6xl","max-lg:text-4xl","max-md:text-3xl","max-sm:text-base","font-bold","symphony"],[1,"animate-pulse","pt-1"],[1,"h-2","w-28","max-lg:w-24","max-md:w-20","max-sm:w-10","bg-slate-700","rounded","col-span-2"],[1,"border-t-2","border-b-2","pt-1","border-black","items-center","flex"],[1,"text-4xl","max-lg:text-3xl","max-md:text-2xl","max-sm:text-sm","font-bold","mr-1","primary-color","symphony"],[1,"text-2xl","max-lg:text-xl","max-md:text-lg","max-sm:text-xs","lowercase","primary-color","symphony"]],template:function(a,s){a&1&&(d(0,"div",0)(1,"div",1)(2,"span",2),v(3),p()(),L(4,mt,2,1,"div",3)(5,lt,5,3),p()),a&2&&(c(3),b(s.text),c(),N(4,!s.timeNumber||!s.timeText?4:5))},data:{animation:X}});let n=e;return n})();var at=(()=>{let e=class e{constructor(m,a){this.salahTimings=m,this.fileManager=a,this.iqama=null,this.azaan=null,this.iqamas=[],this.azaans=[],this.image=Q,this.prayerText=u,this.hizriDate=null,this.englishDate=null}ngOnInit(){this.setLogo(),this.prepareTimings(),this.setDate()}setLogo(){this.logo=this.fileManager.getLogo()}prepareTimings(){this.salahTimings.getTimes().pipe(O()).subscribe(m=>{let s=new DOMParser().parseFromString(m,"text/html"),M=/\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g;s.querySelectorAll(".prayer_iqama_div").forEach(E=>{let I=E.textContent.match(M);I&&(this.iqamas=[...this.iqamas,...I])}),s.querySelectorAll(".prayer_azaan_div").forEach(E=>{let I=E.textContent.match(M);I&&(this.azaans=[...this.azaans,...I])}),this.loadTime()})}loadTime(){this.iqama={[u.Fazr]:this.iqamas[0],[u.Dhuhr]:this.iqamas[1],[u.Asr]:this.iqamas[2],[u.Maghrib]:this.iqamas[3],[u.Isha]:this.iqamas[4],[u.Jummah]:this.iqamas[6]},this.azaan={[u.Fazr]:this.azaans[0],[u.Dhuhr]:this.azaans[1],[u.Asr]:this.azaans[2],[u.Maghrib]:this.azaans[3],[u.Isha]:this.azaans[4],[u.Jummah]:this.azaans[6]}}setDate(){this.hizriDate=this.salahTimings.getHizriDate(),this.englishDate=this.salahTimings.getEnglishDate()}};e.\u0275fac=function(a){return new(a||e)(C(Z),C(j))},e.\u0275cmp=y({type:e,selectors:[["app-salah-timings"]],decls:23,vars:13,consts:[[1,"border","border-dashed","border-black"],[1,"flex","flex-col"],[1,"flex","flex-row"],[1,"h-36","w-36","max-md:h-28","max-md:w-28","max-sm:h-20","max-sm:w-20","flex","justify-center","items-center","p-3","gap-2"],[3,"src"],[1,"flex","flex-row","justify-evenly","w-full","items-center"],[3,"text","time"],[1,"flex","justify-center","font-bold","text-3xl","max-lg:text-2xl","max-md:text-xl","max-sm:text-sm","gap-2","text-color-gray","mt-1","symphony"]],template:function(a,s){a&1&&(x(0,"app-announcements")(1,"div",0),d(2,"div",1)(3,"div",2)(4,"div",3),x(5,"img",4),p(),d(6,"div",5)(7,"div"),x(8,"app-timer-card",6),p(),d(9,"div"),x(10,"app-timer-card",6),p(),d(11,"div"),x(12,"app-timer-card",6),p(),d(13,"div"),x(14,"app-timer-card",6),p(),d(15,"div"),x(16,"app-timer-card",6),p()()(),d(17,"div",7)(18,"span"),v(19),p(),v(20,"|"),d(21,"span"),v(22),p()()()),a&2&&(c(5),g("src",s.logo,T),c(3),g("text",s.prayerText.Fazr)("time",s.azaan==null?null:s.azaan.Fazr),c(2),g("text",s.prayerText.Dhuhr)("time",s.azaan==null?null:s.azaan.Dhuhr),c(2),g("text",s.prayerText.Asr)("time",s.azaan==null?null:s.azaan.Asr),c(2),g("text",s.prayerText.Maghrib)("time",s.azaan==null?null:s.azaan.Maghrib),c(2),g("text",s.prayerText.Isha)("time",s.azaan==null?null:s.azaan.Isha),c(3),R(" ",s.englishDate," "),c(3),b(s.hizriDate))},dependencies:[et,nt],styles:['.background-container[_ngcontent-%COMP%]{background-image:url("./media/youthIftar-U4MAEFXS.jpeg");background-size:contain;background-position:center;background-repeat:no-repeat;display:flex;flex-direction:row;justify-content:center;align-items:center}@media (max-width: 500px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:720px}}@media (min-width: 500px) and (max-width: 600px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}@media (min-width: 600px) and (max-width: 900px){.background-container[_ngcontent-%COMP%]{overflow:hidden;height:100vh}.box[_ngcontent-%COMP%]{margin-top:300px}}@media (min-width: 900px){.background-container[_ngcontent-%COMP%]{height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}'],data:{animation:X}});let n=e;return n})();var Et=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=P({type:e}),e.\u0275inj=k({imports:[H,B.forChild([{path:"",component:at}])]});let n=e;return n})();export{Et as SalahTimingsModule};
