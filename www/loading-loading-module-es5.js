(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loading-loading-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoadingLoadingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n <div class=\"logo-style\">\n    <img src=\"../../assets/electrolux-logo.png\" alt=\"logo\">\n  </div>\n  <div>\n    <img class=\"img-style\" src=\"../../assets/loading.svg\" alt=\"loading...\">\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/loading/loading-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/loading/loading-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: LoadingPageRoutingModule */

    /***/
    function srcAppLoadingLoadingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingPageRoutingModule", function () {
        return LoadingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _loading_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loading.page */
      "./src/app/loading/loading.page.ts");

      var routes = [{
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"]
      }];

      var LoadingPageRoutingModule = function LoadingPageRoutingModule() {
        _classCallCheck(this, LoadingPageRoutingModule);
      };

      LoadingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoadingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/loading/loading.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/loading/loading.module.ts ***!
      \*******************************************/

    /*! exports provided: LoadingPageModule */

    /***/
    function srcAppLoadingLoadingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function () {
        return LoadingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _loading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-routing.module */
      "./src/app/loading/loading-routing.module.ts");
      /* harmony import */


      var _loading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loading.page */
      "./src/app/loading/loading.page.ts");

      var LoadingPageModule = function LoadingPageModule() {
        _classCallCheck(this, LoadingPageModule);
      };

      LoadingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loading_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoadingPageRoutingModule"]],
        declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]]
      })], LoadingPageModule);
      /***/
    },

    /***/
    "./src/app/loading/loading.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/loading/loading.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoadingLoadingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo-style {\n  width: 25%;\n  margin-left: 37.5%;\n  margin-top: 40px;\n}\n\n.img-style {\n  width: 30%;\n  margin-left: 35%;\n  margin-top: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLXN0eWxlIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNy41JTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbi5pbWctc3R5bGV7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/loading/loading.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/loading/loading.page.ts ***!
      \*****************************************/

    /*! exports provided: LoadingPage */

    /***/
    function srcAppLoadingLoadingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingPage", function () {
        return LoadingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoadingPage = /*#__PURE__*/function () {
        function LoadingPage() {
          _classCallCheck(this, LoadingPage);
        }

        _createClass(LoadingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoadingPage;
      }();

      LoadingPage.ctorParameters = function () {
        return [];
      };

      LoadingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loading.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loading.page.scss */
        "./src/app/loading/loading.page.scss"))["default"]]
      })], LoadingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=loading-loading-module-es5.js.map