(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["record-record-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/record/record.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/record/record.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRecordRecordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <div class=\"container\">\n        <div class=\"logo-style\">\n            <img src=\"../../assets/electrolux-logo.png\" alt=\"logo\">\n        </div>\n        <div class=\"arrow-back\">\n            <img src=\"../../assets/back.png\" alt=\"back\">\n        </div>\n    </div>\n    <div class=\"img-style\">\n        <img src=\"../../assets/microphone.png\" alt=\"microfone\">\n    </div>\n    <div class=\"timer\">\n        <h1 >\n            Timer\n        </h1>\n    </div>\n    <div class=\"button-style\">\n        <ion-button expand=\"block\">Send</ion-button>\n    </div>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/record/record-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/record/record-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: RecordPageRoutingModule */

    /***/
    function srcAppRecordRecordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordPageRoutingModule", function () {
        return RecordPageRoutingModule;
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


      var _record_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./record.page */
      "./src/app/record/record.page.ts");

      var routes = [{
        path: '',
        component: _record_page__WEBPACK_IMPORTED_MODULE_3__["RecordPage"]
      }];

      var RecordPageRoutingModule = function RecordPageRoutingModule() {
        _classCallCheck(this, RecordPageRoutingModule);
      };

      RecordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/record/record.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/record/record.module.ts ***!
      \*****************************************/

    /*! exports provided: RecordPageModule */

    /***/
    function srcAppRecordRecordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordPageModule", function () {
        return RecordPageModule;
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


      var _record_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./record-routing.module */
      "./src/app/record/record-routing.module.ts");
      /* harmony import */


      var _record_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./record.page */
      "./src/app/record/record.page.ts");

      var RecordPageModule = function RecordPageModule() {
        _classCallCheck(this, RecordPageModule);
      };

      RecordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _record_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordPageRoutingModule"]],
        declarations: [_record_page__WEBPACK_IMPORTED_MODULE_6__["RecordPage"]]
      })], RecordPageModule);
      /***/
    },

    /***/
    "./src/app/record/record.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/record/record.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppRecordRecordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  position: relative;\n}\n\n.arrow-back {\n  position: absolute;\n  width: 4%;\n  margin-left: 15%;\n  margin-top: 50px;\n}\n\n.logo-style {\n  position: absolute;\n  width: 25%;\n  margin-left: 37.5%;\n  margin-top: 40px;\n}\n\n.img-style {\n  background-color: #d8d8d8;\n  border-radius: 100px;\n  margin-top: 20%;\n  padding: 50px;\n  width: 18%;\n  margin-left: 41%;\n}\n\n.timer {\n  width: 20%;\n  margin-left: 40%;\n  color: gray;\n  text-align: center;\n}\n\n.button-style {\n  width: 20%;\n  margin-left: 40%;\n  color: #a3a3a3;\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  font-size: 40px;\n}\n\nion-button {\n  --ion-color-primary: #3dc001;\n  --border-radius: 15px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-start: 1.1em;\n  --padding-end: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3JkL3JlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcmVjb3JkL3JlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcnJvdy1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmxvZ28tc3R5bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNy41JTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uaW1nLXN0eWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBtYXJnaW4tbGVmdDogNDElO1xufVxuXG4udGltZXJ7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1zdHlsZSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIGNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcblxufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjM2RjMDAxO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjFlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAxLjFlbTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/record/record.page.ts":
    /*!***************************************!*\
      !*** ./src/app/record/record.page.ts ***!
      \***************************************/

    /*! exports provided: RecordPage */

    /***/
    function srcAppRecordRecordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordPage", function () {
        return RecordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RecordPage = /*#__PURE__*/function () {
        function RecordPage() {
          _classCallCheck(this, RecordPage);
        }

        _createClass(RecordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecordPage;
      }();

      RecordPage.ctorParameters = function () {
        return [];
      };

      RecordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-record',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./record.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/record/record.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./record.page.scss */
        "./src/app/record/record.page.scss"))["default"]]
      })], RecordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=record-record-module-es5.js.map