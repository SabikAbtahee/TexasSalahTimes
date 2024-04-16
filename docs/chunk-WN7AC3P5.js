import{A as Z,B as x,C as E,D as d,E as l,F as v,G as tt,H as b,I as w,J as et,K as at,L as O,M as it,N as nt,O as rt,Q as ot,R as S,S as st,T as mt,U as lt,ba as pt,c as J,d as H,e as N,ea as p,f as L,fa as o,g as _,ga as C,h as B,ha as I,i as Q,ia as t,j as U,ja as h,k as $,ka as m,la as ct,m as j,ma as f,n as G,na as dt,o as M,oa as n,pa as q,q as D,r as K,t as V,u as c,v as T,z as W}from"./chunk-5ZD7EHVG.js";var Dt=ct([t({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),o("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",t("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),X=[p("fadeIn",[m(":enter",[t({opacity:0}),o("1.5s ease-in",t({opacity:1}))])]),p("fadeOut",[m(":leave",[t({opacity:1}),o("1.5s ease-out",t({opacity:0}))])]),p("fadeInOut",[m(":enter",[t({opacity:0}),o("1.5s ease-in",t({opacity:1}))]),m(":leave",[t({opacity:1}),o("1.5s ease-out",t({opacity:0}))])]),p("animate",[m("void => *",[dt(Dt)])]),p("animateStagger",[h("50",t("*")),h("100",t("*")),h("200",t("*")),m("void => 50",n("@*",[q("50ms",[f()])],{optional:!0})),m("void => 100",n("@*",[q("100ms",[f()])],{optional:!0})),m("void => 200",n("@*",[q("200ms",[f()])],{optional:!0}))]),p("slideInOut",[m(":leave",[t({height:"0px"}),o("300ms ease-out",t({height:"*"}))]),m(":enter",[t({height:"*"}),o("300ms ease-in",t({height:"0px"}))])]),p("slideIn",[m("void => left",[t({transform:"translateX(100%)"}),o("300ms ease-in",t({transform:"translateX(0)"}))]),m("left => void",[t({transform:"translateX(0)"}),o("300ms ease-in",t({transform:"translateX(-100%)"}))]),m("void => right",[t({transform:"translateX(-100%)"}),o("300ms ease-in",t({transform:"translateX(0)"}))]),m("right => void",[t({transform:"translateX(0)"}),o("300ms ease-in",t({transform:"translateX(100%)"}))])]),p("slideInLeft",[h("void",t({transform:"translateX(-100%)"})),h("*",t({transform:"translateX(0)"})),m("void => *",o("300ms")),m("* => void",o("300ms"))]),p("slideInRight",[h("void",t({transform:"translateX(100%)"})),h("*",t({transform:"translateX(0)"})),m("void => *",o("300ms")),m("* => void",o("300ms"))]),p("slideInTop",[h("void",t({transform:"translateY(-100%)"})),h("*",t({transform:"translateY(0)"})),m("void => *",o("300ms")),m("* => void",o("300ms"))]),p("slideInBottom",[h("void",t({transform:"translateY(100%)"})),h("*",t({transform:"translateY(0)"})),m("void => *",o("300ms")),m("* => void",o("300ms"))]),p("expandCollapse",[h("void",t({height:"0px"})),h("*",t({height:"*"})),m("void => *",o("300ms ease-out")),m("* => void",o("300ms ease-in"))]),p("routerTransitionLeft",[m("* => *",[n("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),n("content > :enter",[t({transform:"translateX(100%)",opacity:0})],{optional:!0}),I([C([n("content > :leave",[t({transform:"translateX(0)",opacity:1}),o("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(-100%)",opacity:0}))],{optional:!0}),n("content > :enter",[t({transform:"translateX(100%)"}),o("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),n("content > :leave",f(),{optional:!0}),n("content > :enter",f(),{optional:!0})])])]),p("routerTransitionRight",[m("* => *",[n("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),n("content > :enter",[t({transform:"translateX(-100%)",opacity:0})],{optional:!0}),I([C([n("content > :leave",[t({transform:"translateX(0)",opacity:1}),o("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(100%)",opacity:0}))],{optional:!0}),n("content > :enter",[t({transform:"translateX(-100%)"}),o("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),n("content > :leave",f(),{optional:!0}),n("content > :enter",f(),{optional:!0})])])]),p("routerTransitionUp",[m("* => *",[n("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),n("content > :enter",[t({transform:"translateY(100%)",opacity:0})],{optional:!0}),C([n("content > :leave",[t({transform:"translateY(0)",opacity:1}),o("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(-100%)",opacity:0}))],{optional:!0}),n("content > :enter",[t({transform:"translateY(100%)"}),o("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),n("content > :leave",f(),{optional:!0}),n("content > :enter",f(),{optional:!0})])]),p("routerTransitionDown",[m("* => *",[n("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),n("content > :enter",[t({transform:"translateY(-100%)",opacity:0})],{optional:!0}),I([C([n("content > :leave",[t({transform:"translateY(0)",opacity:1}),o("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(100%)",opacity:0}))],{optional:!0}),n("content > :enter",[t({transform:"translateY(-100%)"}),o("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),n("content > :leave",f(),{optional:!0}),n("content > :enter",f(),{optional:!0})])])]),p("routerTransitionFade",[m("* => *",C([n("content > :enter, content > :leave ",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),n("content > :enter",[t({opacity:0})],{optional:!0}),n("content > :leave",[t({opacity:1}),o("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({opacity:0}))],{optional:!0}),n("content > :enter",[t({opacity:0}),o("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({opacity:1}))],{optional:!0}),n("content > :enter",f(),{optional:!0}),n("content > :leave",f(),{optional:!0})]))])];var ut="../../assets/youthIftar.jpeg",ht="../../assets/mosque.jpg",u=function(e){return e.Fazr="Fajr",e.Dhuhr="Dhuhr",e.Asr="Asr",e.Maghrib="Maghrib",e.Isha="Isha",e.Jummah="Jummah",e}(u||{}),g=function(e){return e[e.Muharram=1]="Muharram",e[e.Safar=2]="Safar",e[e["Rabi Al-Awwal"]=3]="Rabi Al-Awwal",e[e["Rabi Al-Thani"]=4]="Rabi Al-Thani",e[e["Jumada Al-Awwal"]=5]="Jumada Al-Awwal",e[e["Jumada Al-Thani"]=6]="Jumada Al-Thani",e[e.Rajab=7]="Rajab",e[e.Shaban=8]="Shaban",e[e.Ramadan=9]="Ramadan",e[e.Shawwal=10]="Shawwal",e[e["Dhul Qadah"]=11]="Dhul Qadah",e[e["Dhu al-Hijjah"]=12]="Dhu al-Hijjah",e}(g||{}),ft={[g.Muharram]:"Muharram",[g.Safar]:"Safar",[g["Rabi Al-Awwal"]]:"Rabi Al-Awwal",[g["Rabi Al-Thani"]]:"Rabi Al-Thani",[g["Jumada Al-Awwal"]]:"Jumada Al-Awwal",[g["Jumada Al-Thani"]]:"Jumada Al-Thani",[g.Rajab]:"Rajab",[g.Shaban]:"Shaban",[g.Ramadan]:"Ramadan",[g.Shawwal]:"Shawwal",[g["Dhul Qadah"]]:"Dhul Qadah",[g["Dhu al-Hijjah"]]:"Dhu al-Hijjah"};var gt={PrayerTimings:"https://us.mohid.co/tx/dallas/ialfm/masjid/widget/api/index/?m=prayertimings"};var xt=(()=>{let a=class a{constructor(s,i){this.http=s,this.datePipe=i}getTimes(){return this.http.get(gt.PrayerTimings,{responseType:"text"}).pipe(Q(3))}getHizriDate(s){let i=s||new Date,r=new Intl.DateTimeFormat("en-TN-u-ca-islamic",{day:"numeric"}).format(i),A=parseInt(new Intl.DateTimeFormat("en-TN-u-ca-islamic",{month:"numeric"}).format(i)),k="-";A>=0&&A<=12&&(k=ft[A]);let Y=new Intl.DateTimeFormat("en-TN-u-ca-islamic",{year:"numeric"}).format(i).split(" ")[0];return`${k} ${r}, ${Y}`}getEnglishDate(s){let i=s||new Date;return this.datePipe.transform(i,"E, MMMM dd, YYYY")}};a.\u0275fac=function(i){return new(i||a)(M(lt),M(S))},a.\u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var R=(()=>{let a=class a{constructor(){}getCurrentAnnouncementImage(s){return`assets/${s}`}getLogo(){return"assets/Logo.jpg"}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var bt=(()=>{let a=class a{constructor(s){this.fileManager=s}ngOnInit(){this.currentAnnouncementImagePath=this.fileManager.getCurrentAnnouncementImage("RamadanMubarak.png")}};a.\u0275fac=function(i){return new(i||a)(T(R))},a.\u0275cmp=D({type:a,selectors:[["app-announcements"]],standalone:!0,features:[at],decls:2,vars:1,consts:[[1,"flex","justify-center"],["width","1598","height","649","priority","",1,"w-full",3,"ngSrc"]],template:function(i,r){i&1&&(d(0,"div",0),v(1,"img",1),l()),i&2&&(c(),x("ngSrc",r.currentAnnouncementImagePath))},dependencies:[mt]});let e=a;return e})();function jt(e,a){e&1&&(d(0,"div",3),v(1,"div",4),l()),e&2&&x("@fadeInOut",void 0)}function St(e,a){if(e&1&&(d(0,"div",5)(1,"span",6),b(2),l(),d(3,"span",7),b(4),l()()),e&2){let P=tt();x("@fadeInOut",void 0),c(2),w(P.timeNumber),c(2),w(P.timeText)}}var yt=(()=>{let a=class a{constructor(){this.mosqueImage=ht}set time(s){if(s){let i=s.split(" ");this.timeNumber=i[0],this.timeText=i[1]}}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=D({type:a,selectors:[["app-timer-card"]],inputs:{text:"text",time:"time"},decls:6,vars:2,consts:[[1,"flex","flex-col","items-center"],[1,"pb-2"],[1,"text-6xl","max-lg:text-4xl","max-md:text-3xl","max-sm:text-base","font-bold","symphony"],[1,"animate-pulse","pt-1"],[1,"h-2","w-28","max-lg:w-24","max-md:w-20","max-sm:w-10","bg-slate-700","rounded","col-span-2"],[1,"border-t-2","border-b-2","pt-1","border-black","items-center","flex"],[1,"text-4xl","max-lg:text-3xl","max-md:text-2xl","max-sm:text-sm","font-bold","mr-1","primary-color","symphony"],[1,"text-2xl","max-lg:text-xl","max-md:text-lg","max-sm:text-xs","lowercase","primary-color","symphony"]],template:function(i,r){i&1&&(d(0,"div",0)(1,"div",1)(2,"span",2),b(3),l()(),Z(4,jt,2,1,"div",3)(5,St,5,3),l()),i&2&&(c(3),w(r.text),c(),E(4,!r.timeNumber||!r.timeText?4:5))},data:{animation:X}});let e=a;return e})();var wt=(()=>{let a=class a{constructor(s,i,r){this.cdr=s,this.salahTimings=i,this.fileManager=r,this.iqama=null,this.azaan=null,this.image=ut,this.prayerText=u,this.hizriDate=null,this.englishDate=null,this.timeHtmlContent=new H(""),this._unsubscribeAll=new J,W(()=>{this.setClock(),this.setDate(),this.parseTimings()})}ngOnDestroy(){this._unsubscribeAll.next(!0),this._unsubscribeAll.complete(),this._unsubscribeAll.unsubscribe()}ngOnInit(){this.setLogo(),this.getTimings()}setClock(){this.clock=L(0,1e3).pipe($(()=>{new Date().getHours()===0&&this.setDate()}),N(()=>new Date))}setLogo(){this.logo=this.fileManager.getLogo()}getTimings(){this.salahTimings.getTimes().pipe(B()).subscribe(s=>{this.timeHtmlContent.next(s)})}parseTimings(){this.timeHtmlContent.pipe(U(this._unsubscribeAll),_(s=>!!s)).subscribe(s=>{setTimeout(()=>{let r=new DOMParser().parseFromString(s,"text/html"),A=/\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g;r.querySelectorAll(".prayer_iqama_div").forEach(F=>{let y=F.textContent.match(A);y&&(this.iqamas=this.iqamas?[...this.iqamas,...y]:[...y])}),r.querySelectorAll(".prayer_azaan_div").forEach(F=>{let y=F.textContent.match(A);y&&(this.azaans=this.azaans?[...this.azaans,...y]:[...y])}),this.loadTime()},0)})}loadTime(){this.iqama={[u.Fazr]:this.iqamas[0],[u.Dhuhr]:this.iqamas[1],[u.Asr]:this.iqamas[2],[u.Maghrib]:this.iqamas[3],[u.Isha]:this.iqamas[4],[u.Jummah]:this.iqamas[6]},this.azaan={[u.Fazr]:this.azaans[0],[u.Dhuhr]:this.azaans[1],[u.Asr]:this.azaans[2],[u.Maghrib]:this.azaans[3],[u.Isha]:this.azaans[4],[u.Jummah]:this.azaans[6]}}setDate(){this.hizriDate=this.salahTimings.getHizriDate(),this.englishDate=this.salahTimings.getEnglishDate()}};a.\u0275fac=function(i){return new(i||a)(T(rt),T(xt),T(R))},a.\u0275cmp=D({type:a,selectors:[["app-salah-timings"]],decls:28,vars:19,consts:[[1,"border","border-dashed","border-black"],[1,"flex","flex-col","mb-8"],[1,"flex","flex-row"],[1,"h-36","w-36","max-md:h-28","max-md:w-28","max-sm:h-20","max-sm:w-20","flex","justify-center","items-center","p-3","gap-2"],[3,"src"],[1,"flex","flex-row","justify-evenly","w-full","items-center"],[3,"text","time"],[1,"flex","justify-center","font-bold","text-3xl","max-lg:text-2xl","max-md:text-xl","max-sm:text-sm","gap-2","text-color-gray","mt-1","symphony"]],template:function(i,r){i&1&&(v(0,"app-announcements")(1,"div",0),d(2,"div",1)(3,"div",2)(4,"div",3),v(5,"img",4),l(),d(6,"div",5)(7,"div"),v(8,"app-timer-card",6),l(),d(9,"div"),v(10,"app-timer-card",6),l(),d(11,"div"),v(12,"app-timer-card",6),l(),d(13,"div"),v(14,"app-timer-card",6),l(),d(15,"div"),v(16,"app-timer-card",6),l()()(),d(17,"div",7)(18,"span"),b(19),O(20,"async"),O(21,"date"),l(),b(22," | "),d(23,"span"),b(24),l(),b(25,"|"),d(26,"span"),b(27),l()()()),i&2&&(c(5),x("src",r.logo,V),c(3),x("text",r.prayerText.Fazr)("time",r.iqama==null?null:r.iqama.Fajr),c(2),x("text",r.prayerText.Dhuhr)("time",r.iqama==null?null:r.iqama.Dhuhr),c(2),x("text",r.prayerText.Asr)("time",r.iqama==null?null:r.iqama.Asr),c(2),x("text",r.prayerText.Maghrib)("time",r.iqama==null?null:r.iqama.Maghrib),c(2),x("text",r.prayerText.Isha)("time",r.iqama==null?null:r.iqama.Isha),c(3),w(nt(21,16,it(20,14,r.clock),"hh:mm:ss a")),c(5),et(" ",r.englishDate," "),c(3),w(r.hizriDate))},dependencies:[bt,yt,ot,S],styles:['.background-container[_ngcontent-%COMP%]{background-image:url("./media/youthIftar-U4MAEFXS.jpeg");background-size:contain;background-position:center;background-repeat:no-repeat;display:flex;flex-direction:row;justify-content:center;align-items:center}@media (max-width: 500px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:720px}}@media (min-width: 500px) and (max-width: 600px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}@media (min-width: 600px) and (max-width: 900px){.background-container[_ngcontent-%COMP%]{overflow:hidden;height:100vh}.box[_ngcontent-%COMP%]{margin-top:300px}}@media (min-width: 900px){.background-container[_ngcontent-%COMP%]{height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}'],data:{animation:X}});let e=a;return e})();var te=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=K({type:a}),a.\u0275inj=G({imports:[st,pt.forChild([{path:"",component:wt}])]});let e=a;return e})();export{te as SalahTimingsModule};