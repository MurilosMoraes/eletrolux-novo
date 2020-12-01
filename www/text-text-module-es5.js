(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["text-text-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/text/text.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/text/text.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTextTextPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"container\">\n\n    <div class=\"logo-style\">\n      <img src=\"../../assets/electrolux-logo.png\" alt=\"logo\">\n    </div>\n\n    <div class=\"arrow-back\">\n      <img src=\"../../assets/back.png\" alt=\"back\">\n    </div>\n  </div>\n\n  <div class=\"img-style\">\n    <img src=\"../../assets/text.svg\" alt=\"img\">\n  </div>\n\n  <div>\n\n    <p class=\"name-input\">\n      Lorem ipsum\n    </p>\n    <ion-item class=\"style-input\">\n      <ion-label></ion-label>\n      <ion-input placeholder=\"Type Here\"></ion-input>\n    </ion-item>\n\n  </div>\n\n  <div class=\"button-style\">\n    <ion-button expand=\"block\">Send</ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/text/text-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/text/text-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TextPageRoutingModule */

    /***/
    function srcAppTextTextRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextPageRoutingModule", function () {
        return TextPageRoutingModule;
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


      var _text_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./text.page */
      "./src/app/text/text.page.ts");

      var routes = [{
        path: '',
        component: _text_page__WEBPACK_IMPORTED_MODULE_3__["TextPage"]
      }];

      var TextPageRoutingModule = function TextPageRoutingModule() {
        _classCallCheck(this, TextPageRoutingModule);
      };

      TextPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TextPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/text/text.module.ts":
    /*!*************************************!*\
      !*** ./src/app/text/text.module.ts ***!
      \*************************************/

    /*! exports provided: TextPageModule */

    /***/
    function srcAppTextTextModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextPageModule", function () {
        return TextPageModule;
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


      var _text_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./text-routing.module */
      "./src/app/text/text-routing.module.ts");
      /* harmony import */


      var _text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./text.page */
      "./src/app/text/text.page.ts");

      var TextPageModule = function TextPageModule() {
        _classCallCheck(this, TextPageModule);
      };

      TextPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _text_routing_module__WEBPACK_IMPORTED_MODULE_5__["TextPageRoutingModule"]],
        declarations: [_text_page__WEBPACK_IMPORTED_MODULE_6__["TextPage"]]
      })], TextPageModule);
      /***/
    },

    /***/
    "./src/app/text/text.page.scss":
    /*!*************************************!*\
      !*** ./src/app/text/text.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTextTextPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  position: relative;\n}\n\n.arrow-back {\n  position: absolute;\n  width: 4%;\n  margin-left: 15%;\n  margin-top: 50px;\n}\n\n.logo-style {\n  position: absolute;\n  width: 25%;\n  margin-left: 37.5%;\n  margin-top: 40px;\n}\n\n.img-style {\n  width: 20%;\n  margin-left: 40%;\n  margin-top: 20%;\n}\n\n.style-input {\n  color: gray;\n  font-size: 16px;\n  font-weight: 700;\n  width: 50%;\n  margin-left: 25%;\n  margin-top: 10px;\n}\n\nion-button {\n  --ion-color-primary: #3dc001;\n  --border-radius: 15px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-start: 1.1em;\n  --padding-end: 1.1em;\n}\n\nion-item {\n  --ion-item-background: #ffffff;\n  --border-width: 2px;\n  --border-radius: 15px;\n  --ion-item-border-color: #406289;\n}\n\n.name-input {\n  width: 50%;\n  margin-left: 25%;\n  color: #a3a3a3;\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 30px;\n}\n\n.button-style {\n  width: 20%;\n  margin-left: 55%;\n  color: #a3a3a3;\n  font-weight: bold;\n  margin-top: 30px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dC90ZXh0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90ZXh0L3RleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcnJvdy1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmxvZ28tc3R5bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNy41JTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uaW1nLXN0eWxle1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgXG59XG4uc3R5bGUtaW5wdXQge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjM2RjMDAxO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjFlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAxLjFlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtLWlvbi1pdGVtLWJvcmRlci1jb2xvcjogIzQwNjI4OTtcblxufVxuXG4ubmFtZS1pbnB1dCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uYnV0dG9uLXN0eWxlIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XG4gICAgY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/text/text.page.ts":
    /*!***********************************!*\
      !*** ./src/app/text/text.page.ts ***!
      \***********************************/

    /*! exports provided: TextPage */

    /***/
    function srcAppTextTextPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextPage", function () {
        return TextPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TextPage = /*#__PURE__*/function () {
        function TextPage() {
          _classCallCheck(this, TextPage);
        }

        _createClass(TextPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TextPage;
      }();

      TextPage.ctorParameters = function () {
        return [];
      };

      TextPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./text.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/text/text.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./text.page.scss */
        "./src/app/text/text.page.scss"))["default"]]
      })], TextPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=text-text-module-es5.js.map