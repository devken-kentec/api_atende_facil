(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-relatorios-relatorios-module"],{

/***/ "HL1c":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/relatorios/relatorios-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RelatoriosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosRoutingModule", function() { return RelatoriosRoutingModule; });
/* harmony import */ var _relatorio_atendente_list_relatorio_atendente_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relatorio-atendente-list/relatorio-atendente-list.component */ "e3fH");
/* harmony import */ var _relatorio_atendimento_list_relatorio_atendimento_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatorio-atendimento-list/relatorio-atendimento-list.component */ "o9ed");
/* harmony import */ var _painel_relatorio_agendamento_painel_relatorio_agendamento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel-relatorio-agendamento/painel-relatorio-agendamento.component */ "hmDm");
/* harmony import */ var _painel_relatorio_painel_relatorio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel-relatorio/painel-relatorio.component */ "KD6Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routes = [
    { path: 'painelrelatorio', component: _painel_relatorio_painel_relatorio_component__WEBPACK_IMPORTED_MODULE_3__["PainelRelatorioComponent"] },
    { path: 'painelrelatorioagendamento', component: _painel_relatorio_agendamento_painel_relatorio_agendamento_component__WEBPACK_IMPORTED_MODULE_2__["PainelRelatorioAgendamentoComponent"] },
    { path: 'relatorioatendimentolist', component: _relatorio_atendimento_list_relatorio_atendimento_list_component__WEBPACK_IMPORTED_MODULE_1__["RelatorioAtendimentoListComponent"] },
    { path: 'relatorioatendentelist', component: _relatorio_atendente_list_relatorio_atendente_list_component__WEBPACK_IMPORTED_MODULE_0__["RelatorioAtendenteListComponent"] }
];
class RelatoriosRoutingModule {
}
RelatoriosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RelatoriosRoutingModule });
RelatoriosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function RelatoriosRoutingModule_Factory(t) { return new (t || RelatoriosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RelatoriosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](RelatoriosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KD6Z":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/relatorios/painel-relatorio/painel-relatorio.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PainelRelatorioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelRelatorioComponent", function() { return PainelRelatorioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_relatorios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/relatorios.service */ "YFmz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../unidade/shared/unidade.service */ "rwds");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../servico/shared/servico.service */ "kcBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function PainelRelatorioComponent_option_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidade_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unidade_r6.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unidade_r6.descricao);
} }
function PainelRelatorioComponent_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const servico_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", servico_r7.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](servico_r7.descricao);
} }
function PainelRelatorioComponent_option_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidade_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unidade_r8.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unidade_r8.descricao);
} }
function PainelRelatorioComponent_option_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const servico_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", servico_r9.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](servico_r9.descricao);
} }
function PainelRelatorioComponent_div_196_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", q_r11[0], "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", q_r11[1], "\n        ");
} }
function PainelRelatorioComponent_div_196_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quantitativo por Unidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Unidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PainelRelatorioComponent_div_196_tr_21_Template, 8, 2, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelRelatorioComponent_div_196_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.limparListaUnidade(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00A0Limpar Lista\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.quantitativoUnidade);
} }
function PainelRelatorioComponent_div_198_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", q_r15[0], "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", q_r15[1], "\n        ");
} }
function PainelRelatorioComponent_div_198_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quantitativo por Servi\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Servi\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PainelRelatorioComponent_div_198_tr_21_Template, 8, 2, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelRelatorioComponent_div_198_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.limparListaServico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0Limpar Lista\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.quantitativoServico);
} }
class PainelRelatorioComponent {
    constructor(relatoriosService, fb, unidadeService, globalService, servicoService) {
        this.relatoriosService = relatoriosService;
        this.fb = fb;
        this.unidadeService = unidadeService;
        this.globalService = globalService;
        this.servicoService = servicoService;
    }
    ngOnInit() {
        this.comboBox();
        this.buscaUniForm = this.fb.group({
            dataInicial: ['', []],
            dataFinal: ['', []],
            unidade: ['', []],
            servico: ['', []]
        });
    }
    comboBox() {
        this.unidadeService.listUnidadeGenerica(this.globalService.getRole(), this.globalService.getUnidadeId()).subscribe(dados => this.unidades = dados);
        this.servicoService.listServico().subscribe(dados => this.servicos = dados);
    }
    pesquisarUnidade() {
        let unidade = this.buscaUniForm.get('unidade').value;
        let dataI = this.buscaUniForm.get('dataInicial').value;
        let dataF = this.buscaUniForm.get('dataFinal').value;
        let servico = this.buscaUniForm.get('servico').value;
        this.relatoriosService.buscaAvancadaUnidadeGrade(unidade, this.primeiroDia(dataI), this.ultimoDia(dataF), servico).subscribe((res) => { this.quantitativoUnidade = res; });
    }
    limparListaUnidade() {
        this.quantitativoUnidade = null;
    }
    pesquisarServico() {
        let unidade = this.buscaUniForm.get('unidade').value;
        let dataI = this.buscaUniForm.get('dataInicial').value;
        let dataF = this.buscaUniForm.get('dataFinal').value;
        let servico = this.buscaUniForm.get('servico').value;
        this.relatoriosService.buscaAvancadaServicoGrade(unidade, this.primeiroDia(dataI), this.ultimoDia(dataF), servico).subscribe((res) => { this.quantitativoServico = res; });
    }
    limparListaServico() {
        this.quantitativoServico = null;
    }
    primeiroDia(dataInicial) {
        let monName = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
        let now = new Date();
        if (dataInicial == "") {
            dataInicial = now.getFullYear() + "-" + monName[now.getMonth()] + "-" + "01";
        }
        return dataInicial;
    }
    ultimoDia(dataFinal) {
        let monName = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
        let endDay = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "30");
        let now = new Date();
        if (dataFinal == "") {
            dataFinal = now.getFullYear() + "-" + monName[now.getMonth()] + "-" + endDay[now.getMonth()];
        }
        return dataFinal;
    }
}
PainelRelatorioComponent.ɵfac = function PainelRelatorioComponent_Factory(t) { return new (t || PainelRelatorioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_relatorios_service__WEBPACK_IMPORTED_MODULE_1__["RelatoriosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_5__["ServicoService"])); };
PainelRelatorioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PainelRelatorioComponent, selectors: [["app-painel-relatorio"]], decls: 201, vars: 7, consts: [[1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["type", "button", "routerLink", "/", 1, "btn", "btn-warning", "float-right"], [1, "fas", "fa-backward"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "col-md-10", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-info", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample2", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-info", "mb-2"], ["id", "collapseExample", 1, "collapse", "mt-2"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "row", "col-12", "ml-1"], ["for", "nDoTermo"], [1, "card-body"], [1, "row", "col-12"], [1, "form-group", "col-md-3"], ["for", "dataIn"], ["id", "dataIn", "type", "date", "formControlName", "dataInicial", 1, "form-control"], ["for", "dataOut"], ["id", "dataOut", "type", "date", "formControlName", "dataFinal", 1, "form-control"], ["for", "unidade"], ["id", "unidade", "formControlName", "unidade", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "comboServ"], ["id", "comboServ", "formControlName", "servico", 1, "form-control"], [1, "col-2"], [1, "btn", "btn-info", "float-left", 3, "click"], [1, "fas", "fa-search"], ["id", "collapseExample2", 1, "collapse", "mt-2"], ["class", "container mt-5", 4, "ngIf"], [3, "value"], [1, "container", "mt-5"], [2, "font-weight", "bold"], [4, "ngFor", "ngForOf"], [1, "row", "col-12", "mt-1"], [1, "btn", "btn-info", 3, "click"], [1, "text-center"]], template: function PainelRelatorioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Relat\u00F3rios das Grades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        Relat\u00F3rios das Grades\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0Voltar\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          Pesquisar por Unidade\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n        Pesquisar por Servi\u00E7o\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Filtro por Unidade:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Data Inicial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Data Final:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Unidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, PainelRelatorioComponent_option_85_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, PainelRelatorioComponent_option_99_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelRelatorioComponent_Template_button_click_107_listener() { return ctx.pesquisarUnidade(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Pesquisar\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Filtro por Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Data Inicial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Data Final:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Unidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, PainelRelatorioComponent_option_161_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, PainelRelatorioComponent_option_175_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelRelatorioComponent_Template_button_click_183_listener() { return ctx.pesquisarServico(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Pesquisar\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, PainelRelatorioComponent_div_196_Template, 33, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](198, PainelRelatorioComponent_div_198_Template, 33, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\n\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.buscaUniForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quantitativoUnidade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quantitativoServico);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvcmVsYXRvcmlvcy9wYWluZWwtcmVsYXRvcmlvL3BhaW5lbC1yZWxhdG9yaW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelRelatorioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-painel-relatorio',
                templateUrl: './painel-relatorio.component.html',
                styleUrls: ['./painel-relatorio.component.css'],
                preserveWhitespaces: true
            }]
    }], function () { return [{ type: _shared_relatorios_service__WEBPACK_IMPORTED_MODULE_1__["RelatoriosService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }, { type: _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_5__["ServicoService"] }]; }, null); })();


/***/ }),

/***/ "WY+/":
/*!*********************************************************!*\
  !*** ./src/app/modulos/relatorios/relatorios.module.ts ***!
  \*********************************************************/
/*! exports provided: RelatoriosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosModule", function() { return RelatoriosModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relatorios-routing.module */ "HL1c");
/* harmony import */ var _painel_relatorio_painel_relatorio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./painel-relatorio/painel-relatorio.component */ "KD6Z");
/* harmony import */ var _painel_relatorio_agendamento_painel_relatorio_agendamento_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./painel-relatorio-agendamento/painel-relatorio-agendamento.component */ "hmDm");
/* harmony import */ var _relatorio_atendimento_list_relatorio_atendimento_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./relatorio-atendimento-list/relatorio-atendimento-list.component */ "o9ed");
/* harmony import */ var _relatorio_atendente_list_relatorio_atendente_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./relatorio-atendente-list/relatorio-atendente-list.component */ "e3fH");










