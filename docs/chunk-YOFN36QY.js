import{$ as Z,A as $,B as U,D as _,E as B,F as G,G as K,P as V,S as l,T as r,U as A,V as S,W as t,X as h,Y as o,Z as W,_ as f,aa as i,ba as I,c as k,e as j,f as P,g as R,i as w,j as J,l as N,m as c,n as T,r as H,s as x,t as L,u as d,v as p,w as v,x as Q,y,z}from"./chunk-T77EM2MF.js";var E="../../assets/youthIftar.jpeg",tt="../../assets/mosque.jpg",u=function(e){return e.Fazr="Fazr",e.Dhuhr="Dhuhr",e.Asr="Asr",e.Maghrib="Maghrib",e.Isha="Isha",e.Jummah="Jummah",e}(u||{}),g=function(e){return e[e.Muharram=1]="Muharram",e[e.Safar=2]="Safar",e[e["Rabi Al-Awwal"]=3]="Rabi Al-Awwal",e[e["Rabi Al-Thani"]=4]="Rabi Al-Thani",e[e["Jumada Al-Awwal"]=5]="Jumada Al-Awwal",e[e["Jumada Al-Thani"]=6]="Jumada Al-Thani",e[e.Rajab=7]="Rajab",e[e.Shaban=8]="Shaban",e[e.Ramadan=9]="Ramadan",e[e.Shawwal=10]="Shawwal",e[e["Dhul Qadah"]=11]="Dhul Qadah",e[e["Dhu al-Hijjah"]=12]="Dhu al-Hijjah",e}(g||{}),et={[g.Muharram]:"Muharram",[g.Safar]:"Safar",[g["Rabi Al-Awwal"]]:"Rabi Al-Awwal",[g["Rabi Al-Thani"]]:"Rabi Al-Thani",[g["Jumada Al-Awwal"]]:"Jumada Al-Awwal",[g["Jumada Al-Thani"]]:"Jumada Al-Thani",[g.Rajab]:"Rajab",[g.Shaban]:"Shaban",[g.Ramadan]:"Ramadan",[g.Shawwal]:"Shawwal",[g["Dhul Qadah"]]:"Dhul Qadah",[g["Dhu al-Hijjah"]]:"Dhu al-Hijjah"};var lt=W([t({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),r("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",t("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),X=[l("fadeIn",[o(":enter",[t({opacity:0}),r("1.5s ease-in",t({opacity:1}))])]),l("fadeOut",[o(":leave",[t({opacity:1}),r("1.5s ease-out",t({opacity:0}))])]),l("fadeInOut",[o(":enter",[t({opacity:0}),r("1.5s ease-in",t({opacity:1}))]),o(":leave",[t({opacity:1}),r("1.5s ease-out",t({opacity:0}))])]),l("animate",[o("void => *",[Z(lt)])]),l("animateStagger",[h("50",t("*")),h("100",t("*")),h("200",t("*")),o("void => 50",i("@*",[I("50ms",[f()])],{optional:!0})),o("void => 100",i("@*",[I("100ms",[f()])],{optional:!0})),o("void => 200",i("@*",[I("200ms",[f()])],{optional:!0}))]),l("slideInOut",[o(":leave",[t({height:"0px"}),r("300ms ease-out",t({height:"*"}))]),o(":enter",[t({height:"*"}),r("300ms ease-in",t({height:"0px"}))])]),l("slideIn",[o("void => left",[t({transform:"translateX(100%)"}),r("300ms ease-in",t({transform:"translateX(0)"}))]),o("left => void",[t({transform:"translateX(0)"}),r("300ms ease-in",t({transform:"translateX(-100%)"}))]),o("void => right",[t({transform:"translateX(-100%)"}),r("300ms ease-in",t({transform:"translateX(0)"}))]),o("right => void",[t({transform:"translateX(0)"}),r("300ms ease-in",t({transform:"translateX(100%)"}))])]),l("slideInLeft",[h("void",t({transform:"translateX(-100%)"})),h("*",t({transform:"translateX(0)"})),o("void => *",r("300ms")),o("* => void",r("300ms"))]),l("slideInRight",[h("void",t({transform:"translateX(100%)"})),h("*",t({transform:"translateX(0)"})),o("void => *",r("300ms")),o("* => void",r("300ms"))]),l("slideInTop",[h("void",t({transform:"translateY(-100%)"})),h("*",t({transform:"translateY(0)"})),o("void => *",r("300ms")),o("* => void",r("300ms"))]),l("slideInBottom",[h("void",t({transform:"translateY(100%)"})),h("*",t({transform:"translateY(0)"})),o("void => *",r("300ms")),o("* => void",r("300ms"))]),l("expandCollapse",[h("void",t({height:"0px"})),h("*",t({height:"*"})),o("void => *",r("300ms ease-out")),o("* => void",r("300ms ease-in"))]),l("routerTransitionLeft",[o("* => *",[i("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({transform:"translateX(100%)",opacity:0})],{optional:!0}),S([A([i("content > :leave",[t({transform:"translateX(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(-100%)",opacity:0}))],{optional:!0}),i("content > :enter",[t({transform:"translateX(100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",f(),{optional:!0}),i("content > :enter",f(),{optional:!0})])])]),l("routerTransitionRight",[o("* => *",[i("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({transform:"translateX(-100%)",opacity:0})],{optional:!0}),S([A([i("content > :leave",[t({transform:"translateX(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(100%)",opacity:0}))],{optional:!0}),i("content > :enter",[t({transform:"translateX(-100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",f(),{optional:!0}),i("content > :enter",f(),{optional:!0})])])]),l("routerTransitionUp",[o("* => *",[i("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({transform:"translateY(100%)",opacity:0})],{optional:!0}),A([i("content > :leave",[t({transform:"translateY(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(-100%)",opacity:0}))],{optional:!0}),i("content > :enter",[t({transform:"translateY(100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",f(),{optional:!0}),i("content > :enter",f(),{optional:!0})])]),l("routerTransitionDown",[o("* => *",[i("content > :enter, content > :leave",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({transform:"translateY(-100%)",opacity:0})],{optional:!0}),S([A([i("content > :leave",[t({transform:"translateY(0)",opacity:1}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(100%)",opacity:0}))],{optional:!0}),i("content > :enter",[t({transform:"translateY(-100%)"}),r("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),i("content > :leave",f(),{optional:!0}),i("content > :enter",f(),{optional:!0})])])]),l("routerTransitionFade",[o("* => *",A([i("content > :enter, content > :leave ",[t({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),i("content > :enter",[t({opacity:0})],{optional:!0}),i("content > :leave",[t({opacity:1}),r("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({opacity:0}))],{optional:!0}),i("content > :enter",[t({opacity:0}),r("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",t({opacity:1}))],{optional:!0}),i("content > :enter",f(),{optional:!0}),i("content > :leave",f(),{optional:!0})]))])];var at={PrayerTimings:"https://us.mohid.co/tx/dallas/ialfm/masjid/widget/api/index/?m=prayertimings"};var nt=(()=>{let a=class a{constructor(m,n){this.http=m,this.datePipe=n}getTimes(){return this.http.get(at.PrayerTimings,{responseType:"text"})}getHizriDate(m){let n=m||new Date,s=new Intl.DateTimeFormat("en-TN-u-ca-islamic",{day:"numeric"}).format(n),b=parseInt(new Intl.DateTimeFormat("en-TN-u-ca-islamic",{month:"numeric"}).format(n)),F="-";b>=0&&b<=12&&(F=et[b]);let Y=new Intl.DateTimeFormat("en-TN-u-ca-islamic",{year:"numeric"}).format(n).split(" ")[0];return`${F} ${s}, ${Y}`}getEnglishDate(m){let n=m||new Date;return this.datePipe.transform(n,"E, MMMM dd, YYYY")}};a.\u0275fac=function(n){return new(n||a)(R(K),R(_))},a.\u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var q=(()=>{let a=class a{constructor(){}getCurrentAnnouncementImage(m){return`assets/${m}`}getLogo(){return"assets/Logo.jpg"}};a.\u0275fac=function(n){return new(n||a)},a.\u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var rt=(()=>{let a=class a{constructor(m){this.fileManager=m}ngOnInit(){this.currentAnnouncementImagePath=this.fileManager.getCurrentAnnouncementImage("RamadanMubarak.png")}};a.\u0275fac=function(n){return new(n||a)(T(q))},a.\u0275cmp=w({type:a,selectors:[["app-announcements"]],standalone:!0,features:[U],decls:2,vars:1,consts:[[1,"flex","justify-center"],["width","400","height","200","priority","",1,"w-full",3,"ngSrc"]],template:function(n,s){n&1&&(d(0,"div",0),v(1,"img",1),p()),n&2&&(c(),x("ngSrc",s.currentAnnouncementImagePath))},dependencies:[G]});let e=a;return e})();function dt(e,a){e&1&&(d(0,"div",3),v(1,"div",4),p()),e&2&&x("@fadeInOut",void 0)}function ut(e,a){if(e&1&&(d(0,"div",5)(1,"span",6),y(2),p(),d(3,"span",7),y(4),p()()),e&2){let O=Q();x("@fadeInOut",void 0),c(2),z(O.timeNumber),c(2),z(O.timeText)}}var ot=(()=>{let a=class a{constructor(){this.mosqueImage=tt}set time(m){if(m){let n=m.split(" ");this.timeNumber=n[0],this.timeText=n[1]}}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=w({type:a,selectors:[["app-timer-card"]],inputs:{text:"text",time:"time"},decls:6,vars:2,consts:[[1,"flex","flex-col","items-center"],[1,"pb-2"],[1,"text-6xl","max-lg:text-4xl","max-md:text-3xl","max-sm:text-base","font-bold","symphony"],[1,"animate-pulse","pt-1"],[1,"h-2","w-28","max-lg:w-24","max-md:w-20","max-sm:w-10","bg-slate-700","rounded","col-span-2"],[1,"border-t-2","border-b-2","pt-1","border-black","items-center","flex"],[1,"text-4xl","max-lg:text-3xl","max-md:text-2xl","max-sm:text-sm","font-bold","mr-1","primary-color","symphony"],[1,"text-2xl","max-lg:text-xl","max-md:text-lg","max-sm:text-xs","lowercase","primary-color","symphony"]],template:function(n,s){n&1&&(d(0,"div",0)(1,"div",1)(2,"span",2),y(3),p()(),H(4,dt,2,1,"div",3)(5,ut,5,3),p()),n&2&&(c(3),z(s.text),c(),L(4,!s.timeNumber||!s.timeText?4:5))},data:{animation:X}});let e=a;return e})();var st=(()=>{let a=class a{constructor(m,n){this.salahTimings=m,this.fileManager=n,this.iqama=null,this.azaan=null,this.iqamas=[],this.azaans=[],this.image=E,this.prayerText=u,this.hizriDate=null,this.englishDate=null}ngOnInit(){this.setLogo(),this.prepareTimings(),this.setDate()}setLogo(){this.logo=this.fileManager.getLogo()}prepareTimings(){this.salahTimings.getTimes().pipe(k()).subscribe(m=>{let s=new DOMParser().parseFromString(m,"text/html"),b=/\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g;s.querySelectorAll(".prayer_iqama_div").forEach(M=>{let D=M.textContent.match(b);D&&(this.iqamas=[...this.iqamas,...D])}),s.querySelectorAll(".prayer_azaan_div").forEach(M=>{let D=M.textContent.match(b);D&&(this.azaans=[...this.azaans,...D])}),this.loadTime()})}loadTime(){this.iqama={[u.Fazr]:this.iqamas[0],[u.Dhuhr]:this.iqamas[1],[u.Asr]:this.iqamas[2],[u.Maghrib]:this.iqamas[3],[u.Isha]:this.iqamas[4],[u.Jummah]:this.iqamas[6]},this.azaan={[u.Fazr]:this.azaans[0],[u.Dhuhr]:this.azaans[1],[u.Asr]:this.azaans[2],[u.Maghrib]:this.azaans[3],[u.Isha]:this.azaans[4],[u.Jummah]:this.azaans[6]}}setDate(){this.hizriDate=this.salahTimings.getHizriDate(),this.englishDate=this.salahTimings.getEnglishDate()}};a.\u0275fac=function(n){return new(n||a)(T(nt),T(q))},a.\u0275cmp=w({type:a,selectors:[["app-salah-timings"]],decls:23,vars:13,consts:[[1,"border","border-dashed","border-black"],[1,"flex","flex-col"],[1,"flex","flex-row"],[1,"h-36","w-36","max-md:h-28","max-md:w-28","max-sm:h-20","max-sm:w-20","flex","justify-center","items-center","p-3","gap-2"],[3,"src"],[1,"flex","flex-row","justify-evenly","w-full","items-center"],[3,"text","time"],[1,"flex","justify-center","font-bold","text-3xl","max-lg:text-2xl","max-md:text-xl","max-sm:text-sm","gap-2","text-color-gray","mt-1","symphony"]],template:function(n,s){n&1&&(v(0,"app-announcements")(1,"div",0),d(2,"div",1)(3,"div",2)(4,"div",3),v(5,"img",4),p(),d(6,"div",5)(7,"div"),v(8,"app-timer-card",6),p(),d(9,"div"),v(10,"app-timer-card",6),p(),d(11,"div"),v(12,"app-timer-card",6),p(),d(13,"div"),v(14,"app-timer-card",6),p(),d(15,"div"),v(16,"app-timer-card",6),p()()(),d(17,"div",7)(18,"span"),y(19),p(),y(20,"|"),d(21,"span"),y(22),p()()()),n&2&&(c(5),x("src",s.logo,N),c(3),x("text",s.prayerText.Fazr)("time",s.azaan==null?null:s.azaan.Fazr),c(2),x("text",s.prayerText.Dhuhr)("time",s.azaan==null?null:s.azaan.Dhuhr),c(2),x("text",s.prayerText.Asr)("time",s.azaan==null?null:s.azaan.Asr),c(2),x("text",s.prayerText.Maghrib)("time",s.azaan==null?null:s.azaan.Maghrib),c(2),x("text",s.prayerText.Isha)("time",s.azaan==null?null:s.azaan.Isha),c(3),$(" ",s.englishDate," "),c(3),z(s.hizriDate))},dependencies:[rt,ot],styles:['.background-container[_ngcontent-%COMP%]{background-image:url("./media/youthIftar-U4MAEFXS.jpeg");background-size:contain;background-position:center;background-repeat:no-repeat;display:flex;flex-direction:row;justify-content:center;align-items:center}@media (max-width: 500px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:720px}}@media (min-width: 500px) and (max-width: 600px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}@media (min-width: 600px) and (max-width: 900px){.background-container[_ngcontent-%COMP%]{overflow:hidden;height:100vh}.box[_ngcontent-%COMP%]{margin-top:300px}}@media (min-width: 900px){.background-container[_ngcontent-%COMP%]{height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}'],data:{animation:X}});let e=a;return e})();var kt=(()=>{let a=class a{};a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=J({type:a}),a.\u0275inj=P({imports:[B,V.forChild([{path:"",component:st}])]});let e=a;return e})();export{kt as SalahTimingsModule};
