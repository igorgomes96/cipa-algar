(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+zCQ":function(e,t,a){"use strict";a.r(t);var n=a("fXoL"),o=a("ofXK"),r=a("LRne"),i=a("JIr8"),l=a("GrLX"),s=a("tyNb");let d=(()=>{class e{constructor(e,t){this.api=e,this.router=t}resolve(e,t){if(e.paramMap.has("id")){const t=+e.paramMap.get("id");return this.api.getResultado(t).pipe(Object(i.a)(e=>(this.router.navigate(["/not-found"]),Object(r.a)(null))))}this.router.navigate(["/not-found"])}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275inject"](l.a),n["\u0275\u0275inject"](s.d))},e.\u0275prov=n["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),c=(()=>{class e{constructor(e,t){this.api=e,this.router=t}resolve(e,t){if(e.paramMap.has("id")){const t=+e.paramMap.get("id");return this.api.getApuracao(t).pipe(Object(i.a)(e=>Object(r.a)(null)))}this.router.navigate(["/not-found"])}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275inject"](l.a),n["\u0275\u0275inject"](s.d))},e.\u0275prov=n["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();a("TQ7X");var u=a("meoU");let p=(()=>{class e{constructor(){}ngOnInit(){}get qtdaNaoVotantes(){return this.dimensionamento.qtdaEleitores-this.dimensionamento.qtdaVotos}get percentualVotos(){return this.dimensionamento.qtdaVotos/this.dimensionamento.qtdaEleitores}get possuiQtdaMinimaVotos(){return this.dimensionamento.qtdaVotos>=this.dimensionamento.qtdaMinimaVotos}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["app-widgets"]],inputs:{dimensionamento:"dimensionamento"},decls:10,vars:9,consts:[[1,"row"],[1,"col-lg-3","col-md-6","col-xs-12"],["titulo","Funcion\xe1rios","icone","fa-users","estilo","navy-bg",3,"valor"],["titulo","Qtda de Votantes","icone","fa-address-book","estilo","lazur-bg",3,"valor"],["titulo","N\xe3o Votantes","icone","fa-ban","estilo","yellow-bg",3,"valor"],["titulo","Perc. de Votos",3,"icone","valor","estilo"]],template:function(e,t){1&e&&(n["\u0275\u0275elementStart"](0,"div",0),n["\u0275\u0275elementStart"](1,"div",1),n["\u0275\u0275element"](2,"app-widget-dashboard",2),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](3,"div",1),n["\u0275\u0275element"](4,"app-widget-dashboard",3),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](5,"div",1),n["\u0275\u0275element"](6,"app-widget-dashboard",4),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](7,"div",1),n["\u0275\u0275element"](8,"app-widget-dashboard",5),n["\u0275\u0275pipe"](9,"percent"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"]()),2&e&&(n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("valor",t.dimensionamento.qtdaEleitores),n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("valor",t.dimensionamento.qtdaVotos),n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("valor",t.qtdaNaoVotantes),n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("icone",t.possuiQtdaMinimaVotos?"fa-check":"fa-times")("valor",n["\u0275\u0275pipeBind2"](9,6,t.percentualVotos,"1.0-2"))("estilo",t.possuiQtdaMinimaVotos?"navy-bg":"red-bg"))},directives:[u.a],pipes:[o.r],styles:[""]}),e})();var m=a("UdTj");const h={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{ticks:{min:0,max:10,stepSize:1}}],yAxes:[{offset:!0,barThickness:15,gridLines:{offsetGridLines:!0}}]},plugins:{datalabels:{anchor:"end",align:"end"}}};var f=a("qb46"),v=a("LPYB");let x=(()=>{class e{constructor(){this.barChartOptions=h,this.barChartLegend=!1,this.barChartPlugins=[f],this.chartHeight=500,this.barChartType="bar"}ngOnInit(){const e=Math.min(...this.votos);e>4&&(this.barChartOptions.scales.xAxes[0].ticks.min=e-2);const t=Math.max(...this.votos);this.barChartOptions.scales.xAxes[0].ticks.max=t+1,this.barChartOptions.scales.xAxes[0].ticks.stepSize=Math.round((t-e)/20+1),this.update()}update(){this.barChartData=[{data:this.votos,backgroundColor:"rgb(124, 181, 236)",hoverBackgroundColor:"rgb(124, 181, 236)",borderColor:"rgb(124, 181, 236)",hoverBorderColor:"rgb(124, 181, 236)"}],this.chartHeight=25*this.votos.length,this.barChartLabels=this.nomes}get votos(){return this.apuracao.map(e=>e.votos)}get nomes(){return this.apuracao.map(e=>this.abreviaNome(e.nome))}abreviaNome(e){const t=e.split(" ");return t.length<=1?e:`${t[0]} ${this.primeirasLetras(t.slice(1,t.length-1))} ${t[t.length-1]}`}primeirasLetras(e){return e.map(e=>`${e.charAt(0)}.`).join(" ")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["app-apuracao-chart"]],inputs:{apuracao:"apuracao",barChartType:"barChartType"},decls:2,vars:7,consts:[[2,"display","block"],["baseChart","",3,"datasets","labels","options","plugins","legend","chartType"]],template:function(e,t){1&e&&(n["\u0275\u0275elementStart"](0,"div",0),n["\u0275\u0275element"](1,"canvas",1),n["\u0275\u0275elementEnd"]()),2&e&&(n["\u0275\u0275advance"](1),n["\u0275\u0275styleProp"]("height",t.chartHeight+"px"),n["\u0275\u0275property"]("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("plugins",t.barChartPlugins)("legend",t.barChartLegend)("chartType",t.barChartType))},directives:[v.a],styles:[""]}),e})();function y(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"div",8),n["\u0275\u0275element"](1,"img",9),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]().$implicit;n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("src",e.foto,n["\u0275\u0275sanitizeUrl"])}}function b(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"div",2),n["\u0275\u0275template"](1,y,2,1,"div",3),n["\u0275\u0275elementStart"](2,"div",4),n["\u0275\u0275elementStart"](3,"span",5),n["\u0275\u0275elementStart"](4,"small"),n["\u0275\u0275text"](5),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](6,"span",6),n["\u0275\u0275text"](7),n["\u0275\u0275elementEnd"](),n["\u0275\u0275element"](8,"br"),n["\u0275\u0275elementStart"](9,"p",7),n["\u0275\u0275text"](10),n["\u0275\u0275element"](11,"br"),n["\u0275\u0275text"](12),n["\u0275\u0275pipe"](13,"date"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,a=t.index,o=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",e.foto),n["\u0275\u0275advance"](4),n["\u0275\u0275textInterpolate1"]("",e.votos," Votos"),n["\u0275\u0275advance"](2),n["\u0275\u0275textInterpolate2"]("",o.colocacao(a),"\xba - ",e.nome,""),n["\u0275\u0275advance"](3),n["\u0275\u0275textInterpolate1"](" ",e.cargo||"N/D",""),n["\u0275\u0275advance"](2),n["\u0275\u0275textInterpolate1"](" Admitido em ",n["\u0275\u0275pipeBind2"](13,6,e.dataAdmissao,"dd/MM/yyyy")," ")}}let g=(()=>{class e{constructor(e){this.eleicoesApi=e}ngOnInit(){this.apuracao.filter(e=>e.inscricaoId).forEach(e=>{this.eleicoesApi.getFotoInscrito(e.eleicaoId,e.inscricaoId).subscribe(t=>e.foto=t)})}colocacao(e){return e+1}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["app-resultado-apuracao"]],inputs:{apuracao:"apuracao"},decls:2,vars:1,consts:[[1,"feed-activity-list"],["class","feed-element",4,"ngFor","ngForOf"],[1,"feed-element"],["class","pull-left","class","foto",4,"ngIf"],[1,"media-body"],[1,"badge","badge-success","pull-right"],[1,"nome"],[1,"text-muted"],[1,"foto"],["alt","image",1,"img-circle",3,"src"]],template:function(e,t){1&e&&(n["\u0275\u0275elementStart"](0,"div",0),n["\u0275\u0275template"](1,b,14,9,"div",1),n["\u0275\u0275elementEnd"]()),2&e&&(n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngForOf",t.apuracao))},directives:[o.l,o.m],pipes:[o.e],styles:[".feed-element[_ngcontent-%COMP%]{display:flex}.foto[_ngcontent-%COMP%]{padding-right:5px}.foto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;-o-object-fit:cover;object-fit:cover}.media-body[_ngcontent-%COMP%]{padding:12px 20px 20px}p.text-muted[_ngcontent-%COMP%]{margin-top:3px}.nome[_ngcontent-%COMP%]{font-weight:600}"]}),e})();var w=function(e){return e.Efetivo="Efetivo",e.Suplente="Suplente",e.NaoEleito="N\xe3o eleito",e}({});function _(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"span",6),n["\u0275\u0275text"](1),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]().$implicit,t=n["\u0275\u0275nextContext"]();n["\u0275\u0275property"]("ngClass",t.resultadoClass(e)),n["\u0275\u0275advance"](1),n["\u0275\u0275textInterpolate1"]("",e.resultadoApuracao," ")}}function C(e,t){1&e&&(n["\u0275\u0275elementStart"](0,"span",7),n["\u0275\u0275text"](1,"Branco "),n["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"tr"),n["\u0275\u0275elementStart"](1,"td"),n["\u0275\u0275template"](2,_,2,2,"span",4),n["\u0275\u0275template"](3,C,2,0,"span",5),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](4,"td"),n["\u0275\u0275text"](5),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](6,"td"),n["\u0275\u0275text"](7),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](8,"td"),n["\u0275\u0275text"](9),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](10,"td"),n["\u0275\u0275text"](11),n["\u0275\u0275pipe"](12,"date"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](13,"td",2),n["\u0275\u0275text"](14),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("ngIf","(Em Branco)"!==e.nome),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf","(Em Branco)"===e.nome),n["\u0275\u0275advance"](2),n["\u0275\u0275textInterpolate"](e.nome),n["\u0275\u0275advance"](2),n["\u0275\u0275textInterpolate"](e.cargo),n["\u0275\u0275advance"](2),n["\u0275\u0275textInterpolate"](e.area),n["\u0275\u0275advance"](2),n["\u0275\u0275textInterpolate"](n["\u0275\u0275pipeBind2"](12,7,e.dataAdmissao,"dd/MM/yyyy")),n["\u0275\u0275advance"](3),n["\u0275\u0275textInterpolate"](e.votos)}}a("ZELa");let E=(()=>{class e{constructor(e){this.eleicoesApi=e,this.downloadRelatorio=new n.EventEmitter}ngOnInit(){this.downloadRelatorio.subscribe(e=>this.download())}get candidatos(){return this.resultado?this.resultado.efetivos.concat(this.resultado.suplentes).concat(this.resultado.naoEleitos):[]}resultadoClass(e){switch(e.resultadoApuracao){case w.Efetivo:return"label-primary";case w.Suplente:return"label-success";case w.NaoEleito:return"label-danger";default:return""}}download(){this.eleicoesApi.downloadRelatorioInscricoes(this.eleicao.id,"Inscricoes.xlsx").subscribe()}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["app-relacao-candidatos"]],inputs:{eleicao:"eleicao",resultado:"resultado",downloadRelatorio:"downloadRelatorio"},decls:17,vars:1,consts:[[1,"table-responsive"],[1,"table","table-striped"],[1,"text-center"],[4,"ngFor","ngForOf"],["class","label",3,"ngClass",4,"ngIf"],["class","label",4,"ngIf"],[1,"label",3,"ngClass"],[1,"label"]],template:function(e,t){1&e&&(n["\u0275\u0275elementStart"](0,"div",0),n["\u0275\u0275elementStart"](1,"table",1),n["\u0275\u0275elementStart"](2,"thead"),n["\u0275\u0275elementStart"](3,"tr"),n["\u0275\u0275element"](4,"th"),n["\u0275\u0275elementStart"](5,"th"),n["\u0275\u0275text"](6,"Nome"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](7,"th"),n["\u0275\u0275text"](8,"Cargo"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](9,"th"),n["\u0275\u0275text"](10,"\xc1rea"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](11,"th"),n["\u0275\u0275text"](12,"Admiss\xe3o"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](13,"th",2),n["\u0275\u0275text"](14,"Votos"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](15,"tbody"),n["\u0275\u0275template"](16,S,15,10,"tr",3),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"]()),2&e&&(n["\u0275\u0275advance"](16),n["\u0275\u0275property"]("ngForOf",t.candidatos))},directives:[o.l,o.m,o.k],pipes:[o.e],styles:[""]}),e})();function M(e,t){1&e&&(n["\u0275\u0275elementStart"](0,"div",3),n["\u0275\u0275elementStart"](1,"strong"),n["\u0275\u0275text"](2,"N\xe3o temos nada para mostrar!"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275text"](3," Ainda n\xe3o houve nenhum voto nesta elei\xe7\xe3o.\n"),n["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"div",9),n["\u0275\u0275elementStart"](1,"div",10),n["\u0275\u0275elementStart"](2,"app-panel",11),n["\u0275\u0275element"](3,"app-resultado-apuracao",12),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](4,"div",10),n["\u0275\u0275elementStart"](5,"app-panel",13),n["\u0275\u0275element"](6,"app-resultado-apuracao",12),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"](2);n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("collapsible",!1),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("apuracao",e.resultado.efetivos),n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("collapsible",!1),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("apuracao",e.resultado.suplentes)}}function k(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"div"),n["\u0275\u0275element"](1,"app-widgets",4),n["\u0275\u0275elementStart"](2,"app-panel",5),n["\u0275\u0275elementStart"](3,"h2",6),n["\u0275\u0275text"](4,"Qtda. de Votos"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](5,"h5",6),n["\u0275\u0275text"](6),n["\u0275\u0275pipe"](7,"date"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275element"](8,"br"),n["\u0275\u0275element"](9,"app-apuracao-chart",7),n["\u0275\u0275elementEnd"](),n["\u0275\u0275template"](10,I,7,4,"div",8),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("dimensionamento",e.eleicao.dimensionamento),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("collapsible",!1),n["\u0275\u0275advance"](4),n["\u0275\u0275textInterpolate1"]("Ultima atualiza\xe7\xe3o: ",n["\u0275\u0275pipeBind2"](7,5,e.ultimaAtualizacao,"dd/MMM/yyyy HH:mm:ss"),""),n["\u0275\u0275advance"](3),n["\u0275\u0275property"]("apuracao",e.apuracao),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",e.eleicao.dimensionamento.qtdaVotos>=e.eleicao.dimensionamento.qtdaMinimaVotos)}}function A(e,t){if(1&e){const e=n["\u0275\u0275getCurrentView"]();n["\u0275\u0275elementStart"](0,"app-panel",14),n["\u0275\u0275listener"]("optionClick",(function(t){return n["\u0275\u0275restoreView"](e),n["\u0275\u0275nextContext"]().onOptionsCandidatosClick()})),n["\u0275\u0275element"](1,"app-relacao-candidatos",15),n["\u0275\u0275elementEnd"]()}if(2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275property"]("options",e.optionsCandidatos),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("resultado",e.resultado)("eleicao",e.eleicao)("downloadRelatorio",e.donwloadRelatorioCandidatos)}}let O=(()=>{class e{constructor(e,t){this.route=e,this.eleicoesApi=t,this.optionsEleitoresVotantes=[{nome:"download",icon:"fa-download"}],this.optionsCandidatos=[{nome:"download",icon:"fa-download"}],this.donwloadRelatorioCandidatos=new n.EventEmitter}ngOnInit(){this.route.data.subscribe(e=>{this.eleicao=e.eleicao,this.ultimaAtualizacao=new Date,e.eleicao.dimensionamento.qtdaVotos&&(this.eleicao=e.eleicao,this.resultado=e.resultado,this.apuracao=e.apuracao)})}onOptionsEleitoresVotantesClick(){this.eleicoesApi.downloadRelatorioVotos(this.eleicao.id,"Votos.xlsx").subscribe()}onOptionsCandidatosClick(){this.donwloadRelatorioCandidatos.emit()}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](s.a),n["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["app-dashboard"]],decls:3,vars:3,consts:[["class","alert alert-warning",4,"ngIf"],[4,"ngIf"],["title","Rela\xe7\xe3o de Votos por Candidato",3,"options","optionClick",4,"ngIf"],[1,"alert","alert-warning"],[3,"dimensionamento"],["title","Apura\xe7\xe3o dos votos",3,"collapsible"],[1,"text-center"],["barChartType","horizontalBar",3,"apuracao"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-6","col-sm-12"],["title","Resultado da Apura\xe7\xe3o","labelText","Efetivos","labelClass","label-primary",3,"collapsible"],[3,"apuracao"],["title","Resultado da Apura\xe7\xe3o","labelText","Suplentes","labelClass","label-primary",3,"collapsible"],["title","Rela\xe7\xe3o de Votos por Candidato",3,"options","optionClick"],[3,"resultado","eleicao","downloadRelatorio"]],template:function(e,t){1&e&&(n["\u0275\u0275template"](0,M,4,0,"div",0),n["\u0275\u0275template"](1,k,11,8,"div",1),n["\u0275\u0275template"](2,A,2,4,"app-panel",2)),2&e&&(n["\u0275\u0275property"]("ngIf",!t.eleicao.dimensionamento.qtdaVotos),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",t.eleicao.dimensionamento.qtdaVotos),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",t.eleicao.dimensionamento.qtdaVotos))},directives:[o.m,p,m.a,x,g,E],pipes:[o.e],styles:[""]}),e})();var V=a("Sy1n"),$=a("CF8v"),R=a("lJxs"),j=a("dWir"),P=a("gbzl"),z=a("KyPx");const N=[{path:"",component:O,data:{navigationType:V.b.Left,breadcrumb:"Dashboard",title:"Dashboard"},resolve:{eleicao:$.a,apuracao:c,resultado:d},canActivate:[(()=>{class e{constructor(e,t,a){this.eleicoesApi=e,this.router=t,this.toasts=a}canActivate(e,t){if(e.paramMap.has("id")){const t=+e.paramMap.get("id");return this.eleicoesApi.getCronograma(t).pipe(Object(R.a)(e=>{const t=e.find(e=>e.posicaoEtapa===z.b.Atual);if(e.every(e=>e.posicaoEtapa===z.b.Passada))return!0;if(!t)return this.toasts.showMessage({message:"Processo de elei\xe7\xe3o ainda n\xe3o iniciado.",title:"Aguardando in\xedcio",type:P.a.warning}),!1;const a=e.find(e=>e.etapaObrigatoriaId===z.a.Votacao);return a?!(a.ordem>t.ordem&&(this.toasts.showMessage({message:"O acesso ser\xe1 liberado somente quando as vota\xe7\xf5es se iniciarem!",title:"Aguardando Vota\xe7\xe3o",type:P.a.warning}),1)):(this.toasts.showMessage({message:"Etapa de vota\xe7\xe3o n\xe3o encontrada!",title:"Cronograma inv\xe1lido",type:P.a.error}),!1)}))}return this.router.navigate(["/eleicoes"]),!1}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275inject"](l.a),n["\u0275\u0275inject"](s.d),n["\u0275\u0275inject"](j.a))},e.\u0275prov=n["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()]}];let q=(()=>{class e{}return e.\u0275mod=n["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=n["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.g.forChild(N)],s.g]}),e})();var B=a("PCNd");a("NhFE"),a.d(t,"DashboardModule",(function(){return F}));let F=(()=>{class e{}return e.\u0275mod=n["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=n["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,B.a,q]]}),e})()},qb46:function(e,t,a){e.exports=function(e){"use strict";var t=(e=e&&e.hasOwnProperty("default")?e.default:e).helpers,a=function(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var e=window.screen;if(e)return(e.deviceXDPI||1)/(e.logicalXDPI||1)}return 1}(),n={toTextLines:function(e){var a,n=[];for(e=[].concat(e);e.length;)"string"==typeof(a=e.pop())?n.unshift.apply(n,a.split("\n")):Array.isArray(a)?e.push.apply(e,a):t.isNullOrUndef(e)||n.unshift(""+a);return n},toFontString:function(e){return!e||t.isNullOrUndef(e.size)||t.isNullOrUndef(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family},textSize:function(e,t,a){var n,o=[].concat(t),r=o.length,i=e.font,l=0;for(e.font=a.string,n=0;n<r;++n)l=Math.max(e.measureText(o[n]).width,l);return e.font=i,{height:r*a.lineHeight,width:l}},parseFont:function(a){var o=e.defaults.global,r=t.valueOrDefault(a.size,o.defaultFontSize),i={family:t.valueOrDefault(a.family,o.defaultFontFamily),lineHeight:t.options.toLineHeight(a.lineHeight,r),size:r,style:t.valueOrDefault(a.style,o.defaultFontStyle),weight:t.valueOrDefault(a.weight,null),string:""};return i.string=n.toFontString(i),i},bound:function(e,t,a){return Math.max(e,Math.min(t,a))},arrayDiff:function(e,t){var a,n,o,r,i=e.slice(),l=[];for(a=0,o=t.length;a<o;++a)-1===(n=i.indexOf(r=t[a]))?l.push([r,1]):i.splice(n,1);for(a=0,o=i.length;a<o;++a)l.push([i[a],-1]);return l},rasterize:function(e){return Math.round(e*a)/a}};function o(e,t){var a=t.x,n=t.y;if(null===a)return{x:0,y:-1};if(null===n)return{x:1,y:0};var o=e.x-a,r=e.y-n,i=Math.sqrt(o*o+r*r);return{x:i?o/i:0,y:i?r/i:-1}}function r(e,t,a){var n=0;return e<a.left?n|=1:e>a.right&&(n|=2),t<a.top?n|=8:t>a.bottom&&(n|=4),n}function i(e,t){var a,n,o=t.anchor,i=e;return t.clamp&&(i=function(e,t){for(var a,n,o,i=e.x0,l=e.y0,s=e.x1,d=e.y1,c=r(i,l,t),u=r(s,d,t);c|u&&!(c&u);)8&(a=c||u)?(n=i+(s-i)*(t.top-l)/(d-l),o=t.top):4&a?(n=i+(s-i)*(t.bottom-l)/(d-l),o=t.bottom):2&a?(o=l+(d-l)*(t.right-i)/(s-i),n=t.right):1&a&&(o=l+(d-l)*(t.left-i)/(s-i),n=t.left),a===c?c=r(i=n,l=o,t):u=r(s=n,d=o,t);return{x0:i,x1:s,y0:l,y1:d}}(i,t.area)),"start"===o?(a=i.x0,n=i.y0):"end"===o?(a=i.x1,n=i.y1):(a=(i.x0+i.x1)/2,n=(i.y0+i.y1)/2),function(e,t,a,n,o){switch(o){case"center":a=n=0;break;case"bottom":a=0,n=1;break;case"right":a=1,n=0;break;case"left":a=-1,n=0;break;case"top":a=0,n=-1;break;case"start":a=-a,n=-n;break;case"end":break;default:o*=Math.PI/180,a=Math.cos(o),n=Math.sin(o)}return{x:e,y:t,vx:a,vy:n}}(a,n,e.vx,e.vy,t.align)}var l=function(e,t){var a=(e.startAngle+e.endAngle)/2,n=Math.cos(a),o=Math.sin(a),r=e.innerRadius,l=e.outerRadius;return i({x0:e.x+n*r,y0:e.y+o*r,x1:e.x+n*l,y1:e.y+o*l,vx:n,vy:o},t)},s=function(e,t){var a=o(e,t.origin),n=a.x*e.radius,r=a.y*e.radius;return i({x0:e.x-n,y0:e.y-r,x1:e.x+n,y1:e.y+r,vx:a.x,vy:a.y},t)},d=function(e,t){var a=o(e,t.origin),n=e.x,r=e.y,l=0,s=0;return e.horizontal?(n=Math.min(e.x,e.base),l=Math.abs(e.base-e.x)):(r=Math.min(e.y,e.base),s=Math.abs(e.base-e.y)),i({x0:n,y0:r+s,x1:n+l,y1:r,vx:a.x,vy:a.y},t)},c=function(e,t){var a=o(e,t.origin);return i({x0:e.x,y0:e.y,x1:e.x,y1:e.y,vx:a.x,vy:a.y},t)},u=e.helpers,p=n.rasterize;function m(e){var t=e._model.horizontal,a=e._scale||t&&e._xScale||e._yScale;if(!a)return null;if(void 0!==a.xCenter&&void 0!==a.yCenter)return{x:a.xCenter,y:a.yCenter};var n=a.getBasePixel();return t?{x:n,y:null}:{x:null,y:n}}function h(e,t,a){var n=e.shadowBlur,o=a.stroked,r=p(a.x),i=p(a.y),l=p(a.w);o&&e.strokeText(t,r,i,l),a.filled&&(n&&o&&(e.shadowBlur=0),e.fillText(t,r,i,l),n&&o&&(e.shadowBlur=n))}var f=function(e,t,a,n){var o=this;o._config=e,o._index=n,o._model=null,o._rects=null,o._ctx=t,o._el=a};u.extend(f.prototype,{_modelize:function(t,a,o,r){var i,p=this._index,h=u.options.resolve,f=n.parseFont(h([o.font,{}],r,p)),v=h([o.color,e.defaults.global.defaultFontColor],r,p);return{align:h([o.align,"center"],r,p),anchor:h([o.anchor,"center"],r,p),area:r.chart.chartArea,backgroundColor:h([o.backgroundColor,null],r,p),borderColor:h([o.borderColor,null],r,p),borderRadius:h([o.borderRadius,0],r,p),borderWidth:h([o.borderWidth,0],r,p),clamp:h([o.clamp,!1],r,p),clip:h([o.clip,!1],r,p),color:v,display:t,font:f,lines:a,offset:h([o.offset,0],r,p),opacity:h([o.opacity,1],r,p),origin:m(this._el),padding:u.options.toPadding(h([o.padding,0],r,p)),positioner:(i=this._el,i instanceof e.elements.Arc?l:i instanceof e.elements.Point?s:i instanceof e.elements.Rectangle?d:c),rotation:h([o.rotation,0],r,p)*(Math.PI/180),size:n.textSize(this._ctx,a,f),textAlign:h([o.textAlign,"start"],r,p),textShadowBlur:h([o.textShadowBlur,0],r,p),textShadowColor:h([o.textShadowColor,v],r,p),textStrokeColor:h([o.textStrokeColor,v],r,p),textStrokeWidth:h([o.textStrokeWidth,0],r,p)}},update:function(e){var t,a,o,r=this,i=null,l=null,s=r._index,d=r._config,c=u.options.resolve([d.display,!0],e,s);c&&(a=u.valueOrDefault(u.callback(d.formatter,[t=e.dataset.data[s],e]),t),(o=u.isNullOrUndef(a)?[]:n.toTextLines(a)).length&&(l=function(e){var t=e.borderWidth||0,a=e.padding,n=e.size.height,o=e.size.width,r=-o/2,i=-n/2;return{frame:{x:r-a.left-t,y:i-a.top-t,w:o+a.width+2*t,h:n+a.height+2*t},text:{x:r,y:i,w:o,h:n}}}(i=r._modelize(c,o,d,e)))),r._model=i,r._rects=l},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(e,t){var a,o=e.ctx,r=this._model,i=this._rects;this.visible()&&(o.save(),r.clip&&(a=r.area,o.beginPath(),o.rect(a.left,a.top,a.right-a.left,a.bottom-a.top),o.clip()),o.globalAlpha=n.bound(0,r.opacity,1),o.translate(p(t.x),p(t.y)),o.rotate(r.rotation),function(e,t,a){var n=a.backgroundColor,o=a.borderColor,r=a.borderWidth;(n||o&&r)&&(e.beginPath(),u.canvas.roundedRect(e,p(t.x)+r/2,p(t.y)+r/2,p(t.w)-r,p(t.h)-r,a.borderRadius),e.closePath(),n&&(e.fillStyle=n,e.fill()),o&&r&&(e.strokeStyle=o,e.lineWidth=r,e.lineJoin="miter",e.stroke()))}(o,i.frame,r),function(e,t,a,n){var o,r=n.textAlign,i=n.color,l=!!i,s=n.font,d=t.length,c=n.textStrokeColor,u=n.textStrokeWidth,p=c&&u;if(d&&(l||p))for(a=function(e,t,a){var n=a.lineHeight,o=e.w,r=e.x;return"center"===t?r+=o/2:"end"!==t&&"right"!==t||(r+=o),{h:n,w:o,x:r,y:e.y+n/2}}(a,r,s),e.font=s.string,e.textAlign=r,e.textBaseline="middle",e.shadowBlur=n.textShadowBlur,e.shadowColor=n.textShadowColor,l&&(e.fillStyle=i),p&&(e.lineJoin="round",e.lineWidth=u,e.strokeStyle=c),o=0,d=t.length;o<d;++o)h(e,t[o],{stroked:p,filled:l,w:a.w,x:a.x,y:a.y+a.h*o})}(o,r.lines,i.text,r),o.restore())}});var v=Number.MIN_SAFE_INTEGER||-9007199254740991,x=Number.MAX_SAFE_INTEGER||9007199254740991;function y(e,t,a){var n=Math.cos(a),o=Math.sin(a),r=t.x,i=t.y;return{x:r+n*(e.x-r)-o*(e.y-i),y:i+o*(e.x-r)+n*(e.y-i)}}function b(e,t){var a,n,o,r=x,i=v,l=t.origin;for(a=0;a<e.length;++a)o=t.vx*((n=e[a]).x-l.x)+t.vy*(n.y-l.y),r=Math.min(r,o),i=Math.max(i,o);return{min:r,max:i}}function g(e,t){var a=t.x-e.x,n=t.y-e.y,o=Math.sqrt(a*a+n*n);return{vx:(t.x-e.x)/o,vy:(t.y-e.y)/o,origin:e,ln:o}}var w=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function _(e,t,a){var n=t.positioner(e,t),o=n.vx,r=n.vy;if(!o&&!r)return{x:n.x,y:n.y};var i=a.w,l=a.h,s=t.rotation,d=Math.abs(i/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),c=Math.abs(i/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),u=1/Math.max(Math.abs(o),Math.abs(r));return d*=o*u,c*=r*u,{x:n.x+(d+=t.offset*o),y:n.y+(c+=t.offset*r)}}e.helpers.extend(w.prototype,{center:function(){var e=this._rect;return{x:e.x+e.w/2,y:e.y+e.h/2}},update:function(e,t,a){this._rotation=a,this._rect={x:t.x+e.x,y:t.y+e.y,w:t.w,h:t.h}},contains:function(e){var t=this._rect;return!((e=y(e,this.center(),-this._rotation)).x<t.x-1||e.y<t.y-1||e.x>t.x+t.w+2||e.y>t.y+t.h+2)},intersects:function(e){var t,a,n,o=this._points(),r=e._points(),i=[g(o[0],o[1]),g(o[0],o[3])];for(this._rotation!==e._rotation&&i.push(g(r[0],r[1]),g(r[0],r[3])),t=0;t<i.length;++t)if(a=b(o,i[t]),n=b(r,i[t]),a.max<n.min||n.max<a.min)return!1;return!0},_points:function(){var e=this._rect,t=this._rotation,a=this.center();return[y({x:e.x,y:e.y},a,t),y({x:e.x+e.w,y:e.y},a,t),y({x:e.x+e.w,y:e.y+e.h},a,t),y({x:e.x,y:e.y+e.h},a,t)]}});var C={prepare:function(e){var t,a,n,o,r,i=[];for(t=0,n=e.length;t<n;++t)for(a=0,o=e[t].length;a<o;++a)i.push(r=e[t][a]),r.$layout={_box:new w,_hidable:!1,_visible:!0,_set:t,_idx:a};return i.sort((function(e,t){var a=e.$layout,n=t.$layout;return a._idx===n._idx?a._set-n._set:n._idx-a._idx})),this.update(i),i},update:function(e){var t,a,n,o,r,i=!1;for(t=0,a=e.length;t<a;++t)o=(n=e[t]).model(),(r=n.$layout)._hidable=o&&"auto"===o.display,r._visible=n.visible(),i|=r._hidable;i&&function(e){var t,a,n,o,r,i;for(t=0,a=e.length;t<a;++t)(o=(n=e[t]).$layout)._visible&&(r=n.geometry(),i=_(n._el._model,n.model(),r),o._box.update(i,r,n.rotation()));!function(e,t){var a,n,o,r;for(a=e.length-1;a>=0;--a)for(o=e[a].$layout,n=a-1;n>=0&&o._visible;--n)(r=e[n].$layout)._visible&&o._box.intersects(r._box)&&t(o,r)}(e,(function(e,t){var a=e._hidable,n=t._hidable;a&&n||n?t._visible=!1:a&&(e._visible=!1)}))}(e)},lookup:function(e,t){var a,n;for(a=e.length-1;a>=0;--a)if((n=e[a].$layout)&&n._visible&&n._box.contains(t))return{dataset:n._set,label:e[a]};return null},draw:function(e,t){var a,n,o,r,i,l;for(a=0,n=t.length;a<n;++a)(r=(o=t[a]).$layout)._visible&&(i=o.geometry(),l=_(o._el._view,o.model(),i),r._box.update(l,i,o.rotation()),o.draw(e,l))}},S=e.helpers,E=e.helpers;function M(e,t,a){var n=t&&t[a.dataset];if(n){var o=a.label,r=o.$context;!0===E.callback(n,[r])&&(e.$datalabels._dirty=!0,o.update(r))}}e.defaults.global.plugins.datalabels={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(e){if(S.isNullOrUndef(e))return null;var t,a,n,o=e;if(S.isObject(e))if(S.isNullOrUndef(e.label))if(S.isNullOrUndef(e.r))for(o="",n=0,a=(t=Object.keys(e)).length;n<a;++n)o+=(0!==n?", ":"")+t[n]+": "+e[t[n]];else o=e.r;else o=e.label;return""+o},listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0};var I={id:"datalabels",beforeInit:function(e){e.$datalabels={_actives:[]}},beforeUpdate:function(e){var t=e.$datalabels;t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(e,t,a){var n,o,r,i=t.index,l=e.$datalabels,s=l._datasets[i]=[],d=e.isDatasetVisible(i),c=e.data.datasets[i],u=function(e,t){var a=e.datalabels;return!1===a?null:(!0===a&&(a={}),E.merge({},[t,a]))}(c,a),p=t.meta.data||[],m=p.length,h=e.ctx;for(h.save(),n=0;n<m;++n)o=p[n],d&&o&&!o.hidden&&!o._model.skip?(s.push(r=new f(u,h,o,n)),r.update(r.$context={active:!1,chart:e,dataIndex:n,dataset:c,datasetIndex:i})):r=null,o.$datalabels=r;h.restore(),E.merge(l._listeners,u.listeners||{},{merger:function(e,a,n){a[e]=a[e]||{},a[e][t.index]=n[e],l._listened=!0}})},afterUpdate:function(e,t){e.$datalabels._labels=C.prepare(e.$datalabels._datasets,t)},afterDatasetsDraw:function(e){C.draw(e,e.$datalabels._labels)},beforeEvent:function(e,t){if(e.$datalabels._listened)switch(t.type){case"mousemove":case"mouseout":!function(e,t){var a,n,o=e.$datalabels,r=o._listeners;if(r.enter||r.leave){if("mousemove"===t.type)n=C.lookup(o._labels,t);else if("mouseout"!==t.type)return;a=o._hovered,o._hovered=n,function(e,t,a,n){var o,r;(a||n)&&(a?n?a.label!==n.label&&(r=o=!0):r=!0:o=!0,r&&M(e,t.leave,a),o&&M(e,t.enter,n))}(e,r,a,n)}}(e,t);break;case"click":!function(e,t){var a=e.$datalabels,n=a._listeners.click,o=n&&C.lookup(a._labels,t);o&&M(e,n,o)}(e,t)}},afterEvent:function(t){var a,o,r,i,l=t.$datalabels,s=l._actives,d=l._actives=t.lastActive||[],c=n.arrayDiff(s,d);for(a=0,o=c.length;a<o;++a)(r=c[a])[1]&&(i=r[0].$datalabels)&&(i.$context.active=1===r[1],i.update(i.$context));(l._dirty||c.length)&&(C.update(l._labels),function(t){if(!t.animating){for(var a=e.animationService.animations,n=0,o=a.length;n<o;++n)if(a[n].chart===t)return;t.render({duration:1,lazy:!0})}}(t)),delete l._dirty}};return e.plugins.register(I),I}(a("MO+k"))}}]);