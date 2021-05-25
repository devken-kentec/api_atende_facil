(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "3aJx":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/calendario/shared/calendario.service.ts ***!
  \*****************************************************************/
/*! exports provided: CalendarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioService", function() { return CalendarioService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class CalendarioService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API}/atendeFacil/api/calendario`;
    }
    listCalendario() {
        return this.http.get(`${this.API}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    buscaAvancada(dataInicial, dataFinal, statusCalendario, observacao) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("dataInicial", dataInicial)
            .set("dataFinal", dataFinal)
            .set("statusCalendario", statusCalendario)
            .set("observacao", observacao);
        const url = this.API + "/buscar?" + httpParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    inativarDias(dataInicial, dataFinal) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("dataInicial", dataInicial)
            .set("dataFinal", dataFinal);
        const url = this.API + "/inativarDias?" + httpParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    listarDiasAtivos() {
        return this.http.get(`${this.API}/diasAtivos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    loadById(id) {
        return this.http.get(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    create(calendario) {
        return this.http.post(`${this.API}`, calendario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    update(calendario) {
        return this.http.put(`${this.API}/${calendario.id}`, calendario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    save(calendario) {
        if (calendario.id) {
            return this.update(calendario);
        }
        else {
            return this.create(calendario);
        }
    }
    remove(id) {
        return this.http.delete(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}
CalendarioService.ɵfac = function CalendarioService_Factory(t) { return new (t || CalendarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CalendarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CalendarioService, factory: CalendarioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CalendarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "FpYS":
/*!*************************************************************************************!*\
  !*** ./src/app/modulos/detalhamento-servico/shared/detalhamento-servico.service.ts ***!
  \*************************************************************************************/
/*! exports provided: DetalhamentoServicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhamentoServicoService", function() { return DetalhamentoServicoService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class DetalhamentoServicoService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API}/atendeFacil/api/detalhamentoservico`;
    }
    listDetalhamentoServico() {
        return this.http.get(`${this.API}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    listDetalhamentoServicoAtendimento() {
        return this.http.get(`${this.API}/listar/servico/atendimento`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    listDetalhamentoServicoPaginado(page, size) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page).set('size', size);
        return this.http.get(`${this.API}/detalhamentoServicoPage?${params.toString()}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    loadById(id) {
        return this.http.get(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    create(detServico) {
        return this.http.post(`${this.API}`, detServico).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    update(detServico) {
        return this.http.put(`${this.API}/${detServico.id}`, detServico).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    save(detServico) {
        if (detServico) {
            return this.create(detServico);
        }
        else {
            return this.update(detServico);
        }
    }
}
DetalhamentoServicoService.ɵfac = function DetalhamentoServicoService_Factory(t) { return new (t || DetalhamentoServicoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DetalhamentoServicoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DetalhamentoServicoService, factory: DetalhamentoServicoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DetalhamentoServicoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kk5o":
/*!*******************************************************!*\
  !*** ./src/app/modulos/orgao/shared/orgao.service.ts ***!
  \*******************************************************/
/*! exports provided: OrgaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgaoService", function() { return OrgaoService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class OrgaoService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API}/atendeFacil/api/orgao`;
    }
    listOrgao() {
        return this.http.get(`${this.API}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    listOrgaoPaginada(page, size) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('page', page).set('size', size);
        return this.http.get(`${this.API}/orgaoPage?${params.toString()}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    loadById(id) {
        return this.http.get(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    create(orgao) {
        return this.http.post(`${this.API}`, orgao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    update(orgao) {
        return this.http.put(`${this.API}/${orgao.id}`, orgao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    save(orgao) {
        if (orgao.id) {
            return this.update(orgao);
        }
        else {
            return this.create(orgao);
        }
    }
    remove(id) {
        return this.http.delete(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}
OrgaoService.ɵfac = function OrgaoService_Factory(t) { return new (t || OrgaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OrgaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OrgaoService, factory: OrgaoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OrgaoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sXzJ":
/*!*************************************************************!*\
  !*** ./src/app/modulos/servidor/shared/servidor.service.ts ***!
  \*************************************************************/
/*! exports provided: ServidorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServidorService", function() { return ServidorService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ServidorService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API}/atendeFacil/api/servidor`;
    }
    listServidor() {
        return this.http.get(`${this.API}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    loadByMatricula(matricula) {
        return this.http.get(`${this.API}/${matricula}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    pesquisaAvancada(matricula, nome, cpf) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("matricula", matricula)
            .set("nome", nome)
            .set("cpf", cpf);
        const url = this.API + "/buscar?" + httpParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    create(servidor) {
        return this.http.post(`${this.API}`, servidor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    update(servidor) {
        return this.http.put(`${this.API}/${servidor.matricula}`, servidor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    remove(id) {
        return this.http.get(`${this.API}/status/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}
ServidorService.ɵfac = function ServidorService_Factory(t) { return new (t || ServidorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ServidorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ServidorService, factory: ServidorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ServidorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sg9f":
/*!*********************************************************!*\
  !*** ./src/app/modulos/guiche/shared/guiche.service.ts ***!
  \*********************************************************/
/*! exports provided: GuicheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuicheService", function() { return GuicheService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class GuicheService {
    constructor(http) {
        this.http = http;
        this.API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API}/atendeFacil/api/guiche`;
    }
    listGuiche() {
        return this.http.get(`${this.API}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    loadById(id) {
        return this.http.get(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    listGuicheServicoPaginado(page, size) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', page).set('size', size);
        return this.http.get(`${this.API}/guichePage?${params.toString()}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    create(guiche) {
        return this.http.post(`${this.API}`, guiche).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    update(guiche) {
        return this.http.put(`${this.API}/${guiche.id}`, guiche).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(guiche) {
        if (guiche.id) {
            return this.update(guiche);
        }
        else {
            return this.create(guiche);
        }
    }
    remove(id) {
        return this.http.delete(`${this.API}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
}
GuicheService.ɵfac = function GuicheService_Factory(t) { return new (t || GuicheService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
GuicheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GuicheService, factory: GuicheService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GuicheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map