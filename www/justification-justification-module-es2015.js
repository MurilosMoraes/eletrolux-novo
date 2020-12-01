(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["justification-justification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/justification/justification.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/justification/justification.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div>\n    <img class=\"arrow-back\" src=\"../../assets/back.png\" alt=\"back\">\n    <H1 class=\"title\">\n      General info\n    </H1>\n    <!-- <ion-button size=\"large\" class=\"bt-clear\">Clear Form</ion-button> -->\n    <ion-button size=\"large\" class=\"bt-clear\" (click)=\"next()\">Next</ion-button>\n\n    <img class=\"menu\" src=\"../../assets/menu.png\" alt=\"menu\" (click)=\"menu()\">\n  </div>\n\n\n  <div class=\"container\">\n    <div class=\"container-l\">\n      <p class=\"name-input-l mg-top-25-percent\">\n        Suplier Name\n      </p>\n      <ion-item class=\"style-input-l\">\n        <ion-label></ion-label>\n        <ion-input placeholder=\"Type Here\"></ion-input>\n      </ion-item>\n\n      <p class=\"name-input-l\">\n        Lead Auditor\n      </p>\n      <ion-item class=\"style-input-l\">\n        <ion-label></ion-label>\n        <ion-input placeholder=\"Type Here\"></ion-input>\n      </ion-item>\n\n      <p class=\"name-input-l\">\n        Assessment\n      </p>\n      <ion-item class=\"style-input-l\">\n        <ion-label></ion-label>\n        <ion-input placeholder=\"Type Here\"></ion-input>\n      </ion-item>\n\n      <p class=\"name-input-r \">\n        Comodit (step-1 select-1)\n      </p>\n      <ion-item class=\"style-input-l\">\n        <ion-label></ion-label>\n        <ion-select placeholder=\"Select One\">\n          <ion-select-option color=\"primary\" value=\"1\"></ion-select-option>\n          <ion-select-option color=\"primary\" value=\"2\"></ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n\n\n    <div class=\"container-r\">\n\n      <p class=\"name-input-r mg-top-25-percent\">\n        Audit date\n      </p>\n      <ion-item class=\"style-input-r\">\n        <ion-label></ion-label>\n        <ion-datetime></ion-datetime>\n      </ion-item>\n\n      <p class=\"name-input-r\">\n        Auditors\n      </p>\n      <ion-item class=\"style-input-r\">\n        <ion-label></ion-label>\n        <ion-input placeholder=\"Seperate with commas\"></ion-input>\n      </ion-item>\n\n      <p class=\"name-input-r \">\n        Product division (Select all that apply)\n      </p>\n      <ion-item class=\"style-input-r\">\n        <ion-label></ion-label>\n        <ion-select placeholder=\"Select One\">\n          <ion-select-option color=\"primary\" value=\"1\">Europe</ion-select-option>\n          <ion-select-option color=\"primary\" value=\"2\">North America</ion-select-option>\n          <ion-select-option color=\"primary\" value=\"2\">Latin America</ion-select-option>\n          <ion-select-option color=\"primary\" value=\"2\">Asia Pacific</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- <p class=\"name-input-r\">\n        Product Line (Select all that apply)\n      </p>\n      <ion-item class=\"style-input-r\">\n        <ion-label></ion-label>\n        <ion-select placeholder=\"Select One\">\n          <ion-select-option color=\"primary\" value=\"f\">Female</ion-select-option>\n          <ion-select-option color=\"primary\" value=\"m\">Male</ion-select-option>\n        </ion-select>\n      </ion-item> -->\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  \n</ion-footer>");

/***/ }),

/***/ "./src/app/justification/justification-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/justification/justification-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: JustificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JustificationPageRoutingModule", function() { return JustificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _justification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./justification.page */ "./src/app/justification/justification.page.ts");




const routes = [
    {
        path: '',
        component: _justification_page__WEBPACK_IMPORTED_MODULE_3__["JustificationPage"]
    }
];
let JustificationPageRoutingModule = class JustificationPageRoutingModule {
};
JustificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JustificationPageRoutingModule);



/***/ }),

/***/ "./src/app/justification/justification.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/justification/justification.module.ts ***!
  \*******************************************************/
/*! exports provided: JustificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JustificationPageModule", function() { return JustificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _justification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./justification-routing.module */ "./src/app/justification/justification-routing.module.ts");
/* harmony import */ var _justification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./justification.page */ "./src/app/justification/justification.page.ts");







