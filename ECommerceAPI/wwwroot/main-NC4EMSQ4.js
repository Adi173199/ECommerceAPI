import{a as zt,c as Xr,d as Ci,e as Ei,f as Gr,g as Wr}from"./chunk-KWLWRE37.js";import{a as Le,b as dr,c as pr,d as ur}from"./chunk-BPXAGCS5.js";import{a as Ur,b as qr,c as te,d as Ti}from"./chunk-D3CG3TDK.js";import{a as Rr,b as Or,c as Ar,i as Zr,k as Yr}from"./chunk-TCNLADW7.js";import{a as Tt,c as an}from"./chunk-SQUXMKES.js";import{$ as qn,$a as nn,Aa as K,Ab as rn,Ac as Er,B as Bn,Ba as ge,Bc as Tr,Bd as Hr,C as zn,Cb as ir,Cc as xi,D as jn,Da as Ct,Db as hi,Dc as ki,Ea as Et,Eb as fi,Fa as V,Fb as Jt,Fc as ut,Fd as Vr,G as ri,Ga as a,Gb as nr,H as en,Ha as s,Hb as rr,I as Xe,Ia as X,Ib as gi,J as Hn,Ja as _e,Jb as or,K as Vn,Ka as Ie,Kb as ar,L as Se,La as We,Mb as _i,N as qt,Nb as sr,Ob as Ft,P as u,Pa as yt,Pb as Nt,Q as at,Qa as Kn,Qb as cr,R as st,Ra as U,Rb as lr,S as oi,Sa as Jn,Sb as Ae,Sc as Mr,T as Zn,Ta as R,Tb as mr,U as De,Ua as Pe,V as Ge,Va as Xt,Vb as hr,W as ee,Wa as Re,Wb as fr,X as ie,Xa as mi,Xb as gr,Ya as At,Yc as Sr,Z as Un,Za as Lt,Zb as _r,Zc as Dr,_ as Ot,_a as Gt,_b as br,a as tn,aa as Xn,ab as xt,ad as Ir,b as Pn,ba as ai,bb as di,bc as on,ca as Dt,cb as p,d as Ee,da as Gn,db as G,dc as Fe,dd as Pr,e as Rn,eb as mt,ec as vr,fa as le,g as Te,ga as f,gb as be,ha as Wn,hb as ve,hd as Lr,ia as si,ib as ye,ic as yr,id as wi,jb as $t,jc as xr,ka as me,kb as xe,la as ci,lb as Ye,m as qe,ma as Yn,mb as tr,n as On,na as li,nc as bi,nd as Ne,oa as N,od as Fr,p as An,pb as pt,pc as vi,pd as Nr,qa as vt,qb as bt,qc as yi,qd as Be,rb as pi,rd as Br,sa as fe,sb as ui,sd as zr,ta as Qt,tc as kr,u as Ln,ua as Qn,vb as er,w as Me,wa as $n,wb as Oe,wc as wr,wd as jr,x as Fn,xb as ne,xc as ke,ya as wt,yc as Bt,yd as ze,z as Nn,za as $,zb as Kt,zc as Cr}from"./chunk-OJHUOJXT.js";var Oo=Object.defineProperty,Ao=Object.defineProperties,Lo=Object.getOwnPropertyDescriptors,Qr=Object.getOwnPropertySymbols,Fo=Object.prototype.hasOwnProperty,No=Object.prototype.propertyIsEnumerable,ln=(i,r,t)=>r in i?Oo(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,$r=(i,r)=>{for(var t in r||(r={}))Fo.call(r,t)&&ln(i,t,r[t]);if(Qr)for(var t of Qr(r))No.call(r,t)&&ln(i,t,r[t]);return i},Bo=(i,r)=>Ao(i,Lo(r)),L=(i,r,t)=>(ln(i,typeof r!="symbol"?r+"":r,t),t),It=globalThis;function Pt(i){return(It.__Zone_symbol_prefix||"__zone_symbol__")+i}function zo(){let i=It.performance;function r(et){i&&i.mark&&i.mark(et)}function t(et,c){i&&i.measure&&i.measure(et,c)}r("Zone");let e=class mn{constructor(c,l){L(this,"_parent"),L(this,"_name"),L(this,"_properties"),L(this,"_zoneDelegate"),this._parent=c,this._name=l?l.name||"unnamed":"<root>",this._properties=l&&l.properties||{},this._zoneDelegate=new h(this,this._parent&&this._parent._zoneDelegate,l)}static assertZonePatched(){if(It.Promise!==Z.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let c=mn.current;for(;c.parent;)c=c.parent;return c}static get current(){return rt.zone}static get currentTask(){return St}static __load_patch(c,l,d=!1){if(Z.hasOwnProperty(c)){let E=It[Pt("forceDuplicateZoneCheck")]===!0;if(!d&&E)throw Error("Already loaded patch: "+c)}else if(!It["__Zone_disable_"+c]){let E="Zone:"+c;r(E),Z[c]=l(It,mn,F),t(E,E)}}get parent(){return this._parent}get name(){return this._name}get(c){let l=this.getZoneWith(c);if(l)return l._properties[c]}getZoneWith(c){let l=this;for(;l;){if(l._properties.hasOwnProperty(c))return l;l=l._parent}return null}fork(c){if(!c)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,c)}wrap(c,l){if(typeof c!="function")throw new Error("Expecting function got: "+c);let d=this._zoneDelegate.intercept(this,c,l),E=this;return function(){return E.runGuarded(d,this,arguments,l)}}run(c,l,d,E){rt={parent:rt,zone:this};try{return this._zoneDelegate.invoke(this,c,l,d,E)}finally{rt=rt.parent}}runGuarded(c,l=null,d,E){rt={parent:rt,zone:this};try{try{return this._zoneDelegate.invoke(this,c,l,d,E)}catch(M){if(this._zoneDelegate.handleError(this,M))throw M}}finally{rt=rt.parent}}runTask(c,l,d){if(c.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(c.zone||P).name+"; Execution: "+this.name+")");let E=c,{type:M,data:{isPeriodic:Rt=!1,isRefreshable:Ht=!1}={}}=c;if(c.state===y&&(M===O||M===B))return;let Vt=c.state!=J;Vt&&E._transitionTo(J,Q);let we=St;St=E,rt={parent:rt,zone:this};try{M==B&&c.data&&!Rt&&!Ht&&(c.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,E,l,d)}catch(_){if(this._zoneDelegate.handleError(this,_))throw _}}finally{let _=c.state;if(_!==y&&_!==C)if(M==O||Rt||Ht&&_===Y)Vt&&E._transitionTo(Q,J,Y);else{let g=E._zoneDelegates;this._updateTaskCount(E,-1),Vt&&E._transitionTo(y,J,y),Ht&&(E._zoneDelegates=g)}rt=rt.parent,St=we}}scheduleTask(c){if(c.zone&&c.zone!==this){let d=this;for(;d;){if(d===c.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${c.zone.name}`);d=d.parent}}c._transitionTo(Y,y);let l=[];c._zoneDelegates=l,c._zone=this;try{c=this._zoneDelegate.scheduleTask(this,c)}catch(d){throw c._transitionTo(C,Y,y),this._zoneDelegate.handleError(this,d),d}return c._zoneDelegates===l&&this._updateTaskCount(c,1),c.state==Y&&c._transitionTo(Q,Y),c}scheduleMicroTask(c,l,d,E){return this.scheduleTask(new v(lt,c,l,d,E,void 0))}scheduleMacroTask(c,l,d,E,M){return this.scheduleTask(new v(B,c,l,d,E,M))}scheduleEventTask(c,l,d,E,M){return this.scheduleTask(new v(O,c,l,d,E,M))}cancelTask(c){if(c.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(c.zone||P).name+"; Execution: "+this.name+")");if(!(c.state!==Q&&c.state!==J)){c._transitionTo(tt,Q,J);try{this._zoneDelegate.cancelTask(this,c)}catch(l){throw c._transitionTo(C,tt),this._zoneDelegate.handleError(this,l),l}return this._updateTaskCount(c,-1),c._transitionTo(y,tt),c.runCount=-1,c}}_updateTaskCount(c,l){let d=c._zoneDelegates;l==-1&&(c._zoneDelegates=null);for(let E=0;E<d.length;E++)d[E]._updateTaskCount(c.type,l)}};L(e,"__symbol__",Pt);let n=e,o={name:"",onHasTask:(et,c,l,d)=>et.hasTask(l,d),onScheduleTask:(et,c,l,d)=>et.scheduleTask(l,d),onInvokeTask:(et,c,l,d,E,M)=>et.invokeTask(l,d,E,M),onCancelTask:(et,c,l,d)=>et.cancelTask(l,d)};class h{constructor(c,l,d){L(this,"_zone"),L(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),L(this,"_forkDlgt"),L(this,"_forkZS"),L(this,"_forkCurrZone"),L(this,"_interceptDlgt"),L(this,"_interceptZS"),L(this,"_interceptCurrZone"),L(this,"_invokeDlgt"),L(this,"_invokeZS"),L(this,"_invokeCurrZone"),L(this,"_handleErrorDlgt"),L(this,"_handleErrorZS"),L(this,"_handleErrorCurrZone"),L(this,"_scheduleTaskDlgt"),L(this,"_scheduleTaskZS"),L(this,"_scheduleTaskCurrZone"),L(this,"_invokeTaskDlgt"),L(this,"_invokeTaskZS"),L(this,"_invokeTaskCurrZone"),L(this,"_cancelTaskDlgt"),L(this,"_cancelTaskZS"),L(this,"_cancelTaskCurrZone"),L(this,"_hasTaskDlgt"),L(this,"_hasTaskDlgtOwner"),L(this,"_hasTaskZS"),L(this,"_hasTaskCurrZone"),this._zone=c,this._forkZS=d&&(d&&d.onFork?d:l._forkZS),this._forkDlgt=d&&(d.onFork?l:l._forkDlgt),this._forkCurrZone=d&&(d.onFork?this._zone:l._forkCurrZone),this._interceptZS=d&&(d.onIntercept?d:l._interceptZS),this._interceptDlgt=d&&(d.onIntercept?l:l._interceptDlgt),this._interceptCurrZone=d&&(d.onIntercept?this._zone:l._interceptCurrZone),this._invokeZS=d&&(d.onInvoke?d:l._invokeZS),this._invokeDlgt=d&&(d.onInvoke?l:l._invokeDlgt),this._invokeCurrZone=d&&(d.onInvoke?this._zone:l._invokeCurrZone),this._handleErrorZS=d&&(d.onHandleError?d:l._handleErrorZS),this._handleErrorDlgt=d&&(d.onHandleError?l:l._handleErrorDlgt),this._handleErrorCurrZone=d&&(d.onHandleError?this._zone:l._handleErrorCurrZone),this._scheduleTaskZS=d&&(d.onScheduleTask?d:l._scheduleTaskZS),this._scheduleTaskDlgt=d&&(d.onScheduleTask?l:l._scheduleTaskDlgt),this._scheduleTaskCurrZone=d&&(d.onScheduleTask?this._zone:l._scheduleTaskCurrZone),this._invokeTaskZS=d&&(d.onInvokeTask?d:l._invokeTaskZS),this._invokeTaskDlgt=d&&(d.onInvokeTask?l:l._invokeTaskDlgt),this._invokeTaskCurrZone=d&&(d.onInvokeTask?this._zone:l._invokeTaskCurrZone),this._cancelTaskZS=d&&(d.onCancelTask?d:l._cancelTaskZS),this._cancelTaskDlgt=d&&(d.onCancelTask?l:l._cancelTaskDlgt),this._cancelTaskCurrZone=d&&(d.onCancelTask?this._zone:l._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let E=d&&d.onHasTask,M=l&&l._hasTaskZS;(E||M)&&(this._hasTaskZS=E?d:o,this._hasTaskDlgt=l,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,d.onScheduleTask||(this._scheduleTaskZS=o,this._scheduleTaskDlgt=l,this._scheduleTaskCurrZone=this._zone),d.onInvokeTask||(this._invokeTaskZS=o,this._invokeTaskDlgt=l,this._invokeTaskCurrZone=this._zone),d.onCancelTask||(this._cancelTaskZS=o,this._cancelTaskDlgt=l,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(c,l){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,c,l):new n(c,l)}intercept(c,l,d){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,c,l,d):l}invoke(c,l,d,E,M){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,c,l,d,E,M):l.apply(d,E)}handleError(c,l){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,c,l):!0}scheduleTask(c,l){let d=l;if(this._scheduleTaskZS)this._hasTaskZS&&d._zoneDelegates.push(this._hasTaskDlgtOwner),d=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,c,l),d||(d=l);else if(l.scheduleFn)l.scheduleFn(l);else if(l.type==lt)kt(l);else throw new Error("Task is missing scheduleFn.");return d}invokeTask(c,l,d,E){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,c,l,d,E):l.callback.apply(d,E)}cancelTask(c,l){let d;if(this._cancelTaskZS)d=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,c,l);else{if(!l.cancelFn)throw Error("Task is not cancelable");d=l.cancelFn(l)}return d}hasTask(c,l){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,c,l)}catch(d){this.handleError(c,d)}}_updateTaskCount(c,l){let d=this._taskCounts,E=d[c],M=d[c]=E+l;if(M<0)throw new Error("More tasks executed then were scheduled.");if(E==0||M==0){let Rt={microTask:d.microTask>0,macroTask:d.macroTask>0,eventTask:d.eventTask>0,change:c};this.hasTask(this._zone,Rt)}}}class v{constructor(c,l,d,E,M,Rt){if(L(this,"type"),L(this,"source"),L(this,"invoke"),L(this,"callback"),L(this,"data"),L(this,"scheduleFn"),L(this,"cancelFn"),L(this,"_zone",null),L(this,"runCount",0),L(this,"_zoneDelegates",null),L(this,"_state","notScheduled"),this.type=c,this.source=l,this.data=E,this.scheduleFn=M,this.cancelFn=Rt,!d)throw new Error("callback is not defined");this.callback=d;let Ht=this;c===O&&E&&E.useG?this.invoke=v.invokeTask:this.invoke=function(){return v.invokeTask.call(It,Ht,this,arguments)}}static invokeTask(c,l,d){c||(c=this),_t++;try{return c.runCount++,c.zone.runTask(c,l,d)}finally{_t===1&&!It[D]&&ft(),_t--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(y,Y)}_transitionTo(c,l,d){if(this._state===l||this._state===d)this._state=c,c==y&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${c}', expecting state '${l}'${d?" or '"+d+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let w=Pt("setTimeout"),S=Pt("Promise"),x=Pt("then"),D=Pt("enable_native_microtask_draining"),A=[],q=!1,ht;function ot(et){var c;!ht&&It[S]&&(ht=It[S].resolve(0)),ht?((c=ht[x])!=null?c:ht.then).call(ht,et):It[w](et,0)}function kt(et){let c=It[D],l=c&&A.length===0&&!q,d=!c&&_t===0&&A.length===0;(l||d)&&ot(ft),et&&A.push(et)}function ft(){if(!q){for(q=!0;A.length;){let et=A;A=[];for(let c of et)try{c.zone.runTask(c,null,null)}catch(l){F.onUnhandledError(l)}}It[D]?(q=!1,F.microtaskDrainDone()):(F.microtaskDrainDone(),q=!1)}}let P={name:"NO ZONE"},y="notScheduled",Y="scheduling",Q="scheduled",J="running",tt="canceling",C="unknown",lt="microTask",B="macroTask",O="eventTask",Z={},F={symbol:Pt,currentZoneFrame:()=>rt,onUnhandledError:dt,microtaskDrainDone:dt,scheduleMicroTask:kt,showUncaughtError:()=>!n[Pt("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:dt,patchMethod:()=>dt,bindArguments:()=>[],patchThen:()=>dt,patchMacroTask:()=>dt,patchEventPrototype:()=>dt,getGlobalObjects:()=>{},ObjectDefineProperty:()=>dt,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>dt,wrapWithCurrentZone:()=>dt,filterProperties:()=>[],attachOriginToPatched:()=>dt,_redefineProperty:()=>dt,patchCallbacks:()=>dt,nativeScheduleMicroTask:ot},rt={parent:null,zone:new n(null,null)},St=null,_t=0;function dt(){}return t("Zone","Zone"),n}function jo(){var i;let r=globalThis,t=r[Pt("forceDuplicateZoneCheck")]===!0;if(r.Zone&&(t||typeof r.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(i=r.Zone)!=null||(r.Zone=zo()),r.Zone}var $e=Object.getOwnPropertyDescriptor,pn=Object.defineProperty,un=Object.getPrototypeOf,Ho=Object.create,Vo=Array.prototype.slice,hn="addEventListener",fn="removeEventListener",sn=Pt(hn),cn=Pt(fn),re="true",oe="false",Ke=Pt("");function gn(i,r){return Zone.current.wrap(i,r)}function _n(i,r,t,e,n){return Zone.current.scheduleMacroTask(i,r,t,e,n)}var W=Pt,Di=typeof window<"u",Ii=Di?window:void 0,gt=Di&&Ii||globalThis,Zo="removeAttribute";function bn(i,r){for(let t=i.length-1;t>=0;t--)typeof i[t]=="function"&&(i[t]=gn(i[t],r+"_"+t));return i}function Uo(i,r){let t=i.constructor.name;for(let e=0;e<r.length;e++){let n=r[e],o=i[n];if(o){let h=$e(i,n);if(!no(h))continue;i[n]=(v=>{let w=function(){return v.apply(this,bn(arguments,t+"."+n))};return se(w,v),w})(o)}}}function no(i){return i?i.writable===!1?!1:!(typeof i.get=="function"&&typeof i.set>"u"):!0}var ro=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Pi=!("nw"in gt)&&typeof gt.process<"u"&&gt.process.toString()==="[object process]",vn=!Pi&&!ro&&!!(Di&&Ii.HTMLElement),oo=typeof gt.process<"u"&&gt.process.toString()==="[object process]"&&!ro&&!!(Di&&Ii.HTMLElement),Si={},qo=W("enable_beforeunload"),Kr=function(i){if(i=i||gt.event,!i)return;let r=Si[i.type];r||(r=Si[i.type]=W("ON_PROPERTY"+i.type));let t=this||i.target||gt,e=t[r],n;if(vn&&t===Ii&&i.type==="error"){let o=i;n=e&&e.call(this,o.message,o.filename,o.lineno,o.colno,o.error),n===!0&&i.preventDefault()}else n=e&&e.apply(this,arguments),i.type==="beforeunload"&&gt[qo]&&typeof n=="string"?i.returnValue=n:n!=null&&!n&&i.preventDefault();return n};function Jr(i,r,t){let e=$e(i,r);if(!e&&t&&$e(t,r)&&(e={enumerable:!0,configurable:!0}),!e||!e.configurable)return;let n=W("on"+r+"patched");if(i.hasOwnProperty(n)&&i[n])return;delete e.writable,delete e.value;let o=e.get,h=e.set,v=r.slice(2),w=Si[v];w||(w=Si[v]=W("ON_PROPERTY"+v)),e.set=function(S){let x=this;if(!x&&i===gt&&(x=gt),!x)return;typeof x[w]=="function"&&x.removeEventListener(v,Kr),h?.call(x,null),x[w]=S,typeof S=="function"&&x.addEventListener(v,Kr,!1)},e.get=function(){let S=this;if(!S&&i===gt&&(S=gt),!S)return null;let x=S[w];if(x)return x;if(o){let D=o.call(this);if(D)return e.set.call(this,D),typeof S[Zo]=="function"&&S.removeAttribute(r),D}return null},pn(i,r,e),i[n]=!0}function ao(i,r,t){if(r)for(let e=0;e<r.length;e++)Jr(i,"on"+r[e],t);else{let e=[];for(let n in i)n.slice(0,2)=="on"&&e.push(n);for(let n=0;n<e.length;n++)Jr(i,e[n],t)}}var Wt=W("originalInstance");function Qe(i){let r=gt[i];if(!r)return;gt[W(i)]=r,gt[i]=function(){let n=bn(arguments,i);switch(n.length){case 0:this[Wt]=new r;break;case 1:this[Wt]=new r(n[0]);break;case 2:this[Wt]=new r(n[0],n[1]);break;case 3:this[Wt]=new r(n[0],n[1],n[2]);break;case 4:this[Wt]=new r(n[0],n[1],n[2],n[3]);break;default:throw new Error("Arg list too long.")}},se(gt[i],r);let t=new r(function(){}),e;for(e in t)i==="XMLHttpRequest"&&e==="responseBlob"||(function(n){typeof t[n]=="function"?gt[i].prototype[n]=function(){return this[Wt][n].apply(this[Wt],arguments)}:pn(gt[i].prototype,n,{set:function(o){typeof o=="function"?(this[Wt][n]=gn(o,i+"."+n),se(this[Wt][n],o)):this[Wt][n]=o},get:function(){return this[Wt][n]}})})(e);for(e in r)e!=="prototype"&&r.hasOwnProperty(e)&&(gt[i][e]=r[e])}function Xo(i,r){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(i).forEach(e=>{let n=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(r,e,{get:function(){return i[e]},set:function(o){n&&(!n.writable||typeof n.set!="function")||(i[e]=o)},enumerable:n?n.enumerable:!0,configurable:n?n.configurable:!0})})}var Go=!1;function ae(i,r,t){let e=i;for(;e&&!e.hasOwnProperty(r);)e=un(e);!e&&i[r]&&(e=i);let n=W(r),o=null;if(e&&(!(o=e[n])||!e.hasOwnProperty(n))){o=e[n]=e[r];let h=e&&$e(e,r);if(no(h)){let v=t(o,n,r);e[r]=function(){return v(this,arguments)},se(e[r],o),Go&&Xo(o,e[r])}}return o}function Wo(i,r,t){let e=null;function n(o){let h=o.data;return h.args[h.cbIdx]=function(){o.invoke.apply(this,arguments)},e.apply(h.target,h.args),o}e=ae(i,r,o=>function(h,v){let w=t(h,v);return w.cbIdx>=0&&typeof v[w.cbIdx]=="function"?_n(w.name,v[w.cbIdx],w,n):o.apply(h,v)})}function se(i,r){i[W("OriginalDelegate")]=r}function to(i){return typeof i=="function"}function eo(i){return typeof i=="number"}var Yo={useG:!0},jt={},so={},co=new RegExp("^"+Ke+"(\\w+)(true|false)$"),lo=W("propagationStopped");function mo(i,r){let t=(r?r(i):i)+oe,e=(r?r(i):i)+re,n=Ke+t,o=Ke+e;jt[i]={},jt[i][oe]=n,jt[i][re]=o}function Qo(i,r,t,e){let n=e&&e.add||hn,o=e&&e.rm||fn,h=e&&e.listeners||"eventListeners",v=e&&e.rmAll||"removeAllListeners",w=W(n),S="."+n+":",x="prependListener",D="."+x+":",A=function(P,y,Y){if(P.isRemoved)return;let Q=P.callback;typeof Q=="object"&&Q.handleEvent&&(P.callback=C=>Q.handleEvent(C),P.originalDelegate=Q);let J;try{P.invoke(P,y,[Y])}catch(C){J=C}let tt=P.options;if(tt&&typeof tt=="object"&&tt.once){let C=P.originalDelegate?P.originalDelegate:P.callback;y[o].call(y,Y.type,C,tt)}return J};function q(P,y,Y){if(y=y||i.event,!y)return;let Q=P||y.target||i,J=Q[jt[y.type][Y?re:oe]];if(J){let tt=[];if(J.length===1){let C=A(J[0],Q,y);C&&tt.push(C)}else{let C=J.slice();for(let lt=0;lt<C.length&&!(y&&y[lo]===!0);lt++){let B=A(C[lt],Q,y);B&&tt.push(B)}}if(tt.length===1)throw tt[0];for(let C=0;C<tt.length;C++){let lt=tt[C];r.nativeScheduleMicroTask(()=>{throw lt})}}}let ht=function(P){return q(this,P,!1)},ot=function(P){return q(this,P,!0)};function kt(P,y){if(!P)return!1;let Y=!0;y&&y.useG!==void 0&&(Y=y.useG);let Q=y&&y.vh,J=!0;y&&y.chkDup!==void 0&&(J=y.chkDup);let tt=!1;y&&y.rt!==void 0&&(tt=y.rt);let C=P;for(;C&&!C.hasOwnProperty(n);)C=un(C);if(!C&&P[n]&&(C=P),!C||C[w])return!1;let lt=y&&y.eventNameToString,B={},O=C[w]=C[n],Z=C[W(o)]=C[o],F=C[W(h)]=C[h],rt=C[W(v)]=C[v],St;y&&y.prepend&&(St=C[W(y.prepend)]=C[y.prepend]);function _t(m,b){return b?typeof m=="boolean"?{capture:m,passive:!0}:m?typeof m=="object"&&m.passive!==!1?Bo($r({},m),{passive:!0}):m:{passive:!0}:m}let dt=function(m){if(!B.isExisting)return O.call(B.target,B.eventName,B.capture?ot:ht,B.options)},et=function(m){if(!m.isRemoved){let b=jt[m.eventName],T;b&&(T=b[m.capture?re:oe]);let I=T&&m.target[T];if(I){for(let k=0;k<I.length;k++)if(I[k]===m){I.splice(k,1),m.isRemoved=!0,m.removeAbortListener&&(m.removeAbortListener(),m.removeAbortListener=null),I.length===0&&(m.allRemoved=!0,m.target[T]=null);break}}}if(m.allRemoved)return Z.call(m.target,m.eventName,m.capture?ot:ht,m.options)},c=function(m){return O.call(B.target,B.eventName,m.invoke,B.options)},l=function(m){return St.call(B.target,B.eventName,m.invoke,B.options)},d=function(m){return Z.call(m.target,m.eventName,m.invoke,m.options)},E=Y?dt:c,M=Y?et:d,Rt=function(m,b){let T=typeof b;return T==="function"&&m.callback===b||T==="object"&&m.originalDelegate===b},Ht=y?.diff||Rt,Vt=Zone[W("UNPATCHED_EVENTS")],we=i[W("PASSIVE_EVENTS")];function _(m){if(typeof m=="object"&&m!==null){let b=$r({},m);return m.signal&&(b.signal=m.signal),b}return m}let g=function(m,b,T,I,k=!1,z=!1){return function(){let j=this||i,H=arguments[0];y&&y.transferEventName&&(H=y.transferEventName(H));let it=arguments[1];if(!it)return m.apply(this,arguments);if(Pi&&H==="uncaughtException")return m.apply(this,arguments);let nt=!1;if(typeof it!="function"){if(!it.handleEvent)return m.apply(this,arguments);nt=!0}if(Q&&!Q(m,it,j,arguments))return;let ce=!!we&&we.indexOf(H)!==-1,Zt=_(_t(arguments[2],ce)),he=Zt?.signal;if(he?.aborted)return;if(Vt){for(let Yt=0;Yt<Vt.length;Yt++)if(H===Vt[Yt])return ce?m.call(j,H,it,Zt):m.apply(this,arguments)}let Ki=Zt?typeof Zt=="boolean"?!0:Zt.capture:!1,Tn=Zt&&typeof Zt=="object"?Zt.once:!1,Ro=Zone.current,Ji=jt[H];Ji||(mo(H,lt),Ji=jt[H]);let Mn=Ji[Ki?re:oe],Ce=j[Mn],Sn=!1;if(Ce){if(Sn=!0,J){for(let Yt=0;Yt<Ce.length;Yt++)if(Ht(Ce[Yt],it))return}}else Ce=j[Mn]=[];let ni,Dn=j.constructor.name,In=so[Dn];In&&(ni=In[H]),ni||(ni=Dn+b+(lt?lt(H):H)),B.options=Zt,Tn&&(B.options.once=!1),B.target=j,B.capture=Ki,B.eventName=H,B.isExisting=Sn;let Ue=Y?Yo:void 0;Ue&&(Ue.taskData=B),he&&(B.options.signal=void 0);let Ut=Ro.scheduleEventTask(ni,it,Ue,T,I);if(he){B.options.signal=he;let Yt=()=>Ut.zone.cancelTask(Ut);m.call(he,"abort",Yt,{once:!0}),Ut.removeAbortListener=()=>he.removeEventListener("abort",Yt)}if(B.target=null,Ue&&(Ue.taskData=null),Tn&&(B.options.once=!0),typeof Ut.options!="boolean"&&(Ut.options=Zt),Ut.target=j,Ut.capture=Ki,Ut.eventName=H,nt&&(Ut.originalDelegate=it),z?Ce.unshift(Ut):Ce.push(Ut),k)return j}};return C[n]=g(O,S,E,M,tt),St&&(C[x]=g(St,D,l,M,tt,!0)),C[o]=function(){let m=this||i,b=arguments[0];y&&y.transferEventName&&(b=y.transferEventName(b));let T=arguments[2],I=T?typeof T=="boolean"?!0:T.capture:!1,k=arguments[1];if(!k)return Z.apply(this,arguments);if(Q&&!Q(Z,k,m,arguments))return;let z=jt[b],j;z&&(j=z[I?re:oe]);let H=j&&m[j];if(H)for(let it=0;it<H.length;it++){let nt=H[it];if(Ht(nt,k)){if(H.splice(it,1),nt.isRemoved=!0,H.length===0&&(nt.allRemoved=!0,m[j]=null,!I&&typeof b=="string")){let ce=Ke+"ON_PROPERTY"+b;m[ce]=null}return nt.zone.cancelTask(nt),tt?m:void 0}}return Z.apply(this,arguments)},C[h]=function(){let m=this||i,b=arguments[0];y&&y.transferEventName&&(b=y.transferEventName(b));let T=[],I=po(m,lt?lt(b):b);for(let k=0;k<I.length;k++){let z=I[k],j=z.originalDelegate?z.originalDelegate:z.callback;T.push(j)}return T},C[v]=function(){let m=this||i,b=arguments[0];if(b){y&&y.transferEventName&&(b=y.transferEventName(b));let T=jt[b];if(T){let I=T[oe],k=T[re],z=m[I],j=m[k];if(z){let H=z.slice();for(let it=0;it<H.length;it++){let nt=H[it],ce=nt.originalDelegate?nt.originalDelegate:nt.callback;this[o].call(this,b,ce,nt.options)}}if(j){let H=j.slice();for(let it=0;it<H.length;it++){let nt=H[it],ce=nt.originalDelegate?nt.originalDelegate:nt.callback;this[o].call(this,b,ce,nt.options)}}}}else{let T=Object.keys(m);for(let I=0;I<T.length;I++){let k=T[I],z=co.exec(k),j=z&&z[1];j&&j!=="removeListener"&&this[v].call(this,j)}this[v].call(this,"removeListener")}if(tt)return this},se(C[n],O),se(C[o],Z),rt&&se(C[v],rt),F&&se(C[h],F),!0}let ft=[];for(let P=0;P<t.length;P++)ft[P]=kt(t[P],e);return ft}function po(i,r){if(!r){let o=[];for(let h in i){let v=co.exec(h),w=v&&v[1];if(w&&(!r||w===r)){let S=i[h];if(S)for(let x=0;x<S.length;x++)o.push(S[x])}}return o}let t=jt[r];t||(mo(r),t=jt[r]);let e=i[t[oe]],n=i[t[re]];return e?n?e.concat(n):e.slice():n?n.slice():[]}function $o(i,r){let t=i.Event;t&&t.prototype&&r.patchMethod(t.prototype,"stopImmediatePropagation",e=>function(n,o){n[lo]=!0,e&&e.apply(n,o)})}function Ko(i,r){r.patchMethod(i,"queueMicrotask",t=>function(e,n){Zone.current.scheduleMicroTask("queueMicrotask",n[0])})}var Mi=W("zoneTask");function je(i,r,t,e){let n=null,o=null;r+=e,t+=e;let h={};function v(S){let x=S.data;x.args[0]=function(){return S.invoke.apply(this,arguments)};let D=n.apply(i,x.args);return eo(D)?x.handleId=D:(x.handle=D,x.isRefreshable=to(D.refresh)),S}function w(S){let{handle:x,handleId:D}=S.data;return o.call(i,x??D)}n=ae(i,r,S=>function(x,D){var A;if(to(D[0])){let q={isRefreshable:!1,isPeriodic:e==="Interval",delay:e==="Timeout"||e==="Interval"?D[1]||0:void 0,args:D},ht=D[0];D[0]=function(){try{return ht.apply(this,arguments)}finally{let{handle:Q,handleId:J,isPeriodic:tt,isRefreshable:C}=q;!tt&&!C&&(J?delete h[J]:Q&&(Q[Mi]=null))}};let ot=_n(r,D[0],q,v,w);if(!ot)return ot;let{handleId:kt,handle:ft,isRefreshable:P,isPeriodic:y}=ot.data;if(kt)h[kt]=ot;else if(ft&&(ft[Mi]=ot,P&&!y)){let Y=ft.refresh;ft.refresh=function(){let{zone:Q,state:J}=ot;return J==="notScheduled"?(ot._state="scheduled",Q._updateTaskCount(ot,1)):J==="running"&&(ot._state="scheduling"),Y.call(this)}}return(A=ft??kt)!=null?A:ot}else return S.apply(i,D)}),o=ae(i,t,S=>function(x,D){let A=D[0],q;eo(A)?(q=h[A],delete h[A]):(q=A?.[Mi],q?A[Mi]=null:q=A),q?.type?q.cancelFn&&q.zone.cancelTask(q):S.apply(i,D)})}function Jo(i,r){let{isBrowser:t,isMix:e}=r.getGlobalObjects();if(!t&&!e||!i.customElements||!("customElements"in i))return;let n=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];r.patchCallbacks(r,i.customElements,"customElements","define",n)}function ta(i,r){if(Zone[r.symbol("patchEventTarget")])return;let{eventNames:t,zoneSymbolEventNames:e,TRUE_STR:n,FALSE_STR:o,ZONE_SYMBOL_PREFIX:h}=r.getGlobalObjects();for(let w=0;w<t.length;w++){let S=t[w],x=S+o,D=S+n,A=h+x,q=h+D;e[S]={},e[S][o]=A,e[S][n]=q}let v=i.EventTarget;if(!(!v||!v.prototype))return r.patchEventTarget(i,r,[v&&v.prototype]),!0}function ea(i,r){r.patchEventPrototype(i,r)}function uo(i,r,t){if(!t||t.length===0)return r;let e=t.filter(o=>o.target===i);if(e.length===0)return r;let n=e[0].ignoreProperties;return r.filter(o=>n.indexOf(o)===-1)}function io(i,r,t,e){if(!i)return;let n=uo(i,r,t);ao(i,n,e)}function dn(i){return Object.getOwnPropertyNames(i).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function ia(i,r){if(Pi&&!oo||Zone[i.symbol("patchEvents")])return;let t=r.__Zone_ignore_on_properties,e=[];if(vn){let n=window;e=e.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),io(n,dn(n),t,un(n))}e=e.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let n=0;n<e.length;n++){let o=r[e[n]];o?.prototype&&io(o.prototype,dn(o.prototype),t)}}function na(i){i.__load_patch("timers",r=>{let e="clear";je(r,"set",e,"Timeout"),je(r,"set",e,"Interval"),je(r,"set",e,"Immediate")}),i.__load_patch("requestAnimationFrame",r=>{je(r,"request","cancel","AnimationFrame"),je(r,"mozRequest","mozCancel","AnimationFrame"),je(r,"webkitRequest","webkitCancel","AnimationFrame")}),i.__load_patch("blocking",(r,t)=>{let e=["alert","prompt","confirm"];for(let n=0;n<e.length;n++){let o=e[n];ae(r,o,(h,v,w)=>function(S,x){return t.current.run(h,r,x,w)})}}),i.__load_patch("EventTarget",(r,t,e)=>{ea(r,e),ta(r,e);let n=r.XMLHttpRequestEventTarget;n&&n.prototype&&e.patchEventTarget(r,e,[n.prototype])}),i.__load_patch("MutationObserver",(r,t,e)=>{Qe("MutationObserver"),Qe("WebKitMutationObserver")}),i.__load_patch("IntersectionObserver",(r,t,e)=>{Qe("IntersectionObserver")}),i.__load_patch("FileReader",(r,t,e)=>{Qe("FileReader")}),i.__load_patch("on_property",(r,t,e)=>{ia(e,r)}),i.__load_patch("customElements",(r,t,e)=>{Jo(r,e)}),i.__load_patch("XHR",(r,t)=>{S(r);let e=W("xhrTask"),n=W("xhrSync"),o=W("xhrListener"),h=W("xhrScheduled"),v=W("xhrURL"),w=W("xhrErrorBeforeScheduled");function S(x){let D=x.XMLHttpRequest;if(!D)return;let A=D.prototype;function q(O){return O[e]}let ht=A[sn],ot=A[cn];if(!ht){let O=x.XMLHttpRequestEventTarget;if(O){let Z=O.prototype;ht=Z[sn],ot=Z[cn]}}let kt="readystatechange",ft="scheduled";function P(O){let Z=O.data,F=Z.target;F[h]=!1,F[w]=!1;let rt=F[o];ht||(ht=F[sn],ot=F[cn]),rt&&ot.call(F,kt,rt);let St=F[o]=()=>{if(F.readyState===F.DONE)if(!Z.aborted&&F[h]&&O.state===ft){let dt=F[t.__symbol__("loadfalse")];if(F.status!==0&&dt&&dt.length>0){let et=O.invoke;O.invoke=function(){let c=F[t.__symbol__("loadfalse")];for(let l=0;l<c.length;l++)c[l]===O&&c.splice(l,1);!Z.aborted&&O.state===ft&&et.call(O)},dt.push(O)}else O.invoke()}else!Z.aborted&&F[h]===!1&&(F[w]=!0)};return ht.call(F,kt,St),F[e]||(F[e]=O),lt.apply(F,Z.args),F[h]=!0,O}function y(){}function Y(O){let Z=O.data;return Z.aborted=!0,B.apply(Z.target,Z.args)}let Q=ae(A,"open",()=>function(O,Z){return O[n]=Z[2]==!1,O[v]=Z[1],Q.apply(O,Z)}),J="XMLHttpRequest.send",tt=W("fetchTaskAborting"),C=W("fetchTaskScheduling"),lt=ae(A,"send",()=>function(O,Z){if(t.current[C]===!0||O[n])return lt.apply(O,Z);{let F={target:O,url:O[v],isPeriodic:!1,args:Z,aborted:!1},rt=_n(J,y,F,P,Y);O&&O[w]===!0&&!F.aborted&&rt.state===ft&&rt.invoke()}}),B=ae(A,"abort",()=>function(O,Z){let F=q(O);if(F&&typeof F.type=="string"){if(F.cancelFn==null||F.data&&F.data.aborted)return;F.zone.cancelTask(F)}else if(t.current[tt]===!0)return B.apply(O,Z)})}}),i.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&Uo(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),i.__load_patch("PromiseRejectionEvent",(r,t)=>{function e(n){return function(o){po(r,n).forEach(v=>{let w=r.PromiseRejectionEvent;if(w){let S=new w(n,{promise:o.promise,reason:o.rejection});v.invoke(S)}})}}r.PromiseRejectionEvent&&(t[W("unhandledPromiseRejectionHandler")]=e("unhandledrejection"),t[W("rejectionHandledHandler")]=e("rejectionhandled"))}),i.__load_patch("queueMicrotask",(r,t,e)=>{Ko(r,e)})}function ra(i){i.__load_patch("ZoneAwarePromise",(r,t,e)=>{let n=Object.getOwnPropertyDescriptor,o=Object.defineProperty;function h(_){if(_&&_.toString===Object.prototype.toString){let g=_.constructor&&_.constructor.name;return(g||"")+": "+JSON.stringify(_)}return _?_.toString():Object.prototype.toString.call(_)}let v=e.symbol,w=[],S=r[v("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,x=v("Promise"),D=v("then"),A="__creationTrace__";e.onUnhandledError=_=>{if(e.showUncaughtError()){let g=_&&_.rejection;g?console.error("Unhandled Promise rejection:",g instanceof Error?g.message:g,"; Zone:",_.zone.name,"; Task:",_.task&&_.task.source,"; Value:",g,g instanceof Error?g.stack:void 0):console.error(_)}},e.microtaskDrainDone=()=>{for(;w.length;){let _=w.shift();try{_.zone.runGuarded(()=>{throw _.throwOriginal?_.rejection:_})}catch(g){ht(g)}}};let q=v("unhandledPromiseRejectionHandler");function ht(_){e.onUnhandledError(_);try{let g=t[q];typeof g=="function"&&g.call(this,_)}catch{}}function ot(_){return _&&typeof _.then=="function"}function kt(_){return _}function ft(_){return M.reject(_)}let P=v("state"),y=v("value"),Y=v("finally"),Q=v("parentPromiseValue"),J=v("parentPromiseState"),tt="Promise.then",C=null,lt=!0,B=!1,O=0;function Z(_,g){return m=>{try{_t(_,g,m)}catch(b){_t(_,!1,b)}}}let F=function(){let _=!1;return function(m){return function(){_||(_=!0,m.apply(null,arguments))}}},rt="Promise resolved with itself",St=v("currentTaskTrace");function _t(_,g,m){let b=F();if(_===m)throw new TypeError(rt);if(_[P]===C){let T=null;try{(typeof m=="object"||typeof m=="function")&&(T=m&&m.then)}catch(I){return b(()=>{_t(_,!1,I)})(),_}if(g!==B&&m instanceof M&&m.hasOwnProperty(P)&&m.hasOwnProperty(y)&&m[P]!==C)et(m),_t(_,m[P],m[y]);else if(g!==B&&typeof T=="function")try{T.call(m,b(Z(_,g)),b(Z(_,!1)))}catch(I){b(()=>{_t(_,!1,I)})()}else{_[P]=g;let I=_[y];if(_[y]=m,_[Y]===Y&&g===lt&&(_[P]=_[J],_[y]=_[Q]),g===B&&m instanceof Error){let k=t.currentTask&&t.currentTask.data&&t.currentTask.data[A];k&&o(m,St,{configurable:!0,enumerable:!1,writable:!0,value:k})}for(let k=0;k<I.length;)c(_,I[k++],I[k++],I[k++],I[k++]);if(I.length==0&&g==B){_[P]=O;let k=m;try{throw new Error("Uncaught (in promise): "+h(m)+(m&&m.stack?`
`+m.stack:""))}catch(z){k=z}S&&(k.throwOriginal=!0),k.rejection=m,k.promise=_,k.zone=t.current,k.task=t.currentTask,w.push(k),e.scheduleMicroTask()}}}return _}let dt=v("rejectionHandledHandler");function et(_){if(_[P]===O){try{let g=t[dt];g&&typeof g=="function"&&g.call(this,{rejection:_[y],promise:_})}catch{}_[P]=B;for(let g=0;g<w.length;g++)_===w[g].promise&&w.splice(g,1)}}function c(_,g,m,b,T){et(_);let I=_[P],k=I?typeof b=="function"?b:kt:typeof T=="function"?T:ft;g.scheduleMicroTask(tt,()=>{try{let z=_[y],j=!!m&&Y===m[Y];j&&(m[Q]=z,m[J]=I);let H=g.run(k,void 0,j&&k!==ft&&k!==kt?[]:[z]);_t(m,!0,H)}catch(z){_t(m,!1,z)}},m)}let l="function ZoneAwarePromise() { [native code] }",d=function(){},E=r.AggregateError;class M{static toString(){return l}static resolve(g){return g instanceof M?g:_t(new this(null),lt,g)}static reject(g){return _t(new this(null),B,g)}static withResolvers(){let g={};return g.promise=new M((m,b)=>{g.resolve=m,g.reject=b}),g}static any(g){if(!g||typeof g[Symbol.iterator]!="function")return Promise.reject(new E([],"All promises were rejected"));let m=[],b=0;try{for(let k of g)b++,m.push(M.resolve(k))}catch{return Promise.reject(new E([],"All promises were rejected"))}if(b===0)return Promise.reject(new E([],"All promises were rejected"));let T=!1,I=[];return new M((k,z)=>{for(let j=0;j<m.length;j++)m[j].then(H=>{T||(T=!0,k(H))},H=>{I.push(H),b--,b===0&&(T=!0,z(new E(I,"All promises were rejected")))})})}static race(g){let m,b,T=new this((z,j)=>{m=z,b=j});function I(z){m(z)}function k(z){b(z)}for(let z of g)ot(z)||(z=this.resolve(z)),z.then(I,k);return T}static all(g){return M.allWithCallback(g)}static allSettled(g){return(this&&this.prototype instanceof M?this:M).allWithCallback(g,{thenCallback:b=>({status:"fulfilled",value:b}),errorCallback:b=>({status:"rejected",reason:b})})}static allWithCallback(g,m){let b,T,I=new this((H,it)=>{b=H,T=it}),k=2,z=0,j=[];for(let H of g){ot(H)||(H=this.resolve(H));let it=z;try{H.then(nt=>{j[it]=m?m.thenCallback(nt):nt,k--,k===0&&b(j)},nt=>{m?(j[it]=m.errorCallback(nt),k--,k===0&&b(j)):T(nt)})}catch(nt){T(nt)}k++,z++}return k-=2,k===0&&b(j),I}constructor(g){let m=this;if(!(m instanceof M))throw new Error("Must be an instanceof Promise.");m[P]=C,m[y]=[];try{let b=F();g&&g(b(Z(m,lt)),b(Z(m,B)))}catch(b){_t(m,!1,b)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return M}then(g,m){var b;let T=(b=this.constructor)==null?void 0:b[Symbol.species];(!T||typeof T!="function")&&(T=this.constructor||M);let I=new T(d),k=t.current;return this[P]==C?this[y].push(k,I,g,m):c(this,k,I,g,m),I}catch(g){return this.then(null,g)}finally(g){var m;let b=(m=this.constructor)==null?void 0:m[Symbol.species];(!b||typeof b!="function")&&(b=M);let T=new b(d);T[Y]=Y;let I=t.current;return this[P]==C?this[y].push(I,T,g,g):c(this,I,T,g,g),T}}M.resolve=M.resolve,M.reject=M.reject,M.race=M.race,M.all=M.all;let Rt=r[x]=r.Promise;r.Promise=M;let Ht=v("thenPatched");function Vt(_){let g=_.prototype,m=n(g,"then");if(m&&(m.writable===!1||!m.configurable))return;let b=g.then;g[D]=b,_.prototype.then=function(T,I){return new M((z,j)=>{b.call(this,z,j)}).then(T,I)},_[Ht]=!0}e.patchThen=Vt;function we(_){return function(g,m){let b=_.apply(g,m);if(b instanceof M)return b;let T=b.constructor;return T[Ht]||Vt(T),b}}if(Rt){Vt(Rt);let _=Rt.try;_&&typeof _=="function"&&(M.try=_),ae(r,"fetch",g=>we(g))}return Promise[t.__symbol__("uncaughtPromiseErrors")]=w,M})}function oa(i){i.__load_patch("toString",r=>{let t=Function.prototype.toString,e=W("OriginalDelegate"),n=W("Promise"),o=W("Error"),h=function(){if(typeof this=="function"){let x=this[e];if(x)return typeof x=="function"?t.call(x):Object.prototype.toString.call(x);if(this===Promise){let D=r[n];if(D)return t.call(D)}if(this===Error){let D=r[o];if(D)return t.call(D)}}return t.call(this)};h[e]=t,Function.prototype.toString=h;let v=Object.prototype.toString,w="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?w:v.call(this)}})}function aa(i,r,t,e,n){let o=Zone.__symbol__(e);if(r[o])return;let h=r[o]=r[e];r[e]=function(v,w,S){return w&&w.prototype&&n.forEach(function(x){let D=`${t}.${e}::`+x,A=w.prototype;try{if(A.hasOwnProperty(x)){let q=i.ObjectGetOwnPropertyDescriptor(A,x);q&&q.value?(q.value=i.wrapWithCurrentZone(q.value,D),i._redefineProperty(w.prototype,x,q)):A[x]&&(A[x]=i.wrapWithCurrentZone(A[x],D))}else A[x]&&(A[x]=i.wrapWithCurrentZone(A[x],D))}catch{}}),h.call(r,v,w,S)},i.attachOriginToPatched(r[e],h)}function sa(i){i.__load_patch("util",(r,t,e)=>{let n=dn(r);e.patchOnProperties=ao,e.patchMethod=ae,e.bindArguments=bn,e.patchMacroTask=Wo;let o=t.__symbol__("BLACK_LISTED_EVENTS"),h=t.__symbol__("UNPATCHED_EVENTS");r[h]&&(r[o]=r[h]),r[o]&&(t[o]=t[h]=r[o]),e.patchEventPrototype=$o,e.patchEventTarget=Qo,e.ObjectDefineProperty=pn,e.ObjectGetOwnPropertyDescriptor=$e,e.ObjectCreate=Ho,e.ArraySlice=Vo,e.patchClass=Qe,e.wrapWithCurrentZone=gn,e.filterProperties=uo,e.attachOriginToPatched=se,e._redefineProperty=Object.defineProperty,e.patchCallbacks=aa,e.getGlobalObjects=()=>({globalSources:so,zoneSymbolEventNames:jt,eventNames:n,isBrowser:vn,isMix:oo,isNode:Pi,TRUE_STR:re,FALSE_STR:oe,ZONE_SYMBOL_PREFIX:Ke,ADD_EVENT_LISTENER_STR:hn,REMOVE_EVENT_LISTENER_STR:fn})})}function ca(i){ra(i),oa(i),sa(i)}var ho=jo();ca(ho);na(ho);var Ri=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-home"]],decls:8,vars:0,consts:[[1,"max-w-screen-2xl","mx-auto","px-4","mt-32"],[1,"flex","flex-col","items-center","py-16","justify-center","mt-20","rounded-2xl","shadow-xl","relative"],["src","../images/hero1.jpg","alt","ski resort image",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-2xl"],[1,"flex","flex-col","p-8","rounded-2xl","items-center","relative"],[1,"my-6","font-extrabold","text-white","text-6xl"],["routerLink","/shop",1,"bg-gradient-to-r","from-blue-600","to-cyan-500","font-semibold","text-2xl","text-white","rounded-2xl","px-8","py-4","border-2","border-transparent","mt-8"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1),X(2,"img",2),a(3,"div",3)(4,"h1",4),p(5," Welcome to SkiNet! "),s(),a(6,"button",5),p(7," Go to shop "),s()()()())},dependencies:[Nt],encapsulation:2})};var de=class i{baseUrl=Ae.apiUrl;http=u(gi);types=[];brands=[];getProducts(r){let t=new rr;return r.brands&&r.brands.length>0&&(t=t.append("brands",r.brands.join(","))),r.types&&r.types.length>0&&(t=t.append("types",r.types.join(","))),r.sort&&(t=t.append("sort",r.sort)),r.search&&(t=t.append("search",r.search)),t=t.append("pageSize",r.pageSize.toString()),t=t.append("pageIndex",r.pageNumber.toString()),this.http.get(this.baseUrl+"products",{params:t})}getProduct(r){return this.http.get(this.baseUrl+"products/"+r)}getBrands(){if(!(this.brands.length>0))return this.http.get(this.baseUrl+"products/brands").subscribe({next:r=>this.brands=r,error:r=>console.error(r)})}getTypes(){if(!(this.types.length>0))return this.http.get(this.baseUrl+"products/types").subscribe({next:r=>this.types=r,error:r=>console.error(r)})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Se({token:i,factory:i.\u0275fac,providedIn:"root"})};function la(i,r){if(i&1){let t=yt();a(0,"mat-card",0),X(1,"img",1),a(2,"mat-card-content",2)(3,"h2",3),p(4),s(),a(5,"p",4),p(6),pt(7,"currency"),s()(),a(8,"mat-card-actions",5),U("click",function(n){return n.stopPropagation()}),a(9,"button",6),U("click",function(){at(t);let n=R();return st(n.cartService.addItemToCart(n.product))}),a(10,"mat-icon"),p(11,"add_shopping_cart"),s(),p(12," Add to cart "),s()()()}if(i&2){let t=R();V("routerLink",xe("/shop/",t.product.id)),f(),V("src",$t(t.product.pictureUrl),le),f(3),G(t.product.name),f(2),G(bt(7,6,t.product.price))}}var Oi=class i{product;cartService=u(zt);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["appearance","raised",1,"product-card",3,"routerLink"],["mat-card-image","","alt","Product image",3,"src"],[1,"mt-2"],[1,"text-sm","font-semibold","uppercase"],[1,"font-light"],[3,"click"],["mat-stroked-button","",1,"w-full",3,"click"]],template:function(t,e){t&1&&$(0,la,13,8,"mat-card",0),t&2&&K(e.product?0:-1)},dependencies:[Le,dr,pr,ut,Tt,Nt,Jt],styles:[".product-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 4px 8px rgba(0,0,0,0,2);cursor:pointer}"]})};var He=(()=>{class i{get vertical(){return this._vertical}set vertical(t){this._vertical=Bt(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=Bt(t)}_inset=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=N({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(wt("aria-orientation",n.vertical?"vertical":"horizontal"),xt("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})();var da=["*"],pa=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,ua=["unscopedContent"];var ha=[[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["mat-divider"]],[["","matListItemAvatar",""],["","matListItemIcon",""]]],fa=["[matListItemTitle]","[matListItemLine]","*","mat-divider","[matListItemAvatar],[matListItemIcon]"];function ga(i,r){i&1&&Xt(0,4)}function _a(i,r){if(i&1&&(a(0,"div",11),X(1,"input",12),a(2,"div",13),oi(),a(3,"svg",14),X(4,"path",15),s(),Zn(),X(5,"div",16),s()()),i&2){let t=R();xt("mdc-checkbox--disabled",t.disabled),f(),V("checked",t.selected)("disabled",t.disabled)}}function ba(i,r){if(i&1&&(a(0,"div",17),X(1,"input",18),a(2,"div",19),X(3,"div",20)(4,"div",21),s()()),i&2){let t=R();xt("mdc-radio--disabled",t.disabled),f(),V("checked",t.selected)("disabled",t.disabled)}}function va(i,r){}function ya(i,r){if(i&1&&(a(0,"span",4),Qt(1,va,0,0,"ng-template",6),s()),i&2){R();let t=Gt(3);f(),V("ngTemplateOutlet",t)}}function xa(i,r){}function ka(i,r){if(i&1&&(a(0,"span",5),Qt(1,xa,0,0,"ng-template",6),s()),i&2){R();let t=Gt(5);f(),V("ngTemplateOutlet",t)}}function wa(i,r){}function Ca(i,r){if(i&1&&Qt(0,wa,0,0,"ng-template",6),i&2){R();let t=Gt(1);V("ngTemplateOutlet",t)}}function Ea(i,r){}function Ta(i,r){if(i&1&&(a(0,"span",9),Qt(1,Ea,0,0,"ng-template",6),s()),i&2){R();let t=Gt(3);f(),V("ngTemplateOutlet",t)}}function Ma(i,r){}function Sa(i,r){if(i&1&&(a(0,"span",9),Qt(1,Ma,0,0,"ng-template",6),s()),i&2){R();let t=Gt(5);f(),V("ngTemplateOutlet",t)}}function Da(i,r){}function Ia(i,r){if(i&1&&Qt(0,Da,0,0,"ng-template",6),i&2){R();let t=Gt(1);V("ngTemplateOutlet",t)}}var go=new qt("ListOption"),Pa=(()=>{class i{_elementRef=u(Dt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=vt({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Ra=(()=>{class i{_elementRef=u(Dt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=vt({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})();var _o=(()=>{class i{_listOption=u(go,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=vt({type:i,hostVars:4,hostBindings:function(e,n){e&2&&xt("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),Oa=(()=>{class i extends _o{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ai(i)))(n||i)}})();static \u0275dir=vt({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[fe]})}return i})(),Aa=(()=>{class i extends _o{static \u0275fac=(()=>{let t;return function(n){return(t||(t=ai(i)))(n||i)}})();static \u0275dir=vt({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[fe]})}return i})(),La=new qt("MAT_LIST_CONFIG"),yn=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Bt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Bt(t))}_disabled=Ot(!1);_defaultOptions=u(La,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=vt({type:i,hostVars:1,hostBindings:function(e,n){e&2&&wt("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),fo=(()=>{class i{_elementRef=u(Dt);_ngZone=u(ie);_listBase=u(yn,{optional:!0});_platform=u(_r);_hostElement;_isButtonElement;_noopAnimations=ke();_avatars;_icons;set lines(t){this._explicitLines=br(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Bt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Bt(t))}_disabled=Ot(!1);_subscriptions=new Ee;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(Fe).load(xi);let t=u(Er,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Cr(this,this._ngZone,this._hostElement,this._platform,u(De)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Me(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=vt({type:i,contentQueries:function(e,n,o){if(e&1&&Re(o,Oa,4)(o,Aa,4),e&2){let h;At(h=Lt())&&(n._avatars=h),At(h=Lt())&&(n._icons=h)}},hostVars:4,hostBindings:function(e,n){e&2&&(wt("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),xt("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var bo=new qt("SelectionList"),Je=(()=>{class i extends fo{_selectionList=u(bo);_changeDetectorRef=u(ne);_lines;_titles;_unscopedContent;selectedChange=new ee;togglePosition="after";get checkboxPosition(){return this.togglePosition}set checkboxPosition(t){this.togglePosition=t}get color(){return this._color||this._selectionList.color}set color(t){this._color=t}_color;get value(){return this._value}set value(t){this.selected&&t!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=t}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(t){let e=Bt(t);e!==this._selected&&(this._setSelected(e),(e||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let t=this._selectionList;t._value&&t._value.some(n=>t.compareWith(this._value,n))&&this._setSelected(!0);let e=this._selected;Promise.resolve().then(()=>{(this._selected||e)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||""}_hasCheckboxAt(t){return this._selectionList.multiple&&this._getTogglePosition()===t}_hasRadioAt(t){return!this._selectionList.multiple&&this._getTogglePosition()===t&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(t){return this._hasProjected("icons",t)||this._hasProjected("avatars",t)}_hasProjected(t,e){return this._getTogglePosition()!==e&&(t==="avatars"?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||"after"}_setSelected(t){return t===this._selected?!1:(this._selected=t,t?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(t),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(t){this._hostElement.setAttribute("tabindex",t+"")}_hasBothLeadingAndTrailing(){let t=this._hasProjected("avatars","before")||this._hasProjected("icons","before")||this._hasCheckboxAt("before")||this._hasRadioAt("before"),e=this._hasProjected("icons","after")||this._hasProjected("avatars","after")||this._hasCheckboxAt("after")||this._hasRadioAt("after");return t&&e}static \u0275fac=(()=>{let t;return function(n){return(t||(t=ai(i)))(n||i)}})();static \u0275cmp=N({type:i,selectors:[["mat-list-option"]],contentQueries:function(e,n,o){if(e&1&&Re(o,Ra,5)(o,Pa,5),e&2){let h;At(h=Lt())&&(n._lines=h),At(h=Lt())&&(n._titles=h)}},viewQuery:function(e,n){if(e&1&&mi(ua,5),e&2){let o;At(o=Lt())&&(n._unscopedContent=o.first)}},hostAttrs:["role","option",1,"mat-mdc-list-item","mat-mdc-list-option","mdc-list-item"],hostVars:27,hostBindings:function(e,n){e&1&&U("blur",function(){return n._handleBlur()})("click",function(){return n._toggleOnInteraction()}),e&2&&(wt("aria-selected",n.selected),xt("mdc-list-item--selected",n.selected&&!n._selectionList.multiple&&n._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar",n._hasProjected("avatars","before"))("mdc-list-item--with-leading-icon",n._hasProjected("icons","before"))("mdc-list-item--with-trailing-icon",n._hasProjected("icons","after"))("mat-mdc-list-option-with-trailing-avatar",n._hasProjected("avatars","after"))("mdc-list-item--with-leading-checkbox",n._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox",n._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio",n._hasRadioAt("before"))("mdc-list-item--with-trailing-radio",n._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("mat-accent",n.color!=="primary"&&n.color!=="warn")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._noopAnimations))},inputs:{togglePosition:"togglePosition",checkboxPosition:"checkboxPosition",color:"color",value:"value",selected:"selected"},outputs:{selectedChange:"selectedChange"},exportAs:["matListOption"],features:[Ye([{provide:fo,useExisting:i},{provide:go,useExisting:i}]),fe],ngContentSelectors:fa,decls:20,vars:4,consts:[["icons",""],["checkbox",""],["radio",""],["unscopedContent",""],[1,"mdc-list-item__start","mat-mdc-list-option-checkbox-before"],[1,"mdc-list-item__start","mat-mdc-list-option-radio-before"],[3,"ngTemplateOutlet"],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mdc-list-item__end"],[1,"mat-focus-indicator"],[1,"mdc-checkbox"],["type","checkbox",1,"mdc-checkbox__native-control",3,"checked","disabled"],[1,"mdc-checkbox__background"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],[1,"mdc-radio"],["type","radio",1,"mdc-radio__native-control",3,"checked","disabled"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"]],template:function(e,n){e&1&&(Pe(ha),Qt(0,ga,1,0,"ng-template",null,0,ui)(2,_a,6,4,"ng-template",null,1,ui)(4,ba,5,4,"ng-template",null,2,ui),$(6,ya,2,1,"span",4)(7,ka,2,1,"span",5),$(8,Ca,1,1,null,6),a(9,"span",7),Xt(10),Xt(11,1),a(12,"span",8,3),U("cdkObserveContent",function(){return n._updateItemLines(!0)}),Xt(14,2),s()(),$(15,Ta,2,1,"span",9)(16,Sa,2,1,"span",9),$(17,Ia,1,1,null,6),Xt(18,3),X(19,"div",10)),e&2&&(f(6),K(n._hasCheckboxAt("before")?6:n._hasRadioAt("before")?7:-1),f(2),K(n._hasIconsOrAvatarsAt("before")?8:-1),f(7),K(n._hasCheckboxAt("after")?15:n._hasRadioAt("after")?16:-1),f(2),K(n._hasIconsOrAvatarsAt("after")?17:-1))},dependencies:[ir,yr],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}
@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Fa={provide:Lr,useExisting:Vn(()=>ti),multi:!0},xn=class{source;options;constructor(r,t){this.source=r,this.options=t}},ti=(()=>{class i extends yn{_element=u(Dt);_ngZone=u(ie);_renderer=u(me);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new Te;_isDestroyed=!1;_onChange=t=>{};_items;selectionChange=new ee;color="accent";compareWith=(t,e)=>t===e;get multiple(){return this._multiple}set multiple(t){let e=Bt(t);e!==this._multiple&&(this._multiple=e,this.selectedOptions=new an(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=Bt(t)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new an(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=u(ne);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,"focusin",this._handleFocusin),this._renderer.listen(this._element.nativeElement,"focusout",this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(t){let e=t.disabled,n=t.disableRipple,o=t.hideSingleSelectionIndicator;(n&&!n.firstChange||e&&!e.firstChange||o&&!o.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(t){this._element.nativeElement.focus(t)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let t=this._getSelectedOptionValues();this._onChange(t),this._value=t}}_emitChangeEvent(t){this.selectionChange.emit(new xn(this,t))}writeValue(t){this._value=t,this.options&&this._setOptionsFromValues(t||[])}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(t){this._selectionListDisabled.set(Bt(t)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=Ot(!1);registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}_watchForSelectionChange(){this.selectedOptions.changed.pipe(Xe(this._destroyed)).subscribe(t=>{for(let e of t.added)e.selected=!0;for(let e of t.removed)e.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(t){this.options.forEach(e=>e._setSelected(!1)),t.forEach(e=>{let n=this.options.find(o=>o.selected?!1:this.compareWith(o.value,e));n&&n._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(t=>t.selected).map(t=>t.value)}_markOptionsForCheck(){this.options&&this.options.forEach(t=>t._markForCheck())}_setAllOptionsSelected(t,e){let n=[];return this.options.forEach(o=>{(!e||!o.disabled)&&o._setSelected(t)&&n.push(o)}),n.length&&this._reportValueChange(),n}get options(){return this._items}_handleKeydown(t){let e=this._keyManager.activeItem;if((t.keyCode===13||t.keyCode===32)&&!this._keyManager.isTyping()&&e&&!e.disabled)t.preventDefault(),e._toggleOnInteraction();else if(t.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&bi(t,"ctrlKey","metaKey")){let n=this.options.some(o=>!o.disabled&&!o.selected);t.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(n,!0))}else this._keyManager.onKeydown(t)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=t=>{if(this.disabled)return;let e=this._items.toArray().findIndex(n=>n._elementRef.nativeElement.contains(t.target));e>-1?this._setActiveOption(e):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new vi(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>this.disabled),this._resetActiveOption(),this._keyManager.change.subscribe(t=>this._setActiveOption(t)),this._items.changes.pipe(Xe(this._destroyed)).subscribe(()=>{let t=this._keyManager.activeItem;(!t||this._items.toArray().indexOf(t)===-1)&&this._resetActiveOption()})}_setActiveOption(t){this._items.forEach((e,n)=>e._setTabindex(n===t?0:-1)),this._keyManager.updateActiveItem(t)}_resetActiveOption(){if(this.disabled){this._setActiveOption(-1);return}let t=this._items.find(e=>e.selected&&!e.disabled)||this._items.first;this._setActiveOption(t?this._items.toArray().indexOf(t):-1)}_containsFocus(){let t=gr();return t&&this._element.nativeElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=N({type:i,selectors:[["mat-selection-list"]],contentQueries:function(e,n,o){if(e&1&&Re(o,Je,5),e&2){let h;At(h=Lt())&&(n._items=h)}},hostAttrs:["role","listbox",1,"mat-mdc-selection-list","mat-mdc-list-base","mdc-list"],hostVars:1,hostBindings:function(e,n){e&1&&U("keydown",function(h){return n._handleKeydown(h)}),e&2&&wt("aria-multiselectable",n.multiple)},inputs:{color:"color",compareWith:"compareWith",multiple:"multiple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",disabled:"disabled"},outputs:{selectionChange:"selectionChange"},exportAs:["matSelectionList"],features:[Ye([Fa,{provide:yn,useExisting:i},{provide:bo,useExisting:i}]),fe,Xn],ngContentSelectors:da,decls:1,vars:0,template:function(e,n){e&1&&(Pe(),Xt(0))},styles:[pa],encapsulation:2,changeDetection:0})}return i})();function Na(i,r){if(i&1&&(a(0,"mat-list-option",5),p(1),s()),i&2){let t=r.$implicit;V("value",t),f(),G(t)}}function Ba(i,r){if(i&1&&(a(0,"mat-list-option",5),p(1),s()),i&2){let t=r.$implicit;V("value",t),f(),G(t)}}var Fi=class i{shopService=u(de);dialogRef=u(Rr);data=u(Or);selectedBrands=this.data.selectedBrands;selectedTypes=this.data.selectedTypes;applyFilters(){this.dialogRef.close({selectedBrands:this.selectedBrands,selectedTypes:this.selectedTypes})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-filter-dialog"]],decls:20,vars:2,consts:[[1,"text-3xl","text-center","pt-6","mb-3"],[1,"flex","p-4"],[1,"w-1/2"],[1,"font-semibold","text-xl","text-primary"],["multiple","true",3,"ngModelChange","ngModel"],[3,"value"],[1,"flex","justify-end","p-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&(a(0,"div")(1,"h3",0),p(2,"Filters"),s(),X(3,"mat-divider"),a(4,"div",1)(5,"div",2)(6,"h4",3),p(7,"Brands"),s(),a(8,"mat-selection-list",4),ye("ngModelChange",function(o){return ve(e.selectedBrands,o)||(e.selectedBrands=o),o}),Ct(9,Na,2,2,"mat-list-option",5,ge),s()(),a(11,"div",2)(12,"h4",3),p(13,"Types"),s(),a(14,"mat-selection-list",4),ye("ngModelChange",function(o){return ve(e.selectedTypes,o)||(e.selectedTypes=o),o}),Ct(15,Ba,2,2,"mat-list-option",5,ge),s()()(),a(17,"div",6)(18,"button",7),U("click",function(){return e.applyFilters()}),p(19,"Apply Filters"),s()()()),t&2&&(f(8),be("ngModel",e.selectedBrands),f(),Et(e.shopService.brands),f(5),be("ngModel",e.selectedTypes),f(),Et(e.shopService.types))},dependencies:[He,ti,Je,ut,ze,Ne,Be],encapsulation:2})};var Va=["mat-menu-item",""],Za=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Ua=["mat-icon, [matMenuItemIcon]","*"];function qa(i,r){i&1&&(oi(),a(0,"svg",2),X(1,"polygon",3),s())}var Xa=["*"];function Ga(i,r){if(i&1){let t=yt();_e(0,"div",0),Jn("click",function(){at(t);let n=R();return st(n.closed.emit("click"))})("animationstart",function(n){at(t);let o=R();return st(o._onAnimationStart(n.animationName))})("animationend",function(n){at(t);let o=R();return st(o._onAnimationDone(n.animationName))})("animationcancel",function(n){at(t);let o=R();return st(o._onAnimationDone(n.animationName))}),_e(1,"div",1),Xt(2),Ie()()}if(i&2){let t=R();di(t._classList),xt("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Kn("id",t.panelId),wt("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var En=new qt("MAT_MENU_PANEL"),ei=(()=>{class i{_elementRef=u(Dt);_document=u(Ge);_focusMonitor=u(on);_parentMenu=u(En,{optional:!0});_changeDetectorRef=u(ne);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new Te;_focused=new Te;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(Fe).load(xi),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<e.length;n++)e[n].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=N({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,n){e&1&&U("click",function(h){return n._checkDisabled(h)})("mouseenter",function(){return n._handleMouseEnter()}),e&2&&(wt("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),xt("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Kt],disableRipple:[2,"disableRipple","disableRipple",Kt]},exportAs:["matMenuItem"],attrs:Va,ngContentSelectors:Ua,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,n){e&1&&(Pe(Za),Xt(0),a(1,"span",0),Xt(2,1),s(),X(3,"div",1),$(4,qa,2,0,":svg:svg",2)),e&2&&(f(3),V("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),f(),K(n._triggersSubmenu?4:-1))},dependencies:[Tr],encapsulation:2,changeDetection:0})}return i})();var Wa=new qt("MatMenuContent");var Ya=new qt("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Cn="_mat-menu-enter",Ni="_mat-menu-exit",pe=(()=>{class i{_elementRef=u(Dt);_changeDetectorRef=u(ne);_injector=u(De);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ke();_allItems;_directDescendantItems=new Gn;_classList={};_panelAnimationState="void";_animationDone=new Te;_isAnimating=Ot(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,n=tn({},this._classList);e&&e.length&&e.split(" ").forEach(o=>{n[o]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new ee;close=this.closed;panelId=u(yi).getId("mat-menu-panel-");constructor(){let t=u(Ya);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new vi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(ri(this._directDescendantItems),en(t=>Me(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let n=t.toArray(),o=Math.max(0,Math.min(n.length-1,e.activeItemIndex||0));n[o]&&!n[o].disabled?e.setActiveItem(o):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ri(this._directDescendantItems),en(e=>Me(...e.map(n=>n._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,n=this._keyManager;switch(e){case 27:bi(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Wn(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(t).setFirstItemActive(),!n.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=Pn(tn({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Ni;(e||t===Cn)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Cn||t===Ni)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ni),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Cn:Ni)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ri(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=N({type:i,selectors:[["mat-menu"]],contentQueries:function(e,n,o){if(e&1&&Re(o,Wa,5)(o,ei,5)(o,ei,4),e&2){let h;At(h=Lt())&&(n.lazyContent=h.first),At(h=Lt())&&(n._allItems=h),At(h=Lt())&&(n.items=h)}},viewQuery:function(e,n){if(e&1&&mi(si,5),e&2){let o;At(o=Lt())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(e,n){e&2&&wt("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Kt],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:Kt(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ye([{provide:En,useExisting:i}])],ngContentSelectors:Xa,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,n){e&1&&(Pe(),Qn(0,Ga,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Qa=new qt("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=u(De);return()=>Sr(i)}});var Ve=new WeakMap,$a=(()=>{class i{_canHaveBackdrop;_element=u(Dt);_viewContainerRef=u(li);_menuItemInstance=u(ei,{optional:!0,self:!0});_dir=u(mr,{optional:!0});_focusMonitor=u(on);_ngZone=u(ie);_injector=u(De);_scrollStrategy=u(Qa);_changeDetectorRef=u(ne);_animationsDisabled=ke();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Ee.EMPTY;_menuCloseSubscription=Ee.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=u(En,{optional:!0});this._parentMaterialMenu=e instanceof pe?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Ve.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let n=Ve.get(e);Ve.set(e,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(e),h=o.getConfig(),v=h.positionStrategy;this._setPosition(e,v),this._canHaveBackdrop?h.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:h.hasBackdrop=e.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof pe&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Xe(e.close)).subscribe(()=>{v.withLockedPosition(!1).reapplyLastPosition(),v.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,n=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof pe&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Bn(1)).subscribe(()=>{e.detach(),Ve.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(e.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&Ve.delete(n),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Pr(this._injector,e),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof pe&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(t){return new Dr({positionStrategy:Ir(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX==="start"?"after":"before",h=n.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(o,h)})})}_setPosition(t,e){let[n,o]=t.xPosition==="before"?["end","start"]:["start","end"],[h,v]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[w,S]=[h,v],[x,D]=[n,o],A=0;if(this._triggersSubmenu()){if(D=n=t.xPosition==="before"?"start":"end",o=x=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let q=this._parentMaterialMenu.items.first;this._parentInnerPadding=q?q._getHostElement().offsetTop:0}A=h==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(w=h==="top"?"bottom":"top",S=v==="top"?"bottom":"top");e.withPositions([{originX:n,originY:w,overlayX:x,overlayY:h,offsetY:A},{originX:o,originY:w,overlayX:D,overlayY:h,offsetY:A},{originX:n,originY:S,overlayX:x,overlayY:v,offsetY:-A},{originX:o,originY:S,overlayX:D,overlayY:v,offsetY:-A}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:qe(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Fn(h=>this._menuOpen&&h!==this._menuItemInstance)):qe();return Me(t,n,o,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Mr(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Ve.get(t)===this}_triggerIsAriaDisabled(){return Kt(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){Yn()};static \u0275dir=vt({type:i})}return i})(),Bi=(()=>{class i extends $a{_cleanupTouchstart;_hoverSubscription=Ee.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new ee;onMenuOpen=this.menuOpened;menuClosed=new ee;onMenuClose=this.menuClosed;constructor(){super(!0);let t=u(me);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{fr(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){hr(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=vt({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,n){e&1&&U("click",function(h){return n._handleClick(h)})("mousedown",function(h){return n._handleMousedown(h)})("keydown",function(h){return n._handleKeydown(h)}),e&2&&wt("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[fe]})}return i})();var ii=class{brands=[];types=[];sort="name";pageNumber=1;pageSize=10;search=""};var ue=class i{busyRequestCount=0;loading=Ot(!1);busy(){this.busyRequestCount++,this.loading.set(!0)}idle(){this.busyRequestCount--,this.busyRequestCount<=0&&(this.busyRequestCount=0,this.loading.set(!1))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Se({token:i,factory:i.\u0275fac,providedIn:"root"})};function Ka(i,r){if(i&1){let t=yt();a(0,"div",0)(1,"div",1)(2,"mat-icon",2),p(3),s(),a(4,"p",3),p(5),s(),a(6,"button",4),U("click",function(){at(t);let n=R();return st(n.onAction())}),p(7),s()()()}if(i&2){let t=R();f(3),G(t.icon()),f(2),mt(" ",t.message()," "),f(2),G(t.actionText())}}var Ze=class i{busyService=u(ue);message=Oe.required();icon=Oe.required();actionText=Oe.required();action=er();onAction(){this.action.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-empty-state"]],inputs:{message:[1,"message"],icon:[1,"icon"],actionText:[1,"actionText"]},outputs:{action:"action"},decls:1,vars:1,consts:[[1,"maz-w-screen-xl","mx-auto","mt-32","px-10","py-4","bg-white","rounded-lg","shadow-md","w-full"],[1,"flex","flex-col","items-center","justify-center","py-12","w-full"],[1,"icon-diplay","mb-8"],[1,"text-gray-600","text-lg","font-semibold","mb-4"],["mat-flat-button","",3,"click"]],template:function(t,e){t&1&&$(0,Ka,8,3,"div",0),t&2&&K(e.busyService.busyRequestCount===0?0:-1)},dependencies:[Tt,ut],styles:[".icon-diplay[_ngcontent-%COMP%]{transform:scale(3)}"]})};var Ja=(i,r)=>r.id;function ts(i,r){if(i&1&&X(0,"app-product-item",13),i&2){let t=r.$implicit;V("product",t)}}function es(i,r){if(i&1&&(a(0,"mat-list-option",15),p(1),s()),i&2){let t=r.$implicit,e=R(3);V("value",t.value)("selected",e.shopParams.sort===t.value),f(),mt(" ",t.name," ")}}function is(i,r){if(i&1){let t=yt();a(0,"div",3)(1,"div",4)(2,"mat-paginator",5),U("page",function(n){at(t);let o=R(2);return st(o.handlePageEvent(n))}),s(),a(3,"form",6,0),U("ngSubmit",function(){at(t);let n=R(2);return st(n.onSearchChange())}),a(5,"input",7),ye("ngModelChange",function(n){at(t);let o=R(2);return ve(o.shopParams.search,n)||(o.shopParams.search=n),st(n)}),s(),a(6,"button",8)(7,"mat-icon"),p(8,"search"),s()()(),a(9,"div",9)(10,"button",10),U("click",function(){at(t);let n=R(2);return st(n.openFilterDialog())}),a(11,"mat-icon"),p(12,"filter_list"),s(),p(13," Filters "),s(),a(14,"button",11)(15,"mat-icon"),p(16,"swap_vert"),s(),p(17," Sort "),s()()(),a(18,"div",12),Ct(19,ts,1,1,"app-product-item",13,Ja),s()(),a(21,"mat-menu",null,1)(23,"mat-selection-list",14),U("selectionChange",function(n){at(t);let o=R(2);return st(o.onSortChange(n))}),Ct(24,es,2,3,"mat-list-option",15,ge),s()()}if(i&2){let t=Gt(22),e=R(),n=R();f(2),V("length",e.count)("pageSize",n.shopParams.pageSize)("showFirstLastButtons",!0)("pageSizeOptions",n.pageSizeOptions)("pageIndex",n.shopParams.pageNumber-1),f(3),be("ngModel",n.shopParams.search),f(9),V("matMenuTriggerFor",t),f(5),Et(e.data),f(5),Et(n.sortOptions)}}function ns(i,r){if(i&1){let t=yt();a(0,"app-empty-state",16),U("action",function(){at(t);let n=R(2);return st(n.resetFilters())}),s()}}function rs(i,r){i&1&&$(0,is,26,7)(1,ns,1,0,"app-empty-state",2),i&2&&K(r.count>0?0:1)}var zi=class i{shopService=u(de);dialogService=u(Ar);products=Ot(null);sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}];shopParams=new ii;pageSizeOptions=[5,10,15,20];title="Skinet";ngOnInit(){this.initializeShop()}initializeShop(){this.shopService.getBrands(),this.shopService.getTypes(),this.getProducts()}resetFilters(){this.shopParams=new ii,this.getProducts()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe({next:r=>this.products.set(r),error:r=>console.error(r)})}onSearchChange(){this.shopParams.pageNumber=1,this.getProducts()}handlePageEvent(r){this.shopParams.pageNumber=r.pageIndex+1,this.shopParams.pageSize=r.pageSize,this.getProducts()}onSortChange(r){let t=r.options[0];t&&(this.shopParams.sort=t.value,this.shopParams.pageNumber=1,this.getProducts())}openFilterDialog(){this.dialogService.open(Fi,{minWidth:"500px",data:{selectedBrands:this.shopParams.brands,selectedTypes:this.shopParams.types}}).afterClosed().subscribe({next:t=>{t&&(console.log(t),this.shopParams.brands=t.selectedBrands,this.shopParams.types=t.selectedTypes,this.getProducts())}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-shop"]],decls:1,vars:1,consts:[["searchForm","ngForm"],["sortMenu","matMenu"],["message","No products found","icon","filter_alt_off","actionText","Reset filters"],[1,"flex","flex-col","gap-3"],[1,"flex","justify-between"],["aria-label","Select page",3,"page","length","pageSize","showFirstLastButtons","pageSizeOptions","pageIndex"],[1,"relative","flex","items-center","w-full","max-w-md","mx-4",3,"ngSubmit"],["type","search","placeholder","Search","name","search",1,"block","w-full","p-4","text-sm","text-gray-900","border","border-gray-50","rounded-lg",3,"ngModelChange","ngModel"],["mat-icon-button","","type","submit",1,"absolute","inset-y-0","right-8","top-2","flex","items-center","pl-3"],[1,"flex","gap-3"],["mat-flat-button","","color","",1,"match-input-height",3,"click"],["mat-flat-button","","color","",1,"match-input-height",3,"matMenuTriggerFor"],[1,"grid","grid-cols-5","gap-4"],[3,"product"],["multiple","false",3,"selectionChange"],[3,"value","selected"],["message","No products found","icon","filter_alt_off","actionText","Reset filters",3,"action"]],template:function(t,e){if(t&1&&$(0,rs,2,1),t&2){let n;K((n=e.products())?0:-1,n)}},dependencies:[Oi,ut,Tt,pe,ti,Je,Bi,Zr,ze,Br,wi,Ne,Fr,Be,Nr,ki,Ze],encapsulation:2})};function os(i,r){if(i&1){let t=yt();a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),X(4,"img",4),s(),a(5,"div")(6,"h1",5),p(7),s(),a(8,"p"),p(9),s(),a(10,"div",6)(11,"p",7),p(12),pt(13,"currency"),s()(),a(14,"div",8)(15,"button",9),U("click",function(){at(t);let n=R();return st(n.updateCart())}),a(16,"mat-icon"),p(17," shopping_cart "),s(),p(18),s(),a(19,"mat-form-field",10)(20,"mat-label"),p(21,"Quantity"),s(),a(22,"input",11),ye("ngModelChange",function(n){at(t);let o=R();return ve(o.quantity,n)||(o.quantity=n),st(n)}),s()()(),X(23,"mat-divider"),a(24,"p",12),p(25),s()()()()()}if(i&2){let t,e,n,o,h=R();f(4),V("src",$t((t=h.product())==null?null:t.pictureUrl),le),f(3),G((e=h.product())==null?null:e.name),f(2),mt("You have ",h.quantityInCart," of this item in your cart."),f(3),mt(" ",bt(13,9,(n=h.product())==null?null:n.price)," "),f(3),V("disabled",h.quantity===h.quantityInCart),f(3),mt(" ",h.getButtonText()," "),f(4),be("ngModel",h.quantity),f(3),mt(" ",(o=h.product())==null?null:o.description," ")}}var ji=class i{shopService=u(de);activatedRoute=u(_i);cartService=u(zt);product=Ot(null);quantityInCart=0;quantity=1;ngOnInit(){this.loadProduct()}loadProduct(){let r=this.activatedRoute.snapshot.paramMap.get("id");r&&this.shopService.getProduct(+r).subscribe({next:t=>{this.product.set(t),this.updateQuantityInCart()},error:t=>console.error(t)})}updateCart(){if(this.product())if(this.quantity>this.quantityInCart){let r=this.quantity-this.quantityInCart;this.quantityInCart+=r,this.cartService.addItemToCart(this.product(),r)}else{let r=this.quantityInCart-this.quantity;this.quantityInCart-=r,this.cartService.removeItemFromCart(this.product().id,r)}}updateQuantityInCart(){this.quantityInCart=this.cartService.cart()?.items.find(r=>r.productId===this.product()?.id)?.quantity??0,this.quantity=this.quantityInCart||1}getButtonText(){return this.quantityInCart>0?"Update Cart":"Add to Cart"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-product-details"]],decls:1,vars:1,consts:[[1,"py-8"],[1,"max-w-screen-2xl","px-4","mx-auto"],[1,"grid","grid-cols-2","gap-8"],[1,"max-w-xl","mx-auto"],["alt","product image",1,"w-full",3,"src"],[1,"text-2xl","font-semibold","text-gray-900"],[1,"mt-4","items-center","gap-4","flex"],[1,"text-3xl","font-extrabold","text-gray-900"],[1,"flex","gap-4","mt-6"],["mat-flat-button","",1,"match-input-height",3,"click","disabled"],["appearance","outline",1,"flex"],["matInput","","min","0","type","number",3,"ngModelChange","ngModel"],[1,"mt-6","text-gray-500"]],template:function(t,e){t&1&&$(0,os,26,11,"section",0),t&2&&K(e.product()?0:-1)},dependencies:[ut,Tt,Vr,Ur,Hr,He,ze,wi,zr,Ne,jr,Be,Jt],encapsulation:2})};function as(i,r){if(i&1&&(a(0,"li",4),p(1),s()),i&2){let t=r.$implicit;f(),G(t)}}function ss(i,r){if(i&1&&(a(0,"div",2)(1,"ul",3),Ct(2,as,2,1,"li",4,ge),s()()),i&2){let t=R();f(2),Et(t.validationErrors)}}var Hi=class i{baseUrl=Ae.apiUrl;http=u(gi);validationErrors;get404Error(){this.http.get(this.baseUrl+"buggy/notfound").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400Error(){this.http.get(this.baseUrl+"buggy/badrequest").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get401Error(){this.http.get(this.baseUrl+"buggy/unauthorized").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get500Error(){this.http.get(this.baseUrl+"buggy/internalerror").subscribe({next:r=>console.log(r),error:r=>console.log(r)})}get400ValidationError(){this.http.post(this.baseUrl+"buggy/validationerror",{}).subscribe({next:r=>console.log(r),error:r=>this.validationErrors=r})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-test-error"]],decls:12,vars:1,consts:[[1,"mt-5","flex","justify-center","gap-4"],["mat-stroked-button","",3,"click"],[1,"mx-auto","max-w-lg","mt-5","bg-red-100"],[1,"space-y-2","p-2"],[1,"text-red-800"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"button",1),U("click",function(){return e.get500Error()}),p(2,"Test 500 error"),s(),a(3,"button",1),U("click",function(){return e.get404Error()}),p(4,"Test 404 error"),s(),a(5,"button",1),U("click",function(){return e.get400Error()}),p(6,"Test 400 error"),s(),a(7,"button",1),U("click",function(){return e.get401Error()}),p(8,"Test 401 error"),s(),a(9,"button",1),U("click",function(){return e.get400ValidationError()}),p(10,"Test validation error"),s()(),$(11,ss,4,0,"div",2)),t&2&&(f(11),K(e.validationErrors?11:-1))},dependencies:[ut],encapsulation:2})};var Vi=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-not-found"]],decls:10,vars:0,consts:[[1,"flex","items-center","justify-center","min-h-96","bg-gray-100"],[1,"text-center"],[1,"text-purple-700","icon-display"],[1,"text-4xl","font-bold","text-gray-800","mt-4"],[1,"text-lg","text-gray-600","mt-2"],["routerLink","/shop","mat-flat-button","",1,"mt-4"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1)(2,"mat-icon",2),p(3,"error_outline"),s(),a(4,"h1",3),p(5,"404"),s(),a(6,"p",4),p(7,"Page not found"),s(),a(8,"button",5),p(9,"Back to shop"),s()()())},dependencies:[Tt,ut,Nt],styles:[".icon-display[_ngcontent-%COMP%]{transform:scale(3)}"]})};function cs(i,r){if(i&1&&(a(0,"h5",2),p(1),s(),a(2,"p",3),p(3,"This error comes from the server, not Angular"),s(),a(4,"p",4),p(5,"What to do next?"),s(),a(6,"ol",5)(7,"li",6),p(8,"Check the network tab in chrome dev tools"),s(),a(9,"li",6),p(10,"Reproduce the error in postman. If same error, don't waste time trobleshooting angular code"),s()(),a(11,"h5",7),p(12,"Stack trace"),s(),a(13,"mat-card",8)(14,"code",9),p(15),s()()),i&2){let t=R();f(),mt("Error: ",t.error.message),f(14),G(t.error.details)}}var Zi=class i{constructor(r){this.router=r;let t=this.router.currentNavigation();this.error=t?.extras.state?.error}router;error;static \u0275fac=function(t){return new(t||i)(ci(Ft))};static \u0275cmp=N({type:i,selectors:[["app-server-error"]],decls:4,vars:1,consts:[[1,"container","mt-5","p-4","bg-gray-100","rounded","shadow-lg"],[1,"text-3xl","font-semibold","mb-4"],[1,"text-red-600"],[1,"font-bold"],[1,"mb-2"],[1,"list-decimal","ml-5","mb-4"],[1,"mb-1"],[1,"text-lg","font-semibold","mb-2"],[1,"p-4","bg-white"],[1,"block","whitespace-pre-wrap"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"h1",1),p(2,"Internal server error"),s(),$(3,cs,16,2),s()),t&2&&(f(3),K(e.error?3:-1))},dependencies:[Le],encapsulation:2})};var Ui=class i{item=Oe.required();cartService=u(zt);incrementQuantity(){this.cartService.addItemToCart(this.item())}decrementQuantity(){this.cartService.removeItemFromCart(this.item().productId)}removeItemFromCart(){this.cartService.removeItemFromCart(this.item().productId,this.item().quantity)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-cart-item"]],inputs:{item:[1,"item"]},decls:26,vars:11,consts:[[1,"rounded-lg","border","border-gray-200","bg-white","p-4","shadow-sm","mb-4"],[1,"flex","items-center","justify-between","gap-6"],[1,"shrink","order-1",3,"routerLink"],["alt","product image",1,"h-20","w-20",3,"src"],[1,"flex","items-center","justify-between","order-3"],[1,"flex","items-center","align-middle","gap-3"],["mat-icon-button","",3,"click"],[1,"text-red-600!"],[1,"font-semibold","text-xl","mb-1"],[1,"text-green-600!"],[1,"text-end","order-4","w-32"],[1,"font-bold","text-xl"],[1,"w-full","flex","flex-col","items-start","flex-1","space-y-4","order-2","max-w-md"],[1,"font-medium",3,"routerLink"],[1,"flex","items-center","gap-4"],["mat-button","",1,"text-red-700!",3,"click"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1)(2,"a",2),X(3,"img",3),s(),a(4,"div",4)(5,"div",5)(6,"button",6),U("click",function(){return e.decrementQuantity()}),a(7,"mat-icon",7),p(8,"remove"),s()(),a(9,"div",8),p(10),s(),a(11,"button",6),U("click",function(){return e.incrementQuantity()}),a(12,"mat-icon",9),p(13,"add"),s()()(),a(14,"div",10)(15,"p",11),p(16),pt(17,"currency"),s()()(),a(18,"div",12)(19,"a",13),p(20),s(),a(21,"div",14)(22,"button",15),U("click",function(){return e.removeItemFromCart()}),a(23,"mat-icon"),p(24,"delete"),s(),p(25," Delete "),s()()()()()),t&2&&(f(2),V("routerLink",xe("/shop/",e.item().productId)),f(),V("src",$t(e.item().pictureUrl),le),f(7),G(e.item().quantity),f(6),G(bt(17,9,e.item().price)),f(3),V("routerLink",xe("/shop/",e.item().productId)),f(),mt(" ",e.item().productName," "))},dependencies:[Nt,ut,Tt,ki,Jt],encapsulation:2})};var ls=(i,r)=>r.productId;function ms(i,r){if(i&1&&X(0,"app-cart-item",3),i&2){let t=r.$implicit;V("item",t)}}function ds(i,r){if(i&1&&(a(0,"div",0)(1,"div",2),Ct(2,ms,1,1,"app-cart-item",3,ls),s(),a(4,"div",4),X(5,"app-order-summary"),s()()),i&2){let t,e=R();f(2),Et((t=e.cartService.cart())==null?null:t.items)}}function ps(i,r){if(i&1){let t=yt();a(0,"app-empty-state",5),U("action",function(){at(t);let n=R();return st(n.onAction())}),s()}}var qi=class i{router=u(Ft);cartService=u(zt);onAction(){this.router.navigateByUrl("/shop")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-cart"]],decls:3,vars:1,consts:[[1,"flex","w-full","items-start","gap-6","mt-32"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop"],[1,"w-3/4"],[3,"item"],[1,"w-1/4"],["message","Your shopping cart is empty","icon","remove_shopping_cart","actionText","Go to shop",3,"action"]],template:function(t,e){if(t&1&&(a(0,"section"),$(1,ds,6,0,"div",0)(2,ps,1,0,"app-empty-state",1),s()),t&2){let n;f(),K(((n=e.cartService.cart())==null||n.items==null?null:n.items.length)>0?1:2)}},dependencies:[Ui,Xr,Ze],encapsulation:2})};var us=(i,r)=>r.id;function hs(i,r){if(i&1&&(a(0,"tr",10)(1,"th",11),p(2),s(),a(3,"td"),p(4),pt(5,"date"),s(),a(6,"td"),p(7),pt(8,"currency"),s(),a(9,"td"),p(10),s()()),i&2){let t=r.$implicit;V("routerLink",xe("/orders/",t.id)),f(2),mt("# ",t.id),f(2),G(pi(5,6,t.orderDate,"medium")),f(3),G(bt(8,9,t.total)),f(3),G(t.status)}}var Xi=class i{constructor(r){this.orderService=r;this.orders$=this.orderService.getOrdersForUser()}orderService;orders$;static \u0275fac=function(t){return new(t||i)(ci(Ei))};static \u0275cmp=N({type:i,selectors:[["app-order"]],decls:20,vars:2,consts:[[1,"mx-auto","mt-32"],[1,"font-semibold","text-2xl","mb-6","text-center"],["clas","flex flex-col"],[1,"w-full"],[1,"min-w-full","divide-y","divide-gray-200","cursor-pointer"],[1,"bg-gray-50"],[1,"uppercase","text-gray-600","text-sm"],[1,"text-center","px-6","py-3"],[1,"text-left"],[1,"bg-white","divide-y","divide-gray-200"],[1,"hover:bg-gray-100",3,"routerLink"],[1,"px-6","py-3"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"h2",1),p(2,"My orders"),s(),a(3,"div",2)(4,"div",3)(5,"table",4)(6,"thead",5)(7,"tr",6)(8,"th",7),p(9,"Order"),s(),a(10,"th",8),p(11,"Date"),s(),a(12,"th",8),p(13,"Total"),s(),a(14,"th",8),p(15,"Status"),s()()(),a(16,"tbody",9),Ct(17,hs,11,11,"tr",10,us),pt(19,"async"),s()()()()()),t&2&&(f(17),Et(bt(19,0,e.orders$)))},dependencies:[Nt,Jt,fi,hi],encapsulation:2})};var fs=(i,r)=>r.productId;function gs(i,r){if(i&1&&(a(0,"tr")(1,"td",22)(2,"div",23),X(3,"img",24),a(4,"span"),p(5),s()()(),a(6,"td",22),p(7),s(),a(8,"td",25),p(9),pt(10,"currency"),s()()),i&2){let t=r.$implicit;f(3),V("src",$t(t.pictureUrl),le),f(2),G(t.productName),f(2),mt("x",t.quantity),f(2),G(bt(10,5,t.price))}}function _s(i,r){if(i&1){let t=yt();a(0,"mat-card",0)(1,"div",1)(2,"h2",2),p(3),s(),a(4,"div",3)(5,"button",4),U("click",function(){at(t);let n=R();return st(n.onReturnClick())}),p(6),s()(),a(7,"div",5)(8,"div",6)(9,"h4",7),p(10,"Billing and delivery information"),s(),a(11,"dl")(12,"dt",8),p(13,"Shipping Address"),s(),a(14,"dd",9),p(15),pt(16,"address"),s()(),a(17,"dl")(18,"dt",8),p(19,"Payment info"),s(),a(20,"dd",9),p(21),pt(22,"paymentCard"),s()()(),a(23,"div",6)(24,"h4",7),p(25,"Order details"),s(),a(26,"dl")(27,"dt",8),p(28,"Email Address"),s(),a(29,"dd",9),p(30),s()(),a(31,"dl")(32,"dt",8),p(33,"Order status"),s(),a(34,"dd",9),p(35),s()(),a(36,"dl")(37,"dt",8),p(38,"Order date"),s(),a(39,"dd",9),p(40),pt(41,"date"),s()()()(),a(42,"div",10)(43,"div",11)(44,"table",12)(45,"tbody",13),Ct(46,gs,11,7,"tr",null,fs),s()()()(),a(48,"div",14)(49,"p",15),p(50,"Order Summary"),s(),a(51,"div",16)(52,"div",6)(53,"dl",17)(54,"dt",18),p(55,"Subtotal"),s(),a(56,"dd",19),p(57),pt(58,"currency"),s()(),a(59,"dl",17)(60,"dt",18),p(61,"Discount"),s(),a(62,"dd",20),p(63),pt(64,"currency"),s()(),a(65,"dl",17)(66,"dt",18),p(67,"Delivery fee"),s(),a(68,"dd",19),p(69),pt(70,"currency"),s()()(),a(71,"dl",21)(72,"dt",18),p(73,"Total"),s(),a(74,"dd",19),p(75),pt(76,"currency"),s()()()()()()}if(i&2){let t=r,e=R();f(3),mt("Order summary for order #",t.id),f(3),G(e.buttonText),f(9),G(bt(16,11,t.shippingAddress)),f(6),G(bt(22,13,t.paymentSummary)),f(9),G(t.buyerEmail),f(5),G(t.status),f(5),G(pi(41,15,t.orderDate,"medium")),f(6),Et(t.orderItems),f(11),mt(" ",bt(58,18,t.subtotal)," "),f(6),mt(" -",bt(64,20,t.discount)," "),f(6),mt(" ",bt(70,22,t.shippingPrice)," "),f(6),mt(" ",bt(76,24,t.total)," ")}}var Gi=class i{orderService=u(Ei);activatedRoute=u(_i);accountService=u(te);adminService=u(Yr);router=u(Ft);order;buttonText=this.accountService.isAdmin()?"Return to admin":"Return to orders";onReturnClick(){this.accountService.isAdmin()?this.router.navigateByUrl("/admin"):this.router.navigateByUrl("/orders")}order$=this.accountService.isAdmin()?this.adminService.getOrder(+this.activatedRoute.snapshot.paramMap.get("id")):this.orderService.getOrderDetailsForUser(+this.activatedRoute.snapshot.paramMap.get("id"));static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-order-detailed"]],decls:2,vars:3,consts:[[1,"bg-white","shadow-md","max-w-screen","mx-auto"],[1,"bg-white","px-4","w-full"],[1,"text-2xl","text-center","font-semibold"],[1,"flex","justify-center","items-center","align-left"],["mat-stroked-button","",3,"click"],[1,"mt-8","py-3","border-t","border-gray-200","flex","gap-16"],[1,"space-y-2"],[1,"text-lg","font-semibold"],[1,"font-medium"],[1,"mt-1","font-light"],[1,"mt-4"],[1,"order-y","border-gray-200"],[1,"w-full","text-center"],[1,"divide-y","divide-gray-200"],[1,"space-y-4","rouded-lg","border-y","border-gray-200","p-4","bg-white"],[1,"text-xl","font-semibold"],[1,"space-y-4"],[1,"flex","items-center","justify-between","gap-4"],[1,"font-medium","text-gray-500"],[1,"font-medium","text-gray-900"],[1,"font-medium","text-green-500"],[1,"flex","items-center","justify-between","gap-4","border-t","border-gray-200","pt-2"],[1,"py-4"],[1,"flex","items-center","gap-4"],["alt","product image",1,"w-10","h-10",3,"src"],[1,"py-4","text-right"]],template:function(t,e){if(t&1&&($(0,_s,77,26,"mat-card",0),pt(1,"async")),t&2){let n;K((n=bt(1,1,e.order$))?0:-1,n)}},dependencies:[ur,Le,ut,fi,Jt,hi,Gr,Wr],encapsulation:2})};var ko=(i,r)=>{let t=u(te),e=u(Ft),n=u(Ti);return t.isAdmin()?!0:(n.error("Nope"),e.navigateByUrl("/shop"),!1)};var wo=[{path:"",component:Ri},{path:"shop",component:zi},{path:"shop/:id",component:ji},{path:"cart",component:qi},{path:"checkout",loadChildren:()=>import("./chunk-PA7KF2B3.js").then(i=>Array.isArray(i.checkoutRoute)?i.checkoutRoute:[i.checkoutRoute])},{path:"account",loadChildren:()=>import("./chunk-773CSNQH.js").then(i=>Array.isArray(i.accountRoute)?i.accountRoute:[i.accountRoute])},{path:"orders",component:Xi,canActivate:[Ci]},{path:"orders/:id",component:Gi,canActivate:[Ci]},{path:"test-error",component:Hi},{path:"not-found",component:Vi},{path:"server-error",component:Zi},{path:"admin",loadComponent:()=>import("./chunk-ZC3L3F4D.js").then(i=>i.AdminComponent),canActivate:[Ci,ko]},{path:"**",redirectTo:"not-found",pathMatch:"full"}];var Co=(i,r)=>{let t=u(Ft),e=u(Ti);return r(i).pipe(Nn(n=>{if(n.status===400)if(n.error.errors){let o=[];for(let h in n.error.errors)n.error.errors[h]&&o.push(n.error.errors[h]);throw o.flat()}else e.error(n.error.title||n.error);if(n.status===401&&e.error(n.error.title||n.error),n.status===403&&e.error("Forbidden"),n.status===404&&t.navigateByUrl("/not-found"),n.status===500){let o={state:{error:n.error}};t.navigateByUrl("/server-error",o)}return On(()=>n)}))};var Eo=(i,r)=>{let t=u(ue);return t.busy(),r(i).pipe(Ae.production?Rn:zn(500),jn(()=>t.idle()))};var Wi=class i{cartService=u(zt);accountService=u(te);signalRService=u(qr);init(){let r=localStorage.getItem("cart_id"),t=r?this.cartService.getCart(r):qe(null);return Ln({cart:t,user:this.accountService.getUserInfo().pipe(Hn(e=>{e&&this.signalRService.createHubConnection()}))})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Se({token:i,factory:i.\u0275fac,providedIn:"root"})};var To=(i,r)=>{let t=i.clone({withCredentials:!0});return r(t)};var Mo={providers:[Un(),lr(wo),or(ar([Co,Eo,To])),$n(async()=>{let i=u(Wi);return An(i.init()).finally(()=>{let r=document.getElementById("initial-splash");r&&r.remove()})})]};var So="mat-badge-content",bs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=N({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,n){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return i})(),Do=(()=>{class i{_ngZone=u(ie);_elementRef=u(Dt);_ariaDescriber=u(kr);_renderer=u(me);_animationsDisabled=ke();_idGenerator=u(yi);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=u(xr);_document=u(Ge);constructor(){let t=u(Fe);t.load(bs),t.load(vr)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(So),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${So}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=vt({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,n){e&2&&xt("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",Kt],disabled:[2,"matBadgeDisabled","disabled",Kt],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",Kt]}})}return i})();function vs(i,r){i&1&&We(0,"div",2)}var ys=new qt("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Po=(()=>{class i{_elementRef=u(Dt);_ngZone=u(ie);_changeDetectorRef=u(ne);_renderer=u(me);_cleanupTransitionEnd;constructor(){let t=wr(),e=u(ys,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=Io(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Io(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ee;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=N({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(e,n){e&2&&(wt("aria-valuenow",n._isIndeterminate()?null:n.value)("mode",n.mode),di("mat-"+n.color),xt("_mat-animation-noopable",n._isNoopAnimation)("mdc-linear-progress--animation-ready",!n._isNoopAnimation)("mdc-linear-progress--indeterminate",n._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",rn],bufferValue:[2,"bufferValue","bufferValue",rn],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(e,n){e&1&&(_e(0,"div",0),We(1,"div",1),$(2,vs,1,0,"div",2),Ie(),_e(3,"div",3),We(4,"span",4),Ie(),_e(5,"div",5),We(6,"span",4),Ie()),e&2&&(f(),nn("flex-basis",n._getBufferBarFlexBasis()),f(),K(n.mode==="buffer"?2:-1),f(),nn("transform",n._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Io(i,r=0,t=100){return Math.max(r,Math.min(t,i))}var Yi=class i{accountService=u(te);viewContainerRef=u(li);templateRef=u(si);constructor(){qn(()=>{this.accountService.isAdmin()?this.viewContainerRef.createEmbeddedView(this.templateRef):this.viewContainerRef.clear()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=vt({type:i,selectors:[["","appIsAdmin",""]]})};var xs=()=>({exact:!0});function ks(i,r){i&1&&(a(0,"a",17),p(1,"Admin"),s())}function ws(i,r){if(i&1&&(a(0,"button",11)(1,"mat-icon"),p(2,"arrow_drop_down"),s(),a(3,"span"),p(4),s()()),i&2){let t,e=R(),n=Gt(19);V("matMenuTriggerFor",n),f(4),G((t=e.accountService.currentUser())==null?null:t.email)}}function Cs(i,r){i&1&&(a(0,"button",18),p(1,"LogIn"),s(),a(2,"button",19),p(3,"Register"),s())}function Es(i,r){i&1&&X(0,"mat-progress-bar",12)}var Qi=class i{busyService=u(ue);cartService=u(zt);accountService=u(te);router=u(Ft);logout(){this.accountService.logout().subscribe({next:()=>{this.accountService.currentUser.set(null),this.router.navigateByUrl("/")}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-header"]],decls:33,vars:6,consts:[["menu","matMenu"],[1,"shadow-md","p-3","w-full","max-h-20","fixed","top-0","z-50","bg-white"],[1,"flex","align-middle","items-center","justify-between","max-w-screen-2xl","mx-auto"],["routerLink","/","src","/images/logo.png","alt","app logo",1,"max-h-16"],[1,"flex","gap-3","my-2","uppercase","text-2xl"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/shop","routerLinkActive","active"],["routerLink","/test-error","routerLinkActive","active"],["routerLink","/admin","routerLinkActive","active",4,"appIsAdmin"],[1,"flex","gap-3","align-middle"],["routerLink","/cart","routerLinkActive","active","matBadgeSize","large",1,"custom-badge","mt-2","mr-2",3,"matBadge"],["mat-button","",3,"matMenuTriggerFor"],["mode","indeterminate",1,"fixed","top-0","z-50"],[1,"px-5"],["mat-menu-item","","routerLink","/cart",1,"px-3"],["mat-menu-item","","routerLink","/orders",1,"px-3"],["mat-menu-item","",1,"px-3",3,"click"],["routerLink","/admin","routerLinkActive","active"],["routerLink","/account/login","mat-stroked-button",""],["routerLink","/account/register","mat-stroked-button",""]],template:function(t,e){t&1&&(a(0,"header",1)(1,"div",2),X(2,"img",3),a(3,"nav",4)(4,"a",5),p(5,"Home"),s(),a(6,"a",6),p(7,"Shop"),s(),a(8,"a",7),p(9,"Error"),s(),Qt(10,ks,2,0,"a",8),s(),a(11,"div",9)(12,"a",10)(13,"mat-icon"),p(14,"shopping_cart"),s()(),$(15,ws,5,2,"button",11)(16,Cs,4,0),s()()(),$(17,Es,1,0,"mat-progress-bar",12),a(18,"mat-menu",13,0)(20,"button",14)(21,"mat-icon"),p(22,"shopping_cart"),s(),p(23," My cart "),s(),a(24,"button",15)(25,"mat-icon"),p(26,"shopping_cart"),s(),p(27," My orders "),s(),X(28,"mat-divider"),a(29,"button",16),U("click",function(){return e.logout()}),a(30,"mat-icon"),p(31,"logout"),s(),p(32," Logout "),s()()),t&2&&(f(4),V("routerLinkActiveOptions",tr(5,xs)),f(8),V("matBadge",$t(e.cartService.itemCount())),f(3),K(e.accountService.currentUser()!=null?15:16),f(2),K(e.busyService.loading()?17:-1))},dependencies:[Tt,ut,Do,Nt,cr,Po,Bi,pe,He,ei,Yi],styles:[".custom-badge[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:24px;height:24px;font-size:14px;line-height:24px}.custom-badge[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:32px;height:32px;font-size:32px}a.active[_ngcontent-%COMP%]{color:#7d00fa}"]})};var $i=class i{title="Skinet";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=N({type:i,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container","mt-24"]],template:function(t,e){t&1&&(X(0,"app-header"),a(1,"div",0),X(2,"router-outlet"),s())},dependencies:[sr,Qi],encapsulation:2})};nr($i,Mo).catch(i=>console.error(i));
