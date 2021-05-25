(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-grade-grade-module"],{

/***/ "6k1/":
/*!**************************************************************************************!*\
  !*** ./src/app/modulos/grade/grade-liberacao-form/grade-liberacao-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GradeLiberacaoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeLiberacaoFormComponent", function() { return GradeLiberacaoFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_grade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/grade.service */ "aSUU");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class GradeLiberacaoFormComponent {
    constructor(fb, gradeService, globalService) {
        this.fb = fb;
        this.gradeService = gradeService;
        this.globalService = globalService;
    }
    ngOnInit() {
        this.gradeLibForm = this.fb.group({
            gradeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    liberarGrade() {
        if (this.gradeLibForm.valid) {
            this.gradeService.liberarGrade(this.gradeLibForm.get("gradeId").value).subscribe(success => { this.globalService.saveShow("Liberada com Sucesso!", "Grade"); }, erro => { this.globalService.alertShow("Alguma coisa errada!", "OPS!"); });
        }
    }
}
GradeLiberacaoFormComponent.ɵfac = function GradeLiberacaoFormComponent_Factory(t) { return new (t || GradeLiberacaoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"])); };
GradeLiberacaoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GradeLiberacaoFormComponent, selectors: [["app-grade-liberacao-form"]], decls: 48, vars: 3, consts: [[1, "col-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "col-md-8", "mb-2"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "row", "col-12", "ml-1"], ["for", "nDoTermo"], [1, "card-body"], [1, "row", "col-12"], [1, "form-group", "col-md-3"], ["for", "dataIn"], ["id", "dataIn", "type", "text", "formControlName", "gradeId", 1, "form-control"], [1, "col-2"], ["data-toggle", "modal", "data-target", "#ModalExclusao", 1, "btn", "btn-info", "float-left", 3, "disabled"], [1, "fas", "fa-trash-alt"], ["id", "ModalExclusao", "tabindex", "-1", "role", "dialog", "aria-labelledby", "TituloModalCentralizado", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "TituloModalCentralizado", 1, "modal-title"], [1, "modal-body", 2, "font-weight", "bold", "font-size", "12pt"], [2, "color", "blue"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "fas", "fa-window-close"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "far", "fa-calendar-alt"]], template: function GradeLiberacaoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Libera\u00E7\u00E3o de Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Libera\u00E7\u00E3o de Grade de Agendamento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Filtro para Libera\u00E7\u00E3o por Grade:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Identificador da Grade:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Liberar Grade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Vamos l\u00E1! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Numero da Grade n.\u00BA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u00A0Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GradeLiberacaoFormComponent_Template_button_click_45_listener() { return ctx.liberarGrade(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00A0Liberar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.gradeLibForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.gradeLibForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.gradeLibForm.get("gradeId").value, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvZ3JhZGUvZ3JhZGUtbGliZXJhY2FvLWZvcm0vZ3JhZGUtbGliZXJhY2FvLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GradeLiberacaoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-grade-liberacao-form',
                templateUrl: './grade-liberacao-form.component.html',
                styleUrls: ['./grade-liberacao-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _shared_grade_service__WEBPACK_IMPORTED_MODULE_2__["GradeService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "EMLt":
/*!******************************************************************!*\
  !*** ./src/app/modulos/grade/grade-list/grade-list.component.ts ***!
  \******************************************************************/
/*! exports provided: GradeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeListComponent", function() { return GradeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_grade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/grade.service */ "aSUU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../unidade/shared/unidade.service */ "rwds");
/* harmony import */ var _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../servico/shared/servico.service */ "kcBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function GradeListComponent_option_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidade_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unidade_r4.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unidade_r4.descricao);
} }
function GradeListComponent_option_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const servico_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", servico_r5.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](servico_r5.descricao);
} }
function GradeListComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "USE O FILTRO ACIMA PARA GERAR A LISTA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeListComponent_div_119_tr_45_button_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeListComponent_div_119_tr_45_button_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeListComponent_div_119_tr_45_button_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeListComponent_div_119_tr_45_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GradeListComponent_div_119_tr_45_button_33_Template, 4, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GradeListComponent_div_119_tr_45_button_35_Template, 4, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, GradeListComponent_div_119_tr_45_button_37_Template, 4, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeListComponent_div_119_tr_45_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const grade_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onEdit(grade_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeListComponent_div_119_tr_45_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const grade_r7 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.gerarAgendamento(grade_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grade_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 13, grade_r7.calendario.dia, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r7.horaInicial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r7.horaFinal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r7.intervalo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r7.correcaoHora);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r7.quantidade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r7.unidade.sigla);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grade_r7.servico.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", grade_r7.configurado == "c");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", grade_r7.gerado == "n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", grade_r7.gerado == "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", grade_r7.gerado == "g");
} }
function GradeListComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Horario Inicial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Horario Final");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Intervalo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Corre\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Unidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Servi\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Situa\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, GradeListComponent_div_119_tr_45_Template, 51, 16, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.grades);
} }
class GradeListComponent {
    constructor(gradeService, fb, unidadeService, servicoService, router, route, globalService) {
        this.gradeService = gradeService;
        this.fb = fb;
        this.unidadeService = unidadeService;
        this.servicoService = servicoService;
        this.router = router;
        this.route = route;
        this.globalService = globalService;
        this.mostrarMens = false;
        this._id = "";
        this._descricao = "";
    }
    ngOnInit() {
        this.comboBox();
        this.buscaForm = this.fb.group({
            unidade: ['', []],
            dataInicial: ['', []],
            dataFinal: ['', []],
            servico: ['', []]
        });
    }
    listGrade() {
        this.gradeService.listGrade().subscribe(dados => this.grades = dados);
    }
    pesquisar() {
        let unidade = this.buscaForm.get('unidade').value;
        let dataI = this.buscaForm.get('dataInicial').value;
        let dataF = this.buscaForm.get('dataFinal').value;
        let servico = this.buscaForm.get('servico').value;
        this.gradeService.buscaAvancada(unidade, this.primeiroDia(dataI), this.ultimoDia(dataF), servico).subscribe(res => this.grades = res);
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
        this.servicoService.listServico().subscribe(dados => this.servicos = dados);
    }
    onEdit(id) {
        this.router.navigate(['editar', id], { relativeTo: this.route });
    }
    gerarAgendamento(id) {
        this.router.navigate(['agendamento/new', id]);
    }
}
GradeListComponent.ɵfac = function GradeListComponent_Factory(t) { return new (t || GradeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_grade_service__WEBPACK_IMPORTED_MODULE_1__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_4__["ServicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"])); };
GradeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeListComponent, selectors: [["app-grade-list"]], decls: 122, vars: 5, consts: [[1, "col-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["type", "button", "routerLink", "new", 1, "btn", "btn-success", "float-right"], [1, "fas", "fa-user-plus"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "col-12", "mb-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-info", "mb-2"], ["id", "collapseExample", 1, "collapse"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "row", "col-12", "ml-1"], ["for", "nDoTermo"], [1, "card-body"], [1, "row", "col-12"], [1, "form-group", "col-md-2"], ["for", "dataIn"], ["id", "dataIn", "type", "date", "formControlName", "dataInicial", 1, "form-control"], ["for", "dataOut"], ["id", "dataOut", "type", "date", "formControlName", "dataFinal", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "unidade"], ["id", "unidade", "formControlName", "unidade", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "comboServ"], ["id", "comboServ", "formControlName", "servico", 1, "form-control"], [1, "col-2"], [1, "btn", "btn-info", "float-left", 3, "click"], [1, "fas", "fa-search"], ["class", "d-flex justify-content-center mt-5", "style", "font-size: 14pt; font-weight: bold;", 4, "ngIf"], ["id", "tbsd", "class", "table-responsive", 4, "ngIf"], [3, "value"], [1, "d-flex", "justify-content-center", "mt-5", 2, "font-size", "14pt", "font-weight", "bold"], ["id", "tbsd", 1, "table-responsive"], [1, "table", "table-hover"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Grade configurada!", "class", "btn btn-info", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", "data-toggle", "tooltip", "data-placement", "top", "title", "Vagas n\u00E3o geradas!", 4, "ngIf"], ["type", "button", "class", "btn btn-success", "data-toggle", "tooltip", "data-placement", "top", "title", "Vagas geradas!", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Editar grade de atendimento?", 1, "btn", "btn-outline-info", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-edit"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Gerar vagas de agendamento?", 1, "btn", "btn-outline-success", "btn-sm", 3, "click"], [1, "fas", "fa-list-ol"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Grade configurada!", 1, "btn", "btn-info"], [1, "fas", "fa-check"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Vagas n\u00E3o geradas!", 1, "btn", "btn-danger"], [1, "far", "fa-hourglass"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Vagas geradas!", 1, "btn", "btn-success"], [1, "fas", "fa-clipboard-check"]], template: function GradeListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n          Listagem da Grade de Atendimento\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Cadastrar Grade\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          Pesquisar Grade de Atendimento\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n         ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Filtro para Listagem das Grades de Atendimento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Data Inicial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Data Final:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Unidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, GradeListComponent_option_82_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Nenhum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, GradeListComponent_option_96_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeListComponent_Template_button_click_104_listener() { return ctx.pesquisar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Pesquisar\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, GradeListComponent_div_117_Template, 2, 0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n     ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, GradeListComponent_div_119_Template, 49, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.buscaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.grades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grades);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvZ3JhZGUvZ3JhZGUtbGlzdC9ncmFkZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grade-list',
                templateUrl: './grade-list.component.html',
                styleUrls: ['./grade-list.component.css'],
                preserveWhitespaces: true
            }]
    }], function () { return [{ type: _shared_grade_service__WEBPACK_IMPORTED_MODULE_1__["GradeService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"] }, { type: _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_4__["ServicoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "GWOC":
/*!*******************************************************!*\
  !*** ./src/app/modulos/grade/grade-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GradeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeRoutingModule", function() { return GradeRoutingModule; });
/* harmony import */ var _grade_multi_form_grade_multi_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grade-multi-form/grade-multi-form.component */ "u+Hn");
/* harmony import */ var _grade_liberacao_form_grade_liberacao_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grade-liberacao-form/grade-liberacao-form.component */ "6k1/");
/* harmony import */ var _grade_list_grade_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grade-list/grade-list.component */ "EMLt");
/* harmony import */ var _grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grade-form/grade-form.component */ "fBEO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agendamento_agendamento_form_agendamento_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../agendamento/agendamento-form/agendamento-form.component */ "/jYa");









const routes = [
    { path: '', component: _grade_list_grade_list_component__WEBPACK_IMPORTED_MODULE_2__["GradeListComponent"] },
    { path: 'new', component: _grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_3__["GradeFormComponent"] },
    { path: 'editar/:id', component: _grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_3__["GradeFormComponent"] },
    { path: 'agendamento/new', component: _agendamento_agendamento_form_agendamento_form_component__WEBPACK_IMPORTED_MODULE_6__["AgendamentoFormComponent"] },
    { path: 'liberargrade', component: _grade_liberacao_form_grade_liberacao_form_component__WEBPACK_IMPORTED_MODULE_1__["GradeLiberacaoFormComponent"] },
    { path: 'grade/multi', component: _grade_multi_form_grade_multi_form_component__WEBPACK_IMPORTED_MODULE_0__["GradeMultiFormComponent"] }
];
class GradeRoutingModule {
}
GradeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GradeRoutingModule });
GradeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function GradeRoutingModule_Factory(t) { return new (t || GradeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GradeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GradeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fBEO":
/*!******************************************************************!*\
  !*** ./src/app/modulos/grade/grade-form/grade-form.component.ts ***!
  \******************************************************************/
/*! exports provided: GradeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeFormComponent", function() { return GradeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../servico/shared/servico.service */ "kcBg");
/* harmony import */ var _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../unidade/shared/unidade.service */ "rwds");
/* harmony import */ var _calendario_shared_calendario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../calendario/shared/calendario.service */ "3aJx");
/* harmony import */ var _shared_grade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/grade.service */ "aSUU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function GradeFormComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const calendario_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", calendario_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formatarDate(calendario_r3.dia) + " - " + calendario_r3.observacao);
} }
function GradeFormComponent_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidade_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unidade_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unidade_r4.descricao);
} }
function GradeFormComponent_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const servico_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", servico_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](servico_r5.descricao);
} }
class GradeFormComponent {
    constructor(fb, servicoService, unidadeService, calendarioService, gradeService, route, globalService) {
        this.fb = fb;
        this.servicoService = servicoService;
        this.unidadeService = unidadeService;
        this.calendarioService = calendarioService;
        this.gradeService = gradeService;
        this.route = route;
        this.globalService = globalService;
        this.mostrarMens = false;
    }
    ngOnInit() {
        this.comboBox();
        const routeParans = this.route.snapshot.params;
        if (routeParans.id != null) {
            this.gradeService.loadById(routeParans.id).subscribe((grade) => {
                this.updateGradeForm(grade),
                    this.calcula();
            });
        }
        this.gradeForm = this.fb.group({
            id: [null, []],
            calendario: this.fb.group({
                id: ['', []],
                dia: ['', []]
            }),
            horaInicial: ['', []],
            horaFinal: ['', []],
            intervalo: ['', []],
            correcaoHora: ['', []],
            configurado: ['', []],
            gerado: ['', []],
            unidade: this.fb.group({
                id: ['', []],
                descricao: ['', []]
            }),
            servico: this.fb.group({
                id: ['', []],
                descricao: ['', []]
            }),
            quantidade: ['', []]
        });
    }
    calcula() {
        //ajustando horario inicial
        let hora1 = this.gradeForm.get('horaInicial').value;
        let hora2 = this.gradeForm.get('horaFinal').value;
        let inter = this.gradeForm.get('intervalo').value;
        let horaIni1 = hora1.substring(0, 2);
        let horaFin1 = hora1.substring(3, 5);
        let horaIni1Min = parseInt(horaIni1) * 60;
        let horaFin1Int = parseInt(horaFin1);
        let totInMin = horaIni1Min + horaFin1Int;
        //console.log(totInMin);
        let horaIni2 = hora2.substring(0, 2);
        let horaFin2 = hora2.substring(3, 5);
        let horaIni2Min = parseInt(horaIni2) * 60;
        let horaFin2Int = parseInt(horaFin2);
        let totFinMin = horaIni2Min + horaFin2Int;
        //console.log(totFinMin);
        let difHora = totFinMin - totInMin;
        let difHoraI = difHora / 60;
        let difHoraM = difHora % 60;
        let media = difHora / inter;
        let totalQuant = (difHora * media) / 60;
        let corVagas = difHora / totalQuant;
        /*console.log("Hora total: " + difHora);
        console.log("Hora: " +  difHoraI);
        console.log("Minutos: " + difHoraM);
        console.log("Media por hora: " + media);
        console.log("Quantidade: " + totalQuant);
        console.log("corração de vagas: " + corVagas);*/
        this.horaTotal = difHoraI;
        this.minutoTotal = difHoraM;
        this.mediaAtenHora = Math.trunc(media);
        this.totAtend = Math.trunc(totalQuant);
        this.corrVaga = Math.trunc(corVagas);
        this.gradeForm.get('quantidade').setValue(Math.trunc(totalQuant));
        this.gradeForm.get('correcaoHora').setValue(Math.trunc(corVagas));
        //this.gradeForm.get('configurado').setValue("c");
        //this.gradeForm.get('gerado').setValue("n");
    }
    updateGradeForm(grade) {
        this.gradeForm.patchValue(grade);
    }
    formatarDate(data) {
        let dataCompleta = "";
        let dia = data.substring(8, 10);
        let mes = data.substring(5, 7);
        let ano = data.substring(0, 4);
        if (dia.length == 1) {
            dia = "0" + dia;
        }
        if (mes.length == 1) {
            mes = "0" + mes;
        }
        dataCompleta = dia + "/" + mes + "/" + ano;
        return dataCompleta;
    }
    comboBox() {
        this.calendarioService.listarDiasAtivos().subscribe(dados => this.calendarios = dados);
        this.unidadeService.listUnidadeGenerica(this.globalService.getRole(), this.globalService.getUnidadeId()).subscribe(dados => this.unidades = dados);
        this.servicoService.listServico().subscribe(dados => this.servicos = dados);
    }
    onSubmit() {
        if (this.gradeForm.valid) {
            this.gradeService.save(this.gradeForm.value).subscribe(success => { this.globalService.saveShow("Gerado com Sucesso!", "Grade"); });
        }
        this.gradeForm.reset();
        this.horaTotal = "";
        this.minutoTotal = "";
        this.mediaAtenHora = "";
        this.totAtend = "";
        this.corrVaga = "";
    }
}
GradeFormComponent.ɵfac = function GradeFormComponent_Factory(t) { return new (t || GradeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_2__["ServicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendario_shared_calendario_service__WEBPACK_IMPORTED_MODULE_4__["CalendarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"])); };
GradeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeFormComponent, selectors: [["app-grade-form"]], decls: 115, vars: 9, consts: [[1, "col-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["routerLink", "/grade"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["type", "button", "routerLink", "/grade", 1, "btn", "btn-warning", "float-right"], [1, "fas", "fa-backward"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "form-group", "col-md-3"], ["for", "id"], ["type", "text", "id", "id", "formControlName", "id", "readonly", "", 1, "form-control"], ["formGroupName", "calendario"], ["for", "calendario"], ["id", "calendario", "formControlName", "id", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "hInicial"], ["id", "hInicial", "type", "time", "formControlName", "horaInicial", 1, "form-control"], ["for", "hFinal"], ["id", "hFinal", "type", "time", "formControlName", "horaFinal", 1, "form-control"], [1, "form-group", "col-md-2"], ["for", "inter"], ["id", "inter", "type", "number", "formControlName", "intervalo", 1, "form-control", 3, "blur"], [1, "form-group", "col-md-4"], ["formGroupName", "unidade"], ["for", "unidade"], ["id", "unidade", "formControlName", "id", 1, "form-control"], ["formGroupName", "servico"], ["for", "comboServ"], ["id", "comboServ", "formControlName", "id", 1, "form-control"], ["for", "quant"], ["id", "quant", "type", "number", "formControlName", "quantidade", "readonly", "readonly", 1, "form-control"], [1, "form-row", "col-md-12", "d-flex", "justify-content-center"], ["id", "horaTotal", 2, "color", "blue"], ["id", "minutoTotal", 2, "color", "red"], ["id", "mediaAtenHora", 2, "color", "green"], ["id", "totAtend", 2, "color", "Black"], ["id", "corrVaga", 2, "color", "Black"], ["id", "ModalSalvar", "tabindex", "-1", "role", "dialog", "aria-labelledby", "TituloModalCentralizado", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "TituloModalCentralizado", 1, "modal-title"], [1, "modal-body", 2, "font-weight", "bold"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "fas", "fa-window-close"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-save"], ["type", "button", "id", "modal", "data-toggle", "modal", "data-target", "#ModalSalvar", 1, "btn", "btn-success", "float-right", "mt-2"], [3, "value"]], template: function GradeFormComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cadastro da Grade de Agendamento ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Formul\u00E1rio para cadastro da Grade de Atendimento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Identificador:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Calend\u00E1rio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GradeFormComponent_option_34_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Hora Inicial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hora Final:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Intervalo de aten. (Minutos):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function GradeFormComponent_Template_input_blur_47_listener() { return ctx.calcula(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Unidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, GradeFormComponent_option_53_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, GradeFormComponent_option_59_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Total de atendimento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Resumo da grade. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "strong", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u00A0Horas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u00A0Minutos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " M\u00E9dia: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u00A0Atend./Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Total de atendimento:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "strong", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Intervalo:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "strong", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u00A0min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Vamos l\u00E1! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Confirmar gera\u00E7\u00E3o da grade de atendimento? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u00A0Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeFormComponent_Template_button_click_108_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " \u00A0Confirmar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u00A0Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.gradeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calendarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.horaTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.minutoTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mediaAtenHora);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totAtend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.corrVaga);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvZ3JhZGUvZ3JhZGUtZm9ybS9ncmFkZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grade-form',
                templateUrl: './grade-form.component.html',
                styleUrls: ['./grade-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_2__["ServicoService"] }, { type: _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"] }, { type: _calendario_shared_calendario_service__WEBPACK_IMPORTED_MODULE_4__["CalendarioService"] }, { type: _shared_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "iLNO":
/*!***********************************************!*\
  !*** ./src/app/modulos/grade/grade.module.ts ***!
  \***********************************************/
/*! exports provided: GradeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeModule", function() { return GradeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _grade_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grade-routing.module */ "GWOC");
/* harmony import */ var _grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grade-form/grade-form.component */ "fBEO");
/* harmony import */ var _grade_list_grade_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grade-list/grade-list.component */ "EMLt");
/* harmony import */ var _grade_liberacao_form_grade_liberacao_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grade-liberacao-form/grade-liberacao-form.component */ "6k1/");
/* harmony import */ var _grade_multi_form_grade_multi_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grade-multi-form/grade-multi-form.component */ "u+Hn");










