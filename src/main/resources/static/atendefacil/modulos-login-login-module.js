(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-login-login-module"],{

/***/ "3bMk":
/*!*******************************************************!*\
  !*** ./src/app/modulos/login/login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-form/login-form.component */ "v8bM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__["LoginFormComponent"] }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "IzWv":
/*!***********************************************!*\
  !*** ./src/app/modulos/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "3bMk");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-form/login-form.component */ "v8bM");







class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "v8bM":
/*!******************************************************************!*\
  !*** ./src/app/modulos/login/login-form/login-form.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/global.service */ "KmtZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Usu\u00E1rio ou Senha n\u00E3o encontrado! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginFormComponent_i_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 51);
} }
function LoginFormComponent_i_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 51);
} }
function LoginFormComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Usu\u00E1rio ou senha n\u00E3o encontrado!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginFormComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Senha alterado com sucesso!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginFormComponent {
    constructor(fb, globalService, router) {
        this.fb = fb;
        this.globalService = globalService;
        this.router = router;
        this.mat = '';
        this.nome = '';
        this.role = '';
        this.unidade = '';
        this.msgError = false;
        this.msgErrorNovaSenha = false;
        this.mostrarMens = false;
        this.confereNovaSenha = false;
        this.confereConfirmaNovaSenha = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            matricula: ['', []],
            senha: ['', []]
        });
        this.loginAlteraForm = this.fb.group({
            matricula: ['', []],
            senha: ['', []],
            novaSenha: ['', []],
            confirmarNovaSenha: ['', []]
        });
    }
    fechar() {
        this.msgError = false;
    }
    logar() {
        let matricula = this.loginForm.get('matricula').value;
        let senha = this.loginForm.get('senha').value;
        this.globalService.logar(matricula, senha).subscribe((dados) => {
            if (matricula === dados.servidor.matricula && senha === dados.senha) {
                this.globalService.setLoggedIn(true);
                this.router.navigate(['/']);
                this.globalService.pegarDados(dados.servidor.nome, dados.role.descricao, dados.servidor.matricula, dados.unidade.descricao);
                this.globalService.setMatricula(dados.servidor.matricula),
                    this.globalService.setNome(dados.servidor.nome),
                    this.globalService.setRole(dados.role.descricao),
                    this.globalService.setUnidadeId(dados.unidade.id),
                    this.globalService.setUnidade(dados.unidade.descricao),
                    this.globalService.getMatricula(),
                    this.globalService.getNome(),
                    this.globalService.getRole(),
                    this.globalService.getUnidadeId(),
                    this.globalService.getUnidade();
            }
        }, (error) => { this.msgError = true; });
    }
    validarNovaSenha() {
        let novaSenha = this.loginAlteraForm.get('novaSenha').value;
        if (novaSenha != "") {
            this.confereNovaSenha = true;
        }
        else {
            this.confereNovaSenha = false;
        }
    }
    validarConfereNovaSenha() {
        let novaSenha = this.loginAlteraForm.get('novaSenha').value;
        let confirmarNovaSenha = this.loginAlteraForm.get('confirmarNovaSenha').value;
        if (novaSenha === confirmarNovaSenha) {
            this.confereConfirmaNovaSenha = true;
        }
        if (confirmarNovaSenha === "") {
            this.confereConfirmaNovaSenha = false;
        }
    }
    validarDiferenca() {
        let novaSenha = this.loginAlteraForm.get('novaSenha').value;
        let confirmarNovaSenha = this.loginAlteraForm.get('confirmarNovaSenha').value;
        if (novaSenha == "" || novaSenha != confirmarNovaSenha) {
            this.confereConfirmaNovaSenha = false;
        }
    }
    alterarSenha() {
        if (this.loginAlteraForm.valid) {
            let matricula = this.loginAlteraForm.get('matricula').value;
            let senha = this.loginAlteraForm.get('senha').value;
            let novaSenha = this.loginAlteraForm.get('novaSenha').value;
            let confirmarNovaSenha = this.loginAlteraForm.get('confirmarNovaSenha').value;
            this.globalService.alterarSenha(matricula, senha, novaSenha, confirmarNovaSenha).subscribe((success) => {
                this.globalService.saveShow("Alterada com Sucesso!", "Senha"),
                    this.confereNovaSenha = false,
                    this.confereConfirmaNovaSenha = false;
            }, (error) => { this.msgErrorNovaSenha = true; });
        }
        this.loginAlteraForm.reset();
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], decls: 72, vars: 7, consts: [[1, "col-md-12", 2, "margin-left", "8%"], [1, "d-flex", "justify-content-center", "mt-5"], ["src", "assets/atende_facil.jpg", "id", "logo", 2, "height", "100px", "width", "150px", "border-radius", "100%"], [1, "h4", "d-flex", "justify-content-center", "mt-4"], [1, "d-flex", "justify-content-center", 2, "font-weight", "bold"], [1, "d-flex", "justify-content-center", "mt-2"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [3, "formGroup"], [1, "card", 2, "box-shadow", "5px 5px 10px #000"], [1, "card-header"], [1, "card-body"], [1, "form-group", "col-md-12"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "fas", "fa-user"], ["id", "id", "type", "text", "formControlName", "matricula", "placeholder", "MATR\u00CDCULA", 1, "form-control", 3, "blur"], [1, "fas", "fa-key"], ["id", "senha", "type", "password", "formControlName", "senha", "placeholder", "SENHA", 1, "form-control", 3, "focus"], [1, "form-row", "col-md-12", 2, "margin-top", "5px"], ["type", "submit", 1, "btn", "btn-success", "col-md-12", 3, "click"], [1, "fas", "fa-sign-in-alt"], [1, "form-row", "col-md-12", "d-flex", "justify-content-center", "mt-2"], ["type", "button", "data-toggle", "modal", "data-target", "#ModalSenha", 1, "btn", "btn-primary", "col-md-12"], ["id", "ModalSenha", "tabindex", "-1", "role", "dialog", "aria-labelledby", "TituloModalCentralizado", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "TituloModalCentralizado", 1, "modal-title"], [1, "modal-body", 2, "font-weight", "bold", "margin-left", "120px"], [2, "margin-left", "120px"], [1, "form-group", "col-md-8"], ["id", "idAtual", "type", "text", "formControlName", "matricula", "placeholder", "MATR\u00CDCULA", 1, "form-control"], ["id", "senhaAtual", "type", "password", "formControlName", "senha", "placeholder", "SENHA ATUAL", 1, "form-control"], ["id", "novaSenha", "type", "password", "formControlName", "novaSenha", "placeholder", "NOVA SENHA", 1, "form-control", 3, "input", "blur", "focus"], ["class", "fas fa-check", "style", "margin-left: 10px; margin-top: 10px; color: green;", 4, "ngIf"], ["id", "confereConfirmaNovasenha", "type", "password", "formControlName", "confirmarNovaSenha", "placeholder", "CONFIRMA SENHA", 1, "form-control", 3, "input", "blur", "focus"], [1, "form-row", "col-md-12", "mt-2", 2, "color", "blue", "font-weight", "bold", "margin-left", "20px"], [1, "col-md-12", "d-flex", "justify-content-center"], ["style", "text-align: center;", "class", "col-10 alert alert-danger", "role", "alert", 4, "ngIf"], [1, "col-md-12", "d-flex", "justify-content-center", "mt-2"], ["style", "text-align: center;", "class", "col-10 alert alert-success", "role", "alert", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "fas", "fa-window-close"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-check-square"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "button", "data-dismiss", "alert", "aria-label", "Fechar", 1, "close"], ["aria-hidden", "true"], [1, "fas", "fa-check", 2, "margin-left", "10px", "margin-top", "10px", "color", "green"], ["role", "alert", 1, "col-10", "alert", "alert-danger", 2, "text-align", "center"], ["role", "alert", 1, "col-10", "alert", "alert-success", 2, "text-align", "center"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " AtendeF\u00E1cilWeb ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sistema de Agendamento, Atendimento e Controle de chamada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginFormComponent_div_8_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Entrar com o Matr\u00EDcula e Senha. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function LoginFormComponent_Template_input_blur_20_listener() { return ctx.fechar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function LoginFormComponent_Template_input_focus_26_listener() { return ctx.fechar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_Template_button_click_28_listener() { return ctx.logar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Entrar\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Gerenciar a Senha\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Gerenciador de Senhas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Para alterar a senha. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LoginFormComponent_Template_input_input_53_listener() { return ctx.validarNovaSenha(); })("blur", function LoginFormComponent_Template_input_blur_53_listener() { return ctx.validarDiferenca(); })("focus", function LoginFormComponent_Template_input_focus_53_listener() { return ctx.validarDiferenca(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, LoginFormComponent_i_54_Template, 1, 0, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LoginFormComponent_Template_input_input_57_listener() { return ctx.validarConfereNovaSenha(); })("blur", function LoginFormComponent_Template_input_blur_57_listener() { return ctx.validarDiferenca(); })("focus", function LoginFormComponent_Template_input_focus_57_listener() { return ctx.validarDiferenca(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, LoginFormComponent_i_58_Template, 1, 0, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Caso esqueceu sua senha, entre em contato com o apoio de inform\u00E1tica de sua unidade. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, LoginFormComponent_div_62_Template, 3, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, LoginFormComponent_div_64_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u00A0Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_Template_button_click_69_listener() { return ctx.alterarSenha(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u00A0Confirmar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msgError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginAlteraForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confereNovaSenha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confereConfirmaNovaSenha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msgErrorNovaSenha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarMens);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvbG9naW4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modulos-login-login-module.js.map