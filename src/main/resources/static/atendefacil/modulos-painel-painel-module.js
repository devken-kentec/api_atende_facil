(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-painel-painel-module"],{

/***/ "3xyc":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/painel/painel-e-list-form/painel-e-list-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PainelEListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelEListFormComponent", function() { return PainelEListFormComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/painel.service */ "l3jU");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PainelEListFormComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const painel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.senha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.guiche, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.formatarHora(painel_r1.chamada), " - ", ctx_r0.formatarData(painel_r1.chamada), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.servico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.unidade, " ");
} }
class PainelEListFormComponent {
    constructor(painelService, globalService) {
        this.painelService = painelService;
        this.globalService = globalService;
        this.title = "Painel de Chamada da Unidade de Atendimento Praça da Bíblia";
        this.n = 10800;
        this.status = "Ligado";
    }
    ngOnInit() {
        const tempo = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
        const periodo = tempo.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(this.n));
        periodo.subscribe((t) => {
            console.log("Chamando");
            this.listarPainelE();
            this.listarChamadaE();
        });
    }
    desligar() {
        this.n = 3;
        this.status = "Desligado";
    }
    listarChamadaE() {
        this.painelService.findByChamadaE().subscribe((chamada) => {
            this.id = chamada.id;
            this.filaId = chamada.filaId;
            this.senha = chamada.senha;
            this.guiche = chamada.guiche;
            this.servico = chamada.servico;
            this.unidade = chamada.unidade;
            this.data = this.globalService.formatarDate(chamada.chamada);
            this.hora = this.globalService.formatarTime(chamada.chamada);
            this.prioridade = chamada.prioridade;
        });
    }
    listarPainelE() {
        this.painelService.findByPainelE().subscribe(dados => this.paineis = dados);
    }
    formatarData(data) {
        let date = this.globalService.formatarDate(data);
        return date;
    }
    formatarHora(hora) {
        let time = this.globalService.formatarTime(hora);
        return time;
    }
    mudarCor(priodidade) {
        return priodidade == "Normal" ? 'blue' : 'red';
    }
}
PainelEListFormComponent.ɵfac = function PainelEListFormComponent_Factory(t) { return new (t || PainelEListFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
PainelEListFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PainelEListFormComponent, selectors: [["app-painel-e-list-form"]], decls: 61, vars: 22, consts: [[1, "col-12", "mt-5"], [1, "needs-validation"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header", 2, "font-weight", "bold", "font-size", "16px"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "col-md-6"], [1, "card-header", 2, "font-weight", "bold", "font-size", "18px"], [1, "form-row", "col-md-12", "border-bottom"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "color", "blue", "text-align", "center"], [1, "form-row", "col-md-12", "mt-4"], [1, "col-md-12", "text-center"], [1, "painel"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "text-align", "center"], [1, "text-center"], [2, "font-weight", "bold"], [1, "table", "table-hover", 2, "box-shadow", "5px 5px 10px #000"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "float-right", 3, "click"]], template: function PainelEListFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " ATENDIMENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "SENHAS CHAMADAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Guich\u00EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Chamada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Unidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, PainelEListFormComponent_tr_57_Template, 12, 6, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PainelEListFormComponent_Template_button_click_59_listener() { return ctx.desligar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" CHAMANDO SENHA: ", ctx.senha, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("GUICH\u00CA: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 14, ctx.guiche), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SERVI\u00C7O: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 16, ctx.servico), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("CHAMADA: ", ctx.data, " - ", ctx.hora, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("UNIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 18, ctx.unidade), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.mudarCor(ctx.prioridade));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" PRIORIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 20, ctx.prioridade), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paineis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.status, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["span.painel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 16pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9wYWluZWwvcGFpbmVsLWUtbGlzdC1mb3JtL3BhaW5lbC1lLWxpc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL3BhaW5lbC9wYWluZWwtZS1saXN0LWZvcm0vcGFpbmVsLWUtbGlzdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLnBhaW5lbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PainelEListFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-painel-e-list-form',
                templateUrl: './painel-e-list-form.component.html',
                styleUrls: ['./painel-e-list-form.component.css']
            }]
    }], function () { return [{ type: _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "8Ka1":
/*!*********************************************************!*\
  !*** ./src/app/modulos/painel/painel-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PainelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelRoutingModule", function() { return PainelRoutingModule; });
/* harmony import */ var _painel_f_list_form_painel_f_list_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./painel-f-list-form/painel-f-list-form.component */ "abFF");
/* harmony import */ var _painel_e_list_form_painel_e_list_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./painel-e-list-form/painel-e-list-form.component */ "3xyc");
/* harmony import */ var _painel_d_list_form_painel_d_list_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel-d-list-form/painel-d-list-form.component */ "Bo+4");
/* harmony import */ var _painel_c_list_form_painel_c_list_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel-c-list-form/painel-c-list-form.component */ "jOPW");
/* harmony import */ var _painel_b_list_form_painel_b_list_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./painel-b-list-form/painel-b-list-form.component */ "BGWy");
/* harmony import */ var _painel_a_list_form_painel_a_list_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./painel-a-list-form/painel-a-list-form.component */ "GW5V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










