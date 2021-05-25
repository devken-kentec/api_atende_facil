(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-perfil-atendimento-perfil-atendimento-module"],{

/***/ "/H3X":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modulos/perfil-atendimento/perfil-atendimento-form/perfil-atendimento-form.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PerfilAtendimentoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilAtendimentoFormComponent", function() { return PerfilAtendimentoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _servidor_shared_servidor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servidor/shared/servidor.service */ "sXzJ");
/* harmony import */ var _detalhamento_servico_shared_detalhamento_servico_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../detalhamento-servico/shared/detalhamento-servico.service */ "FpYS");
/* harmony import */ var _shared_perfil_atendimento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/perfil-atendimento.service */ "RJES");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function PerfilAtendimentoFormComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const servidor_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", servidor_r5.matricula);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](servidor_r5.nome);
} }
function PerfilAtendimentoFormComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.resError, " ");
} }
function PerfilAtendimentoFormComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const delServico_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", delServico_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](delServico_r6.descricao);
} }
function PerfilAtendimentoFormComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SELECIONE UM SERVIDOR PARA GERAR A LISTA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilAtendimentoFormComponent_div_47_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilAtendimentoFormComponent_div_47_tr_24_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const perfilAtendimento_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.pegarDados(perfilAtendimento_r8.id, perfilAtendimento_r8.detalhamento); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perfilAtendimento_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", perfilAtendimento_r8.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", perfilAtendimento_r8.servidor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", perfilAtendimento_r8.unidade, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", perfilAtendimento_r8.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", perfilAtendimento_r8.detalhamento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", perfilAtendimento_r8.servico, " ");
} }
function PerfilAtendimentoFormComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acessos para: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Servidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Unidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Detalhamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Servi\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PerfilAtendimentoFormComponent_div_47_tr_24_Template, 16, 6, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.perfilForm.get("matricula").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.perfilAtendimentos);
} }
class PerfilAtendimentoFormComponent {
    constructor(fb, servidorService, detalhamentoServicoService, perfilAtendimentoService, globalService) {
        this.fb = fb;
        this.servidorService = servidorService;
        this.detalhamentoServicoService = detalhamentoServicoService;
        this.perfilAtendimentoService = perfilAtendimentoService;
        this.globalService = globalService;
        this.mostrarMens = false;
        this.resOk = false;
        this.resError = null;
    }
    ngOnInit() {
        this.combobox();
        this.perfilForm = this.fb.group({
            id: [null, []],
            matricula: ['', []],
            servico: ['', []]
        });
    }
    combobox() {
        this.servidorService.listServidor().subscribe(dados => this.servidores = dados);
        this.detalhamentoServicoService.listDetalhamentoServico().subscribe(dados => this.delServicos = dados);
    }
    listarPerfil(matricula) {
        this.perfilAtendimentoService.loadById(matricula).subscribe(dados => { this.perfilAtendimentos = dados, this.resError = null; });
    }
    onSubmit() {
        let matricula = this.perfilForm.get('matricula').value;
        let servico = this.perfilForm.get('servico').value;
        servico.forEach(element => {
            this.perfilAtendimentoService.createPerfil(matricula, element).subscribe(success => { this.listarPerfil(matricula); }, (error) => { this.resError = "O SERVIDOR AINDA NÃO POSSUE ACESSO DEFINIDO!"; });
        });
        this.globalService.saveShow("Salvo com Sucesso!", "Perfil");
    }
    pegarDados(id, detalhamento) {
        this._id = id;
        this._detalhamento = detalhamento;
    }
    onDelete() {
        this.perfilAtendimentoService.remove(this._id).subscribe(success => {
            this.listarPerfil(this.perfilForm.get('matricula').value),
                this.globalService.removeShow("Removido com Sucesso!", this._detalhamento);
        });
    }
}
PerfilAtendimentoFormComponent.ɵfac = function PerfilAtendimentoFormComponent_Factory(t) { return new (t || PerfilAtendimentoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servidor_shared_servidor_service__WEBPACK_IMPORTED_MODULE_2__["ServidorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_detalhamento_servico_shared_detalhamento_servico_service__WEBPACK_IMPORTED_MODULE_3__["DetalhamentoServicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_perfil_atendimento_service__WEBPACK_IMPORTED_MODULE_4__["PerfilAtendimentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"])); };
PerfilAtendimentoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerfilAtendimentoFormComponent, selectors: [["app-perfil-atendimento-form"]], decls: 67, vars: 8, consts: [[1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["type", "button", "routerLink", "/", 1, "btn", "btn-warning", "float-right"], [1, "fas", "fa-backward"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "col-md-6"], [1, "form-group", "col-md-12"], ["for", "servidor"], ["id", "servidor", "formControlName", "matricula", 1, "form-control", 3, "blur"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [2, "font-weight", "bold", "color", "blue"], [2, "color", "red"], ["class", "d-flex justify-content-center mt-2", "style", "font-size: 12pt; font-weight: bold; margin-bottom: -20px;", 4, "ngIf"], ["for", "detalheServico"], ["multiple", "", "id", "detalheServico", "formControlName", "servico", "size", "12", 1, "form-control"], [1, "form-text", "text-muted"], ["class", "d-flex justify-content-center mt-4", "style", "font-size: 14pt; font-weight: bold;", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success", "float-right", "mt-2", 3, "click"], [1, "fas", "fa-save"], ["id", "ModalExclusao", "tabindex", "-1", "role", "dialog", "aria-labelledby", "TituloModalCentralizado", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "TituloModalCentralizado", 1, "modal-title"], [1, "modal-body", 2, "font-weight", "bold"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "fas", "fa-window-close"], [1, "btn", "btn-success", 3, "click"], [3, "value"], [1, "d-flex", "justify-content-center", "mt-2", 2, "font-size", "12pt", "font-weight", "bold", "margin-bottom", "-20px"], ["role", "alert", 1, "alert", "alert-danger"], [1, "d-flex", "justify-content-center", "mt-4", 2, "font-size", "14pt", "font-weight", "bold"], ["id", "tbsd", 1, "table-responsive", 2, "max-height", "430px"], [1, "table", "table-hover"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], ["data-toggle", "modal", "data-target", "#ModalExclusao", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]], template: function PerfilAtendimentoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cadastro do Perfil de Atendimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Perfil de Atendimento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0Voltar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Formul\u00E1rio para Cadastro do Perfil de Atendimento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Servidor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PerfilAtendimentoFormComponent_Template_select_blur_27_listener() { return ctx.listarPerfil(ctx.perfilForm.get("matricula").value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Escolha o servidor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PerfilAtendimentoFormComponent_option_30_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Confira a matr\u00EDcula: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PerfilAtendimentoFormComponent_div_37_Template, 3, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Detalhamento de Servi\u00E7os:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PerfilAtendimentoFormComponent_option_43_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Para multipla sele\u00E7\u00E3o mantenha a tecla Ctrl pressionada.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PerfilAtendimentoFormComponent_div_46_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, PerfilAtendimentoFormComponent_div_47_Template, 25, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilAtendimentoFormComponent_Template_button_click_49_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u00A0Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Vamos l\u00E1! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00A0Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilAtendimentoFormComponent_Template_button_click_64_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \u00A0Confirmar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.perfilForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servidores);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.perfilForm.get("matricula").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resError != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.delServicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.perfilAtendimentos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.perfilAtendimentos != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmar exclus\u00E3o do detalhamento ", ctx._detalhamento, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvcGVyZmlsLWF0ZW5kaW1lbnRvL3BlcmZpbC1hdGVuZGltZW50by1mb3JtL3BlcmZpbC1hdGVuZGltZW50by1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilAtendimentoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-perfil-atendimento-form',
                templateUrl: './perfil-atendimento-form.component.html',
                styleUrls: ['./perfil-atendimento-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _servidor_shared_servidor_service__WEBPACK_IMPORTED_MODULE_2__["ServidorService"] }, { type: _detalhamento_servico_shared_detalhamento_servico_service__WEBPACK_IMPORTED_MODULE_3__["DetalhamentoServicoService"] }, { type: _shared_perfil_atendimento_service__WEBPACK_IMPORTED_MODULE_4__["PerfilAtendimentoService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "RJES":
/*!*********************************************************************************!*\
  !*** ./src/app/modulos/perfil-atendimento/shared/perfil-atendimento.service.ts ***!
  \*********************************************************************************/
/*! exports provided: PerfilAtendimentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilAtendimentoService", function() { return PerfilAtendimentoService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class PerfilAtendimentoService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API}/atendeFacil/api/perfilatendimento`;
    }
    loadById(matricula) {
        return this.http.get(`${this.API}/${matricula}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    createPerfil(matricula, servico) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("matricula", matricula)
            .set("servico", servico);
        const url = this.API + "/gerarPerfil?" + httpParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    remove(id) {
        return this.http.delete(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}
PerfilAtendimentoService.ɵfac = function PerfilAtendimentoService_Factory(t) { return new (t || PerfilAtendimentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PerfilAtendimentoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PerfilAtendimentoService, factory: PerfilAtendimentoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PerfilAtendimentoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "cQSm":
/*!*********************************************************************************!*\
  !*** ./src/app/modulos/perfil-atendimento/perfil-atendimento-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PerfilAtendimentoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilAtendimentoRoutingModule", function() { return PerfilAtendimentoRoutingModule; });
/* harmony import */ var _perfil_atendimento_form_perfil_atendimento_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-atendimento-form/perfil-atendimento-form.component */ "/H3X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _perfil_atendimento_form_perfil_atendimento_form_component__WEBPACK_IMPORTED_MODULE_0__["PerfilAtendimentoFormComponent"] }
];
class PerfilAtendimentoRoutingModule {
}
PerfilAtendimentoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PerfilAtendimentoRoutingModule });
PerfilAtendimentoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PerfilAtendimentoRoutingModule_Factory(t) { return new (t || PerfilAtendimentoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PerfilAtendimentoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PerfilAtendimentoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sxK1":
/*!*************************************************************************!*\
  !*** ./src/app/modulos/perfil-atendimento/perfil-atendimento.module.ts ***!
  \*************************************************************************/
/*! exports provided: PerfilAtendimentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilAtendimentoModule", function() { return PerfilAtendimentoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _perfil_atendimento_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfil-atendimento-routing.module */ "cQSm");
/* harmony import */ var _perfil_atendimento_form_perfil_atendimento_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-atendimento-form/perfil-atendimento-form.component */ "/H3X");







class PerfilAtendimentoModule {
}
PerfilAtendimentoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PerfilAtendimentoModule });
PerfilAtendimentoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PerfilAtendimentoModule_Factory(t) { return new (t || PerfilAtendimentoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _perfil_atendimento_routing_module__WEBPACK_IMPORTED_MODULE_4__["PerfilAtendimentoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerfilAtendimentoModule, { declarations: [_perfil_atendimento_form_perfil_atendimento_form_component__WEBPACK_IMPORTED_MODULE_5__["PerfilAtendimentoFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _perfil_atendimento_routing_module__WEBPACK_IMPORTED_MODULE_4__["PerfilAtendimentoRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilAtendimentoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_perfil_atendimento_form_perfil_atendimento_form_component__WEBPACK_IMPORTED_MODULE_5__["PerfilAtendimentoFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _perfil_atendimento_routing_module__WEBPACK_IMPORTED_MODULE_4__["PerfilAtendimentoRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modulos-perfil-atendimento-perfil-atendimento-module.js.map