(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["section-section-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div>\n    <img class=\"arrow-back\" src=\"../../assets/back.png\" alt=\"back\">\n    <H1 class=\"title\">\n      Questionnaire\n    </H1>\n    <ion-button size=\"large\" class=\"bt-clear\">Spell check</ion-button>\n\n    <img class=\"menu\" src=\"../../assets/menu.png\" alt=\"menu\">\n  </div>\n  <div class=\"container\">\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 1 - Strategy & Planning</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 2 - Purchasing</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 3 - Control of production │ Maintenance</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 4 - Monitoring e Measurement</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n  \n  </div>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\">Results</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/section/section-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/section/section-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPageRoutingModule", function() { return SectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _section_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section.page */ "./src/app/section/section.page.ts");




const routes = [
    {
        path: '',
        component: _section_page__WEBPACK_IMPORTED_MODULE_3__["SectionPage"]
    }
];
let SectionPageRoutingModule = class SectionPageRoutingModule {
};
SectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SectionPageRoutingModule);



/***/ }),

/***/ "./src/app/section/section.module.ts":
/*!*******************************************!*\
  !*** ./src/app/section/section.module.ts ***!
  \*******************************************/
/*! exports provided: SectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPageModule", function() { return SectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _section_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section-routing.module */ "./src/app/section/section-routing.module.ts");
/* harmony import */ var _section_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section.page */ "./src/app/section/section.page.ts");







let SectionPageModule = class SectionPageModule {
};
SectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _section_routing_module__WEBPACK_IMPORTED_MODULE_5__["SectionPageRoutingModule"]
        ],
        declarations: [_section_page__WEBPACK_IMPORTED_MODULE_6__["SectionPage"]]
    })
], SectionPageModule);



/***/ }),

/***/ "./src/app/section/section.page.scss":
/*!*******************************************!*\
  !*** ./src/app/section/section.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --ion-color-primary: #002d62;\n  --border-radius: 100px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 1.1em;\n  --padding-end: 1.1em;\n}\n\n.arrow-back {\n  position: absolute;\n  width: 4%;\n  left: 5%;\n  top: 30px;\n}\n\n.title {\n  position: absolute;\n  color: #002d62;\n  left: 14%;\n  top: 15px;\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.bt-clear {\n  position: absolute;\n  right: 15%;\n  top: 25px;\n}\n\n.menu {\n  width: 5%;\n  position: absolute;\n  right: 5%;\n  top: 30px;\n}\n\n.section-style {\n  color: #002d62;\n  font-size: 35px;\n  font-weight: 300;\n}\n\n.container {\n  width: 90%;\n  margin-top: 15%;\n  margin-left: 5%;\n}\n\n.relative {\n  position: relative;\n}\n\n.icon-style {\n  position: absolute;\n  font-size: 40px;\n  right: 10px;\n  top: 0;\n}\n\nion-icon {\n  color: #002d62;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi9zZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24vc2VjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMDAyZDYyO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMS4xZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMS4xZW07XG59XG5cblxuLmFycm93LWJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNCU7XG4gICAgbGVmdDogNSU7XG4gICAgdG9wOiAzMHB4O1xufVxuXG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzAwMmQ2MjtcbiAgICBsZWZ0OiAxNCU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnQtY2xlYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTUlO1xuICAgIHRvcDogMjVweDtcbn1cblxuLm1lbnUge1xuICAgIHdpZHRoOiA1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIHRvcDogMzBweDtcbn1cbi5zZWN0aW9uLXN0eWxle1xuICAgIGNvbG9yOiMwMDJkNjI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDoxNSUgO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcblxufVxuLnJlbGF0aXZle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pY29uLXN0eWxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcmlnaHQ6IDEwcHggO1xuICAgIHRvcDogMDtcbn1cbmlvbi1pY29ue1xuICAgIGNvbG9yOiMwMDJkNjI7XG59Il19 */");

/***/ }),

/***/ "./src/app/section/section.page.ts":
/*!*****************************************!*\
  !*** ./src/app/section/section.page.ts ***!
  \*****************************************/
/*! exports provided: SectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPage", function() { return SectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SectionPage = class SectionPage {
    constructor() { }
    ngOnInit() {
    }
};
SectionPage.ctorParameters = () => [];
SectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./section.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./section.page.scss */ "./src/app/section/section.page.scss")).default]
    })
], SectionPage);



/***/ })

}]);
//# sourceMappingURL=section-section-module-es2015.js.map