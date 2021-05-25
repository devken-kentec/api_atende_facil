(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-detalhamento-servico-detalhamento-servico-module"],{

/***/ "6S1r":
/*!*****************************************************************************!*\
  !*** ./src/app/modulos/detalhamento-servico/detalhamento-servico.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DetalhamentoServicoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhamentoServicoModule", function() { return DetalhamentoServicoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _detalhamento_servico_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detalhamento-servico-routing.module */ "vWha");
/* harmony import */ var _detalhamento_servico_form_detalhamento_servico_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalhamento-servico-form/detalhamento-servico-form.component */ "yKqD");
/* harmony import */ var _detalhamento_servico_list_detalhamento_servico_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalhamento-servico-list/detalhamento-servico-list.component */ "Nwa/");








class DetalhamentoServicoModule {
}
DetalhamentoServicoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetalhamentoServicoModule });
DetalhamentoServicoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetalhamentoServicoModule_Factory(t) { return new (t || DetalhamentoServicoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _detalhamento_servico_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetalhamentoServicoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetalhamentoServicoModule, { declarations: [_detalhamento_servico_form_detalhamento_servico_form_component__WEBPACK_IMPORTED_MODULE_5__["DetalhamentoServicoFormComponent"], _detalhamento_servico_list_detalhamento_servico_list_component__WEBPACK_IMPORTED_MODULE_6__["DetalhamentoServicoListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _detalhamento_servico_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetalhamentoServicoRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalhamentoServicoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_detalhamento_servico_form_detalhamento_servico_form_component__WEBPACK_IMPORTED_MODULE_5__["DetalhamentoServicoFormComponent"], _detalhamento_servico_list_detalhamento_servico_list_component__WEBPACK_IMPORTED_MODULE_6__["DetalhamentoServicoListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _detalhamento_servico_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetalhamentoServicoRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Nwa/":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modulos/detalhamento-servico/detalhamento-servico-list/detalhamento-servico-list.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DetalhamentoServicoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhamentoServicoListComponent", function() { return DetalhamentoServicoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_detalhamento_servico_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/detalhamento-servico.service */ "FpYS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DetalhamentoServicoListComponent_tr_65_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhamentoServicoListComponent_tr_65_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const detalhamentoServico_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onEdit(detalhamentoServico_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhamentoServicoListComponent_tr_65_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const detalhamentoServico_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.pegarDados(detalhamentoServico_r1.id, detalhamentoServico_r1.descricao); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detalhamentoServico_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detalhamentoServico_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detalhamentoServico_r1.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detalhamentoServico_r1.detalhamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detalhamentoServico_r1.servico.sigla);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detalhamentoServico_r1.vinculo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detalhamentoServico_r1.servico.descricao);
} }
class DetalhamentoServicoListComponent {
    constructor(detalhamentoServicoService, router, route, fb) {
        this.detalhamentoServicoService = detalhamentoServicoService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.mostrarMens = false;
        this._id = "";
        this._descricao = "";
        this.totalElements = 0;
        this.totalPages = 0;
        this.pagina = 0;
        this.tamanho = 5;
    }
    ngOnInit() {
        this.listarDetalhamentoServicoPaginado(this.pagina, this.tamanho);
        this.paginaForm = this.fb.group({
            quantPag: [5]
        });
    }
    listDetalhamentoServico() {
        this.detalhamentoServicoService.listDetalhamentoServico().subscribe(dados => this.detalhamentoServicos = dados);
    }
    onEdit(id) {
        this.router.navigate(['editar', id], { relativeTo: this.route });
    }
    pegarDados(id, descricao) {
        this._id = id;
        this._descricao = descricao;
    }
    onDelete() {
    }
    listarDetalhamentoServicoPaginado(page, size) {
        this.detalhamentoServicoService.listDetalhamentoServicoPaginado(page, size).subscribe(response => {
            this.detalhamentoServicos = response.content;
            this.totalElements = response.totalElements;
            this.totalPages = response.totalPages;
        });
    }
    paginaMenor() {
        if (this.pagina <= 0) {
            this.pagina = 0;
        }
        else {
            this.pagina = this.pagina - 1;
        }
        return this.listarDetalhamentoServicoPaginado(this.pagina, this.paginaForm.get('quantPag').value);
    }
    paginaMaior() {
        this.pagina = this.pagina + 1;
        return this.listarDetalhamentoServicoPaginado(this.pagina, this.paginaForm.get('quantPag').value);
    }
    atualizaPagina() {
        this.pagina = 0;
        return this.listarDetalhamentoServicoPaginado(this.pagina, this.paginaForm.get('quantPag').value);
    }
}
DetalhamentoServicoListComponent.ɵfac = function DetalhamentoServicoListComponent_Factory(t) { return new (t || DetalhamentoServicoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_detalhamento_servico_service__WEBPACK_IMPORTED_MODULE_1__["DetalhamentoServicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
DetalhamentoServicoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalhamentoServicoListComponent, selectors: [["app-detalhamento-servico-list"]], decls: 145, vars: 6, consts: [[1, "col-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], [1, "col-md-4"], ["type", "button", "routerLink", "new", 1, "btn", "btn-success", "float-right"], [1, "fas", "fa-user-plus"], ["id", "tbsd", 1, "table-responsive"], [1, "table", "table-hover"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], ["novalidate", "", 1, "needs-validation", 2, "margin-top", "15px", 3, "formGroup"], [1, "row", "col-12", "d-flex", "justify-content-center", "align-items-center", 2, "font-size", "10pt"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Menor", 1, "btn", "btn-info", 3, "click"], [1, "fas", "fa-minus"], [1, "form-group", "col-md-1", 2, "margin-top", "15px", "text-align", "center"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Maior", 1, "btn", "btn-info", 3, "click"], [1, "fas", "fa-plus"], ["id", "pegaTamanho", "name", "quantPag", "formControlName", "quantPag", 1, "form-control", 3, "change"], ["value", "5"], ["value", "10"], ["value", "25"], ["value", "50"], [1, "float-right"], ["id", "ModalExclusao", "tabindex", "-1", "role", "dialog", "aria-labelledby", "TituloModalCentralizado", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "TituloModalCentralizado", 1, "modal-title"], [1, "modal-body", 2, "font-weight", "bold"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "fas", "fa-window-close"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-save"], [1, "btn", "btn-outline-info", "btn-sm", 3, "click"], [1, "far", "fa-edit"], ["data-toggle", "modal", "data-target", "#ModalExclusao", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]], template: function DetalhamentoServicoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Listagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n          Listagem de Detalhamento de Servi\u00E7os\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Cadastrar Detalhamento\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n     ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Detalhamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sigla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "V\u00EDnculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "A\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, DetalhamentoServicoListComponent_tr_65_Template, 30, 6, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhamentoServicoListComponent_Template_button_click_74_listener() { return ctx.paginaMenor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Anterior\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhamentoServicoListComponent_Template_button_click_83_listener() { return ctx.paginaMaior(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Pr\u00F3ximo\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DetalhamentoServicoListComponent_Template_select_change_90_listener() { return ctx.atualizaPagina(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n            Vamos l\u00E1!\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u00A0Fechar\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhamentoServicoListComponent_Template_button_click_134_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " \u00A0Excluir\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\n\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detalhamentoServicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.paginaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("P\u00E1g. ", ctx.pagina + 1, "  de ", ctx.totalPages, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total de registro: ", ctx.totalElements, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          Deseja excluir o registro de ", ctx._descricao, "?\n        ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvZGV0YWxoYW1lbnRvLXNlcnZpY28vZGV0YWxoYW1lbnRvLXNlcnZpY28tbGlzdC9kZXRhbGhhbWVudG8tc2Vydmljby1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalhamentoServicoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detalhamento-servico-list',
                templateUrl: './detalhamento-servico-list.component.html',
                styleUrls: ['./detalhamento-servico-list.component.css'],
                preserveWhitespaces: true
            }]
    }], function () { return [{ type: _shared_detalhamento_servico_service__WEBPACK_IMPORTED_MODULE_1__["DetalhamentoServicoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


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

/***/ "vWha":
/*!*************************************************************************************!*\
  !*** ./src/app/modulos/detalhamento-servico/detalhamento-servico-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DetalhamentoServicoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhamentoServicoRoutingModule", function() { return DetalhamentoServicoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalhamento_servico_form_detalhamento_servico_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhamento-servico-form/detalhamento-servico-form.component */ "yKqD");
/* harmony import */ var _detalhamento_servico_list_detalhamento_servico_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalhamento-servico-list/detalhamento-servico-list.component */ "Nwa/");






const routes = [
    { path: '', component: _detalhamento_servico_list_detalhamento_servico_list_component__WEBPACK_IMPORTED_MODULE_3__["DetalhamentoServicoListComponent"] },
    { path: 'new', component: _detalhamento_servico_form_detalhamento_servico_form_component__WEBPACK_IMPORTED_MODULE_2__["DetalhamentoServicoFormComponent"] },
    { path: 'editar/:id', component: _detalhamento_servico_form_detalhamento_servico_form_component__WEBPACK_IMPORTED_MODULE_2__["DetalhamentoServicoFormComponent"] }
];
class DetalhamentoServicoRoutingModule {
}
DetalhamentoServicoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetalhamentoServicoRoutingModule });
DetalhamentoServicoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetalhamentoServicoRoutingModule_Factory(t) { return new (t || DetalhamentoServicoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetalhamentoServicoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalhamentoServicoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yKqD":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modulos/detalhamento-servico/detalhamento-servico-form/detalhamento-servico-form.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DetalhamentoServicoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhamentoServicoFormComponent", function() { return DetalhamentoServicoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_detalhamento_servico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/detalhamento-servico.service */ "FpYS");
/* harmony import */ var _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servico/shared/servico.service */ "kcBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function DetalhamentoServicoFormComponent_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const servico_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", servico_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](servico_r1.descricao);
} }
class DetalhamentoServicoFormComponent {
    constructor(fb, detalhamentoServicoService, servicoService, route, globalService) {
        this.fb = fb;
        this.detalhamentoServicoService = detalhamentoServicoService;
        this.servicoService = servicoService;
        this.route = route;
        this.globalService = globalService;
        this.mostrarMens = false;
    }
    ngOnInit() {
        this.comboBox();
        const routeParans = this.route.snapshot.params;
        if (routeParans.id != null) {
            this.detalhamentoServicoService.loadById(routeParans.id).subscribe((detServico) => {
                this.updateDetServicoForm(detServico);
            });
        }
        this.detalhamentoServicoForm = this.fb.group({
            id: [null, []],
            descricao: ['', []],
            detalhamento: ['', []],
            vinculo: ['', []],
            servico: this.fb.group({
                id: [null, []],
                descricao: ['', []]
            })
        });
    }
    comboBox() {
        this.servicoService.listServico().subscribe(dados => this.servicos = dados);
    }
    updateDetServicoForm(detServico) {
        this.detalhamentoServicoForm.patchValue(detServico);
    }
    onSumit() {
        if (this.detalhamentoServicoForm.valid) {
            this.detalhamentoServicoService.save(this.detalhamentoServicoForm.value).subscribe(success => { this.globalService.saveShow('Salvo com Sucesso!', 'Detalhamento de Serviço'); });
        }
        this.detalhamentoServicoForm.reset();
    }
}
DetalhamentoServicoFormComponent.ɵfac = function DetalhamentoServicoFormComponent_Factory(t) { return new (t || DetalhamentoServicoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_detalhamento_servico_service__WEBPACK_IMPORTED_MODULE_2__["DetalhamentoServicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_3__["ServicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"])); };
DetalhamentoServicoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalhamentoServicoFormComponent, selectors: [["app-detalhamento-servico-form"]], decls: 60, vars: 2, consts: [[1, "col-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["routerLink", "/detalhamentoservico"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["type", "button", "routerLink", "/detalhamentoservico", 1, "btn", "btn-warning", "float-right"], [1, "fas", "fa-backward"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "form-group", "col-md-1"], ["for", "id"], ["type", "text", "id", "id", "formControlName", "id", "readonly", "", 1, "form-control"], [1, "form-group", "col-md-3"], ["for", "descricao"], ["type", "text", "id", "descricao", "formControlName", "descricao", 1, "form-control"], [1, "form-group", "col-md-5"], ["for", "det"], ["type", "text", "id", "del", "formControlName", "detalhamento", 1, "form-control"], ["formGroupName", "servico"], ["for", "comboServ"], ["id", "comboServ", "formControlName", "id", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "vinculo"], ["id", "vinculo", "formControlName", "vinculo", 1, "form-control"], ["value", "", "selected", ""], ["value", "Geral"], ["value", "Perfil"], ["value", "Atendimento"], ["type", "submit", 1, "btn", "btn-success", "float-right", "mt-2", 3, "click"], [1, "fas", "fa-save"], [3, "value"]], template: function DetalhamentoServicoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Listagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Detalhamento Servico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cadastro de Detalhamento de Servi\u00E7o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0Voltar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Formul\u00E1rio para Cadastro de Detalhamento de Servi\u00E7o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Descri\u00E7\u00E3o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Detalhamento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DetalhamentoServicoFormComponent_option_42_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "V\u00EDnculo do detalhamento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Escolha o v\u00EDnculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "GERAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "PERFIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "ATENDIMENTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhamentoServicoFormComponent_Template_button_click_57_listener() { return ctx.onSumit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u00A0Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.detalhamentoServicoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicos);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvZGV0YWxoYW1lbnRvLXNlcnZpY28vZGV0YWxoYW1lbnRvLXNlcnZpY28tZm9ybS9kZXRhbGhhbWVudG8tc2Vydmljby1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalhamentoServicoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detalhamento-servico-form',
                templateUrl: './detalhamento-servico-form.component.html',
                styleUrls: ['./detalhamento-servico-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_detalhamento_servico_service__WEBPACK_IMPORTED_MODULE_2__["DetalhamentoServicoService"] }, { type: _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_3__["ServicoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modulos-detalhamento-servico-detalhamento-servico-module.js.map