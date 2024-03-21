import{A as v,B as X,C as u,D as l,E as b,F as q,G as y,H as z,I as tt,J as et,K as _,L as at,M as nt,N as it,P as rt,Q as R,R as ot,S as st,T as mt,aa as lt,c as N,d as L,da as d,e as B,ea as r,f as Q,fa as C,g as U,ga as k,h as $,ha as e,i as G,ia as f,j as K,ja as s,ka as pt,l as j,la as g,m as V,ma as ct,n as J,na as i,oa as F,p as T,q as W,s as Z,t as c,u as D,y as E,z as I}from"./chunk-EVH44TDI.js";var zt=pt([e({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),r("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",e("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),M=[d("fadeIn",[s(":enter",[e({opacity:0}),r("1.5s ease-in",e({opacity:1}))])]),d("fadeOut",[s(":leave",[e({opacity:1}),r("1.5s ease-out",e({opacity:0}))])]),d("fadeInOut",[s(":enter",[e({opacity:0}),r("1.5s ease-in",e({opacity:1}))]),s(":leave",[e({opacity:1}),r("1.5s ease-out",e({opacity:0}))])]),d("animate",[s("void => *",[ct(zt)])]),d("animateStagger",[f("50",e("*")),f("100",e("*")),f("200",e("*")),s("void => 50",i("@*",[F("50ms",[g()])],{optional:!0})),s("void => 100",i("@*",[F("100ms",[g()])],{optional:!0})),s("void => 200",i("@*",[F("200ms",[g()])],{optional:!0}))]),d("slideInOut",[s(":leave",[e({height:"0px"}),r("300ms ease-out",e({height:"*"}))]),s(":enter",[e({height:"*"}),r("300ms ease-in",e({height:"0px"}))])]),d("slideIn",[s("void => left",[e({transform:"translateX(100%)"}),r("300ms ease-in",e({transform:"translateX(0)"}))]),s("left => void",[e({transform:"translateX(0)"}),r("300ms ease-in",e({transform:"translateX(-100%)"}))]),s("void => right",[e({transform:"translateX(-100%)"}),r("300ms ease-in",e({transform:"translateX(0)"}))]),s("right => void",[e({transform:"translateX(0)"}),r("300ms ease-in",e({transform:"translateX(100%)"}))])]),d("slideInLeft",[f("void",e({transform:"translateX(-100%)"})),f("*",e({transform:"translateX(0)"})),s("void => *",r("300ms")),s("* => void",r("300ms"))]),d("slideInRight",[f("void",e({transform:"translateX(100%)"})),f("*",e({transform:"translateX(0)"})),s("void => *",r("300ms")),s("* => void",r("300ms"))]),d("slideInTop",[f("void",e({transform:"translateY(-100%)"})),f("*",e({transform:"translateY(0)"})),s("void => *",r("300ms")),s("* => void",r("300ms"))]),d("slideInBottom",[f("void",e({transform:"translateY(100%)"})),f("*",e({transform:"translateY(0)"})),s("void => *",r("300ms")),s("* => void",r("300ms"))]),d("expandCollapse",[f("void",e({height:"0px"})),f("*",e({height:"*"})),s("void => *",r("300ms ease-out")),s("* => void",r("300ms ease-in"))]),d("routerTransitionLeft",[s("* => *",[i("content > :enter, content > :leave",[e({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[e({transform:"translateX(100%)",opacity:0})],{optional:!0}),k([C([i("content > :leave",[e({transform:"translateX(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({transform:"translateX(-100%)",opacity:0}))],{optional:!0}),i("content > :enter",[e({transform:"translateX(100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",g(),{optional:!0}),i("content > :enter",g(),{optional:!0})])])]),d("routerTransitionRight",[s("* => *",[i("content > :enter, content > :leave",[e({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[e({transform:"translateX(-100%)",opacity:0})],{optional:!0}),k([C([i("content > :leave",[e({transform:"translateX(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({transform:"translateX(100%)",opacity:0}))],{optional:!0}),i("content > :enter",[e({transform:"translateX(-100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",g(),{optional:!0}),i("content > :enter",g(),{optional:!0})])])]),d("routerTransitionUp",[s("* => *",[i("content > :enter, content > :leave",[e({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[e({transform:"translateY(100%)",opacity:0})],{optional:!0}),C([i("content > :leave",[e({transform:"translateY(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({transform:"translateY(-100%)",opacity:0}))],{optional:!0}),i("content > :enter",[e({transform:"translateY(100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",g(),{optional:!0}),i("content > :enter",g(),{optional:!0})])]),d("routerTransitionDown",[s("* => *",[i("content > :enter, content > :leave",[e({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[e({transform:"translateY(-100%)",opacity:0})],{optional:!0}),k([C([i("content > :leave",[e({transform:"translateY(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({transform:"translateY(100%)",opacity:0}))],{optional:!0}),i("content > :enter",[e({transform:"translateY(-100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",g(),{optional:!0}),i("content > :enter",g(),{optional:!0})])])]),d("routerTransitionFade",[s("* => *",C([i("content > :enter, content > :leave ",[e({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[e({opacity:0})],{optional:!0}),i("content > :leave",[e({opacity:1}),r("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({opacity:0}))],{optional:!0}),i("content > :enter",[e({opacity:0}),r("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",e({opacity:1}))],{optional:!0}),i("content > :enter",g(),{optional:!0}),i("content > :leave",g(),{optional:!0})]))])];var dt="../../assets/youthIftar.jpeg",ut="../../assets/mosque.jpg",h=function(t){return t.Fazr="Fazr",t.Dhuhr="Dhuhr",t.Asr="Asr",t.Maghrib="Maghrib",t.Isha="Isha",t.Jummah="Jummah",t}(h||{}),x=function(t){return t[t.Muharram=1]="Muharram",t[t.Safar=2]="Safar",t[t["Rabi Al-Awwal"]=3]="Rabi Al-Awwal",t[t["Rabi Al-Thani"]=4]="Rabi Al-Thani",t[t["Jumada Al-Awwal"]=5]="Jumada Al-Awwal",t[t["Jumada Al-Thani"]=6]="Jumada Al-Thani",t[t.Rajab=7]="Rajab",t[t.Shaban=8]="Shaban",t[t.Ramadan=9]="Ramadan",t[t.Shawwal=10]="Shawwal",t[t["Dhul Qadah"]=11]="Dhul Qadah",t[t["Dhu al-Hijjah"]=12]="Dhu al-Hijjah",t}(x||{}),ht={[x.Muharram]:"Muharram",[x.Safar]:"Safar",[x["Rabi Al-Awwal"]]:"Rabi Al-Awwal",[x["Rabi Al-Thani"]]:"Rabi Al-Thani",[x["Jumada Al-Awwal"]]:"Jumada Al-Awwal",[x["Jumada Al-Thani"]]:"Jumada Al-Thani",[x.Rajab]:"Rajab",[x.Shaban]:"Shaban",[x.Ramadan]:"Ramadan",[x.Shawwal]:"Shawwal",[x["Dhul Qadah"]]:"Dhul Qadah",[x["Dhu al-Hijjah"]]:"Dhu al-Hijjah"};var ft={PrayerTimings:"https://us.mohid.co/tx/dallas/ialfm/masjid/widget/api/index/?m=prayertimings"};var gt=(()=>{let a=class a{constructor(o,n){this.http=o,this.datePipe=n}getTimes(){return this.http.get(ft.PrayerTimings,{responseType:"text"}).pipe(G(3))}getHizriDate(o){let n=o||new Date,m=new Intl.DateTimeFormat("en-TN-u-ca-islamic",{day:"numeric"}).format(n),A=parseInt(new Intl.DateTimeFormat("en-TN-u-ca-islamic",{month:"numeric"}).format(n)),P="-";A>=0&&A<=12&&(P=ht[A]);let H=new Intl.DateTimeFormat("en-TN-u-ca-islamic",{year:"numeric"}).format(n).split(" ")[0];return`${P} ${m}, ${H}`}getEnglishDate(o){let n=o||new Date;return this.datePipe.transform(n,"E, MMMM dd, YYYY")}};a.\u0275fac=function(n){return new(n||a)(J(mt),J(R))},a.\u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"});let t=a;return t})();var O=(()=>{let a=class a{constructor(){}getCurrentAnnouncementImage(o){return`assets/${o}`}getLogo(){return"assets/Logo.jpg"}};a.\u0275fac=function(n){return new(n||a)},a.\u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"});let t=a;return t})();var vt=(()=>{let a=class a{constructor(o){this.fileManager=o}ngOnInit(){this.currentAnnouncementImagePath=this.fileManager.getCurrentAnnouncementImage("RamadanMubarak.png")}};a.\u0275fac=function(n){return new(n||a)(D(O))},a.\u0275cmp=T({type:a,selectors:[["app-announcements"]],standalone:!0,features:[et],decls:2,vars:1,consts:[[1,"flex","justify-center"],["width","1598","height","649","priority","",1,"w-full",3,"ngSrc"]],template:function(n,m){n&1&&(u(0,"div",0),b(1,"img",1),l()),n&2&&(c(),v("ngSrc",m.currentAnnouncementImagePath))},dependencies:[st]});let t=a;return t})();function Ct(t,a){t&1&&(u(0,"div",3),b(1,"div",4),l()),t&2&&v("@fadeInOut",void 0)}function St(t,a){if(t&1&&(u(0,"div",5)(1,"span",6),y(2),l(),u(3,"span",7),y(4),l()()),t&2){let p=q();v("@fadeInOut",void 0),c(2),z(p.timeNumber),c(2),z(p.timeText)}}var bt=(()=>{let a=class a{constructor(){this.mosqueImage=ut}set time(o){if(o){let n=o.split(" ");this.timeNumber=n[0],this.timeText=n[1]}}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=T({type:a,selectors:[["app-timer-card"]],inputs:{text:"text",time:"time"},decls:6,vars:2,consts:[[1,"flex","flex-col","items-center"],[1,"pb-2"],[1,"text-6xl","max-lg:text-4xl","max-md:text-3xl","max-sm:text-base","font-bold","symphony"],[1,"animate-pulse","pt-1"],[1,"h-2","w-28","max-lg:w-24","max-md:w-20","max-sm:w-10","bg-slate-700","rounded","col-span-2"],[1,"border-t-2","border-b-2","pt-1","border-black","items-center","flex"],[1,"text-4xl","max-lg:text-3xl","max-md:text-2xl","max-sm:text-sm","font-bold","mr-1","primary-color","symphony"],[1,"text-2xl","max-lg:text-xl","max-md:text-lg","max-sm:text-xs","lowercase","primary-color","symphony"]],template:function(n,m){n&1&&(u(0,"div",0)(1,"div",1)(2,"span",2),y(3),l()(),I(4,Ct,2,1,"div",3)(5,St,5,3),l()),n&2&&(c(3),z(m.text),c(),X(4,!m.timeNumber||!m.timeText?4:5))},data:{animation:M}});let t=a;return t})();function It(t,a){if(t&1&&(u(0,"div",5)(1,"div"),b(2,"app-timer-card",7),l(),u(3,"div"),b(4,"app-timer-card",7),l(),u(5,"div"),b(6,"app-timer-card",7),l(),u(7,"div"),b(8,"app-timer-card",7),l(),u(9,"div"),b(10,"app-timer-card",7),l()()),t&2){let p=q();c(2),v("text",p.prayerText.Fazr)("time",p.azaan==null?null:p.azaan.Fazr),c(2),v("text",p.prayerText.Dhuhr)("time",p.azaan==null?null:p.azaan.Dhuhr),c(2),v("text",p.prayerText.Asr)("time",p.azaan==null?null:p.azaan.Asr),c(2),v("text",p.prayerText.Maghrib)("time",p.azaan==null?null:p.azaan.Maghrib),c(2),v("text",p.prayerText.Isha)("time",p.azaan==null?null:p.azaan.Isha)}}var yt=(()=>{let a=class a{constructor(o,n,m){this.cdr=o,this.salahTimings=n,this.fileManager=m,this.iqama=null,this.azaan=null,this.image=dt,this.prayerText=h,this.hizriDate=null,this.englishDate=null,this.timeHtmlContent=new L(""),this._unsubscribeAll=new N,E(()=>{this.setClock(),this.parseTimings()})}ngOnDestroy(){this._unsubscribeAll.next(!0),this._unsubscribeAll.complete(),this._unsubscribeAll.unsubscribe()}ngOnInit(){this.setLogo(),this.getTimings(),this.setDate()}setClock(){this.clock=Q(0,1e3).pipe(B(()=>new Date))}setLogo(){this.logo=this.fileManager.getLogo()}getTimings(){this.salahTimings.getTimes().pipe($()).subscribe(o=>{this.timeHtmlContent.next(o)})}parseTimings(){this.timeHtmlContent.pipe(K(this._unsubscribeAll),U(o=>!!o)).subscribe(o=>{setTimeout(()=>{let m=new DOMParser().parseFromString(o,"text/html"),A=/\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g;m.querySelectorAll(".prayer_iqama_div").forEach(Y=>{let w=Y.textContent.match(A);w&&(this.iqamas=this.iqamas?[...this.iqamas,...w]:[...w])}),m.querySelectorAll(".prayer_azaan_div").forEach(Y=>{let w=Y.textContent.match(A);w&&(this.azaans=this.azaans?[...this.azaans,...w]:[...w])}),this.loadTime()},0)})}loadTime(){this.iqama={[h.Fazr]:this.iqamas[0],[h.Dhuhr]:this.iqamas[1],[h.Asr]:this.iqamas[2],[h.Maghrib]:this.iqamas[3],[h.Isha]:this.iqamas[4],[h.Jummah]:this.iqamas[6]},this.azaan={[h.Fazr]:this.azaans[0],[h.Dhuhr]:this.azaans[1],[h.Asr]:this.azaans[2],[h.Maghrib]:this.azaans[3],[h.Isha]:this.azaans[4],[h.Jummah]:this.azaans[6]}}setDate(){this.hizriDate=this.salahTimings.getHizriDate(),this.englishDate=this.salahTimings.getEnglishDate()}};a.\u0275fac=function(n){return new(n||a)(D(it),D(gt),D(O))},a.\u0275cmp=T({type:a,selectors:[["app-salah-timings"]],decls:18,vars:10,consts:[[1,"border","border-dashed","border-black"],[1,"flex","flex-col","mb-8"],[1,"flex","flex-row"],[1,"h-36","w-36","max-md:h-28","max-md:w-28","max-sm:h-20","max-sm:w-20","flex","justify-center","items-center","p-3","gap-2"],[3,"src"],[1,"flex","flex-row","justify-evenly","w-full","items-center"],[1,"flex","justify-center","font-bold","text-3xl","max-lg:text-2xl","max-md:text-xl","max-sm:text-sm","gap-2","text-color-gray","mt-1","symphony"],[3,"text","time"]],template:function(n,m){n&1&&(b(0,"app-announcements")(1,"div",0),u(2,"div",1)(3,"div",2)(4,"div",3),b(5,"img",4),l(),I(6,It,11,10,"div",5),l(),u(7,"div",6)(8,"span"),y(9),_(10,"async"),_(11,"date"),l(),y(12," | "),u(13,"span"),y(14),l(),y(15,"|"),u(16,"span"),y(17),l()()()),n&2&&(c(5),v("src",m.logo,Z),c(),X(6,m.azaans&&m.azaans.length>0?6:-1),c(3),z(nt(11,7,at(10,5,m.clock),"hh:mm:ss a")),c(5),tt(" ",m.englishDate," "),c(3),z(m.hizriDate))},dependencies:[vt,bt,rt,R],styles:['.background-container[_ngcontent-%COMP%]{background-image:url("./media/youthIftar-U4MAEFXS.jpeg");background-size:contain;background-position:center;background-repeat:no-repeat;display:flex;flex-direction:row;justify-content:center;align-items:center}@media (max-width: 500px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:720px}}@media (min-width: 500px) and (max-width: 600px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}@media (min-width: 600px) and (max-width: 900px){.background-container[_ngcontent-%COMP%]{overflow:hidden;height:100vh}.box[_ngcontent-%COMP%]{margin-top:300px}}@media (min-width: 900px){.background-container[_ngcontent-%COMP%]{height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}'],data:{animation:M}});let t=a;return t})();var te=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=W({type:a}),a.\u0275inj=V({imports:[ot,lt.forChild([{path:"",component:yt}])]});let t=a;return t})();export{te as SalahTimingsModule};
