(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{OORc:function(e,t,n){"use strict";n.r(t);var a=n("8Y7J"),s=n("SVse"),r=n("Onx1"),i=n("wP9F"),c=n("cp0P"),o=n("LRne"),l=n("lJxs"),m=n("JIr8"),p=n("iInd");let d=(()=>{class e{constructor(e,t,n){this.api=e,this.estabelecimentosApi=t,this.router=n}resolve(e,t){if(e.paramMap.has("id")){const t=+e.paramMap.get("id");return Object(c.a)([this.api.get(t),this.estabelecimentosApi.getAll({empresaId:t})]).pipe(Object(l.a)(e=>Object.assign(Object.assign({},e[0]),{estabelecimentos:e[1]})),Object(m.a)(e=>(this.router.navigate(["/not-found"]),Object(o.a)(null))))}this.router.navigate(["/not-found"])}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](i.a),a["\u0275\u0275inject"](r.a),a["\u0275\u0275inject"](p.d))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=n("pLZG"),v=n("eIep"),h=n("dWir"),f=n("gbzl"),E=n("UdTj"),b=n("bOtU");const S=function(e){return["./",e]};function g(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"tr"),a["\u0275\u0275elementStart"](1,"td"),a["\u0275\u0275text"](2),a["\u0275\u0275pipe"](3,"mask"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"td"),a["\u0275\u0275text"](5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"td"),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"td",2),a["\u0275\u0275elementStart"](9,"div"),a["\u0275\u0275elementStart"](10,"a",4),a["\u0275\u0275element"](11,"i",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"button",6),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"]().exclui(n)})),a["\u0275\u0275element"](13,"i",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind2"](3,4,e.cnpj,"00.000.000/0000-00")),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](e.razaoSocial),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](e.informacoesGerais),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("routerLink",a["\u0275\u0275pureFunction1"](7,S,e.id))}}let x=(()=>{class e{constructor(e){this.toast=e,this.excluir=new a.EventEmitter}ngOnInit(){}exclui(e){this.toast.confirmModal("Deseja relamente excluir essa empresa? Essa a\xe7\xe3o n\xe3o poder\xe1 ser desfeita.","Confirma\xe7\xe3o de Exclus\xe3o").pipe(Object(u.a)(e=>e)).subscribe(t=>this.excluir.emit(e))}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](h.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-empresas-lista"]],inputs:{empresas:"empresas"},outputs:{excluir:"excluir"},decls:13,vars:1,consts:[[1,"table-responsive"],[1,"table","table-striped"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"btn","btn-xs","btn-outline","btn-success","m-r-xs",3,"routerLink"],[1,"fa","fa-pencil"],[1,"btn","btn-xs","btn-outline","btn-danger",3,"click"],[1,"fa","fa-trash"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"table",1),a["\u0275\u0275elementStart"](2,"thead"),a["\u0275\u0275elementStart"](3,"tr"),a["\u0275\u0275elementStart"](4,"th"),a["\u0275\u0275text"](5,"CNPJ"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"th"),a["\u0275\u0275text"](7,"Raz\xe3o Social"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"th"),a["\u0275\u0275text"](9,"Informa\xe7\xf5es Gerais"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](10,"th",2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"tbody"),a["\u0275\u0275template"](12,g,14,9,"tr",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](12),a["\u0275\u0275property"]("ngForOf",t.empresas))},directives:[s.l,p.f],pipes:[b.a],styles:[""]}),e})(),j=(()=>{class e{constructor(e,t,n){this.route=e,this.empresasApi=t,this.toast=n}ngOnInit(){this.route.data.pipe(Object(u.a)(e=>e.hasOwnProperty("empresas")),Object(l.a)(e=>e.empresas)).subscribe(e=>{this.empresas=e})}exclui(e){this.empresasApi.delete(e.id).pipe(Object(v.a)(e=>this.empresasApi.getAll())).subscribe(e=>{this.toast.showMessage({message:"Empresa exclu\xedda com sucesso!",title:"Sucesso!",type:f.a.success}),this.empresas=e})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](p.a),a["\u0275\u0275directiveInject"](i.a),a["\u0275\u0275directiveInject"](h.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-empresas"]],decls:6,vars:1,consts:[[1,"container"],["title","Empresas Cadastradas"],["routerLink","nova",1,"btn","btn-primary","m-b-md"],[1,"fa","fa-plus"],[3,"empresas","excluir"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"app-panel",1),a["\u0275\u0275elementStart"](2,"a",2),a["\u0275\u0275element"](3,"span",3),a["\u0275\u0275text"](4," Nova Empresa"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"app-empresas-lista",4),a["\u0275\u0275listener"]("excluir",(function(e){return t.exclui(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("empresas",t.empresas))},directives:[E.a,p.f,x],styles:[""]}),e})();var y=n("Sy1n"),I=n("EmVR"),w=n("vcDO");let O=(()=>{class e{constructor(e,t,n){this.router=e,this.empresasApi=t,this.toast=n}ngOnInit(){}cancelarEdicao(){this.router.navigate(["/empresas"])}salvar(e){this.empresasApi.post(e).subscribe(e=>{this.toast.showMessage({message:"Empresa cadastrada com sucesso!",title:"Sucesso",type:f.a.success}),this.router.navigate(["/empresas"])})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](p.d),a["\u0275\u0275directiveInject"](i.a),a["\u0275\u0275directiveInject"](h.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-empresa-nova"]],decls:3,vars:0,consts:[[1,"container"],["title","Nova Empresa"],[3,"salvarEmpresa","cancelarEdicao"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"app-panel",1),a["\u0275\u0275elementStart"](2,"app-empresa-shared-form",2),a["\u0275\u0275listener"]("salvarEmpresa",(function(e){return t.salvar(e)}))("cancelarEdicao",(function(){return t.cancelarEdicao()})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]())},directives:[E.a,w.a],styles:[""]}),e})();var A=n("UHvN");const C=[{path:"",data:{navigationType:y.b.Top},children:[{path:"",resolve:{empresas:I.a},component:j},{path:"nova",component:O},{path:":id",component:(()=>{class e{constructor(e,t,n,a){this.route=e,this.router=t,this.toast=n,this.empresasApi=a}ngOnInit(){this.route.data.pipe(Object(u.a)(e=>e.hasOwnProperty("empresa")),Object(l.a)(e=>e.empresa)).subscribe(e=>{this.empresa=e})}cancelarEdicao(){this.router.navigate(["/empresas"])}salvar(){this.empresasApi.put(this.empresa.id,this.empresa).subscribe(e=>{this.toast.showMessage({message:"Empresa atualizada com sucesso!",title:"Sucesso",type:f.a.success}),this.router.navigate(["/empresas"])})}removerEstabelecimento(e){const t=this.empresa.estabelecimentos.findIndex(t=>t.id===e.id);this.empresa.estabelecimentos.splice(t,1),this.toast.showMessage({message:"Estabelecimento exclu\xeddo com sucesso!",title:"Sucesso",type:f.a.success})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](p.a),a["\u0275\u0275directiveInject"](p.d),a["\u0275\u0275directiveInject"](h.a),a["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-empresa-edicao"]],decls:10,vars:2,consts:[[1,"container"],["title","Edi\xe7\xe3o da Empresa"],[1,"row"],[1,"col-sm-12"],[3,"empresa","cancelarEdicao","salvarEmpresa"],[1,"row","m-t-lg"],[3,"estabelecimentos","estabelecimentoExcluido"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"app-panel",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275elementStart"](4,"app-empresa-shared-form",4),a["\u0275\u0275listener"]("cancelarEdicao",(function(){return t.cancelarEdicao()}))("salvarEmpresa",(function(){return t.salvar()})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"div",5),a["\u0275\u0275elementStart"](6,"div",3),a["\u0275\u0275elementStart"](7,"h4"),a["\u0275\u0275text"](8,"Estabelecimentos"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"app-estabelecimentos-lista",6),a["\u0275\u0275listener"]("estabelecimentoExcluido",(function(e){return t.removerEstabelecimento(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("empresa",t.empresa),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("estabelecimentos",t.empresa.estabelecimentos))},directives:[E.a,w.a,A.a],styles:[""]}),e})(),resolve:{empresa:d}}]}];let M=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[p.g.forChild(C)],p.g]}),e})();var k=n("PCNd");n.d(t,"EmpresasModule",(function(){return N}));let N=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.c,M,k.a]]}),e})()}}]);