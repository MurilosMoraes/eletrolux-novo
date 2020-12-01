(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questionnaire-questionnaire-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div *ngIf=\"step == 0\">\n    <img class=\"arrow-back\" src=\"../../assets/back.png\" alt=\"back\">\n    <H1 class=\"title\">\n      Questionnaire\n    </H1>\n    <ion-button size=\"large\" class=\"bt-clear\">Spell check</ion-button>\n\n    <img class=\"menu\" src=\"../../assets/menu.png\" alt=\"menu\" (click)=\"menu()\">\n  </div>\n  <div class=\"container\" *ngIf=\"step == 0\">\n    <div class=\"relative\" *ngFor=\"let s of sections; let i = index\" (click)=\"select(s, i)\">\n      <h1 class=\"section-style\">{{s.title}}</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <!-- <div class=\"relative\">\n      <h1 class=\"section-style\">Section 1 - Strategy & Planning</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div> -->\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 2 - Purchasing</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 3 - Control of production │ Maintenance</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 4 - Monitoring e Measurement</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 5 - Identification & Traceability │ Materials </h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 6 - Calibration</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 7 - Documentation control & Record</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n    <div class=\"relative\">\n      <h1 class=\"section-style\">Section 8 - Corrective action and improvement</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n  </div>\n\n  <!-- STEP 1 -->\n  <div *ngIf=\"step == 1\">\n    <img class=\"arrow-back\" src=\"../../assets/back.png\" alt=\"back\" (click)=\"step = 0\">\n    <H1 class=\"title\">\n      {{selected.title}}\n    </H1>\n    <ion-button size=\"large\" class=\"bt-clear\">Spell check</ion-button>\n\n    <img class=\"menu\" src=\"../../assets/menu.png\" alt=\"menu\" (click)=\"menu()\">\n  </div>\n  <div class=\"container\" *ngIf=\"step == 1\">\n    <div class=\"relative\" *ngFor=\"let q of selected.questions; let i = index\" (click)=\"selectQ(q, i)\">\n      <h1 class=\"section-style\" style=\"font-size: 15px; color: gray\">{{q.title}}</h1>\n      <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n    </div>\n  </div>\n\n  <!-- STEP 2 -->\n  <div *ngIf=\"step == 2\" style=\"background: #002d62; width: 100%; height: 100%;\">\n    <div *ngIf=\"step == 2\" style=\"background: #002d62; width: 100%; height: 50px;\">\n      <img class=\"arrow-back\" src=\"../../assets/back.png\" alt=\"back\" (click)=\"step = 0\">\n      <!-- <H1 class=\"title\" style=\"color: white\">\n        Aa\n      </H1> -->\n      <!-- <ion-button size=\"large\" class=\"bt-clear\">Spell check</ion-button> -->\n\n      <img class=\"menu\" src=\"../../assets/menu.png\" alt=\"menu\" (click)=\"menu()\">\n    </div>\n    <div class=\"container\" *ngIf=\"step == 2\">\n      <div class=\"relative\">\n        <h1 class=\"section-style\" style=\"font-size: 20px; color: rgb(201, 201, 201)\">\n          Have Annual Quality Targets been agreed and submitted to Electrolux and/or other customers?\n        </h1>\n        <ion-icon class=\"icon-style\" name=\"radio-button-off-outline\"></ion-icon>\n      </div>\n\n      <div class=\"relative\">\n        <h1 class=\"section-style\" style=\"font-size: 20px; color: rgb(201, 201, 201)\">\n          Rating\n        </h1>\n\n        <ion-row>\n          <ion-col col-3>\n            <div class=\"flex\">\n              <ion-radio-group value=\"biff\">\n                <ion-item>\n                  <ion-label class=\"text-radio\" color=\"primary\">Preliminary</ion-label>\n                  <ion-radio class=\"radio\" color=\"primary\" slot=\"start\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </div>ƒ\n          </ion-col>\n        </ion-row>\n       \n\n\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<!-- <ion-footer *ngIf=\"step == 0 || step == 1\">\n  <ion-button expand=\"full\">Results</ion-button>\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/questionnaire/questionnaire-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: QuestionnairePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnairePageRoutingModule", function() { return QuestionnairePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _questionnaire_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questionnaire.page */ "./src/app/questionnaire/questionnaire.page.ts");




const routes = [
    {
        path: '',
        component: _questionnaire_page__WEBPACK_IMPORTED_MODULE_3__["QuestionnairePage"]
    }
];
let QuestionnairePageRoutingModule = class QuestionnairePageRoutingModule {
};
QuestionnairePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuestionnairePageRoutingModule);



/***/ }),

/***/ "./src/app/questionnaire/questionnaire.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.module.ts ***!
  \*******************************************************/
/*! exports provided: QuestionnairePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnairePageModule", function() { return QuestionnairePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questionnaire-routing.module */ "./src/app/questionnaire/questionnaire-routing.module.ts");
/* harmony import */ var _questionnaire_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questionnaire.page */ "./src/app/questionnaire/questionnaire.page.ts");