class GradeModule {
}
GradeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GradeModule });
GradeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GradeModule_Factory(t) { return new (t || GradeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _grade_routing_module__WEBPACK_IMPORTED_MODULE_4__["GradeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GradeModule, { declarations: [_grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_5__["GradeFormComponent"], _grade_list_grade_list_component__WEBPACK_IMPORTED_MODULE_6__["GradeListComponent"], _grade_liberacao_form_grade_liberacao_form_component__WEBPACK_IMPORTED_MODULE_7__["GradeLiberacaoFormComponent"], _grade_multi_form_grade_multi_form_component__WEBPACK_IMPORTED_MODULE_8__["GradeMultiFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _grade_routing_module__WEBPACK_IMPORTED_MODULE_4__["GradeRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_grade_form_grade_form_component__WEBPACK_IMPORTED_MODULE_5__["GradeFormComponent"], _grade_list_grade_list_component__WEBPACK_IMPORTED_MODULE_6__["GradeListComponent"], _grade_liberacao_form_grade_liberacao_form_component__WEBPACK_IMPORTED_MODULE_7__["GradeLiberacaoFormComponent"], _grade_multi_form_grade_multi_form_component__WEBPACK_IMPORTED_MODULE_8__["GradeMultiFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _grade_routing_module__WEBPACK_IMPORTED_MODULE_4__["GradeRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "u+Hn":
/*!******************************************************************************!*\
  !*** ./src/app/modulos/grade/grade-multi-form/grade-multi-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: GradeMultiFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeMultiFormComponent", function() { return GradeMultiFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../servico/shared/servico.service */ "kcBg");
/* harmony import */ var _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../unidade/shared/unidade.service */ "rwds");
/* harmony import */ var _calendario_shared_calendario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../calendario/shared/calendario.service */ "3aJx");
/* harmony import */ var _shared_grade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/grade.service */ "aSUU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function GradeMultiFormComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const calendario_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", calendario_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formatarDate(calendario_r4.dia) + " - " + calendario_r4.observacao);
} }
function GradeMultiFormComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const calendario_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", calendario_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatarDate(calendario_r5.dia) + " - " + calendario_r5.observacao);
} }
function GradeMultiFormComponent_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unidade_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unidade_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unidade_r6.descricao);
} }
function GradeMultiFormComponent_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const servico_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", servico_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](servico_r7.descricao);
} }
class GradeMultiFormComponent {
    constructor(fb, servicoService, unidadeService, calendarioService, gradeService, route, globalService) {
        this.fb = fb;
        this.servicoService = servicoService;
        this.unidadeService = unidadeService;
        this.calendarioService = calendarioService;
        this.gradeService = gradeService;
        this.route = route;
        this.globalService = globalService;
        this.mostrarMens = false;
    }
    ngOnInit() {
        this.comboBox();
        const routeParans = this.route.snapshot.params;
        if (routeParans.id != null) {
            this.gradeService.loadById(routeParans.id).subscribe((grade) => {
                this.updateGradeForm(grade),
                    this.calcula();
            });
        }
        this.gradeForm = this.fb.group({
            id: [null, []],
            dataInicial: ['', []],
            dataFinal: ['', []],
            horaInicial: ['', []],
            horaFinal: ['', []],
            intervalo: ['', []],
            correcaoHora: ['', []],
            configurado: ['', []],
            gerado: ['', []],
            unidade: ['', []],
            servico: ['', []],
            quantidade: ['', []]
        });
    }
    calcula() {
        //ajustando horario inicial
        let hora1 = this.gradeForm.get('horaInicial').value;
        let hora2 = this.gradeForm.get('horaFinal').value;
        let inter = this.gradeForm.get('intervalo').value;
        let horaIni1 = hora1.substring(0, 2);
        let horaFin1 = hora1.substring(3, 5);
        let horaIni1Min = parseInt(horaIni1) * 60;
        let horaFin1Int = parseInt(horaFin1);
        let totInMin = horaIni1Min + horaFin1Int;
        //console.log(totInMin);
        let horaIni2 = hora2.substring(0, 2);
        let horaFin2 = hora2.substring(3, 5);
        let horaIni2Min = parseInt(horaIni2) * 60;
        let horaFin2Int = parseInt(horaFin2);
        let totFinMin = horaIni2Min + horaFin2Int;
        //console.log(totFinMin);
        let difHora = totFinMin - totInMin;
        let difHoraI = difHora / 60;
        let difHoraM = difHora % 60;
        let media = difHora / inter;
        let totalQuant = (difHora * media) / 60;
        let corVagas = difHora / totalQuant;
        /*console.log("Hora total: " + difHora);
        console.log("Hora: " +  difHoraI);
        console.log("Minutos: " + difHoraM);
        console.log("Media por hora: " + media);
        console.log("Quantidade: " + totalQuant);
        console.log("corração de vagas: " + corVagas);*/
        this.horaTotal = difHoraI;
        this.minutoTotal = difHoraM;
        this.mediaAtenHora = Math.trunc(media);
        this.totAtend = Math.trunc(totalQuant);
        this.corrVaga = Math.trunc(corVagas);
        this.gradeForm.get('quantidade').setValue(Math.trunc(totalQuant));
        this.gradeForm.get('correcaoHora').setValue(Math.trunc(corVagas));
        //this.gradeForm.get('configurado').setValue("c");
        //this.gradeForm.get('gerado').setValue("n");
    }
    updateGradeForm(grade) {
        this.gradeForm.patchValue(grade);
    }
    formatarDate(data) {
        let dataCompleta = "";
        let dia = data.substring(8, 10);
        let mes = data.substring(5, 7);
        let ano = data.substring(0, 4);
        if (dia.length == 1) {
            dia = "0" + dia;
        }
        if (mes.length == 1) {
            mes = "0" + mes;
        }
        dataCompleta = dia + "/" + mes + "/" + ano;
        return dataCompleta;
    }
    comboBox() {
        this.calendarioService.listarDiasAtivos().subscribe(dados => this.calendarios = dados);
        this.unidadeService.listUnidadeGenerica(this.globalService.getRole(), this.globalService.getUnidadeId()).subscribe(dados => this.unidades = dados);
        this.servicoService.listServico().subscribe(dados => this.servicos = dados);
    }
    onSubmit() {
        if (this.gradeForm.valid) {
            this.gradeService.saveGradeMultipla(this.gradeForm.value).subscribe(success => { this.globalService.saveShow("Gerado com Sucesso!", "Grade em demanda."); });
        }
        this.gradeForm.reset();
        this.horaTotal = "";
        this.minutoTotal = "";
        this.mediaAtenHora = "";
        this.totAtend = "";
        this.corrVaga = "";
    }
}
GradeMultiFormComponent.ɵfac = function GradeMultiFormComponent_Factory(t) { return new (t || GradeMultiFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_2__["ServicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendario_shared_calendario_service__WEBPACK_IMPORTED_MODULE_4__["CalendarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"])); };
GradeMultiFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeMultiFormComponent, selectors: [["app-grade-multi-form"]], decls: 117, vars: 10, consts: [[1, "col-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["routerLink", "/grade"], [1, "breadcrumb-item", "active"], [1, "row", "mb-4"], [1, "col-md"], [1, "h3", "border-left", "pl-2"], ["type", "button", "routerLink", "/grade", 1, "btn", "btn-warning", "float-right"], [1, "fas", "fa-backward"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "form-group", "col-md-2"], ["for", "id"], ["type", "text", "id", "id", "formControlName", "id", "readonly", "", 1, "form-control"], ["for", "d1"], ["id", "d1", "formControlName", "dataInicial", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "d2"], ["id", "d2", "formControlName", "dataFinal", 1, "form-control"], [1, "form-group", "col-md-3"], ["for", "hInicial"], ["id", "hInicial", "type", "time", "formControlName", "horaInicial", 1, "form-control"], ["for", "hFinal"], ["id", "hFinal", "type", "time", "formControlName", "horaFinal", 1, "form-control"], ["for", "inter"], ["id", "inter", "type", "number", "formControlName", "intervalo", 1, "form-control", 3, "blur"], [1, "form-group", "col-md-4"], ["for", "unidade"], ["id", "unidade", "formControlName", "unidade", 1, "form-control"], ["for", "comboServ"], ["id", "comboServ", "formControlName", "servico", 1, "form-control"], ["for", "quant"], ["id", "quant", "type", "number", "formControlName", "quantidade", "readonly", "readonly", 1, "form-control"], [1, "form-row", "col-md-12", "d-flex", "justify-content-center"], ["id", "horaTotal", 2, "color", "blue"], ["id", "minutoTotal", 2, "color", "red"], ["id", "mediaAtenHora", 2, "color", "green"], ["id", "totAtend", 2, "color", "Black"], ["id", "corrVaga", 2, "color", "Black"], ["id", "ModalSalvar", "tabindex", "-1", "role", "dialog", "aria-labelledby", "TituloModalCentralizado", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "TituloModalCentralizado", 1, "modal-title"], [1, "modal-body", 2, "font-weight", "bold"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "fas", "fa-window-close"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-save"], ["type", "button", "id", "modal", "data-toggle", "modal", "data-target", "#ModalSalvar", 1, "btn", "btn-success", "float-right", "mt-2"], [3, "value"]], template: function GradeMultiFormComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cadastro da Grade de Agendamento por Demanda ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Formul\u00E1rio para cadastro da Grade de Atendimento por demanda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Identificador:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Data Incial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GradeMultiFormComponent_option_33_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Data Final:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, GradeMultiFormComponent_option_38_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hora Inicial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Hora Final:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Intervalo de aten. (Minutos):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function GradeMultiFormComponent_Template_input_blur_51_listener() { return ctx.calcula(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Unidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, GradeMultiFormComponent_option_56_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Servi\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, GradeMultiFormComponent_option_61_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Total de atendimento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Resumo da grade. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u00A0Horas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00A0Minutos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " M\u00E9dia: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u00A0Atend./Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Total de atendimento:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Intervalo:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "strong", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u00A0min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Vamos l\u00E1! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Confirmar gera\u00E7\u00E3o da grade de atendimento? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u00A0Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeMultiFormComponent_Template_button_click_110_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " \u00A0Confirmar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " \u00A0Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.gradeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calendarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calendarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.horaTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.minutoTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mediaAtenHora);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totAtend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.corrVaga);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvZ3JhZGUvZ3JhZGUtbXVsdGktZm9ybS9ncmFkZS1tdWx0aS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeMultiFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grade-multi-form',
                templateUrl: './grade-multi-form.component.html',
                styleUrls: ['./grade-multi-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _servico_shared_servico_service__WEBPACK_IMPORTED_MODULE_2__["ServicoService"] }, { type: _unidade_shared_unidade_service__WEBPACK_IMPORTED_MODULE_3__["UnidadeService"] }, { type: _calendario_shared_calendario_service__WEBPACK_IMPORTED_MODULE_4__["CalendarioService"] }, { type: _shared_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modulos-grade-grade-module.js.map