const routes = [
    { path: '01', component: _painel_a_list_form_painel_a_list_form_component__WEBPACK_IMPORTED_MODULE_5__["PainelAListFormComponent"] },
    { path: '02', component: _painel_b_list_form_painel_b_list_form_component__WEBPACK_IMPORTED_MODULE_4__["PainelBListFormComponent"] },
    { path: '03', component: _painel_c_list_form_painel_c_list_form_component__WEBPACK_IMPORTED_MODULE_3__["PainelCListFormComponent"] },
    { path: '04', component: _painel_d_list_form_painel_d_list_form_component__WEBPACK_IMPORTED_MODULE_2__["PainelDListFormComponent"] },
    { path: '05', component: _painel_e_list_form_painel_e_list_form_component__WEBPACK_IMPORTED_MODULE_1__["PainelEListFormComponent"] },
    { path: '06', component: _painel_f_list_form_painel_f_list_form_component__WEBPACK_IMPORTED_MODULE_0__["PainelFListFormComponent"] }
];
class PainelRoutingModule {
}
PainelRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PainelRoutingModule });
PainelRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function PainelRoutingModule_Factory(t) { return new (t || PainelRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PainelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](PainelRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ACHm":
/*!*************************************************!*\
  !*** ./src/app/modulos/painel/painel.module.ts ***!
  \*************************************************/
/*! exports provided: PainelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelModule", function() { return PainelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _painel_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel-routing.module */ "8Ka1");
/* harmony import */ var _painel_a_list_form_painel_a_list_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel-a-list-form/painel-a-list-form.component */ "GW5V");
/* harmony import */ var _painel_b_list_form_painel_b_list_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./painel-b-list-form/painel-b-list-form.component */ "BGWy");
/* harmony import */ var _painel_c_list_form_painel_c_list_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./painel-c-list-form/painel-c-list-form.component */ "jOPW");
/* harmony import */ var _painel_d_list_form_painel_d_list_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./painel-d-list-form/painel-d-list-form.component */ "Bo+4");
/* harmony import */ var _painel_e_list_form_painel_e_list_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./painel-e-list-form/painel-e-list-form.component */ "3xyc");
/* harmony import */ var _painel_f_list_form_painel_f_list_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./painel-f-list-form/painel-f-list-form.component */ "abFF");










