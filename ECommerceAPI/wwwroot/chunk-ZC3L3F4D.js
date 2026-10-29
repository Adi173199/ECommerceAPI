import{a as rn,b as sn,c as ln,d as hn,e as fn,f as bn,g as pn,h as _n,i as gn,j as yn,k as vn}from"./chunk-TCNLADW7.js";import{a as Zt,e as dn}from"./chunk-SQUXMKES.js";import{$a as Se,$b as zt,A as xt,Aa as $,Ab as Me,Ad as cn,Ba as Bt,Bc as Ze,Bd as mn,Ca as $e,Cc as qt,Da as ge,Dc as Gt,Ea as ye,Eb as Lt,F as Tt,Fa as R,Fb as Nt,Fc as Kt,Fd as un,G as Te,Ga as d,H as St,Ha as m,Hc as Yt,I as N,Ia as oe,Ic as Pe,Jc as Xt,Kc as Jt,L as It,M as de,Ma as U,Mc as en,N as V,Na as q,Nc as Be,Oa as M,Oc as tn,P as s,Pa as ve,Pb as Ht,Q as Z,Qc as nn,R as Y,Ra as S,Sc as an,Ta as E,Tb as Ce,U as pe,Ua as ee,Ub as Ee,Uc as on,V as Mt,Va as H,Vc as Ye,W as B,Wa as re,X as _e,Xa as ue,Ya as _,Za as g,Zb as we,_a as Ue,aa as ce,ab as F,ba as T,bb as Ie,ca as I,cb as b,cc as jt,d as ne,da as Et,db as se,dc as Vt,eb as te,f as _t,g as L,ga as u,h as ie,ha as Q,ia as A,ic as Qt,j as gt,k as yt,ka as We,kb as At,l as vt,lb as x,m as G,mb as Ot,na as X,nc as Wt,o as Ct,oa as D,pa as me,pb as qe,pc as $t,q as wt,qa as f,qb as Ge,qc as Ut,r as xe,s as K,sa as y,ta as O,ua as Ft,ub as Ke,v as kt,w as ae,x as Dt,xa as Pt,xb as he,xc as Fe,y as Rt,ya as J,yb as fe,za as W,zb as v}from"./chunk-OJHUOJXT.js";var Gn=[[["caption"]],[["colgroup"],["col"]],"*"],Kn=["caption","colgroup, col","*"];function Zn(i,o){i&1&&H(0,2)}function Yn(i,o){i&1&&(d(0,"thead",0),M(1,1),m(),d(2,"tbody",0),M(3,2)(4,3),m(),d(5,"tfoot",0),M(6,4),m())}function Xn(i,o){i&1&&M(0,1)(1,2)(2,3)(3,4)}var j=new V("CDK_TABLE");var Le=(()=>{class i{template=s(A);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),Ne=(()=>{class i{template=s(A);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),kn=(()=>{class i{template=s(A);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),be=(()=>{class i{_table=s(j,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,n,a){if(t&1&&re(a,Le,5)(a,Ne,5)(a,kn,5),t&2){let r;_(r=g())&&(n.cell=r.first),_(r=g())&&(n.headerCell=r.first),_(r=g())&&(n.footerCell=r.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",v],stickyEnd:[2,"stickyEnd","stickyEnd",v]}})}return i})(),Oe=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}},Dn=(()=>{class i extends Oe{constructor(){super(s(be),s(I))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[y]})}return i})();var Rn=(()=>{class i extends Oe{constructor(){let e=s(be),t=s(I);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute("role",n)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[y]})}return i})();var Je=(()=>{class i{template=s(A);_differs=s(fe);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Re?e.headerCell.template:this instanceof et?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,features:[ce]})}return i})(),Re=(()=>{class i extends Je{_table=s(j,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(A),s(fe))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",v]},features:[y,ce]})}return i})(),et=(()=>{class i extends Je{_table=s(j,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(A),s(fe))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",v]},features:[y,ce]})}return i})(),He=(()=>{class i extends Je{_table=s(j,{optional:!0});when;constructor(){super(s(A),s(fe))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[y]})}return i})(),le=(()=>{class i{_viewContainer=s(X);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),tt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&M(0,0)},dependencies:[le],encapsulation:2})}return i})();var nt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&M(0,0)},dependencies:[le],encapsulation:2})}return i})(),xn=(()=>{class i{templateRef=s(A);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),Cn=["top","bottom","left","right"],Xe=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,n=!0,a,r,l){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=a,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let n of o)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));Q({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,n=!0,a=!0){if(!o.length||!this._isBrowser||!(e.some(z=>z)||t.some(z=>z))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=o[0],l=r.children.length,c=this.direction==="rtl",h=c?"right":"left",p=c?"left":"right",C=e.lastIndexOf(!0),w=t.indexOf(!0),k,ft,bt;a&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),Q({earlyRead:()=>{k=this._getCellWidths(r,n),ft=this._getStickyStartColumnPositions(k,e),bt=this._getStickyEndColumnPositions(k,t)},write:()=>{for(let z of o)for(let P=0;P<l;P++){let pt=z.children[P];e[P]&&this._addStickyStyle(pt,h,ft[P],P===C),t[P]&&this._addStickyStyle(pt,p,bt[P],P===w)}this._positionListener&&k.some(z=>!!z)&&(this._positionListener.stickyColumnsUpdated({sizes:C===-1?[]:k.slice(0,C+1).map((z,P)=>e[P]?z:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:w===-1?[]:k.slice(w).map((z,P)=>t[P+w]?z:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let n=t==="bottom"?o.slice().reverse():o,a=t==="bottom"?e.slice().reverse():e,r=[],l=[],c=[];Q({earlyRead:()=>{for(let h=0,p=0;h<n.length;h++){if(!a[h])continue;r[h]=p;let C=n[h];c[h]=this._isNativeHtmlTable?Array.from(C.children):[C];let w=this._retrieveElementSize(C).height;p+=w,l[h]=w}},write:()=>{let h=a.lastIndexOf(!0);for(let p=0;p<n.length;p++){if(!a[p])continue;let C=r[p],w=p===h;for(let k of c[p])this._addStickyStyle(k,t,C,w)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&Q({write:()=>{let t=o.querySelector("tfoot");t&&(e.some(n=>!n)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let n of e)o.style[n]="",o.classList.remove(this._borderCellCss[n]);Cn.some(n=>e.indexOf(n)===-1&&o.style[n])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex="",this._needsPositionStickyOnElement&&(o.style.position=""),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,n){o.classList.add(this._stickCellCss),n&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of Cn)o.style[n]&&(t+=e[n]);return t?`${t}`:""}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=o.children;for(let a=0;a<n.length;a++){let r=n[a];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],n=0;for(let a=0;a<o.length;a++)e[a]&&(t[a]=n,n+=o[a]);return t}_getStickyEndColumnPositions(o,e){let t=[],n=0;for(let a=o.length;a>0;a--)e[a]&&(t[a]=n,n+=o[a]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,n),this._resizeObserver.observe(o,{box:"border-box"})),n}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&Jn(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Jn(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(o=>i.classList.contains(o))}var ke=new V("STICKY_POSITIONING_LISTENER");var it=(()=>{class i{viewContainer=s(X);elementRef=s(I);constructor(){let e=s(j);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","rowOutlet",""]]})}return i})(),at=(()=>{class i{viewContainer=s(X);elementRef=s(I);constructor(){let e=s(j);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),ot=(()=>{class i{viewContainer=s(X);elementRef=s(I);constructor(){let e=s(j);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),rt=(()=>{class i{viewContainer=s(X);elementRef=s(I);constructor(){let e=s(j);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),st=(()=>{class i{_differs=s(fe);_changeDetectorRef=s(he);_elementRef=s(I);_dir=s(Ce,{optional:!0});_platform=s(we);_viewRepeater;_viewportRuler=s(Be);_injector=s(pe);_virtualScrollViewport=s(tn,{optional:!0,host:!0});_positionListener=s(ke,{optional:!0})||s(ke,{optional:!0,skipSelf:!0});_document=s(Mt);_data;_renderedRange;_onDestroy=new L;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new L;_footerRowStickyUpdates=new L;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new L;_dataStream=new L;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new B;viewChange=new ie({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new Ke("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(N(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Jt:new dn,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Pe(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,a,r)=>this._getEmbeddedViewArgs(n.item,r),n=>n.item.data,n=>{n.operation===Xt.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let a=t.get(n.currentIndex);a.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=wn(this._headerRowOutlet,"thead");n&&(n.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=wn(this._footerRowOutlet,"tfoot");n&&(n.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,r)=>{this._addStickyColumnStyles([a],this._headerRowDefs[r])}),this._rowDefs.forEach(a=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===a&&r.push(t[l]);this._addStickyColumnStyles(r,a)}),n.forEach((a,r)=>{this._addStickyColumnStyles([a],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let r=this._data[a],l=this._getRenderRowsForData(r,a,n.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let c=0;c<l.length;c++){let h=l[c],p=this._cachedRenderRowsMap.get(h.data);p.has(h.rowDef)?p.get(h.rowDef).push(h):p.set(h.rowDef,[h]),e.push(h)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(r=>{let l=n&&n.has(r)?n.get(r):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ae(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Ae(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ae(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ae(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,l)=>{let c=!!l.getColumnsDiff();return r||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||n||a}_switchDataSource(e){this._data=[],Pe(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Pe(this.dataSource)?e=this.dataSource.connect(this):Ct(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=G(this.dataSource)),this._renderChangeSubscription=K([e,this.viewChange]).pipe(N(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);return c}),a=n.map(l=>l.sticky),r=n.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let a=e.viewContainer.get(n);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;a&&n.push(a)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,a={$implicit:e.data};return{templateRef:n.template,context:a,index:t}}_renderRow(e,t,n,a={}){let r=e.viewContainer.createEmbeddedView(t.template,a,n);return this._renderCellTemplateForItem(t,a),r}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))le.mostRecentCellOutlet&&le.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let r=e.get(t).context;r.count=n,r.first=t===0,r.last=t===n-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new Xe(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:G()).pipe(N(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?yt:gt;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Rt(0,t),N(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,a)=>this._measureRangeSize(n,a)}),K([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(N(this._onDestroy)).subscribe(([n,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l){let c=a.offsets[r],h=n!==0?Math.max(n-c,c):-c;for(let p of l)p.style.top=`${-h}px`}}}),K([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(N(this._onDestroy)).subscribe(([n,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l)for(let c of l)c.style.bottom=`${n+a.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let a=n.createEmbeddedView(e.templateRef),r=a.rootNodes[0];if(a.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute("role","row"),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let n=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<n.start||e.end>n.end;let r=e.start-n.start,l=e.end-e.start,c,h;for(let w=0;w<l;w++){let k=a.get(w+r);if(k&&k.rootNodes.length){c=h=k.rootNodes[0];break}}for(let w=l-1;w>-1;w--){let k=a.get(w+r);if(k&&k.rootNodes.length){h=k.rootNodes[k.rootNodes.length-1];break}}let p=c?.getBoundingClientRect?.(),C=h?.getBoundingClientRect?.();return p&&C?C.bottom-p.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,n,a){if(t&1&&re(a,xn,5)(a,be,5)(a,He,5)(a,Re,5)(a,et,5),t&2){let r;_(r=g())&&(n._noDataRow=r.first),_(r=g())&&(n._contentColumnDefs=r),_(r=g())&&(n._contentRowDefs=r),_(r=g())&&(n._contentHeaderRowDefs=r),_(r=g())&&(n._contentFooterRowDefs=r)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,n){t&2&&F("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",v],fixedLayout:[2,"fixedLayout","fixedLayout",v],recycleRows:[2,"recycleRows","recycleRows",v]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[x([{provide:j,useExisting:i},{provide:ke,useValue:null}])],ngContentSelectors:Kn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(ee(Gn),H(0),H(1,1),W(2,Zn,1,0),W(3,Yn,7,0)(4,Xn,4,0)),t&2&&(u(2),$(n._isServer?2:-1),u(),$(n._isNativeHtmlTable?3:4))},dependencies:[at,it,rt,ot],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return i})();function Ae(i,o){return i.concat(Array.from(o))}function wn(i,o){let e=o.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n==="TABLE")break;t=t.parentNode}return null}var Tn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=me({type:i});static \u0275inj=de({imports:[nn]})}return i})();var ei=[[["caption"]],[["colgroup"],["col"]],"*"],ti=["caption","colgroup, col","*"];function ni(i,o){i&1&&H(0,2)}function ii(i,o){i&1&&(d(0,"thead",0),M(1,1),m(),d(2,"tbody",2),M(3,3)(4,4),m(),d(5,"tfoot",0),M(6,5),m())}function ai(i,o){i&1&&M(0,1)(1,3)(2,4)(3,5)}var Sn=(()=>{class i extends st{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,n){t&2&&F("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[x([{provide:st,useExisting:i},{provide:j,useExisting:i},{provide:ke,useValue:null}]),y],ngContentSelectors:ti,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(ee(ei),H(0),H(1,1),W(2,ni,1,0),W(3,ii,7,0)(4,ai,4,0)),t&2&&(u(2),$(n._isServer?2:-1),u(),$(n._isNativeHtmlTable?3:4))},dependencies:[at,it,rt,ot],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return i})(),In=(()=>{class i extends Le{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matCellDef",""]],features:[x([{provide:Le,useExisting:i}]),y]})}return i})(),Mn=(()=>{class i extends Ne{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matHeaderCellDef",""]],features:[x([{provide:Ne,useExisting:i}]),y]})}return i})();var En=(()=>{class i extends be{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[x([{provide:be,useExisting:i}]),y]})}return i})(),Fn=(()=>{class i extends Dn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[y]})}return i})();var Pn=(()=>{class i extends Rn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[y]})}return i})();var Bn=(()=>{class i extends Re{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",v]},features:[x([{provide:Re,useExisting:i}]),y]})}return i})();var An=(()=>{class i extends He{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[x([{provide:He,useExisting:i}]),y]})}return i})(),On=(()=>{class i extends tt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[x([{provide:tt,useExisting:i}]),y],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&M(0,0)},dependencies:[le],encapsulation:2})}return i})();var Ln=(()=>{class i extends nt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[x([{provide:nt,useExisting:i}]),y],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&M(0,0)},dependencies:[le],encapsulation:2})}return i})();var Nn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=me({type:i});static \u0275inj=de({imports:[Tn,Ee]})}return i})(),oi=9007199254740991,ze=class extends Yt{_data;_renderData=new ie([]);_filter=new ie("");_internalPageChanges=new L;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(o){o=Array.isArray(o)?o:[],this._data.next(o),this._renderChangesSubscription||this._filterData(o)}get filter(){return this._filter.value}set filter(o){this._filter.next(o),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(o){this._sort=o,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(o){this._paginator=o,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(o,e)=>{let t=o[e];if(zt(t)){let n=Number(t);return n<oi?n:t}return t};sortData=(o,e)=>{let t=e.active,n=e.direction;return!t||n==""?o:o.sort((a,r)=>{let l=this.sortingDataAccessor(a,t),c=this.sortingDataAccessor(r,t),h=typeof l,p=typeof c;h!==p&&(h==="number"&&(l+=""),p==="number"&&(c+=""));let C=0;return l!=null&&c!=null?l>c?C=1:l<c&&(C=-1):l!=null?C=1:c!=null&&(C=-1),C*(n=="asc"?1:-1)})};filterPredicate=(o,e)=>{let t=e.trim().toLowerCase();return Object.values(o).some(n=>`${n}`.toLowerCase().includes(t))};constructor(o=[]){super(),this._data=new ie(o),this._updateChangeSubscription()}_updateChangeSubscription(){let o=this._sort?ae(this._sort.sortChange,this._sort.initialized):G(null),e=this._paginator?ae(this._paginator.page,this._internalPageChanges,this._paginator.initialized):G(null),t=this._data,n=K([t,this._filter]).pipe(xe(([l])=>this._filterData(l))),a=K([n,o]).pipe(xe(([l])=>this._orderData(l))),r=K([a,e]).pipe(xe(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(l=>this._renderData.next(l))}_filterData(o){return this.filteredData=this.filter==null||this.filter===""?o:o.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(o){return this.sort?this.sortData(o.slice(),this.sort):o}_pageData(o){if(!this.paginator)return o;let e=this.paginator.pageIndex*this.paginator.pageSize;return o.slice(e,e+this.paginator.pageSize)}_updatePaginator(o){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=o,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,n=Math.min(e.pageIndex,t);n!==e.pageIndex&&(e.pageIndex=n,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var je=class{pageNumber=1;pageSize=10;filter=""};var ut=["*"];function di(i,o){i&1&&H(0)}var ci=["tabListContainer"],mi=["tabList"],ui=["tabListInner"],hi=["nextPaginator"],fi=["previousPaginator"],bi=["content"];function pi(i,o){}var _i=["tabBodyWrapper"],gi=["tabHeader"];function yi(i,o){}function vi(i,o){if(i&1&&O(0,yi,0,0,"ng-template",12),i&2){let e=E().$implicit;R("cdkPortalOutlet",e.templateLabel)}}function Ci(i,o){if(i&1&&b(0),i&2){let e=E().$implicit;se(e.textLabel)}}function wi(i,o){if(i&1){let e=ve();d(0,"div",7,2),S("click",function(){let n=Z(e),a=n.$implicit,r=n.$index,l=E(),c=Ue(1);return Y(l._handleClick(a,c,r))})("cdkFocusChange",function(n){let a=Z(e).$index,r=E();return Y(r._tabFocusChanged(n,a))}),oe(2,"span",8)(3,"div",9),d(4,"span",10)(5,"span",11),W(6,vi,1,1,null,12)(7,Ci,1,1),m()()()}if(i&2){let e=o.$implicit,t=o.$index,n=Ue(1),a=E();Ie(e.labelClass),F("mdc-tab--active",a.selectedIndex===t),R("id",a._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",a.fitInkBarToContent),J("tabIndex",a._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(t))("aria-selected",a.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),u(3),R("matRippleTrigger",n)("matRippleDisabled",e.disabled||a.disableRipple),u(3),$(e.templateLabel?6:7)}}function ki(i,o){i&1&&H(0)}function Di(i,o){if(i&1){let e=ve();d(0,"mat-tab-body",13),S("_onCentered",function(){Z(e);let n=E();return Y(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){Z(e);let a=E();return Y(a._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){Z(e);let a=E();return Y(a._bodyCentered(n))}),m()}if(i&2){let e=o.$implicit,t=o.$index,n=E();Ie(e.bodyClass),R("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),J("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var Ri=new V("MatTabContent"),xi=(()=>{class i{template=s(A);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","matTabContent",""]],features:[x([{provide:Ri,useExisting:i}])]})}return i})(),Ti=new V("MatTabLabel"),Vn=new V("MAT_TAB"),Si=(()=>{class i extends on{_closestTab=s(Vn,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[x([{provide:Ti,useExisting:i}]),y]})}return i})(),Qn=new V("MAT_TAB_GROUP"),ht=(()=>{class i{_viewContainerRef=s(X);_closestTabGroup=s(Qn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new L;position=null;origin=null;isActive=!1;constructor(){s(Vt).load(qt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new an(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,a){if(t&1&&re(a,Si,5)(a,xi,7,A),t&2){let r;_(r=g())&&(n.templateLabel=r.first),_(r=g())&&(n._explicitContent=r.first)}},viewQuery:function(t,n){if(t&1&&ue(A,7),t&2){let a;_(a=g())&&(n._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&J("id",null)},inputs:{disabled:[2,"disabled","disabled",v],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[x([{provide:Vn,useExisting:i}]),ce],ngContentSelectors:ut,decls:1,vars:0,template:function(t,n){t&1&&(ee(),Ft(0,di,1,0,"ng-template"))},encapsulation:2})}return i})(),lt="mdc-tab-indicator--active",Hn="mdc-tab-indicator--no-transition",dt=class{_items;_currentItem;constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar()),this._currentItem=void 0}alignToElement(o){let e=this._items.find(n=>n.elementRef.nativeElement===o),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},Ii=(()=>{class i{_elementRef=s(I);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(lt);return}let n=t.getBoundingClientRect(),a=e.width/n.width,r=e.left-n.left;t.classList.add(Hn),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(Hn),t.classList.add(lt),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(lt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",v]}})}return i})();var Wn=(()=>{class i extends Ii{elementRef=s(I);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275dir=f({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(J("aria-disabled",!!n.disabled),F("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",v]},features:[y]})}return i})(),zn={passive:!0},Mi=650,Ei=100,Fi=(()=>{class i{_elementRef=s(I);_changeDetectorRef=s(he);_viewportRuler=s(Be);_dir=s(Ce,{optional:!0});_ngZone=s(_e);_platform=s(we);_sharedResizeObserver=s(cn);_injector=s(pe);_renderer=s(We);_animationsDisabled=Fe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new L;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new L;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new B;indexFocused=new B;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),zn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),zn))}ngAfterContentInit(){let e=this._dir?this._dir.change:G("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(xt(32),N(this._destroyed)),n=this._viewportRuler.change(150).pipe(N(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new $t(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Q(a,{injector:this._injector}),ae(e,n,t,this._items.changes,this._itemsResized()).pipe(N(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?vt:this._items.changes.pipe(Te(this._items),St(e=>new _t(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(a=>t.next(a));return e.forEach(a=>n.observe(a.elementRef.nativeElement)),()=>{n.disconnect()}}))),Tt(1),Dt(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Wt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:r}=t.elementRef.nativeElement,l,c;this._getLayoutDirection()=="ltr"?(l=a,c=l+r):(c=this._tabListInner.nativeElement.offsetWidth-a,l=c-r);let h=this.scrollDistance,p=this.scrollDistance+n;l<h?this.scrollDistance-=h-l:c>p&&(this.scrollDistance+=Math.min(c-p,l-h))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),kt(Mi,Ei).pipe(N(ae(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:a}=this._scrollHeader(e);(a===0||a>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",v],selectedIndex:[2,"selectedIndex","selectedIndex",Me]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),Pi=(()=>{class i extends Fi{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new dt(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,a){if(t&1&&re(a,Wn,4),t&2){let r;_(r=g())&&(n._items=r)}},viewQuery:function(t,n){if(t&1&&ue(ci,7)(mi,7)(ui,7)(hi,5)(fi,5),t&2){let a;_(a=g())&&(n._tabListContainer=a.first),_(a=g())&&(n._tabList=a.first),_(a=g())&&(n._tabListInner=a.first),_(a=g())&&(n._nextPaginator=a.first),_(a=g())&&(n._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&F("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",v]},features:[y],ngContentSelectors:ut,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(ee(),d(0,"div",5,0),S("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(r){return n._handlePaginatorPress("before",r)})("touchend",function(){return n._stopInterval()}),oe(2,"div",6),m(),d(3,"div",7,1),S("keydown",function(r){return n._handleKeydown(r)}),d(5,"div",8,2),S("cdkObserveContent",function(){return n._onContentChanges()}),d(7,"div",9,3),H(9),m()()(),d(10,"div",10,4),S("mousedown",function(r){return n._handlePaginatorPress("after",r)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),oe(12,"div",6),m()),t&2&&(F("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),R("matRippleDisabled",n._disableScrollBefore||n.disableRipple),u(3),F("_mat-animation-noopable",n._animationsDisabled),u(2),J("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),u(5),F("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),R("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Ze,Qt],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return i})(),Bi=new V("MAT_TABS_CONFIG"),jn=(()=>{class i extends Ye{_host=s(ct);_ngZone=s(_e);_centeringSub=ne.EMPTY;_leavingSub=ne.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Te(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=f({type:i,selectors:[["","matTabBodyHost",""]],features:[y]})}return i})(),ct=(()=>{class i{_elementRef=s(I);_dir=s(Ce,{optional:!0});_ngZone=s(_e);_injector=s(pe);_renderer=s(We);_diAnimationsDisabled=Fe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ne.EMPTY;_position;_previousPosition;_onCentering=new B;_beforeCentering=new B;_afterLeavingCenter=new B;_onCentered=new B(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(he);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Q(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Q(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&ue(jn,5)(bi,5),t&2){let a;_(a=g())&&(n._portalHost=a.first),_(a=g())&&(n._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&J("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(d(0,"div",1,0),O(2,pi,0,0,"ng-template",2),m()),t&2&&F("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[jn,en],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return i})(),$n=(()=>{class i{_elementRef=s(I);_changeDetectorRef=s(he);_ngZone=s(_e);_tabsSubscription=ne.EMPTY;_tabLabelSubscription=ne.EMPTY;_tabBodySubscription=ne.EMPTY;_diAnimationsDisabled=Fe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Et;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new B;focusChange=new B;animationDone=new B;selectedTabChange=new B(!0);_groupId;_isServer=!s(we).isBrowser;constructor(){let e=s(Bi,{optional:!0});this._groupId=s(Ut).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,a)=>n.isActive=a===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let a=0;a<t.length;a++)if(t[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,n=t[a];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Te(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new mt;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ae(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,a){if(t&1&&re(a,ht,5),t&2){let r;_(r=g())&&(n._allTabs=r)}},viewQuery:function(t,n){if(t&1&&ue(_i,5)(gi,5)(ct,5),t&2){let a;_(a=g())&&(n._tabBodyWrapper=a.first),_(a=g())&&(n._tabHeader=a.first),_(a=g())&&(n._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(J("mat-align-tabs",n.alignTabs),Ie("mat-"+(n.color||"primary")),Se("--mat-tab-animation-duration",n.animationDuration),F("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",v],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",v],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",v],selectedIndex:[2,"selectedIndex","selectedIndex",Me],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Me],disablePagination:[2,"disablePagination","disablePagination",v],disableRipple:[2,"disableRipple","disableRipple",v],preserveContent:[2,"preserveContent","preserveContent",v],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[x([{provide:Qn,useExisting:i}])],ngContentSelectors:ut,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(ee(),d(0,"mat-tab-header",3,0),S("indexFocused",function(r){return n._focusChanged(r)})("selectFocusedIndex",function(r){return n.selectedIndex=r}),ge(2,wi,8,17,"div",4,$e),m(),W(4,ki,1,0),d(5,"div",5,1),ge(7,Di,1,10,"mat-tab-body",6,$e),m()),t&2&&(R("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),Pt("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),u(2),ye(n._tabs),u(2),$(n._isServer?4:-1),u(),F("_mat-animation-noopable",n._animationsDisabled()),u(2),ye(n._tabs))},dependencies:[Pi,Wn,jt,Ze,Ye,ct],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return i})(),mt=class{index;tab};var Un=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=me({type:i});static \u0275inj=de({imports:[Ee]})}return i})();var Ve=class i{dialogRef=s(rn);data=s(sn);onConfirm(){this.dialogRef.close(!0)}onCancel(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-confirmation-dialog"]],decls:10,vars:2,consts:[[1,"p-4"],[1,"text-lg","font-semibold","mb-4"],[1,"mb-4"],[1,"flex","justify-end","gap-2"],["mat-stroked-button","","color","warn",3,"click"],["mat-flat-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"h2",1),b(2),m(),d(3,"p",2),b(4),m(),d(5,"div",3)(6,"button",4),S("click",function(){return t.onCancel()}),b(7,"Cancel"),m(),d(8,"button",5),S("click",function(){return t.onConfirm()}),b(9,"Confirm"),m()()()),e&2&&(u(2),se(t.data.title),u(2),se(t.data.message))},dependencies:[Kt],encapsulation:2})};var Qe=class i{dialog=s(ln);confirm(o,e){let t=this.dialog.open(Ve,{width:"400px",data:{title:o,message:e}});return wt(t.afterClosed())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=It({token:i,factory:i.\u0275fac,providedIn:"root"})};var Li=()=>[5,10,20];function Ni(i,o){if(i&1&&(d(0,"mat-option",7),b(1),m()),i&2){let e=o.$implicit;R("value",e),u(),se(e)}}function Hi(i,o){i&1&&(d(0,"th",24),b(1," No. "),m())}function zi(i,o){if(i&1&&(d(0,"td",25),b(1),m()),i&2){let e=o.$implicit;u(),te(" ",e.id," ")}}function ji(i,o){i&1&&(d(0,"th",24),b(1," Buyer Email "),m())}function Vi(i,o){if(i&1&&(d(0,"td",25),b(1),m()),i&2){let e=o.$implicit;u(),te(" ",e.buyerEmail," ")}}function Qi(i,o){i&1&&(d(0,"th",24),b(1," Date "),m())}function Wi(i,o){if(i&1&&(d(0,"td",25),b(1),qe(2,"date"),m()),i&2){let e=o.$implicit;u(),te(" ",Ge(2,1,e.orderDate)," ")}}function $i(i,o){i&1&&(d(0,"th",24),b(1," Total "),m())}function Ui(i,o){if(i&1&&(d(0,"td",25),b(1),qe(2,"currency"),m()),i&2){let e=o.$implicit;u(),te(" ",Ge(2,1,e.total)," ")}}function qi(i,o){i&1&&(d(0,"th",24),b(1," Status "),m())}function Gi(i,o){if(i&1&&(d(0,"td",25),b(1),m()),i&2){let e=o.$implicit;u(),te(" ",e.status," ")}}function Ki(i,o){i&1&&(d(0,"th",24),b(1," Actions "),m())}function Zi(i,o){if(i&1){let e=ve();d(0,"td",25)(1,"div",26)(2,"button",27)(3,"mat-icon",28),b(4,"visibility"),m()(),d(5,"button",29),S("click",function(){let n=Z(e).$implicit,a=E();return Y(a.openRefundDialog(n.id))}),d(6,"mat-icon",30),b(7,"undo"),m()()()()}if(i&2){let e=o.$implicit;u(2),R("routerLink",At("/orders/",e.id)),u(3),R("disabled",e.status==="Refunded")}}function Yi(i,o){i&1&&oe(0,"tr",31)}function Xi(i,o){i&1&&oe(0,"tr",32)}var qn=class i{displayedColumns=["id","buyerEmail","total","orderDate","status","actions"];dataSource=new ze([]);adminService=s(vn);dialogService=s(Qe);orderParams=new je;totalOrders=0;statusOptions=["All","PaymentReceived","PaymentMismatch","Refunded","Pending"];ngOnInit(){this.loadOrders()}loadOrders(){this.adminService.getOrders(this.orderParams).subscribe({next:o=>{this.dataSource.data=o.data,this.totalOrders=o.count},error:o=>{console.error("Error loading orders:",o)}})}onPageChange(o){this.orderParams.pageNumber=o.pageIndex+1,this.orderParams.pageSize=o.pageSize,this.loadOrders()}onFilterSelect(o){this.orderParams.filter=o.value,this.orderParams.pageNumber=1,this.loadOrders()}async openRefundDialog(o){await this.dialogService.confirm("Confirm Refund","Are you sure you want to refund this order? This action cannot be undone.")&&this.refundOrder(o)}refundOrder(o){this.adminService.refundOrder(o).subscribe({next:e=>{this.dataSource.data=this.dataSource.data.map(t=>t.id===o?e:t)}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=D({type:i,selectors:[["app-admin"]],decls:40,vars:7,consts:[[1,"min-h-screen"],[1,"bg-white"],["label","Orders"],[1,"flex","justify-between","items-center","mt-2","max-w-screen-2xl","mx-auto"],[1,"text-2xl","font-semibold"],["appearance","outline",1,"mt-2"],[3,"selectionChange"],[3,"value"],[1,"p-4"],[1,"mat-elevation-z8"],["mat-table","",1,"bg-white",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","buyerEmail"],["matColumnDef","orderDate"],["matColumnDef","total"],["matColumnDef","status"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"bg-white",3,"page","pageSizeOptions","length","pageSize"],["label","Catalog"],["label","Customer service"],["mat-header-cell",""],["mat-cell",""],[1,"flex","gap-2"],["matTooltip","View","mat-icon-button","",3,"routerLink"],["color","accent"],["matTooltip","Refund","mat-icon-button","",3,"click","disabled"],["color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,t){e&1&&(d(0,"div",0)(1,"mat-tab-group",1)(2,"mat-tab",2)(3,"div",3)(4,"h2",4),b(5,"Custom orders"),m(),d(6,"mat-form-field",5)(7,"mat-label"),b(8,"Filter by status"),m(),d(9,"mat-select",6),S("selectionChange",function(a){return t.onFilterSelect(a)}),ge(10,Ni,2,2,"mat-option",7,Bt),m()()(),d(12,"div",8)(13,"div",9)(14,"table",10),U(15,11),O(16,Hi,2,0,"th",12)(17,zi,2,1,"td",13),q(),U(18,14),O(19,ji,2,0,"th",12)(20,Vi,2,1,"td",13),q(),U(21,15),O(22,Qi,2,0,"th",12)(23,Wi,3,3,"td",13),q(),U(24,16),O(25,$i,2,0,"th",12)(26,Ui,3,3,"td",13),q(),U(27,17),O(28,qi,2,0,"th",12)(29,Gi,2,1,"td",13),q(),U(30,18),O(31,Ki,2,0,"th",12)(32,Zi,8,3,"td",13),q(),O(33,Yi,1,0,"tr",19)(34,Xi,1,0,"tr",20),m(),d(35,"mat-paginator",21),S("page",function(a){return t.onPageChange(a)}),m()()()(),d(36,"mat-tab",22),b(37," Catalog placeholder "),m(),d(38,"mat-tab",23),b(39," Customer service "),m()()()),e&2&&(u(10),ye(t.statusOptions),u(4),R("dataSource",t.dataSource),u(19),R("matHeaderRowDef",t.displayedColumns),u(),R("matRowDefColumns",t.displayedColumns),u(),R("pageSizeOptions",Ot(6,Li))("length",t.totalOrders)("pageSize",t.orderParams.pageSize))},dependencies:[Nn,Sn,Mn,Bn,En,In,An,Fn,Pn,On,Ln,yn,gn,Zt,bn,un,mn,fn,hn,_n,pn,Un,ht,$n,Gt,Ht,Lt,Nt],encapsulation:2})};export{qn as AdminComponent};
