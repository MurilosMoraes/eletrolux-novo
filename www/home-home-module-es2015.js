(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"logo-style\">\n    <img src=\"../../assets/electrolux-logo.png\" alt=\"logo\">\n  </div>\n\n  <div class=\"container\" (click)=\"new()\">\n\n    <div>\n      <img class=\"more-style\" src=\"../../assets/more.png\" alt=\"img\">\n    </div>\n\n    <div class=\"create\" >\n      <h1>Create new audit</h1>\n    </div>\n  </div>\n\n  <div class=\"container-card\" (click)=\"menu()\">\n\n    <div class=\"blue-card\">\n      <img class=\"img-card\" src=\"../../assets/img-card.svg\" alt=\"img\">\n    </div>\n\n    <div class=\"white-card\">\n\n      <h1 class=\"title-card\">Supplier Name - 30/10/2020</h1>\n\n      <p class=\"subtitle-card\">\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae distinctio, vel exercitationem\n      </p>\n\n      <div class=\"status\">\n        <p class=\"absolute\">Incomplete</p>\n      </div>\n\n      <img class=\"down\" src=\"../../assets/down.png\" alt=\"img\">\n    </div>\n\n  </div>\n\n  <div>\n\n    <ion-button class=\"button\" (click)=\"backup()\">Backup</ion-button>\n\n    <!-- <img class=\"help\" src=\"../../assets/help-home.png\" alt=\"help\"> -->\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-style {\n  width: 25%;\n  margin-left: 37.5%;\n  margin-top: 40px;\n}\n\n.container {\n  width: 90%;\n  height: 20%;\n  margin-top: 5%;\n  margin-left: 5%;\n  margin-right: 5%;\n  position: relative;\n}\n\n.more-style {\n  position: absolute;\n  width: 5%;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\n.create {\n  position: absolute;\n  margin-top: 4%;\n  margin-left: 12%;\n  color: #406289;\n}\n\n.container-card {\n  position: relative;\n  margin-left: 10%;\n  width: 70%;\n  height: 25%;\n  border-radius: 15px;\n  box-shadow: 0px 0px 10px 0px #545454;\n}\n\n.blue-card {\n  position: absolute;\n  background-color: #406289;\n  width: 45%;\n  border-radius: 15px;\n  height: 100%;\n}\n\n.white-card {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  right: 0;\n}\n\n.img-card {\n  width: 56%;\n  margin-left: 22%;\n  margin-top: 25px;\n}\n\n.title-card {\n  color: #406289;\n}\n\n.subtitle-card {\n  color: #91a0b1;\n  font-weight: 500;\n}\n\nion-button {\n  --background: rgb(126, 126, 126);\n  --border-radius: 100px;\n}\n\n.down {\n  position: absolute;\n  width: 8%;\n  right: 20px;\n  bottom: 10px;\n}\n\n.status {\n  background-color: #ff7c7c;\n  border-radius: 100px;\n  width: 130px;\n  height: 30px;\n  text-align: center;\n  max-width: 40%;\n  position: absolute;\n  bottom: 5px;\n}\n\n.absolute {\n  margin-top: 2px;\n}\n\n.button {\n  position: absolute;\n  bottom: 10%;\n  margin-left: 10%;\n}\n\n.help {\n  position: absolute;\n  bottom: 10%;\n  right: 10%;\n  width: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFHQSxvQ0FBQTtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBREY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0FBSEY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSkY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1zdHlsZSB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiAzNy41JTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMjAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb3JlLXN0eWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5jcmVhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tbGVmdDogMTIlO1xuICBjb2xvcjogIzQwNjI4OTtcbn1cblxuLmNvbnRhaW5lci1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoODQsIDg0LCA4NCwgMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDg0LCA4NCwgODQsIDEpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoODQsIDg0LCA4NCwgMSk7XG5cbn1cblxuLmJsdWUtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNjI4OTtcbiAgd2lkdGg6IDQ1JTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi53aGl0ZS1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuXG59XG5cbi5pbWctY2FyZCB7XG4gIHdpZHRoOiA1NiU7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG5cbn1cblxuLnRpdGxlLWNhcmQge1xuICBjb2xvcjogIzQwNjI4OTtcbn1cblxuLnN1YnRpdGxlLWNhcmQge1xuICBjb2xvcjogIzkxYTBiMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEyNiwgMTI2LCAxMjYpO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG5cbi5kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOCU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5zdGF0dXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMjQsIDEyNCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbn1cbi5hYnNvbHV0ZXtcbiAgbWFyZ2luLXRvcDoycHggO1xufVxuXG4uYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcblxufVxuXG4uaGVscCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiAxMCU7XG4gIHdpZHRoOiA1JTtcblxufVxuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
    new() {
        this.router.navigate(['preliminary'], { replaceUrl: true });
    }
    backup() {
        alert("Backup em progresso, você será avisado quando for concluído.");
    }
    menu() {
        this.router.navigate(['menu'], { replaceUrl: true });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map