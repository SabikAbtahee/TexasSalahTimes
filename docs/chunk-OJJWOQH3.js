import{A as Qt,B as $t,C as O,D as Gt,E as y,F as w,G as J,H as Et,I as H,J as Q,K as Kt,L as Vt,M as xt,N as Wt,O as Zt,P as t0,R as e0,S as st,T as a0,U as n0,V as i0,c as Jt,ca as r0,d as kt,e as Xt,f as Ot,fa as b,g as Rt,ga as u,h as Yt,ha as tt,i as Ft,ia as mt,j as Ht,ja as a,k as Nt,ka as T,l as Lt,la as d,m as _t,ma as o0,na as j,o as ot,oa as s0,p as Bt,pa as c,q as vt,qa as lt,s as W,t as Ut,v as D,w as Z}from"./chunk-JZEVMQPK.js";var p0=Jt((u0,bt)=>{"use strict";(function(){"use strict";var e=Math.PI,t=Math.sin,m=Math.cos,i=Math.tan,r=Math.asin,s=Math.atan2,I=Math.acos,p=e/180,$=1e3*60*60*24,B=2440588,G=2451545;function C(n){return n.valueOf()/$-.5+B}function E(n){return new Date((n+.5-B)*$)}function at(n){return C(n)-G}var nt=p*23.4397;function Dt(n,o){return s(t(n)*m(nt)-i(o)*t(nt),m(n))}function ft(n,o){return r(t(o)*m(nt)+m(o)*t(nt)*t(n))}function At(n,o,l){return s(t(n),m(n)*t(o)-i(l)*m(o))}function Ct(n,o,l){return r(t(o)*t(l)+m(o)*m(l)*m(n))}function Mt(n,o){return p*(280.16+360.9856235*n)-o}function y0(n){return n<0&&(n=0),2967e-7/Math.tan(n+.00312536/(n+.08901179))}function Tt(n){return p*(357.5291+.98560028*n)}function jt(n){var o=p*(1.9148*t(n)+.02*t(2*n)+3e-4*t(3*n)),l=p*102.9372;return n+o+l+e}function zt(n){var o=Tt(n),l=jt(o);return{dec:ft(l,0),ra:Dt(l,0)}}var z={};z.getPosition=function(n,o,l){var g=p*-l,h=p*o,v=at(n),f=zt(v),x=Mt(v,g)-f.ra;return{azimuth:At(x,h,f.dec),altitude:Ct(x,h,f.dec)}};var gt=z.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];z.addTime=function(n,o,l){gt.push([n,o,l])};var St=9e-4;function w0(n,o){return Math.round(n-St-o/(2*e))}function qt(n,o,l){return St+(n+o)/(2*e)+l}function It(n,o,l){return G+n+.0053*t(o)-.0069*t(2*l)}function D0(n,o,l){return I((t(n)-t(o)*t(l))/(m(o)*m(l)))}function A0(n){return-2.076*Math.sqrt(n)/60}function C0(n,o,l,g,h,v,f){var x=D0(n,l,g),M=qt(x,o,h);return It(M,v,f)}z.getTimes=function(n,o,l,g){g=g||0;var h=p*-l,v=p*o,f=A0(g),x=at(n),M=w0(x,h),k=qt(0,h,M),R=Tt(k),N=jt(R),U=ft(N,0),Y=It(k,R,N),L,K,F,X,_,V,P={solarNoon:E(Y),nadir:E(Y-.5)};for(L=0,K=gt.length;L<K;L+=1)F=gt[L],X=(F[0]+f)*p,_=C0(X,h,v,U,M,R,N),V=Y-(_-Y),P[F[1]]=E(V),P[F[2]]=E(_);return P};function Pt(n){var o=p*(218.316+13.176396*n),l=p*(134.963+13.064993*n),g=p*(93.272+13.22935*n),h=o+p*6.289*t(l),v=p*5.128*t(g),f=385001-20905*m(l);return{ra:Dt(h,v),dec:ft(h,v),dist:f}}z.getMoonPosition=function(n,o,l){var g=p*-l,h=p*o,v=at(n),f=Pt(v),x=Mt(v,g)-f.ra,M=Ct(x,h,f.dec),k=s(t(x),i(h)*m(f.dec)-t(f.dec)*m(x));return M=M+y0(M),{azimuth:At(x,h,f.dec),altitude:M,distance:f.dist,parallacticAngle:k}},z.getMoonIllumination=function(n){var o=at(n||new Date),l=zt(o),g=Pt(o),h=149598e3,v=I(t(l.dec)*t(g.dec)+m(l.dec)*m(g.dec)*m(l.ra-g.ra)),f=s(h*t(v),g.dist-h*m(v)),x=s(m(l.dec)*t(l.ra-g.ra),t(l.dec)*m(g.dec)-m(l.dec)*t(g.dec)*m(l.ra-g.ra));return{fraction:(1+m(f))/2,phase:.5+.5*f*(x<0?-1:1)/Math.PI,angle:x}};function it(n,o){return new Date(n.valueOf()+o*$/24)}z.getMoonTimes=function(n,o,l,g){var h=new Date(n);g?h.setUTCHours(0,0,0,0):h.setHours(0,0,0,0);for(var v=.133*p,f=z.getMoonPosition(h,o,l).altitude-v,x,M,k,R,N,U,Y,L,K,F,X,_,V,P=1;P<=24&&(x=z.getMoonPosition(it(h,P),o,l).altitude-v,M=z.getMoonPosition(it(h,P+1),o,l).altitude-v,N=(f+M)/2-x,U=(M-f)/2,Y=-U/(2*N),L=(N*Y+U)*Y+x,K=U*U-4*N*x,F=0,K>=0&&(V=Math.sqrt(K)/(Math.abs(N)*2),X=Y-V,_=Y+V,Math.abs(X)<=1&&F++,Math.abs(_)<=1&&F++,X<-1&&(X=_)),F===1?f<0?k=P+X:R=P+X:F===2&&(k=P+(L<0?_:X),R=P+(L<0?X:_)),!(k&&R));P+=2)f=M;var rt={};return k&&(rt.rise=it(h,k)),R&&(rt.set=it(h,R)),!k&&!R&&(rt[L>0?"alwaysUp":"alwaysDown"]=!0),rt},typeof u0=="object"&&typeof bt<"u"?bt.exports=z:typeof define=="function"&&define.amd?define(z):window.SunCalc=z})()});var d0=Jt(yt=>{"use strict";var dt={ummalquraData:[28607,28636,28665,28695,28724,28754,28783,28813,28843,28872,28901,28931,28960,28990,29019,29049,29078,29108,29137,29167,29196,29226,29255,29285,29315,29345,29375,29404,29434,29463,29492,29522,29551,29580,29610,29640,29669,29699,29729,29759,29788,29818,29847,29876,29906,29935,29964,29994,30023,30053,30082,30112,30141,30171,30200,30230,30259,30289,30318,30348,30378,30408,30437,30467,30496,30526,30555,30585,30614,30644,30673,30703,30732,30762,30791,30821,30850,30880,30909,30939,30968,30998,31027,31057,31086,31116,31145,31175,31204,31234,31263,31293,31322,31352,31381,31411,31441,31471,31500,31530,31559,31589,31618,31648,31676,31706,31736,31766,31795,31825,31854,31884,31913,31943,31972,32002,32031,32061,32090,32120,32150,32180,32209,32239,32268,32298,32327,32357,32386,32416,32445,32475,32504,32534,32563,32593,32622,32652,32681,32711,32740,32770,32799,32829,32858,32888,32917,32947,32976,33006,33035,33065,33094,33124,33153,33183,33213,33243,33272,33302,33331,33361,33390,33420,33450,33479,33509,33539,33568,33598,33627,33657,33686,33716,33745,33775,33804,33834,33863,33893,33922,33952,33981,34011,34040,34069,34099,34128,34158,34187,34217,34247,34277,34306,34336,34365,34395,34424,34454,34483,34512,34542,34571,34601,34631,34660,34690,34719,34749,34778,34808,34837,34867,34896,34926,34955,34985,35015,35044,35074,35103,35133,35162,35192,35222,35251,35280,35310,35340,35370,35399,35429,35458,35488,35517,35547,35576,35605,35635,35665,35694,35723,35753,35782,35811,35841,35871,35901,35930,35960,35989,36019,36048,36078,36107,36136,36166,36195,36225,36254,36284,36314,36343,36373,36403,36433,36462,36492,36521,36551,36580,36610,36639,36669,36698,36728,36757,36786,36816,36845,36875,36904,36934,36963,36993,37022,37052,37081,37111,37141,37170,37200,37229,37259,37288,37318,37347,37377,37406,37436,37465,37495,37524,37554,37584,37613,37643,37672,37701,37731,37760,37790,37819,37849,37878,37908,37938,37967,37997,38027,38056,38085,38115,38144,38174,38203,38233,38262,38292,38322,38351,38381,38410,38440,38469,38499,38528,38558,38587,38617,38646,38676,38705,38735,38764,38794,38823,38853,38882,38912,38941,38971,39001,39030,39059,39089,39118,39148,39178,39208,39237,39267,39297,39326,39355,39385,39414,39444,39473,39503,39532,39562,39592,39621,39650,39680,39709,39739,39768,39798,39827,39857,39886,39916,39946,39975,40005,40035,40064,40094,40123,40153,40182,40212,40241,40271,40300,40330,40359,40389,40418,40448,40477,40507,40536,40566,40595,40625,40655,40685,40714,40744,40773,40803,40832,40862,40892,40921,40951,40980,41009,41039,41068,41098,41127,41157,41186,41216,41245,41275,41304,41334,41364,41393,41422,41452,41481,41511,41540,41570,41599,41629,41658,41688,41718,41748,41777,41807,41836,41865,41894,41924,41953,41983,42012,42042,42072,42102,42131,42161,42190,42220,42249,42279,42308,42337,42367,42397,42426,42456,42485,42515,42545,42574,42604,42633,42662,42692,42721,42751,42780,42810,42839,42869,42899,42929,42958,42988,43017,43046,43076,43105,43135,43164,43194,43223,43253,43283,43312,43342,43371,43401,43430,43460,43489,43519,43548,43578,43607,43637,43666,43696,43726,43755,43785,43814,43844,43873,43903,43932,43962,43991,44021,44050,44080,44109,44139,44169,44198,44228,44258,44287,44317,44346,44375,44405,44434,44464,44493,44523,44553,44582,44612,44641,44671,44700,44730,44759,44788,44818,44847,44877,44906,44936,44966,44996,45025,45055,45084,45114,45143,45172,45202,45231,45261,45290,45320,45350,45380,45409,45439,45468,45498,45527,45556,45586,45615,45644,45674,45704,45733,45763,45793,45823,45852,45882,45911,45940,45970,45999,46028,46058,46088,46117,46147,46177,46206,46236,46265,46295,46324,46354,46383,46413,46442,46472,46501,46531,46560,46590,46620,46649,46679,46708,46738,46767,46797,46826,46856,46885,46915,46944,46974,47003,47033,47063,47092,47122,47151,47181,47210,47240,47269,47298,47328,47357,47387,47417,47446,47476,47506,47535,47565,47594,47624,47653,47682,47712,47741,47771,47800,47830,47860,47890,47919,47949,47978,48008,48037,48066,48096,48125,48155,48184,48214,48244,48273,48303,48333,48362,48392,48421,48450,48480,48509,48538,48568,48598,48627,48657,48687,48717,48746,48776,48805,48834,48864,48893,48922,48952,48982,49011,49041,49071,49100,49130,49160,49189,49218,49248,49277,49306,49336,49365,49395,49425,49455,49484,49514,49543,49573,49602,49632,49661,49690,49720,49749,49779,49809,49838,49868,49898,49927,49957,49986,50016,50045,50075,50104,50133,50163,50192,50222,50252,50281,50311,50340,50370,50400,50429,50459,50488,50518,50547,50576,50606,50635,50665,50694,50724,50754,50784,50813,50843,50872,50902,50931,50960,50990,51019,51049,51078,51108,51138,51167,51197,51227,51256,51286,51315,51345,51374,51403,51433,51462,51492,51522,51552,51582,51611,51641,51670,51699,51729,51758,51787,51816,51846,51876,51906,51936,51965,51995,52025,52054,52083,52113,52142,52171,52200,52230,52260,52290,52319,52349,52379,52408,52438,52467,52497,52526,52555,52585,52614,52644,52673,52703,52733,52762,52792,52822,52851,52881,52910,52939,52969,52998,53028,53057,53087,53116,53146,53176,53205,53235,53264,53294,53324,53353,53383,53412,53441,53471,53500,53530,53559,53589,53619,53648,53678,53708,53737,53767,53796,53825,53855,53884,53913,53943,53973,54003,54032,54062,54092,54121,54151,54180,54209,54239,54268,54297,54327,54357,54387,54416,54446,54476,54505,54535,54564,54593,54623,54652,54681,54711,54741,54770,54800,54830,54859,54889,54919,54948,54977,55007,55036,55066,55095,55125,55154,55184,55213,55243,55273,55302,55332,55361,55391,55420,55450,55479,55508,55538,55567,55597,55627,55657,55686,55716,55745,55775,55804,55834,55863,55892,55922,55951,55981,56011,56040,56070,56100,56129,56159,56188,56218,56247,56276,56306,56335,56365,56394,56424,56454,56483,56513,56543,56572,56601,56631,56660,56690,56719,56749,56778,56808,56837,56867,56897,56926,56956,56985,57015,57044,57074,57103,57133,57162,57192,57221,57251,57280,57310,57340,57369,57399,57429,57458,57487,57517,57546,57576,57605,57634,57664,57694,57723,57753,57783,57813,57842,57871,57901,57930,57959,57989,58018,58048,58077,58107,58137,58167,58196,58226,58255,58285,58314,58343,58373,58402,58432,58461,58491,58521,58551,58580,58610,58639,58669,58698,58727,58757,58786,58816,58845,58875,58905,58934,58964,58994,59023,59053,59082,59111,59141,59170,59200,59229,59259,59288,59318,59348,59377,59407,59436,59466,59495,59525,59554,59584,59613,59643,59672,59702,59731,59761,59791,59820,59850,59879,59909,59939,59968,59997,60027,60056,60086,60115,60145,60174,60204,60234,60264,60293,60323,60352,60381,60411,60440,60469,60499,60528,60558,60588,60618,60648,60677,60707,60736,60765,60795,60824,60853,60883,60912,60942,60972,61002,61031,61061,61090,61120,61149,61179,61208,61237,61267,61296,61326,61356,61385,61415,61445,61474,61504,61533,61563,61592,61621,61651,61680,61710,61739,61769,61799,61828,61858,61888,61917,61947,61976,62006,62035,62064,62094,62123,62153,62182,62212,62242,62271,62301,62331,62360,62390,62419,62448,62478,62507,62537,62566,62596,62625,62655,62685,62715,62744,62774,62803,62832,62862,62891,62921,62950,62980,63009,63039,63069,63099,63128,63157,63187,63216,63246,63275,63305,63334,63363,63393,63423,63453,63482,63512,63541,63571,63600,63630,63659,63689,63718,63747,63777,63807,63836,63866,63895,63925,63955,63984,64014,64043,64073,64102,64131,64161,64190,64220,64249,64279,64309,64339,64368,64398,64427,64457,64486,64515,64545,64574,64603,64633,64663,64692,64722,64752,64782,64811,64841,64870,64899,64929,64958,64987,65017,65047,65076,65106,65136,65166,65195,65225,65254,65283,65313,65342,65371,65401,65431,65460,65490,65520,65549,65579,65608,65638,65667,65697,65726,65755,65785,65815,65844,65874,65903,65933,65963,65992,66022,66051,66081,66110,66140,66169,66199,66228,66258,66287,66317,66346,66376,66405,66435,66465,66494,66524,66553,66583,66612,66641,66671,66700,66730,66760,66789,66819,66849,66878,66908,66937,66967,66996,67025,67055,67084,67114,67143,67173,67203,67233,67262,67292,67321,67351,67380,67409,67439,67468,67497,67527,67557,67587,67617,67646,67676,67705,67735,67764,67793,67823,67852,67882,67911,67941,67971,68e3,68030,68060,68089,68119,68148,68177,68207,68236,68266,68295,68325,68354,68384,68414,68443,68473,68502,68532,68561,68591,68620,68650,68679,68708,68738,68768,68797,68827,68857,68886,68916,68946,68975,69004,69034,69063,69092,69122,69152,69181,69211,69240,69270,69300,69330,69359,69388,69418,69447,69476,69506,69535,69565,69595,69624,69654,69684,69713,69743,69772,69802,69831,69861,69890,69919,69949,69978,70008,70038,70067,70097,70126,70156,70186,70215,70245,70274,70303,70333,70362,70392,70421,70451,70481,70510,70540,70570,70599,70629,70658,70687,70717,70746,70776,70805,70835,70864,70894,70924,70954,70983,71013,71042,71071,71101,71130,71159,71189,71218,71248,71278,71308,71337,71367,71397,71426,71455,71485,71514,71543,71573,71602,71632,71662,71691,71721,71751,71781,71810,71839,71869,71898,71927,71957,71986,72016,72046,72075,72105,72135,72164,72194,72223,72253,72282,72311,72341,72370,72400,72429,72459,72489,72518,72548,72577,72607,72637,72666,72695,72725,72754,72784,72813,72843,72872,72902,72931,72961,72991,73020,73050,73080,73109,73139,73168,73197,73227,73256,73286,73315,73345,73375,73404,73434,73464,73493,73523,73552,73581,73611,73640,73669,73699,73729,73758,73788,73818,73848,73877,73907,73936,73965,73995,74024,74053,74083,74113,74142,74172,74202,74231,74261,74291,74320,74349,74379,74408,74437,74467,74497,74526,74556,74586,74615,74645,74675,74704,74733,74763,74792,74822,74851,74881,74910,74940,74969,74999,75029,75058,75088,75117,75147,75176,75206,75235,75264,75294,75323,75353,75383,75412,75442,75472,75501,75531,75560,75590,75619,75648,75678,75707,75737,75766,75796,75826,75856,75885,75915,75944,75974,76003,76032,76062,76091,76121,76150,76180,76210,76239,76269,76299,76328,76358,76387,76416,76446,76475,76505,76534,76564,76593,76623,76653,76682,76712,76741,76771,76801,76830,76859,76889,76918,76948,76977,77007,77036,77066,77096,77125,77155,77185,77214,77243,77273,77302,77332,77361,77390,77420,77450,77479,77509,77539,77569,77598,77627,77657,77686,77715,77745,77774,77804,77833,77863,77893,77923,77952,77982,78011,78041,78070,78099,78129,78158,78188,78217,78247,78277,78307,78336,78366,78395,78425,78454,78483,78513,78542,78572,78601,78631,78661,78690,78720,78750,78779,78808,78838,78867,78897,78926,78956,78985,79015,79044,79074,79104,79133,79163,79192,79222,79251,79281,79310,79340,79369,79399,79428,79458,79487,79517,79546,79576,79606,79635,79665,79695,79724,79753,79783,79812,79841,79871,79900,79930,79960,79990]};function q(e,t){return~~(e/t)}function pt(e,t){return e-~~(e/t)*t}function T0(e,t,m){var i=q0(e,t),r=m+dt.ummalquraData[i-1]-1,s=r+24e5;return s}function j0(e){var t=e-24e5,m=I0(t),i=m+16260,r=Math.floor((i-1)/12),s=r+1,I=i-12*r,p=t-dt.ummalquraData[m-1]+1;return{hy:s,hm:I,hd:p}}function z0(e,t,m){var i=q((e+q(t-8,6)+100100)*1461,4)+q(153*pt(t+9,12)+2,5)+m-34840408;return i=i-q(q(e+100100+q(t-8,6),100)*3,4)+752,i}function S0(e){var t,m,i,r,s;return t=4*e+139361631,t=t+q(q(4*e+183187720,146097)*3,4)*4-3908,m=q(pt(t,1461),4)*5+308,i=q(pt(m,153),5)+1,r=pt(q(m,153),12)+1,s=q(t,1461)-100100+q(8-r,6),{gy:s,gm:r,gd:i}}function q0(e,t){var m=e-1,i=m*12+1+(t-1),r=i-16260;return r}function I0(e){for(var t=0;t<dt.ummalquraData.length;t=t+1)if(dt.ummalquraData[t]>e)return t}yt.toHijri=function(e,t,m){var i=j0(z0(e,t,m));return i};yt.toGregorian=function(e,t,m){var i=S0(T0(e,t,m));return i}});var M0=o0([a({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),u("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",a("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),ct=[b("fadeIn",[d(":enter",[a({opacity:0}),u("1.5s ease-in",a({opacity:1}))])]),b("fadeOut",[d(":leave",[a({opacity:1}),u("1.5s ease-out",a({opacity:0}))])]),b("fadeInOut",[d(":enter",[a({opacity:0}),u("1.5s ease-in",a({opacity:1}))]),d(":leave",[a({opacity:1}),u("1.5s ease-out",a({opacity:0}))])]),b("animate",[d("void => *",[s0(M0)])]),b("animateStagger",[T("50",a("*")),T("100",a("*")),T("200",a("*")),d("void => 50",c("@*",[lt("50ms",[j()])],{optional:!0})),d("void => 100",c("@*",[lt("100ms",[j()])],{optional:!0})),d("void => 200",c("@*",[lt("200ms",[j()])],{optional:!0}))]),b("slideInOut",[d(":leave",[a({height:"0px"}),u("300ms ease-out",a({height:"*"}))]),d(":enter",[a({height:"*"}),u("300ms ease-in",a({height:"0px"}))])]),b("slideIn",[d("void => left",[a({transform:"translateX(100%)"}),u("300ms ease-in",a({transform:"translateX(0)"}))]),d("left => void",[a({transform:"translateX(0)"}),u("300ms ease-in",a({transform:"translateX(-100%)"}))]),d("void => right",[a({transform:"translateX(-100%)"}),u("300ms ease-in",a({transform:"translateX(0)"}))]),d("right => void",[a({transform:"translateX(0)"}),u("300ms ease-in",a({transform:"translateX(100%)"}))])]),b("slideInLeft",[T("void",a({transform:"translateX(-100%)"})),T("*",a({transform:"translateX(0)"})),d("void => *",u("300ms")),d("* => void",u("300ms"))]),b("slideInRight",[T("void",a({transform:"translateX(100%)"})),T("*",a({transform:"translateX(0)"})),d("void => *",u("300ms")),d("* => void",u("300ms"))]),b("slideInTop",[T("void",a({transform:"translateY(-100%)"})),T("*",a({transform:"translateY(0)"})),d("void => *",u("300ms")),d("* => void",u("300ms"))]),b("slideInBottom",[T("void",a({transform:"translateY(100%)"})),T("*",a({transform:"translateY(0)"})),d("void => *",u("300ms")),d("* => void",u("300ms"))]),b("expandCollapse",[T("void",a({height:"0px"})),T("*",a({height:"*"})),d("void => *",u("300ms ease-out")),d("* => void",u("300ms ease-in"))]),b("routerTransitionLeft",[d("* => *",[c("content > :enter, content > :leave",[a({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),c("content > :enter",[a({transform:"translateX(100%)",opacity:0})],{optional:!0}),mt([tt([c("content > :leave",[a({transform:"translateX(0)",opacity:1}),u("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({transform:"translateX(-100%)",opacity:0}))],{optional:!0}),c("content > :enter",[a({transform:"translateX(100%)"}),u("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),c("content > :leave",j(),{optional:!0}),c("content > :enter",j(),{optional:!0})])])]),b("routerTransitionRight",[d("* => *",[c("content > :enter, content > :leave",[a({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),c("content > :enter",[a({transform:"translateX(-100%)",opacity:0})],{optional:!0}),mt([tt([c("content > :leave",[a({transform:"translateX(0)",opacity:1}),u("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({transform:"translateX(100%)",opacity:0}))],{optional:!0}),c("content > :enter",[a({transform:"translateX(-100%)"}),u("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({transform:"translateX(0%)",opacity:1}))],{optional:!0})]),c("content > :leave",j(),{optional:!0}),c("content > :enter",j(),{optional:!0})])])]),b("routerTransitionUp",[d("* => *",[c("content > :enter, content > :leave",[a({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),c("content > :enter",[a({transform:"translateY(100%)",opacity:0})],{optional:!0}),tt([c("content > :leave",[a({transform:"translateY(0)",opacity:1}),u("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({transform:"translateY(-100%)",opacity:0}))],{optional:!0}),c("content > :enter",[a({transform:"translateY(100%)"}),u("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),c("content > :leave",j(),{optional:!0}),c("content > :enter",j(),{optional:!0})])]),b("routerTransitionDown",[d("* => *",[c("content > :enter, content > :leave",[a({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),c("content > :enter",[a({transform:"translateY(-100%)",opacity:0})],{optional:!0}),mt([tt([c("content > :leave",[a({transform:"translateY(0)",opacity:1}),u("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({transform:"translateY(100%)",opacity:0}))],{optional:!0}),c("content > :enter",[a({transform:"translateY(-100%)"}),u("600ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({transform:"translateY(0%)",opacity:1}))],{optional:!0})]),c("content > :leave",j(),{optional:!0}),c("content > :enter",j(),{optional:!0})])])]),b("routerTransitionFade",[d("* => *",tt([c("content > :enter, content > :leave ",[a({position:"absolute",top:0,bottom:0,left:0,right:0})],{optional:!0}),c("content > :enter",[a({opacity:0})],{optional:!0}),c("content > :leave",[a({opacity:1}),u("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({opacity:0}))],{optional:!0}),c("content > :enter",[a({opacity:0}),u("300ms cubic-bezier(0.0, 0.0, 0.2, 1)",a({opacity:1}))],{optional:!0}),c("content > :enter",j(),{optional:!0}),c("content > :leave",j(),{optional:!0})]))])];var m0="../../assets/youthIftar.jpeg",l0="../../assets/mosque.jpg",A=function(e){return e.Fazr="Fajr",e.Dhuhr="Dhuhr",e.Asr="Asr",e.Maghrib="Maghrib",e.Isha="Isha",e.Jummah="Jummah",e}(A||{}),S=function(e){return e[e.Muharram=1]="Muharram",e[e.Safar=2]="Safar",e[e["Rabi Al-Awwal"]=3]="Rabi Al-Awwal",e[e["Rabi Al-Thani"]=4]="Rabi Al-Thani",e[e["Jumada Al-Awwal"]=5]="Jumada Al-Awwal",e[e["Jumada Al-Thani"]=6]="Jumada Al-Thani",e[e.Rajab=7]="Rajab",e[e.Shaban=8]="Shaban",e[e.Ramadan=9]="Ramadan",e[e.Shawwal=10]="Shawwal",e[e["Dhul Qadah"]=11]="Dhul Qadah",e[e["Dhu al-Hijjah"]=12]="Dhu al-Hijjah",e}(S||{}),c0={[S.Muharram]:"Muharram",[S.Safar]:"Safar",[S["Rabi Al-Awwal"]]:"Rabi Al-Awwal",[S["Rabi Al-Thani"]]:"Rabi Al-Thani",[S["Jumada Al-Awwal"]]:"Jumada Al-Awwal",[S["Jumada Al-Thani"]]:"Jumada Al-Thani",[S.Rajab]:"Rajab",[S.Shaban]:"Shaban",[S.Ramadan]:"Ramadan",[S.Shawwal]:"Shawwal",[S["Dhul Qadah"]]:"Dhul Qadah",[S["Dhu al-Hijjah"]]:"Dhu al-Hijjah"};var ut={PrayerTimings:"https://us.mohid.co/tx/dallas/ialfm/masjid/widget/api/index/?m=prayertimings",CurrentImageName:"may1v2.png"};var h0=kt(p0()),wt=kt(d0());var f0=(()=>{let t=class t{constructor(i,r){this.http=i,this.datePipe=r}getTimes(){return this.http.get(ut.PrayerTimings,{responseType:"text"}).pipe(Nt(3))}getHizriDate(i){return new Promise((r,s)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(I=>{let p=i||new Date,$=I.coords.latitude,B=I.coords.longitude,G=h0.getTimes(p,$,B).sunset,C=(0,wt.toHijri)(p.getFullYear(),p.getMonth()+1,p.getDate());p>G&&(C=(0,wt.toHijri)(p.getFullYear(),p.getMonth()+1,p.getDate()+1));let E=c0[C.hm];r(`${E} ${C.hd}, ${C.hy}`)},I=>{s(I)}):s("Geolocation is not supported by this browser.")})}getEnglishDate(i){let r=i||new Date;return this.datePipe.transform(r,"E, MMMM dd, YYYY")}};t.\u0275fac=function(r){return new(r||t)(vt(i0),vt(st))},t.\u0275prov=ot({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var ht=(()=>{let t=class t{constructor(){}getCurrentAnnouncementImage(i){return`assets/${i}`}getLogo(){return"assets/Logo.jpg"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ot({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var v0=(()=>{let t=class t{constructor(i){this.fileManager=i}ngOnInit(){this.currentAnnouncementImagePath=this.fileManager.getCurrentAnnouncementImage(ut.CurrentImageName)}};t.\u0275fac=function(r){return new(r||t)(Z(ht))},t.\u0275cmp=W({type:t,selectors:[["app-announcements"]],standalone:!0,features:[Vt],decls:2,vars:1,consts:[[1,"flex","justify-center","custom-height"],["width","1598","height","649","priority","",1,"w-full","object-contain",3,"ngSrc"]],template:function(r,s){r&1&&(y(0,"div",0),J(1,"img",1),w()),r&2&&(D(),O("ngSrc",s.currentAnnouncementImagePath))},dependencies:[n0],styles:[".custom-height[_ngcontent-%COMP%]{height:calc(100vh - 202px)}"]});let e=t;return e})();function X0(e,t){e&1&&(y(0,"div",3),J(1,"div",4),w()),e&2&&O("@fadeInOut",void 0)}function O0(e,t){if(e&1&&(y(0,"div",5)(1,"span",6),H(2),w(),y(3,"span",7),H(4),w()()),e&2){let m=Et();O("@fadeInOut",void 0),D(2),Q(m.timeNumber),D(2),Q(m.timeText)}}var x0=(()=>{let t=class t{constructor(){this.mosqueImage=l0}set time(i){if(i){let r=i.split(" ");this.timeNumber=r[0],this.timeText=r[1]}}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=W({type:t,selectors:[["app-timer-card"]],inputs:{text:"text",time:"time"},decls:6,vars:2,consts:[[1,"flex","flex-col","items-center"],[1,"pb-2"],[1,"text-6xl","max-lg:text-4xl","max-md:text-3xl","max-sm:text-base","font-bold","symphony"],[1,"animate-pulse","pt-1"],[1,"h-2","w-28","max-lg:w-24","max-md:w-20","max-sm:w-10","bg-slate-700","rounded","col-span-2"],[1,"border-t-2","border-b-2","pt-1","border-black","items-center","flex"],[1,"text-4xl","max-lg:text-3xl","max-md:text-2xl","max-sm:text-sm","font-bold","mr-1","primary-color","symphony"],[1,"text-2xl","max-lg:text-xl","max-md:text-lg","max-sm:text-xs","lowercase","primary-color","symphony"]],template:function(r,s){r&1&&(y(0,"div",0)(1,"div",1)(2,"span",2),H(3),w()(),$t(4,X0,2,1,"div",3)(5,O0,5,3),w()),r&2&&(D(3),Q(s.text),D(),Gt(4,!s.timeNumber||!s.timeText?4:5))},data:{animation:ct}});let e=t;return e})();var b0=(()=>{let t=class t{constructor(i,r,s){this.cdr=i,this.salahTimings=r,this.fileManager=s,this.iqama=null,this.azaan=null,this.image=m0,this.prayerText=A,this.hizriDate=null,this.englishDate=null,this.timeHtmlContent=new Ot(""),this._unsubscribeAll=new Xt,Qt(()=>{this.setClock(),this.setDate(),this.parseTimings()})}ngOnDestroy(){this._unsubscribeAll.next(!0),this._unsubscribeAll.complete(),this._unsubscribeAll.unsubscribe()}ngOnInit(){this.setLogo(),this.getTimings()}setClock(){this.clock=Yt(0,1e3).pipe(_t(()=>{new Date().getSeconds()===0&&this.setDate()}),Rt(()=>new Date))}setLogo(){this.logo=this.fileManager.getLogo()}getTimings(){this.salahTimings.getTimes().pipe(Ht()).subscribe(i=>{this.timeHtmlContent.next(i)})}parseTimings(){this.timeHtmlContent.pipe(Lt(this._unsubscribeAll),Ft(i=>!!i)).subscribe(i=>{setTimeout(()=>{let s=new DOMParser().parseFromString(i,"text/html"),I=/\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g;s.querySelectorAll(".prayer_iqama_div").forEach(B=>{let C=B.textContent.match(I);C&&(this.iqamas=this.iqamas?[...this.iqamas,...C]:[...C])}),s.querySelectorAll(".prayer_azaan_div").forEach(B=>{let C=B.textContent.match(I);C&&(this.azaans=this.azaans?[...this.azaans,...C]:[...C])}),this.loadTime()},0)})}loadTime(){this.iqama={[A.Fazr]:this.iqamas[0],[A.Dhuhr]:this.iqamas[1],[A.Asr]:this.iqamas[2],[A.Maghrib]:this.iqamas[3],[A.Isha]:this.iqamas[4],[A.Jummah]:this.iqamas[6]},this.azaan={[A.Fazr]:this.azaans[0],[A.Dhuhr]:this.azaans[1],[A.Asr]:this.azaans[2],[A.Maghrib]:this.azaans[3],[A.Isha]:this.azaans[4],[A.Jummah]:this.azaans[6]}}setDate(){this.englishDate=this.salahTimings.getEnglishDate(),this.salahTimings.getHizriDate().then(i=>{this.hizriDate=i})}};t.\u0275fac=function(r){return new(r||t)(Z(t0),Z(f0),Z(ht))},t.\u0275cmp=W({type:t,selectors:[["app-salah-timings"]],decls:27,vars:18,consts:[[1,"border","border-dashed","border-black"],[1,"flex","flex-col","mb-4"],[1,"flex","flex-row"],[1,"h-36","w-36","max-md:h-28","max-md:w-28","max-sm:h-20","max-sm:w-20","flex","justify-center","items-center","p-3","gap-2"],[1,"flex","flex-row","justify-evenly","w-full","items-center"],[3,"text","time"],[1,"flex","justify-center","font-bold","text-3xl","max-lg:text-2xl","max-md:text-xl","max-sm:text-sm","gap-2","text-color-gray","mt-1","symphony"]],template:function(r,s){r&1&&(J(0,"app-announcements")(1,"div",0),y(2,"div",1)(3,"div",2),J(4,"div",3),y(5,"div",4)(6,"div"),J(7,"app-timer-card",5),w(),y(8,"div"),J(9,"app-timer-card",5),w(),y(10,"div"),J(11,"app-timer-card",5),w(),y(12,"div"),J(13,"app-timer-card",5),w(),y(14,"div"),J(15,"app-timer-card",5),w()()(),y(16,"div",6)(17,"span"),H(18),xt(19,"async"),xt(20,"date"),w(),H(21," | "),y(22,"span"),H(23),w(),H(24,"|"),y(25,"span"),H(26),w()()()),r&2&&(D(7),O("text",s.prayerText.Fazr)("time",s.iqama==null?null:s.iqama.Fajr),D(2),O("text",s.prayerText.Dhuhr)("time",s.iqama==null?null:s.iqama.Dhuhr),D(2),O("text",s.prayerText.Asr)("time",s.iqama==null?null:s.iqama.Asr),D(2),O("text",s.prayerText.Maghrib)("time",s.iqama==null?null:s.iqama.Maghrib),D(2),O("text",s.prayerText.Isha)("time",s.iqama==null?null:s.iqama.Isha),D(3),Q(Zt(20,15,Wt(19,13,s.clock),"hh:mm:ss a")),D(5),Kt(" ",s.englishDate," "),D(3),Q(s.hizriDate))},dependencies:[v0,x0,e0,st],styles:['.background-container[_ngcontent-%COMP%]{background-image:url("./media/youthIftar-U4MAEFXS.jpeg");background-size:contain;background-position:center;background-repeat:no-repeat;display:flex;flex-direction:row;justify-content:center;align-items:center}@media (max-width: 500px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:720px}}@media (min-width: 500px) and (max-width: 600px){.background-container[_ngcontent-%COMP%]{background-size:100vw 100vh;height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}@media (min-width: 600px) and (max-width: 900px){.background-container[_ngcontent-%COMP%]{overflow:hidden;height:100vh}.box[_ngcontent-%COMP%]{margin-top:300px}}@media (min-width: 900px){.background-container[_ngcontent-%COMP%]{height:100vh}.box[_ngcontent-%COMP%]{margin-top:554px}}'],data:{animation:ct}});let e=t;return e})();var ce=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Ut({type:t}),t.\u0275inj=Bt({imports:[a0,r0.forChild([{path:"",component:b0}])]});let e=t;return e})();export{ce as SalahTimingsModule};
