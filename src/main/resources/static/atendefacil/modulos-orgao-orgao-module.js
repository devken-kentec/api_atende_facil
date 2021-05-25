(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-orgao-orgao-module"],{

/***/ "3aL/":
/*!******************************************************************!*\
  !*** ./src/app/modulos/orgao/orgao-form/orgao-form.component.ts ***!
  \******************************************************************/
/*! exports provided: OrgaoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgaoFormComponent", function() { return OrgaoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_orgao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/orgao.service */ "kk5o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");






class OrgaoFormComponent {
    constructor(fb, orgaoService, route, globalService) {
        this.fb = fb;
        this.orgaoService = orgaoService;
        this.route = route;
        this.globalService = globalService;
        this.mostrarMens = false;
    }
    ngOnInit() {
        const routeParans = this.route.snapshot.params;
        if (routeParans.id != null) {
            this.orgaoService.loadById(routeParans.id).subscribe((orgao) => {
                this.updateOrgaoForm(orgao);
            });
        }
        this.orgaoForm = this.fb.group({
            id: [null, []],
            sigla: ['', []],
            codigo: ['', []],
            descricao: ['', []]
        });
    }
    updateOrgaoForm(orgao) {
        this.orgaoForm.patchValue(orgao);
    }
    onSumit() {
        if (this.orgaoForm.valid) {
            this.orgaoService.save(this.orgaoForm.value).subscribe(success => { this.globalService.saveShow('Salvo com Sucesso!', 'Orgão'); });
        }
        this.orgaoForm.reset();
    }
}
OrgaoFormComponent.ɵfac = function OrgaoFormComponent_Factory(t) { return new (t || OrgaoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_orgao_service__WEBPACK_IMPORTED_MODULE_2__["OrgaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
OrgaoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrgaoFormComponent, selectors: [["app-orgao-form"]], decls: 45, vars: 1, consts: [[1, "col-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["routerLink", "/orgao"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["type", "button", "routerLink", "/orgao", 1, "btn", "btn-warning", "float-right"], [1, "fas", "fa-backward"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "form-group", "col-md-1"], ["for", "id"], ["type", "text", "id", "id", "formControlName", "id", "readonly", "", 1, "form-control"], ["for", "codigo"], ["type", "text", "id", "codigo", "formControlName", "codigo", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "descricao"], ["type", "text", "id", "descricao", "formControlName", "descricao", 1, "form-control"], [1, "form-group", "col-md-3"], ["for", "sigla"], ["type", "text", "id", "sigla", "formControlName", "sigla", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "float-right", "mt-2", 3, "click"], [1, "fas", "fa-save"]], template: function OrgaoFormComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Org\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cadastro dos Org\u00E3os ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Formul\u00E1rio para Cadastro de Org\u00E3os ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "C\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Descri\u00E7\u00E3o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sigla:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgaoFormComponent_Template_button_click_42_listener() { return ctx.onSumit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u00A0Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.orgaoForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3Mvb3JnYW8vb3JnYW8tZm9ybS9vcmdhby1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgaoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orgao-form',
                templateUrl: './orgao-form.component.html',
                styleUrls: ['./orgao-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_orgao_service__WEBPACK_IMPORTED_MODULE_2__["OrgaoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "9Jtv":
/*!***********************************************!*\
  !*** ./src/app/modulos/orgao/orgao.module.ts ***!
  \***********************************************/
/*! exports provided: OrgaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgaoModule", function() { return OrgaoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _orgao_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orgao-routing.module */ "GXZb");
/* harmony import */ var _orgao_form_orgao_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orgao-form/orgao-form.component */ "3aL/");
/* harmony import */ var _orgao_list_orgao_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orgao-list/orgao-list.component */ "H2uA");








class OrgaoModule {
}
OrgaoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrgaoModule });
OrgaoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrgaoModule_Factory(t) { return new (t || OrgaoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _orgao_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrgaoRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrgaoModule, { declarations: [_orgao_form_orgao_form_component__WEBPACK_IMPORTED_MODULE_5__["OrgaoFormComponent"], _orgao_list_orgao_list_component__WEBPACK_IMPORTED_MODULE_6__["OrgaoListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _orgao_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrgaoRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgaoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_orgao_form_orgao_form_component__WEBPACK_IMPORTED_MODULE_5__["OrgaoFormComponent"], _orgao_list_orgao_list_component__WEBPACK_IMPORTED_MODULE_6__["OrgaoListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _orgao_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrgaoRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "GXZb":
/*!*******************************************************!*\
  !*** ./src/app/modulos/orgao/orgao-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrgaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgaoRoutingModule", function() { return OrgaoRoutingModule; });
/* harmony import */ var _orgao_list_orgao_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orgao-list/orgao-list.component */ "H2uA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orgao_form_orgao_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orgao-form/orgao-form.component */ "3aL/");






const routes = [
    { path: '', component: _orgao_list_orgao_list_component__WEBPACK_IMPORTED_MODULE_0__["OrgaoListComponent"] },
    { path: 'new', component: _orgao_form_orgao_form_component__WEBPACK_IMPORTED_MODULE_3__["OrgaoFormComponent"] },
    { path: 'editar/:id', component: _orgao_form_orgao_form_component__WEBPACK_IMPORTED_MODULE_3__["OrgaoFormComponent"] }
];
class OrgaoRoutingModule {
}
OrgaoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrgaoRoutingModule });
OrgaoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OrgaoRoutingModule_Factory(t) { return new (t || OrgaoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrgaoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrgaoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "H2uA":
/*!******************************************************************!*\
  !*** ./src/app/modulos/orgao/orgao-list/orgao-list.component.ts ***!
  \******************************************************************/
/*! exports provided: OrgaoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgaoListComponent", function() { return OrgaoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_orgao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/orgao.service */ "kk5o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function OrgaoListComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgaoListComponent_tr_59_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const orgao_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onEdit(orgao_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgaoListComponent_tr_59_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const orgao_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.pegaDados(orgao_r1.id, orgao_r1.descricao); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orgao_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orgao_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                ", orgao_r1.codigo, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                ", orgao_r1.sigla, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                ", orgao_r1.descricao, "\n            ");
} }
class OrgaoListComponent {
    constructor(orgaoService, router, route, globalService, fb) {
        this.orgaoService = orgaoService;
        this.router = router;
        this.route = route;
        this.globalService = globalService;
        this.fb = fb;
        this._id = "";
        this._descricao = "";
        this.mostrarMens = false;
        this.totalElements = 0;
        this.totalPages = 0;
        this.pagina = 0;
        this.tamanho = 5;
    }
    ngOnInit() {
        this.listarOrgaoPaginada(this.pagina, this.tamanho);
        this.paginaForm = this.fb.group({
            quantPag: [5]
        });
    }
    listOrgao() {
        this.orgaoService.listOrgao().subscribe(dados => this.orgaos = dados);
    }
    listarOrgaoPaginada(page, size) {
        this.orgaoService.listOrgaoPaginada(page, size).subscribe(response => {
            this.orgaos = response.content,
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
        return this.listarOrgaoPaginada(this.pagina, this.paginaForm.get('quantPag').value);
    }
    paginaMaior() {
        this.pagina = this.pagina + 1;
        return this.listarOrgaoPaginada(this.pagina, this.paginaForm.get('quantPag').value);
    }
    atualizaPagina() {
        this.pagina = 0;
        return this.listarOrgaoPaginada(this.pagina, this.paginaForm.get('quantPag').value);
    }
    onEdit(id) {
        this.router.navigate(['editar', id], { relativeTo: this.route });
    }
    pegaDados(id, descricao) {
        this._id = id;
        this._descricao = descricao;
    }
    onDelete() {
        this.orgaoService.remove(this._id).subscribe(success => { this.globalService.removeShow('Excluido com Sucesso!', 'Orgão'), this.listOrgao(); });
    }
}
OrgaoListComponent.ɵfac = function OrgaoListComponent_Factory(t) { return new (t || OrgaoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_orgao_service__WEBPACK_IMPORTED_MODULE_1__["OrgaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
OrgaoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrgaoListComponent, selectors: [["app-orgao-list"]], decls: 139, vars: 6, consts: [[1, "col-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["type", "button", "routerLink", "new", 1, "btn", "btn-success", "float-right"], [1, "fas", "fa-user-plus"], ["id", "tbsd", 1, "table-responsive"], [1, "table", "table-hover"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], ["novalidate", "", 1, "needs-validation", 2, "margin-top", "15px", 3, "formGroup"], [1, "row", "col-12", "d-flex", "justify-content-center", "align-items-center", 2, "font-size", "10pt"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Menor", 1, "btn", "btn-info", 3, "click"], [1, "fas", "fa-minus"], [1, "form-group", "col-md-1", 2, "margin-top", "15px", "text-align", "center"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Maior", 1, "btn", "btn-info", 3, "click"], [1, "fas", "fa-plus"], ["id", "pegaTamanho", "name", "quantPag", "formControlName", "quantPag", 1, "form-control", 3, "change"], ["value", "5"], ["value", "10"], ["value", "25"], ["value", "50"], [1, "float-right"], ["id", "ModalExclusao", "tabindex", "-1", "role", "dialog", "aria-labelledby", "TituloModalCentralizado", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "TituloModalCentralizado", 1, "modal-title"], [1, "modal-body", 2, "font-weight", "bold"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "fas", "fa-window-close"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-save"], [1, "btn", "btn-outline-info", "btn-sm", 3, "click"], [1, "far", "fa-edit"], ["data-toggle", "modal", "data-target", "#ModalExclusao", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "far", "fa-trash-alt"]], template: function OrgaoListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n          Listagem de Org\u00E3os\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Cadastrar Org\u00E3o\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n     ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Codigo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sigla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "A\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, OrgaoListComponent_tr_59_Template, 26, 4, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n     ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n     ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgaoListComponent_Template_button_click_68_listener() { return ctx.paginaMenor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Anterior\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgaoListComponent_Template_button_click_77_listener() { return ctx.paginaMaior(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Pr\u00F3ximo\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrgaoListComponent_Template_select_change_84_listener() { return ctx.atualizaPagina(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n            Vamos l\u00E1!\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u00A0Fechar\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgaoListComponent_Template_button_click_128_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " \u00A0Excluir\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\n\n\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orgaos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.paginaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("P\u00E1g. ", ctx.pagina + 1, "  de ", ctx.totalPages, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total de registro: ", ctx.totalElements, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            Deseja excluir o registro de ", ctx._descricao, " ?\n        ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3Mvb3JnYW8vb3JnYW8tbGlzdC9vcmdhby1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgaoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orgao-list',
                templateUrl: './orgao-list.component.html',
                styleUrls: ['./orgao-list.component.css'],
                preserveWhitespaces: true
            }]
    }], function () { return [{ type: _shared_orgao_service__WEBPACK_IMPORTED_MODULE_1__["OrgaoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modulos-orgao-orgao-module.js.map