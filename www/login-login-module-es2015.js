(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"container\">\n    <div class=\"container-l\">\n      <div class=\"container-logo\">\n        <img class=\"logo-style\" src=\"../../assets/electrolux-logo.png\" alt=\"logo\">\n      </div>\n      <div>\n        <p class=\"sub-style\">Global Supplier Quality - Process Assessments</p>\n      </div>\n      <div>\n        <p class=\"name-input\">\n          Full Name\n        </p>\n        <ion-item class=\"style-input\">\n          <ion-label></ion-label>\n          <ion-input placeholder=\"Type Here\"></ion-input>\n        </ion-item>\n        <p class=\"name-input\">\n          Biz User\n        </p>\n        <ion-item class=\"style-input\">\n          <ion-label></ion-label>\n          <ion-input placeholder=\"Type Here\"></ion-input>\n        </ion-item>\n      </div>\n      <div class=\"button-style\" (click)=\"toHome()\">\n        <ion-button expand=\"block\">Login</ion-button>\n\n      </div>\n    </div>\n    <div class=\"container-r\">\n\n      <div class=\"container-welcome\">\n        <h1 class=\"txt-welcome\">\n          Welcome\n        </h1>\n      </div>\n      <div class=\"img-container\">\n        <img class=\"img-login\" src=\"../../assets/login.svg\" alt=\"imagem\">\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  width: 100%;\n}\n\n.logo-style {\n  width: 50%;\n  margin-left: 25%;\n  margin-top: 50px;\n}\n\nion-item {\n  --ion-item-background: #ffffff;\n  --border-width: 2px;\n  --border-radius: 15px;\n  --ion-item-border-color: #406289;\n}\n\n.sub-style {\n  width: 60%;\n  margin-left: 20%;\n  color: #a3a3a3;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.name-input {\n  width: 60%;\n  margin-left: 20%;\n  color: #a3a3a3;\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 30px;\n}\n\nion-button {\n  --ion-color-primary: #002d62;\n  --border-radius: 15px;\n  --padding-top: 30px;\n  --padding-bottom: 30px;\n  --padding-start: 1.1em;\n  --padding-end: 1.1em;\n}\n\n.button-style {\n  width: 60%;\n  margin-left: 20%;\n  color: #a3a3a3;\n  font-weight: bold;\n  margin-top: 30px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.style-input {\n  color: gray;\n  font-size: 16px;\n  font-weight: 700;\n  width: 60%;\n  margin-left: 20%;\n  margin-top: 10px;\n}\n\n.txt-welcome {\n  font-size: 32px;\n  color: #dfdfdf;\n}\n\n.container-l {\n  display: flex;\n  flex: 1;\n  background-color: #ffffff;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n}\n\n.container-r {\n  display: flex;\n  flex: 1;\n  background-color: #406289;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  align-self: center;\n}\n\n.container-welcome {\n  display: flex;\n  flex: 1;\n  margin-top: 10%;\n}\n\n.img-container {\n  display: flex;\n  flex: 1;\n  margin-bottom: 20%;\n}\n\n.img-login {\n  width: 60%;\n  margin-left: 22%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRko7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbi5sb2dvLXN0eWxlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtLWlvbi1pdGVtLWJvcmRlci1jb2xvcjogIzQwNjI4OTtcblxufVxuXG4uc3ViLXN0eWxlIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5uYW1lLWlucHV0IHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzAwMmQ2MjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMzBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMS4xZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMS4xZW07XG59XG5cbi5idXR0b24tc3R5bGUge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBjb2xvcjogcmdiKDE2MywgMTYzLCAxNjMpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbn1cblxuLnN0eWxlLWlucHV0IHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxufVxuXG4udHh0LXdlbGNvbWUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xufVxuXG4uY29udGFpbmVyLWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyLXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA2Mjg5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG59XG5cbi5jb250YWluZXItd2VsY29tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmltZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG5cbi5pbWctbG9naW4ge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIyJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toHome() {
        this.router.navigate(['home'], { replaceUrl: true });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map