class PainelModule {
}
PainelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PainelModule });
PainelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PainelModule_Factory(t) { return new (t || PainelModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _painel_routing_module__WEBPACK_IMPORTED_MODULE_2__["PainelRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PainelModule, { declarations: [_painel_a_list_form_painel_a_list_form_component__WEBPACK_IMPORTED_MODULE_3__["PainelAListFormComponent"], _painel_b_list_form_painel_b_list_form_component__WEBPACK_IMPORTED_MODULE_4__["PainelBListFormComponent"], _painel_c_list_form_painel_c_list_form_component__WEBPACK_IMPORTED_MODULE_5__["PainelCListFormComponent"], _painel_d_list_form_painel_d_list_form_component__WEBPACK_IMPORTED_MODULE_6__["PainelDListFormComponent"], _painel_e_list_form_painel_e_list_form_component__WEBPACK_IMPORTED_MODULE_7__["PainelEListFormComponent"], _painel_f_list_form_painel_f_list_form_component__WEBPACK_IMPORTED_MODULE_8__["PainelFListFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _painel_routing_module__WEBPACK_IMPORTED_MODULE_2__["PainelRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_painel_a_list_form_painel_a_list_form_component__WEBPACK_IMPORTED_MODULE_3__["PainelAListFormComponent"], _painel_b_list_form_painel_b_list_form_component__WEBPACK_IMPORTED_MODULE_4__["PainelBListFormComponent"], _painel_c_list_form_painel_c_list_form_component__WEBPACK_IMPORTED_MODULE_5__["PainelCListFormComponent"], _painel_d_list_form_painel_d_list_form_component__WEBPACK_IMPORTED_MODULE_6__["PainelDListFormComponent"], _painel_e_list_form_painel_e_list_form_component__WEBPACK_IMPORTED_MODULE_7__["PainelEListFormComponent"], _painel_f_list_form_painel_f_list_form_component__WEBPACK_IMPORTED_MODULE_8__["PainelFListFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _painel_routing_module__WEBPACK_IMPORTED_MODULE_2__["PainelRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "BGWy":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/painel/painel-b-list-form/painel-b-list-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PainelBListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelBListFormComponent", function() { return PainelBListFormComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/painel.service */ "l3jU");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PainelBListFormComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const painel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.senha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.guiche, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.formatarHora(painel_r1.chamada), " - ", ctx_r0.formatarData(painel_r1.chamada), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.servico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.unidade, " ");
} }
class PainelBListFormComponent {
    constructor(painelService, globalService) {
        this.painelService = painelService;
        this.globalService = globalService;
        this.title = "Painel de Chamada da Unidade de Atendimento Cidade Jardim";
        this.n = 10800;
        this.status = "Ligado";
    }
    ngOnInit() {
        const tempo = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
        const periodo = tempo.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(this.n));
        periodo.subscribe((t) => {
            console.log("Chamando");
            this.listarPainelB();
            this.listarChamadaB();
        });
    }
    desligar() {
        this.n = 3;
        this.status = "Desligado";
    }
    listarChamadaB() {
        this.painelService.findByChamadaB().subscribe((chamada) => {
            this.id = chamada.id;
            this.filaId = chamada.filaId;
            this.senha = chamada.senha;
            this.guiche = chamada.guiche;
            this.servico = chamada.servico;
            this.unidade = chamada.unidade;
            this.data = this.globalService.formatarDate(chamada.chamada);
            this.hora = this.globalService.formatarTime(chamada.chamada);
            this.prioridade = chamada.prioridade;
        });
    }
    listarPainelB() {
        this.painelService.findByPainelB().subscribe(dados => this.paineis = dados);
    }
    formatarData(data) {
        let date = this.globalService.formatarDate(data);
        return date;
    }
    formatarHora(hora) {
        let time = this.globalService.formatarTime(hora);
        return time;
    }
    mudarCor(priodidade) {
        return priodidade == "Normal" ? 'blue' : 'red';
    }
}
PainelBListFormComponent.ɵfac = function PainelBListFormComponent_Factory(t) { return new (t || PainelBListFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
PainelBListFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PainelBListFormComponent, selectors: [["app-painel-b-list-form"]], decls: 61, vars: 22, consts: [[1, "col-12", "mt-5"], [1, "needs-validation"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header", 2, "font-weight", "bold", "font-size", "16px"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "col-md-6"], [1, "card-header", 2, "font-weight", "bold", "font-size", "18px"], [1, "form-row", "col-md-12", "border-bottom"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "color", "blue", "text-align", "center"], [1, "form-row", "col-md-12", "mt-4"], [1, "col-md-12", "text-center"], [1, "painel"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "text-align", "center"], [1, "text-center"], [2, "font-weight", "bold"], [1, "table", "table-hover", 2, "box-shadow", "5px 5px 10px #000"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "float-right", 3, "click"]], template: function PainelBListFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " ATENDIMENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "SENHAS CHAMADAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Guich\u00EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Chamada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Unidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, PainelBListFormComponent_tr_57_Template, 12, 6, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PainelBListFormComponent_Template_button_click_59_listener() { return ctx.desligar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" CHAMANDO SENHA: ", ctx.senha, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("GUICH\u00CA: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 14, ctx.guiche), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SERVI\u00C7O: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 16, ctx.servico), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("CHAMADA: ", ctx.data, " - ", ctx.hora, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("UNIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 18, ctx.unidade), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.mudarCor(ctx.prioridade));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" PRIORIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 20, ctx.prioridade), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paineis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.status, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["span.painel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 16pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9wYWluZWwvcGFpbmVsLWItbGlzdC1mb3JtL3BhaW5lbC1iLWxpc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL3BhaW5lbC9wYWluZWwtYi1saXN0LWZvcm0vcGFpbmVsLWItbGlzdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLnBhaW5lbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PainelBListFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-painel-b-list-form',
                templateUrl: './painel-b-list-form.component.html',
                styleUrls: ['./painel-b-list-form.component.css']
            }]
    }], function () { return [{ type: _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "Bo+4":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/painel/painel-d-list-form/painel-d-list-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PainelDListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelDListFormComponent", function() { return PainelDListFormComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/painel.service */ "l3jU");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PainelDListFormComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const painel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.senha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.guiche, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.formatarHora(painel_r1.chamada), " - ", ctx_r0.formatarData(painel_r1.chamada), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.servico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.unidade, " ");
} }
class PainelDListFormComponent {
    constructor(painelService, globalService) {
        this.painelService = painelService;
        this.globalService = globalService;
        this.title = "Painel de Chamada da Unidade de Atendimento Mangalô";
        this.n = 10800;
        this.status = "Ligado";
    }
    ngOnInit() {
        const tempo = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
        const periodo = tempo.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(this.n));
        periodo.subscribe((t) => {
            console.log("Chamando");
            this.listarPainelD();
            this.listarChamadaD();
        });
    }
    desligar() {
        this.n = 3;
        this.status = "Desligado";
    }
    listarChamadaD() {
        this.painelService.findByChamadaD().subscribe((chamada) => {
            this.id = chamada.id;
            this.filaId = chamada.filaId;
            this.senha = chamada.senha;
            this.guiche = chamada.guiche;
            this.servico = chamada.servico;
            this.unidade = chamada.unidade;
            this.data = this.globalService.formatarDate(chamada.chamada);
            this.hora = this.globalService.formatarTime(chamada.chamada);
            this.prioridade = chamada.prioridade;
        });
    }
    listarPainelD() {
        this.painelService.findByPainelD().subscribe(dados => this.paineis = dados);
    }
    formatarData(data) {
        let date = this.globalService.formatarDate(data);
        return date;
    }
    formatarHora(hora) {
        let time = this.globalService.formatarTime(hora);
        return time;
    }
    mudarCor(priodidade) {
        return priodidade == "Normal" ? 'blue' : 'red';
    }
}
PainelDListFormComponent.ɵfac = function PainelDListFormComponent_Factory(t) { return new (t || PainelDListFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
PainelDListFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PainelDListFormComponent, selectors: [["app-painel-d-list-form"]], decls: 61, vars: 22, consts: [[1, "col-12", "mt-5"], [1, "needs-validation"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header", 2, "font-weight", "bold", "font-size", "16px"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "col-md-6"], [1, "card-header", 2, "font-weight", "bold", "font-size", "18px"], [1, "form-row", "col-md-12", "border-bottom"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "color", "blue", "text-align", "center"], [1, "form-row", "col-md-12", "mt-4"], [1, "col-md-12", "text-center"], [1, "painel"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "text-align", "center"], [1, "text-center"], [2, "font-weight", "bold"], [1, "table", "table-hover", 2, "box-shadow", "5px 5px 10px #000"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "float-right", 3, "click"]], template: function PainelDListFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " ATENDIMENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "SENHAS CHAMADAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Guich\u00EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Chamada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Unidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, PainelDListFormComponent_tr_57_Template, 12, 6, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PainelDListFormComponent_Template_button_click_59_listener() { return ctx.desligar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" CHAMANDO SENHA: ", ctx.senha, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("GUICH\u00CA: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 14, ctx.guiche), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SERVI\u00C7O: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 16, ctx.servico), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("CHAMADA: ", ctx.data, " - ", ctx.hora, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("UNIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 18, ctx.unidade), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.mudarCor(ctx.prioridade));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" PRIORIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 20, ctx.prioridade), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paineis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.status, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["span.painel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 16pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9wYWluZWwvcGFpbmVsLWQtbGlzdC1mb3JtL3BhaW5lbC1kLWxpc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL3BhaW5lbC9wYWluZWwtZC1saXN0LWZvcm0vcGFpbmVsLWQtbGlzdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLnBhaW5lbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PainelDListFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-painel-d-list-form',
                templateUrl: './painel-d-list-form.component.html',
                styleUrls: ['./painel-d-list-form.component.css']
            }]
    }], function () { return [{ type: _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "GW5V":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/painel/painel-a-list-form/painel-a-list-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PainelAListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelAListFormComponent", function() { return PainelAListFormComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/painel.service */ "l3jU");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PainelAListFormComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const painel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", painel_r1.senha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", painel_r1.guiche, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.formatarHora(painel_r1.chamada), " - ", ctx_r0.formatarData(painel_r1.chamada), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", painel_r1.servico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", painel_r1.unidade, " ");
} }
class PainelAListFormComponent {
    constructor(painelService, globalService) {
        this.painelService = painelService;
        this.globalService = globalService;
        this.title = "Painel de Chamada da Unidade de Atendimento Paço Municipal";
        this.n = 10800;
        this.status = "Ligado";
    }
    ngOnInit() {
        const tempo = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000);
        const periodo = tempo.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(this.n));
        periodo.subscribe((t) => {
            console.log("Chamando");
            this.listarPainelA();
            this.listarChamada();
        });
    }
    desligar() {
        this.n = 3;
        this.status = "Desligado";
    }
    listarChamada() {
        this.painelService.findByChamada().subscribe((chamada) => {
            this.id = chamada.id;
            this.filaId = chamada.filaId;
            this.senha = chamada.senha;
            this.guiche = chamada.guiche;
            this.servico = chamada.servico;
            this.unidade = chamada.unidade;
            this.data = this.globalService.formatarDate(chamada.chamada);
            this.hora = this.globalService.formatarTime(chamada.chamada);
            this.prioridade = chamada.prioridade;
        });
    }
    listarPainelA() {
        this.painelService.findByPainelA().subscribe(dados => this.paineis = dados);
    }
    formatarData(data) {
        let date = this.globalService.formatarDate(data);
        return date;
    }
    formatarHora(hora) {
        let time = this.globalService.formatarTime(hora);
        return time;
    }
    mudarCor(priodidade) {
        return priodidade == "Normal" ? 'blue' : 'red';
    }
}
PainelAListFormComponent.ɵfac = function PainelAListFormComponent_Factory(t) { return new (t || PainelAListFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
PainelAListFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PainelAListFormComponent, selectors: [["app-painel-a-list-form"]], decls: 61, vars: 22, consts: [[1, "col-12", "mt-5"], [1, "needs-validation"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header", 2, "font-weight", "bold", "font-size", "16px"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "col-md-6"], [1, "card-header", 2, "font-weight", "bold", "font-size", "18px"], [1, "form-row", "col-md-12", "border-bottom"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "color", "blue", "text-align", "center"], [1, "form-row", "col-md-12", "mt-4"], [1, "col-md-12", "text-center"], [1, "painel"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "text-align", "center"], [1, "text-center"], [2, "font-weight", "bold"], [1, "table", "table-hover", 2, "box-shadow", "5px 5px 10px #000"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "float-right", 3, "click"]], template: function PainelAListFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " ATENDIMENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "SENHAS CHAMADAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Guich\u00EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Chamada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Unidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, PainelAListFormComponent_tr_57_Template, 12, 6, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PainelAListFormComponent_Template_button_click_59_listener() { return ctx.desligar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" CHAMANDO SENHA: ", ctx.senha, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("GUICH\u00CA: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 14, ctx.guiche), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("SERVI\u00C7O: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 16, ctx.servico), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("CHAMADA: ", ctx.data, " - ", ctx.hora, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("UNIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 18, ctx.unidade), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.mudarCor(ctx.prioridade));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" PRIORIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 20, ctx.prioridade), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paineis);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.status, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["span.painel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 16pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9wYWluZWwvcGFpbmVsLWEtbGlzdC1mb3JtL3BhaW5lbC1hLWxpc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL3BhaW5lbC9wYWluZWwtYS1saXN0LWZvcm0vcGFpbmVsLWEtbGlzdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLnBhaW5lbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PainelAListFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-painel-a-list-form',
                templateUrl: './painel-a-list-form.component.html',
                styleUrls: ['./painel-a-list-form.component.css']
            }]
    }], function () { return [{ type: _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "abFF":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/painel/painel-f-list-form/painel-f-list-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PainelFListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelFListFormComponent", function() { return PainelFListFormComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/painel.service */ "l3jU");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PainelFListFormComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const painel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.senha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.guiche, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.formatarHora(painel_r1.chamada), " - ", ctx_r0.formatarData(painel_r1.chamada), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.servico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.unidade, " ");
} }
class PainelFListFormComponent {
    constructor(painelService, globalService) {
        this.painelService = painelService;
        this.globalService = globalService;
        this.title = "Painel de Chamada da Unidade de Atendimento CRC";
        this.n = 10800;
        this.status = "Ligado";
    }
    ngOnInit() {
        const tempo = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
        const periodo = tempo.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(this.n));
        periodo.subscribe((t) => {
            console.log("Chamando");
            this.listarPainelF();
            this.listarChamadaF();
        });
    }
    desligar() {
        this.n = 3;
        this.status = "Desligado";
    }
    listarChamadaF() {
        this.painelService.findByChamadaF().subscribe((chamada) => {
            this.id = chamada.id;
            this.filaId = chamada.filaId;
            this.senha = chamada.senha;
            this.guiche = chamada.guiche;
            this.servico = chamada.servico;
            this.unidade = chamada.unidade;
            this.data = this.globalService.formatarDate(chamada.chamada);
            this.hora = this.globalService.formatarTime(chamada.chamada);
            this.prioridade = chamada.prioridade;
        });
    }
    listarPainelF() {
        this.painelService.findByPainelF().subscribe(dados => this.paineis = dados);
    }
    formatarData(data) {
        let date = this.globalService.formatarDate(data);
        return date;
    }
    formatarHora(hora) {
        let time = this.globalService.formatarTime(hora);
        return time;
    }
    mudarCor(priodidade) {
        return priodidade == "Normal" ? 'blue' : 'red';
    }
}
PainelFListFormComponent.ɵfac = function PainelFListFormComponent_Factory(t) { return new (t || PainelFListFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
PainelFListFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PainelFListFormComponent, selectors: [["app-painel-f-list-form"]], decls: 61, vars: 22, consts: [[1, "col-12", "mt-5"], [1, "needs-validation"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header", 2, "font-weight", "bold", "font-size", "16px"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "col-md-6"], [1, "card-header", 2, "font-weight", "bold", "font-size", "18px"], [1, "form-row", "col-md-12", "border-bottom"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "color", "blue", "text-align", "center"], [1, "form-row", "col-md-12", "mt-4"], [1, "col-md-12", "text-center"], [1, "painel"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "text-align", "center"], [1, "text-center"], [2, "font-weight", "bold"], [1, "table", "table-hover", 2, "box-shadow", "5px 5px 10px #000"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "float-right", 3, "click"]], template: function PainelFListFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " ATENDIMENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "SENHAS CHAMADAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Guich\u00EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Chamada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Unidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, PainelFListFormComponent_tr_57_Template, 12, 6, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PainelFListFormComponent_Template_button_click_59_listener() { return ctx.desligar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" CHAMANDO SENHA: ", ctx.senha, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("GUICH\u00CA: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 14, ctx.guiche), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SERVI\u00C7O: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 16, ctx.servico), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("CHAMADA: ", ctx.data, " - ", ctx.hora, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("UNIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 18, ctx.unidade), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.mudarCor(ctx.prioridade));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" PRIORIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 20, ctx.prioridade), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paineis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.status, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["span.painel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 16pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9wYWluZWwvcGFpbmVsLWYtbGlzdC1mb3JtL3BhaW5lbC1mLWxpc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL3BhaW5lbC9wYWluZWwtZi1saXN0LWZvcm0vcGFpbmVsLWYtbGlzdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLnBhaW5lbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PainelFListFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-painel-f-list-form',
                templateUrl: './painel-f-list-form.component.html',
                styleUrls: ['./painel-f-list-form.component.css']
            }]
    }], function () { return [{ type: _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "jOPW":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/painel/painel-c-list-form/painel-c-list-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PainelCListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelCListFormComponent", function() { return PainelCListFormComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/painel.service */ "l3jU");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PainelCListFormComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const painel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.senha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.guiche, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.formatarHora(painel_r1.chamada), " - ", ctx_r0.formatarData(painel_r1.chamada), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.servico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", painel_r1.unidade, " ");
} }
class PainelCListFormComponent {
    constructor(painelService, globalService) {
        this.painelService = painelService;
        this.globalService = globalService;
        this.title = "Painel de Chamada da Unidade de Atendimento Estação Ferroviária";
        this.n = 10800;
        this.status = "Ligado";
    }
    ngOnInit() {
        const tempo = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
        const periodo = tempo.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(this.n));
        periodo.subscribe((t) => {
            console.log("Chamando3");
            this.listarPainelC();
            this.listarChamadaC();
        });
    }
    desligar() {
        this.n = 3;
        this.status = "Desligado";
    }
    listarChamadaC() {
        this.painelService.findByChamadaC().subscribe((chamada) => {
            this.id = chamada.id;
            this.filaId = chamada.filaId;
            this.senha = chamada.senha;
            this.guiche = chamada.guiche;
            this.servico = chamada.servico;
            this.unidade = chamada.unidade;
            this.data = this.globalService.formatarDate(chamada.chamada);
            this.hora = this.globalService.formatarTime(chamada.chamada);
            this.prioridade = chamada.prioridade;
        });
    }
    listarPainelC() {
        this.painelService.findByPainelC().subscribe(dados => this.paineis = dados);
    }
    formatarData(data) {
        let date = this.globalService.formatarDate(data);
        return date;
    }
    formatarHora(hora) {
        let time = this.globalService.formatarTime(hora);
        return time;
    }
    mudarCor(priodidade) {
        return priodidade == "Normal" ? 'blue' : 'red';
    }
}
PainelCListFormComponent.ɵfac = function PainelCListFormComponent_Factory(t) { return new (t || PainelCListFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
PainelCListFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PainelCListFormComponent, selectors: [["app-painel-c-list-form"]], decls: 61, vars: 22, consts: [[1, "col-12", "mt-5"], [1, "needs-validation"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header", 2, "font-weight", "bold", "font-size", "16px"], [1, "card-body"], [1, "form-row", "col-md-12"], [1, "col-md-6"], [1, "card-header", 2, "font-weight", "bold", "font-size", "18px"], [1, "form-row", "col-md-12", "border-bottom"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "color", "blue", "text-align", "center"], [1, "form-row", "col-md-12", "mt-4"], [1, "col-md-12", "text-center"], [1, "painel"], [1, "col-md-12", 2, "font-weight", "bold", "font-size", "20pt", "text-align", "center"], [1, "text-center"], [2, "font-weight", "bold"], [1, "table", "table-hover", 2, "box-shadow", "5px 5px 10px #000"], [1, "bg-success", "text-light"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "float-right", 3, "click"]], template: function PainelCListFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " ATENDIMENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "SENHAS CHAMADAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Guich\u00EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Chamada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Unidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, PainelCListFormComponent_tr_57_Template, 12, 6, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PainelCListFormComponent_Template_button_click_59_listener() { return ctx.desligar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" CHAMANDO SENHA: ", ctx.senha, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("GUICH\u00CA: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 14, ctx.guiche), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SERVI\u00C7O: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 16, ctx.servico), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("CHAMADA: ", ctx.data, " - ", ctx.hora, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("UNIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 18, ctx.unidade), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.mudarCor(ctx.prioridade));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" PRIORIDADE: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 20, ctx.prioridade), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paineis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.status, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["span.painel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 16pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9wYWluZWwvcGFpbmVsLWMtbGlzdC1mb3JtL3BhaW5lbC1jLWxpc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL3BhaW5lbC9wYWluZWwtYy1saXN0LWZvcm0vcGFpbmVsLWMtbGlzdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLnBhaW5lbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PainelCListFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-painel-c-list-form',
                templateUrl: './painel-c-list-form.component.html',
                styleUrls: ['./painel-c-list-form.component.css']
            }]
    }], function () { return [{ type: _shared_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "l3jU":
/*!*********************************************************!*\
  !*** ./src/app/modulos/painel/shared/painel.service.ts ***!
  \*********************************************************/
/*! exports provided: PainelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelService", function() { return PainelService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PainelService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API}/atendeFacil/api/painel`;
    }
    findByPainelA() {
        return this.http.get(`${this.API}/01`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByChamada() {
        return this.http.get(`${this.API}/01/chamada`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByPainelB() {
        return this.http.get(`${this.API}/02`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByChamadaB() {
        return this.http.get(`${this.API}/02/chamada`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByPainelC() {
        return this.http.get(`${this.API}/03`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByChamadaC() {
        return this.http.get(`${this.API}/03/chamada`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByPainelD() {
        return this.http.get(`${this.API}/04`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByChamadaD() {
        return this.http.get(`${this.API}/04/chamada`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByPainelE() {
        return this.http.get(`${this.API}/05`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByChamadaE() {
        return this.http.get(`${this.API}/05/chamada`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByPainelF() {
        return this.http.get(`${this.API}/06`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    findByChamadaF() {
        return this.http.get(`${this.API}/06/chamada`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
}
PainelService.ɵfac = function PainelService_Factory(t) { return new (t || PainelService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PainelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PainelService, factory: PainelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PainelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modulos-painel-painel-module.js.map