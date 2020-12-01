(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preliminary-preliminary-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/preliminary/preliminary.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preliminary/preliminary.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPreliminaryPreliminaryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <div class=\"container\">\n        <div class=\"logo-style\">\n            <img src=\"../../assets/electrolux-logo.png\" alt=\"logo\">\n        </div>\n        <div class=\"arrow-back\">\n            <img src=\"../../assets/back.png\" alt=\"back\">\n        </div>\n    </div>\n    <div class=\"img-preliminary\">\n        <img src=\"../../assets/preliminary.svg\" alt=\"img\">\n    </div>\n    <div class=\"container-radio\">\n\n\n        <div class=\"flex\">\n            <ion-radio-group value=\"biff\">\n                <ion-item>\n                    <ion-label class=\"text-radio\" color=\"primary\">Preliminary</ion-label>\n                    <ion-radio class=\"radio\" color=\"primary\" slot=\"start\"></ion-radio>\n                </ion-item>\n            </ion-radio-group>\n        </div>\n\n        <div class=\"flex\">\n            <ion-radio-group value=\"biff\">\n                <ion-item>\n                    <ion-label class=\"text-radio\">Process </ion-label>\n                    <ion-radio class=\"radio\" slot=\"start\"></ion-radio>\n                </ion-item>\n            </ion-radio-group>\n        </div>\n\n        <div class=\"flex\" (click)=\"next()\">\n            <ion-button size=\"large\">Next</ion-button>\n        </div>\n\n\n    </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/preliminary/preliminary-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/preliminary/preliminary-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PreliminaryPageRoutingModule */

    /***/
    function srcAppPreliminaryPreliminaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreliminaryPageRoutingModule", function () {
        return PreliminaryPageRoutingModule;
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


      var _preliminary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./preliminary.page */
      "./src/app/preliminary/preliminary.page.ts");

      var routes = [{
        path: '',
        component: _preliminary_page__WEBPACK_IMPORTED_MODULE_3__["PreliminaryPage"]
      }];

      var PreliminaryPageRoutingModule = function PreliminaryPageRoutingModule() {
        _classCallCheck(this, PreliminaryPageRoutingModule);
      };

      PreliminaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PreliminaryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/preliminary/preliminary.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/preliminary/preliminary.module.ts ***!
      \***************************************************/

    /*! exports provided: PreliminaryPageModule */

    /***/
    function srcAppPreliminaryPreliminaryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreliminaryPageModule", function () {
        return PreliminaryPageModule;
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


      var _preliminary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./preliminary-routing.module */
      "./src/app/preliminary/preliminary-routing.module.ts");
      /* harmony import */


      var _preliminary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./preliminary.page */
      "./src/app/preliminary/preliminary.page.ts");

      var PreliminaryPageModule = function PreliminaryPageModule() {
        _classCallCheck(this, PreliminaryPageModule);
      };

      PreliminaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _preliminary_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreliminaryPageRoutingModule"]],
        declarations: [_preliminary_page__WEBPACK_IMPORTED_MODULE_6__["PreliminaryPage"]]
      })], PreliminaryPageModule);
      /***/
    },

    /***/
    "./src/app/preliminary/preliminary.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/preliminary/preliminary.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPreliminaryPreliminaryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  position: relative;\n}\n\n.arrow-back {\n  position: absolute;\n  width: 4%;\n  margin-left: 15%;\n  margin-top: 50px;\n}\n\nion-item {\n  --inner-border-width: 0;\n}\n\n.logo-style {\n  position: absolute;\n  width: 25%;\n  margin-left: 37.5%;\n  margin-top: 40px;\n}\n\n.img-preliminary {\n  width: 35%;\n  margin-left: 32.5%;\n  margin-top: 25%;\n}\n\n.container-radio {\n  margin-top: 50px;\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  align-self: center;\n}\n\n.flex {\n  display: flex;\n}\n\n.text-radio {\n  font-size: 30px;\n  color: royalblue;\n  font-weight: 300;\n}\n\nion-radio {\n  --ion-color-step-400:#002d62;\n}\n\n.radio {\n  width: 45px;\n  height: 45px;\n}\n\nion-button {\n  --ion-color-primary: #002d62;\n  --border-radius:100px;\n  --padding-top: 0;\n  --padding-start: 2.5em;\n  --padding-end: 2.5em;\n  --padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlbGltaW5hcnkvcHJlbGltaW5hcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNBLHVCQUFBO0FBQ0E7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQ0E7RUFDSSw0QkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcHJlbGltaW5hcnkvcHJlbGltaW5hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcnJvdy1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuaW9uLWl0ZW17XG4tLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cblxuLmxvZ28tc3R5bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNy41JTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmltZy1wcmVsaW1pbmFyeXtcbiAgICB3aWR0aDogMzUlO1xuICAgIG1hcmdpbi1sZWZ0OjMyLjUlO1xuICAgIG1hcmdpbi10b3A6IDI1JTtcbn1cbi5jb250YWluZXItcmFkaW97XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6MTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGV4dC1yYWRpb3tcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHJveWFsYmx1ZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuXG59XG5cbmlvbi1yYWRpb3tcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDojMDAyZDYyO1xufVxuXG4ucmFkaW97XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG5pb24tYnV0dG9ue1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICMwMDJkNjI7XG4gICAgLS1ib3JkZXItcmFkaXVzOjEwMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyLjVlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAyLjVlbTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/preliminary/preliminary.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/preliminary/preliminary.page.ts ***!
      \*************************************************/

    /*! exports provided: PreliminaryPage */

    /***/
    function srcAppPreliminaryPreliminaryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreliminaryPage", function () {
        return PreliminaryPage;
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

      var PreliminaryPage = /*#__PURE__*/function () {
        function PreliminaryPage(router) {
          _classCallCheck(this, PreliminaryPage);

          this.router = router;
        }

        _createClass(PreliminaryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "next",
          value: function next() {
            this.router.navigate(['justification'], {
              replaceUrl: true
            });
          }
        }]);

        return PreliminaryPage;
      }();

      PreliminaryPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      PreliminaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preliminary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./preliminary.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/preliminary/preliminary.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./preliminary.page.scss */
        "./src/app/preliminary/preliminary.page.scss"))["default"]]
      })], PreliminaryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=preliminary-preliminary-module-es5.js.map