class RelatoriosModule {
}
RelatoriosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RelatoriosModule });
RelatoriosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function RelatoriosModule_Factory(t) { return new (t || RelatoriosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_4__["RelatoriosRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RelatoriosModule, { declarations: [_painel_relatorio_painel_relatorio_component__WEBPACK_IMPORTED_MODULE_5__["PainelRelatorioComponent"], _painel_relatorio_agendamento_painel_relatorio_agendamento_component__WEBPACK_IMPORTED_MODULE_6__["PainelRelatorioAgendamentoComponent"], _relatorio_atendimento_list_relatorio_atendimento_list_component__WEBPACK_IMPORTED_MODULE_7__["RelatorioAtendimentoListComponent"], _relatorio_atendente_list_relatorio_atendente_list_component__WEBPACK_IMPORTED_MODULE_8__["RelatorioAtendenteListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_4__["RelatoriosRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RelatoriosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_painel_relatorio_painel_relatorio_component__WEBPACK_IMPORTED_MODULE_5__["PainelRelatorioComponent"], _painel_relatorio_agendamento_painel_relatorio_agendamento_component__WEBPACK_IMPORTED_MODULE_6__["PainelRelatorioAgendamentoComponent"], _relatorio_atendimento_list_relatorio_atendimento_list_component__WEBPACK_IMPORTED_MODULE_7__["RelatorioAtendimentoListComponent"], _relatorio_atendente_list_relatorio_atendente_list_component__WEBPACK_IMPORTED_MODULE_8__["RelatorioAtendenteListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_4__["RelatoriosRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "YFmz":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/relatorios/shared/relatorios.service.ts ***!
  \*****************************************************************/
/*! exports provided: RelatoriosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatoriosService", function() { return RelatoriosService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class RelatoriosService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API}/atendeFacil/api/relatorios`;
    }
    listar() {
        return this.http.get(`${this.API}/unidade`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    buscaAvancadaUnidadeGrade(unidade, dataInicial, dataFinal, servico) {
        const httParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("unidade", unidade)
            .set("dataInicial", dataInicial)
            .set("dataFinal", dataFinal)
            .set("servico", servico);
        const url = this.API + "/grade/unidade?" + httParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    buscaAvancadaServicoGrade(unidade, dataInicial, dataFinal, servico) {
        const httParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("unidade", unidade)
            .set("dataInicial", dataInicial)
            .set("dataFinal", dataFinal)
            .set("servico", servico);
        const url = this.API + "/grade/servico?" + httParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    buscaAvancadaUnidadeAgendamento(unidade, dataInicial, dataFinal, servico, statusAgendamento) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("unidade", unidade)
            .set("dataInicial", dataInicial)
            .set("dataFinal", dataFinal)
            .set("servico", servico)
            .set("statusAgendamento", statusAgendamento);
        const url = this.API + "/agendamento/unidade?" + httpParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    buscaAvancadaServicoAgendamento(unidade, dataInicial, dataFinal, servico, statusAgendamento) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("unidade", unidade)
            .set("dataInicial", dataInicial)
            .set("dataFinal", dataFinal)
            .set("servico", servico)
            .set("statusAgendamento", statusAgendamento);
        const url = this.API + "/agendamento/servico?" + httpParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    buscaAvancadaAgendamentoDiario(unidade, dataInicial, dataFinal, matricula, nome) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("unidade", unidade)
            .set("dataInicial", dataInicial)
            .set("dataFinal", dataFinal)
            .set("matricula", matricula)
            .set("nome", nome);
        const url = this.API + "/atendimento/diario?" + httpParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    somarAtendimento(unidade, dataInicial, dataFinal, matricula, nome) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("unidade", unidade)
            .set("dataInicial", dataInicial)
            .set("dataFinal", dataFinal)
            .set("matricula", matricula)
            .set("nome", nome);
        const url = this.API + "/atendimento/somar?" + httpParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    listarAtendente(unidade) {
        return this.http.get(`${this.API}/atendente/${unidade}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}
RelatoriosService.ɵfac = function RelatoriosService_Factory(t) { return new (t || RelatoriosService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RelatoriosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RelatoriosService, factory: RelatoriosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RelatoriosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "e3fH":
/*!***************************************************************************************************!*\
  !*** ./src/app/modulos/relatorios/relatorio-atendente-list/relatorio-atendente-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RelatorioAtendenteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioAtendenteListComponent", function() { return RelatorioAtendenteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _shared_relatorios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/relatorios.service */ "YFmz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function RelatorioAtendenteListComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelatorioAtendenteListComponent_tr_27_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const atendente_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.pegarDados(atendente_r1.matricula); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const atendente_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](atendente_r1.statusAtendente);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](atendente_r1.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](atendente_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](atendente_r1.guiche);
} }
class RelatorioAtendenteListComponent {
    constructor(globalService, relatorioService) {
        this.globalService = globalService;
        this.relatorioService = relatorioService;
    }
    ngOnInit() {
        this.listarAtendenteUnidade(this.globalService.getUnidade());
    }
    listarAtendenteUnidade(unidade) {
        this.relatorioService.listarAtendente(unidade).subscribe(dados => this.atendentes = dados);
    }
    pegarDados(matricula) {
        this.matricula = matricula;
    }
}
RelatorioAtendenteListComponent.ɵfac = function RelatorioAtendenteListComponent_Factory(t) { return new (t || RelatorioAtendenteListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_relatorios_service__WEBPACK_IMPORTED_MODULE_2__["RelatoriosService"])); };
RelatorioAtendenteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelatorioAtendenteListComponent, selectors: [["app-relatorio-atendente-list"]], decls: 40, vars: 2, consts: [[1, "col-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["id", "tbsd", 1, "table-responsive"], [1, "table", "table-hover"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], ["id", "Modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "TituloModalCentralizado", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "TituloModalCentralizado", 1, "modal-title"], [1, "modal-body", 2, "font-weight", "bold"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "fas", "fa-window-close"], ["data-toggle", "modal", "data-target", "#Modal", 1, "btn", "btn-outline-info", "btn-sm", 3, "click"], [1, "far", "fa-hand-point-right"]], template: function RelatorioAtendenteListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Listagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Listagem de Atendentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Status do Atendente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fun\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Guich\u00EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "A\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RelatorioAtendenteListComponent_tr_27_Template, 12, 4, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Vamos l\u00E1! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00A0Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.atendentes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.matricula, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvcmVsYXRvcmlvcy9yZWxhdG9yaW8tYXRlbmRlbnRlLWxpc3QvcmVsYXRvcmlvLWF0ZW5kZW50ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioAtendenteListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-relatorio-atendente-list',
                templateUrl: './relatorio-atendente-list.component.html',
                styleUrls: ['./relatorio-atendente-list.component.css']
            }]
    }], function () { return [{ type: _shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _shared_relatorios_service__WEBPACK_IMPORTED_MODULE_2__["RelatoriosService"] }]; }, null); })();