let JustificationPageModule = class JustificationPageModule {
};
JustificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _justification_routing_module__WEBPACK_IMPORTED_MODULE_5__["JustificationPageRoutingModule"]
        ],
        declarations: [_justification_page__WEBPACK_IMPORTED_MODULE_6__["JustificationPage"]]
    })
], JustificationPageModule);



/***/ }),

/***/ "./src/app/justification/justification.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/justification/justification.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --ion-color-primary: #002d62;\n  --border-radius: 100px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 1.1em;\n  --padding-end: 1.1em;\n}\n\n.arrow-back {\n  position: absolute;\n  width: 4%;\n  left: 5%;\n  top: 30px;\n}\n\n.title {\n  position: absolute;\n  color: #002d62;\n  left: 14%;\n  top: 15px;\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.bt-clear {\n  position: absolute;\n  right: 15%;\n  top: 25px;\n}\n\n.menu {\n  width: 5%;\n  position: absolute;\n  right: 5%;\n  top: 30px;\n}\n\n.container {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n\n.container-l {\n  display: flex;\n  flex: 1;\n  width: 50%;\n  height: 100%;\n  align-items: center;\n  align-self: center;\n  flex-direction: column;\n}\n\nion-item {\n  --ion-item-background: #ffffff;\n  --border-width: 2px;\n  --border-radius: 15px;\n  --ion-item-border-color: #406289;\n}\n\n.container-r {\n  display: flex;\n  flex: 1;\n  width: 50%;\n  height: 100%;\n  align-items: center;\n  align-self: center;\n  flex-direction: column;\n}\n\n.style-input-l {\n  color: gray;\n  font-size: 16px;\n  font-weight: 700;\n  width: 75%;\n  margin-top: 0;\n}\n\nion-grid {\n  flex: 0;\n}\n\nion-select {\n  color: #545ca7;\n}\n\n.mg-top-25-percent {\n  margin-top: 25%;\n}\n\n.mg-top-30-percent {\n  margin-top: 30%;\n}\n\n.name-input-l {\n  width: 75%;\n  color: #a3a3a3;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.name-input-r {\n  width: 75%;\n  color: #a3a3a3;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.style-input-r {\n  color: gray;\n  font-size: 16px;\n  font-weight: 700;\n  width: 75%;\n  margin-top: 0;\n}\n\nion-footer {\n  --ion-background-color:blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVzdGlmaWNhdGlvbi9qdXN0aWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBREo7O0FBS0E7RUFDSSxPQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0ksMkJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2p1c3RpZmljYXRpb24vanVzdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMDAyZDYyO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMS4xZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMS4xZW07XG59XG5cblxuLmFycm93LWJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNCU7XG4gICAgbGVmdDogNSU7XG4gICAgdG9wOiAzMHB4O1xufVxuXG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzAwMmQ2MjtcbiAgICBsZWZ0OiAxNCU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnQtY2xlYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTUlO1xuICAgIHRvcDogMjVweDtcbn1cblxuLm1lbnUge1xuICAgIHdpZHRoOiA1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIHRvcDogMzBweDtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtLWlvbi1pdGVtLWJvcmRlci1jb2xvcjogIzQwNjI4OTtcblxufVxuXG4uY29udGFpbmVyLXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdHlsZS1pbnB1dC1sIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbn1cblxuaW9uLWdyaWR7XG4gICAgZmxleDogMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgY29sb3I6ICM1NDVjYTc7XG5cbn1cblxuLm1nLXRvcC0yNS1wZXJjZW50e1xuICAgIG1hcmdpbi10b3A6MjUlO1xufVxuLm1nLXRvcC0zMC1wZXJjZW50e1xuICAgIG1hcmdpbi10b3A6MzAlO1xufVxuLm5hbWUtaW5wdXQtbCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBjb2xvcjogcmdiKDE2MywgMTYzLCAxNjMpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgIFxufVxuLm5hbWUtaW5wdXQtcntcbiAgICB3aWR0aDogNzUlO1xuICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgXG59XG5cbi5zdHlsZS1pbnB1dC1ye1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLWZvb3RlcntcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/justification/justification.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/justification/justification.page.ts ***!
  \*****************************************************/
/*! exports provided: JustificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JustificationPage", function() { return JustificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let JustificationPage = class JustificationPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    menu() {
        this.router.navigate(['menu'], { replaceUrl: true });
    }
    next() {
        this.router.navigate(['questionnaire'], { replaceUrl: true });
    }
};
JustificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
JustificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-justification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./justification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/justification/justification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./justification.page.scss */ "./src/app/justification/justification.page.scss")).default]
    })
], JustificationPage);



/***/ })

}]);
//# sourceMappingURL=justification-justification-module-es2015.js.map