let QuestionnairePageModule = class QuestionnairePageModule {
};
QuestionnairePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionnairePageRoutingModule"]
        ],
        declarations: [_questionnaire_page__WEBPACK_IMPORTED_MODULE_6__["QuestionnairePage"]]
    })
], QuestionnairePageModule);



/***/ }),

/***/ "./src/app/questionnaire/questionnaire.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --ion-color-primary: #002d62;\n  --border-radius: 100px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 1.1em;\n  --padding-end: 1.1em;\n}\n\n.arrow-back {\n  position: absolute;\n  width: 4%;\n  left: 5%;\n  top: 30px;\n}\n\n.title {\n  position: absolute;\n  color: #002d62;\n  left: 14%;\n  top: 15px;\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.bt-clear {\n  position: absolute;\n  right: 15%;\n  top: 25px;\n}\n\n.menu {\n  width: 5%;\n  position: absolute;\n  right: 5%;\n  top: 30px;\n}\n\n.section-style {\n  color: #002d62;\n  font-size: 35px;\n  font-weight: 300;\n}\n\n.container {\n  width: 90%;\n  margin-top: 15%;\n  margin-left: 5%;\n}\n\n.relative {\n  position: relative;\n}\n\n.icon-style {\n  position: absolute;\n  font-size: 40px;\n  right: 10px;\n  top: 0;\n}\n\nion-icon {\n  color: #002d62;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25uYWlyZS9xdWVzdGlvbm5haXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMDAyZDYyO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMS4xZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMS4xZW07XG59XG5cblxuLmFycm93LWJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNCU7XG4gICAgbGVmdDogNSU7XG4gICAgdG9wOiAzMHB4O1xufVxuXG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzAwMmQ2MjtcbiAgICBsZWZ0OiAxNCU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnQtY2xlYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTUlO1xuICAgIHRvcDogMjVweDtcbn1cblxuLm1lbnUge1xuICAgIHdpZHRoOiA1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIHRvcDogMzBweDtcbn1cbi5zZWN0aW9uLXN0eWxle1xuICAgIGNvbG9yOiMwMDJkNjI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDoxNSUgO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcblxufVxuLnJlbGF0aXZle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pY29uLXN0eWxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcmlnaHQ6IDEwcHggO1xuICAgIHRvcDogMDtcbn1cbmlvbi1pY29ue1xuICAgIGNvbG9yOiMwMDJkNjI7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.page.ts ***!
  \*****************************************************/
/*! exports provided: QuestionnairePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnairePage", function() { return QuestionnairePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let QuestionnairePage = class QuestionnairePage {
    constructor(router) {
        this.router = router;
        this.sections = [
            {
                "title": "Section 1 - Strategy & Planning",
                "questions": [
                    {
                        "title": "Have Annual Quality Targets been agreed and submitted to Electrolux and/or other customers?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Have the trends in meeting the above objectives, included the internal targets, been analysed and action taken where the targets are not being achieved?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Is there a system to establish quality costs that monitors internal failures, external failures, prevention, and appraisal?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Have specific improvement projects been identified, and clearly scheduled and approved, as part of management review?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Are there appropriate measurables for improvement projects with evidence of regular follow up within the defined schedule?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Have Quality Plans been prepared defining controls for new product introduction and changes to existing products resulting in approved control plans?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Is there an effective process for ensuring Electrolux specifications and changes to them are reviewed and communicated to the functions concerned?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Does an effective process exist for communicating changes to products and processes where these can potentially affect the form, fit or function of the product?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Are Process Risk Assessment/F.M.E.A. prepared and utilized (after definition of process flow) with input from all relevant departments?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Is there evidence that corrective actions resulting from Process Risk Assessment/F.M.E.A are implemented and that such Risk Assessment are updated and re-issued at product or process change?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Have Electrolux or other customer's preliminary process capability requirements been met? Ppk / Cmk ≥ 1.67.",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                    {
                        "title": "Are the relevant information on actions taken including changes to procedures submitted for management review?",
                        "rating": null,
                        "car": null,
                        "comments": null
                    },
                ]
            }
        ];
        this.selected = null;
        this.selectedIndex = null;
        this.step = 0;
    }
    ngOnInit() {
    }
    select(s, i) {
        this.selected = s;
        this.selectedIndex = i;
        console.log(this.selected);
        this.step = 1;
    }
    // selectQ() {
    //   this.step = 2;
    // }
    menu() {
        this.router.navigate(['menu'], { replaceUrl: true });
    }
};
QuestionnairePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
QuestionnairePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questionnaire',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./questionnaire.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questionnaire/questionnaire.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./questionnaire.page.scss */ "./src/app/questionnaire/questionnaire.page.scss")).default]
    })
], QuestionnairePage);



/***/ })

}]);
//# sourceMappingURL=questionnaire-questionnaire-module-es2015.js.map