/***/ }),

/***/ "hmDm":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modulos/relatorios/painel-relatorio-agendamento/painel-relatorio-agendamento.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PainelRelatorioAgendamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelRelatorioAgendamentoComponent", function() { return PainelRelatorioAgendamentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_relatorios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/relatorios.service */ "YFmz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../unidade/shared/unidade.service */ "rwds");
/* harmony import */ var _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../servico/shared/servico.service */ "kcBg");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function PainelRelatorioAgendamentoComponent_option_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidade_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unidade_r6.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unidade_r6.descricao);
} }
function PainelRelatorioAgendamentoComponent_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const servico_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", servico_r7.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](servico_r7.descricao);
} }
function PainelRelatorioAgendamentoComponent_option_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidade_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unidade_r8.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unidade_r8.descricao);
} }
function PainelRelatorioAgendamentoComponent_option_205_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const servico_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", servico_r9.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](servico_r9.descricao);
} }
function PainelRelatorioAgendamentoComponent_div_256_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", q_r11[0], "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", q_r11[1], "\n        ");
} }
function PainelRelatorioAgendamentoComponent_div_256_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quantitativo por Unidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Unidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PainelRelatorioAgendamentoComponent_div_256_tr_21_Template, 8, 2, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelRelatorioAgendamentoComponent_div_256_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.limparListaUnidade(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00A0Limpar Lista\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.quantitativoUnidade);
} }
function PainelRelatorioAgendamentoComponent_div_258_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", q_r15[0], "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", q_r15[1], "\n        ");
} }
function PainelRelatorioAgendamentoComponent_div_258_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quantitativo por Servi\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Servi\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PainelRelatorioAgendamentoComponent_div_258_tr_21_Template, 8, 2, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelRelatorioAgendamentoComponent_div_258_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.limparListaServico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0Limpar Lista\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.quantitativoServico);
} }
class PainelRelatorioAgendamentoComponent {
    constructor(relatoriosService, fb, unidadeService, servicoService, globalService) {
        this.relatoriosService = relatoriosService;
        this.fb = fb;
        this.unidadeService = unidadeService;
        this.servicoService = servicoService;
        this.globalService = globalService;
    }
    ngOnInit() {
        this.comboBox();
        this.buscaAgendForm = this.fb.group({
            unidade: ['', []],
            dataInicial: ['', []],
            dataFinal: ['', []],
            servico: ['', []],
            statusAgendamento: ['', []]
        });
    }
    comboBox() {
        this.unidadeService.listUnidadeGenerica(this.globalService.getRole(), this.globalService.getUnidadeId()).subscribe(dados => this.unidades = dados);
        this.servicoService.listServico().subscribe(dados => this.servicos = dados);
    }
    pesquisarUnidade() {
        let unidade = this.buscaAgendForm.get('unidade').value;
        let dataI = this.buscaAgendForm.get('dataInicial').value;
        let dataF = this.buscaAgendForm.get('dataFinal').value;
        let servico = this.buscaAgendForm.get('servico').value;
        let statusAgendamento = this.buscaAgendForm.get('statusAgendamento').value;
        this.relatoriosService.buscaAvancadaUnidadeAgendamento(unidade, this.primeiroDia(dataI), this.ultimoDia(dataF), servico, statusAgendamento).subscribe((res) => {
            this.quantitativoUnidade = res;
        });
    }
    limparListaUnidade() {
        this.quantitativoUnidade = null;
    }
    pesquisarServico() {
        let unidade = this.buscaAgendForm.get('unidade').value;
        let dataI = this.buscaAgendForm.get('dataInicial').value;
        let dataF = this.buscaAgendForm.get('dataFinal').value;
        let servico = this.buscaAgendForm.get('servico').value;
        let statusAgendamento = this.buscaAgendForm.get('statusAgendamento').value;
        this.relatoriosService.buscaAvancadaServicoAgendamento(unidade, this.primeiroDia(dataI), this.ultimoDia(dataF), servico, statusAgendamento).subscribe((res) => {
            this.quantitativoServico = res;
        });
    }
    limparListaServico() {
        this.quantitativoServico = null;
    }
    primeiroDia(dataInicial) {
        let monName = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
        let now = new Date();
        if (dataInicial == "") {
            dataInicial = now.getFullYear() + "-" + monName[now.getMonth()] + "-" + "01";
        }
        return dataInicial;
    }
    ultimoDia(dataFinal) {
        let monName = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
        let endDay = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "30");
        let now = new Date();
        if (dataFinal == "") {
            dataFinal = now.getFullYear() + "-" + monName[now.getMonth()] + "-" + endDay[now.getMonth()];
        }
        return dataFinal;
    }
}
PainelRelatorioAgendamentoComponent.ɵfac = function PainelRelatorioAgendamentoComponent_Factory(t) { return new (t || PainelRelatorioAgendamentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_relatorios_service__WEBPACK_IMPORTED_MODULE_1__["RelatoriosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_4__["ServicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"])); };
PainelRelatorioAgendamentoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PainelRelatorioAgendamentoComponent, selectors: [["app-painel-relatorio-agendamento"]], decls: 261, vars: 7, consts: [[1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["type", "button", "routerLink", "/", 1, "btn", "btn-warning", "float-right"], [1, "fas", "fa-backward"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "col-12", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-info", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample2", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-info", "mb-2"], ["id", "collapseExample", 1, "collapse", "mt-2"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "row", "col-12", "ml-1"], ["for", "nDoTermo"], [1, "card-body"], [1, "row", "col-12"], [1, "form-group", "col-md-2"], ["for", "dataIn"], ["id", "dataIn", "type", "date", "formControlName", "dataInicial", 1, "form-control"], ["for", "dataOut"], ["id", "dataOut", "type", "date", "formControlName", "dataFinal", 1, "form-control"], [1, "form-group", "col-md-3"], ["for", "unidade"], ["id", "unidade", "formControlName", "unidade", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "comboServ"], ["id", "comboServ", "formControlName", "servico", 1, "form-control"], ["for", "comboSta"], ["id", "comboSta", "formControlName", "statusAgendamento", 1, "form-control"], ["value", "Em espera"], ["value", "Agendado"], ["value", "Ativado"], ["value", "Cancelado"], ["value", "Reagendado"], ["value", "Finalizado"], [1, "col-2"], [1, "btn", "btn-info", "float-left", 3, "click"], [1, "fas", "fa-search"], ["id", "collapseExample2", 1, "collapse", "mt-2"], ["class", "container mt-5", 4, "ngIf"], [3, "value"], [1, "container", "mt-5"], [2, "font-weight", "bold"], [4, "ngFor", "ngForOf"], [1, "row", "col-12", "mt-1"], [1, "btn", "btn-info", 3, "click"], [1, "text-center"]], template: function PainelRelatorioAgendamentoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Relat\u00F3rios dos Agendamentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        Relat\u00F3rios dos Agendamentos\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0Voltar\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          Pesquisar Unidade\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n          Pesquisar Servi\u00E7o\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Filtro por Unidade:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Data Inicial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Data Final:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Unidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, PainelRelatorioAgendamentoComponent_option_85_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, PainelRelatorioAgendamentoComponent_option_99_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Status Agenadamento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Em espera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Agendado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Ativado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Cancelado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Reagendado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Finalizado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelRelatorioAgendamentoComponent_Template_button_click_137_listener() { return ctx.pesquisarUnidade(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Pesquisar\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Filtro por Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Data Inicial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Data Final:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Unidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, PainelRelatorioAgendamentoComponent_option_191_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](205, PainelRelatorioAgendamentoComponent_option_205_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Status Agenadamento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Em espera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Agendado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Ativado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Cancelado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Reagendado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Finalizado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelRelatorioAgendamentoComponent_Template_button_click_243_listener() { return ctx.pesquisarServico(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Pesquisar\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](256, PainelRelatorioAgendamentoComponent_div_256_Template, 33, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](258, PainelRelatorioAgendamentoComponent_div_258_Template, 33, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.buscaAgendForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quantitativoUnidade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quantitativoServico);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvcmVsYXRvcmlvcy9wYWluZWwtcmVsYXRvcmlvLWFnZW5kYW1lbnRvL3BhaW5lbC1yZWxhdG9yaW8tYWdlbmRhbWVudG8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelRelatorioAgendamentoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-painel-relatorio-agendamento',
                templateUrl: './painel-relatorio-agendamento.component.html',
                styleUrls: ['./painel-relatorio-agendamento.component.css'],
                preserveWhitespaces: true
            }]
    }], function () { return [{ type: _shared_relatorios_service__WEBPACK_IMPORTED_MODULE_1__["RelatoriosService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"] }, { type: _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_4__["ServicoService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "kcBg":
/*!***********************************************************!*\
  !*** ./src/app/modulos/servico/shared/servico.service.ts ***!
  \***********************************************************/
/*! exports provided: ServicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoService", function() { return ServicoService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ServicoService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API}/atendeFacil/api/servico`;
    }
    listServico() {
        return this.http.get(`${this.API}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    listServicoPaginado(page, size) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page).set('size', size);
        return this.http.get(`${this.API}/servicoPage?${params.toString()}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    loadById(id) {
        return this.http.get(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    create(servico) {
        return this.http.post(`${this.API}`, servico).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    update(servico) {
        return this.http.put(`${this.API}/${servico.id}`, servico).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    save(servico) {
        if (servico.id != null) {
            return this.update(servico);
        }
        else {
            return this.create(servico);
        }
    }
    remove(id) {
        return this.http.delete(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}
ServicoService.ɵfac = function ServicoService_Factory(t) { return new (t || ServicoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ServicoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ServicoService, factory: ServicoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ServicoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "o9ed":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modulos/relatorios/relatorio-atendimento-list/relatorio-atendimento-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RelatorioAtendimentoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioAtendimentoListComponent", function() { return RelatorioAtendimentoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../unidade/shared/unidade.service */ "rwds");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _shared_relatorios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/relatorios.service */ "YFmz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RelatorioAtendimentoListComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidade_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unidade_r4.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unidade_r4.descricao);
} }
function RelatorioAtendimentoListComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "USE O FILTRO ACIMA PARA GERAR A LISTA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RelatorioAtendimentoListComponent_div_52_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const atendimento_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, atendimento_r6.realizado, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](atendimento_r6.senha);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](atendimento_r6.detalhamentoServicoDescricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](atendimento_r6.matricula);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](atendimento_r6.nomeServidor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](atendimento_r6.avaliacao);
} }
function RelatorioAtendimentoListComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Realizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Senha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Descri\u00E7\u00E3o do Servi\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Matr\u00EDcula");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Servidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Avalia\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RelatorioAtendimentoListComponent_div_52_tr_17_Template, 14, 9, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.atendimentos);
} }
function RelatorioAtendimentoListComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total de Atendimentos: ", ctx_r3.somatorio, "");
} }
class RelatorioAtendimentoListComponent {
    constructor(fb, unidadeService, globalService, relatorioService) {
        this.fb = fb;
        this.unidadeService = unidadeService;
        this.globalService = globalService;
        this.relatorioService = relatorioService;
    }
    ngOnInit() {
        this.comboBox();
        this.buscarForm = this.fb.group({
            unidade: ['', []],
            dataInicial: ['', []],
            dataFinal: ['', []],
            matricula: ['', []],
            nome: ['', []]
        });
    }
    primeiroDia(dataInicial) {
        let monName = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
        let now = new Date();
        if (dataInicial == "") {
            dataInicial = now.getFullYear() + "-" + monName[now.getMonth()] + "-" + "01";
        }
        return dataInicial;
    }
    ultimoDia(dataFinal) {
        let monName = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
        let endDay = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "30");
        let now = new Date();
        if (dataFinal == "") {
            dataFinal = now.getFullYear() + "-" + monName[now.getMonth()] + "-" + endDay[now.getMonth()];
        }
        return dataFinal;
    }
    comboBox() {
        this.unidadeService.listUnidadeGenerica(this.globalService.getRole(), this.globalService.getUnidadeId()).subscribe(dados => this.unidades = dados);
    }
    pesquisar() {
        let unidade = this.buscarForm.get('unidade').value;
        let dataI = this.buscarForm.get('dataInicial').value;
        let dataF = this.buscarForm.get('dataFinal').value;
        let matricula = this.buscarForm.get('matricula').value;
        let nome = this.buscarForm.get('nome').value;
        this.relatorioService.buscaAvancadaAgendamentoDiario(unidade, dataI, dataF, matricula, nome).subscribe((dados) => {
            this.atendimentos = dados, this.somar(unidade, dataI, dataF, matricula, nome);
        });
    }
    somar(unidade, dataInicial, dataFinal, matricula, nome) {
        this.relatorioService.somarAtendimento(unidade, dataInicial, dataFinal, matricula, nome).subscribe((res) => {
            this.somatorio = res;
        });
    }
}
RelatorioAtendimentoListComponent.ɵfac = function RelatorioAtendimentoListComponent_Factory(t) { return new (t || RelatorioAtendimentoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_2__["UnidadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_relatorios_service__WEBPACK_IMPORTED_MODULE_4__["RelatoriosService"])); };
RelatorioAtendimentoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelatorioAtendimentoListComponent, selectors: [["app-relatorio-atendimento-list"]], decls: 54, vars: 5, consts: [[1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "col-12", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-info", "mb-2"], ["id", "collapseExample", 1, "collapse"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "row", "col-12", "ml-1"], ["for", "nDoTermo"], [1, "card-body"], [1, "row", "col-12"], [1, "form-group", "col-md-2"], ["for", "dataIn"], ["id", "dataIn", "type", "date", "formControlName", "dataInicial", 1, "form-control"], ["for", "dataOut"], ["id", "dataOut", "type", "date", "formControlName", "dataFinal", 1, "form-control"], ["for", "unidade"], ["id", "unidade", "formControlName", "unidade", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "mat"], ["id", "mat", "type", "text", "formControlName", "matricula", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "nom"], ["id", "nom", "type", "text", "formControlName", "nome", 1, "form-control"], [1, "col-2"], [1, "btn", "btn-info", "float-left", 3, "click"], [1, "fas", "fa-search"], ["class", "d-flex justify-content-center mt-5", "style", "font-size: 14pt; font-weight: bold;", 4, "ngIf"], ["id", "tbsd", "class", "table-responsive mb-3", 4, "ngIf"], ["style", "font-size: 14pt; font-weight: bold;", 4, "ngIf"], [3, "value"], [1, "d-flex", "justify-content-center", "mt-5", 2, "font-size", "14pt", "font-weight", "bold"], ["id", "tbsd", 1, "table-responsive", "mb-3"], [1, "table", "table-hover"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], [2, "font-size", "14pt", "font-weight", "bold"]], template: function RelatorioAtendimentoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Listagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Listagem de Atendimento Di\u00E1rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Pesquisar Atendimentos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Filtro para Listagem das Atendimemtos Di\u00E1rios:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Data Inicial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Data Final:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Unidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RelatorioAtendimentoListComponent_option_37_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Matr\u00EDcula:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Nome:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelatorioAtendimentoListComponent_Template_button_click_48_listener() { return ctx.pesquisar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Pesquisar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RelatorioAtendimentoListComponent_div_51_Template, 2, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, RelatorioAtendimentoListComponent_div_52_Template, 18, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RelatorioAtendimentoListComponent_div_53_Template, 2, 1, "div", 36);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.buscarForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.atendimentos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.atendimentos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.atendimentos);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvcmVsYXRvcmlvcy9yZWxhdG9yaW8tYXRlbmRpbWVudG8tbGlzdC9yZWxhdG9yaW8tYXRlbmRpbWVudG8tbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioAtendimentoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-relatorio-atendimento-list',
                templateUrl: './relatorio-atendimento-list.component.html',
                styleUrls: ['./relatorio-atendimento-list.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_2__["UnidadeService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }, { type: _shared_relatorios_service__WEBPACK_IMPORTED_MODULE_4__["RelatoriosService"] }]; }, null); })();


/***/ }),

/***/ "rwds":
/*!***********************************************************!*\
  !*** ./src/app/modulos/unidade/shared/unidade.service.ts ***!
  \***********************************************************/
/*! exports provided: UnidadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeService", function() { return UnidadeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class UnidadeService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API}/atendeFacil/api/unidade`;
    }
    listUnidade() {
        return this.http.get(`${this.API}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    listUnidadeGenerica(role, unidadeId) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set("role", role)
            .set("unidadeId", unidadeId);
        const url = this.API + "/unidadeGenerica?" + httpParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    listUnidadePaginada(page, size) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', page).set('size', size);
        return this.http.get(`${this.API}/unidadePage?${params.toString()}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    loadById(id) {
        return this.http.get(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    create(unidade) {
        return this.http.post(`${this.API}`, unidade).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    update(unidade) {
        return this.http.put(`${this.API}/${unidade.id}`, unidade).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(unidade) {
        if (unidade.id) {
            return this.update(unidade);
        }
        else {
            return this.create(unidade);
        }
    }
    remove(id) {
        return this.http.delete(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
}
UnidadeService.ɵfac = function UnidadeService_Factory(t) { return new (t || UnidadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UnidadeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UnidadeService, factory: UnidadeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UnidadeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modulos-relatorios-relatorios-module.js.map