(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







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

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n * Specific styles of signin component\r\n */\n/*\r\n * General styles\r\n */\n.ion-content {\n  height: 100%;\n  --background: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\n}\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n/*\r\n * Card component\r\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*\r\n * Form styles\r\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n.form-signin .form-control:focus {\n  border-color: #6891a2;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2;\n}\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: #6891a2;\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: #0c6121;\n}\n.forgot-password {\n  color: #6891a2;\n}\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n  color: #0c6121;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjs7RUFFRTtBQUNGO0VBQ0ksWUFBWTtFQUNaLGtFQUFhO0FBQ2pCO0FBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUVaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtBQUNuQjtBQUVBOztFQUVFO0FBQ0Y7RUFDSSx5QkFBeUI7RUFDekIsaUNBQUE7RUFDQSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQ0FBQTtFQUdBLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDOUM7QUFFQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFHZCxrQkFBa0I7QUFDdEI7QUFFQTs7RUFFRTtBQUNGO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDbkI7QUFFQTtFQUNJLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBR25CLHNCQUFzQjtBQUMxQjtBQUVBOztFQUVJLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtBQUNuQjtBQUVBOzs7O0VBSUksV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtFQUdsQixzQkFBc0I7QUFDMUI7QUFFQTtFQUNJLHFCQUFnQztFQUNoQyxVQUFVO0VBRVYsaUVBQXVFO0FBQzNFO0FBRUE7RUFDSSw4QkFBQTtFQUNBLHlCQUFvQztFQUNwQywyRUFBQTtFQUNBLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFHWixrQkFBa0I7RUFDbEIsWUFBWTtFQUlaLHNCQUFzQjtBQUMxQjtBQUVBOzs7RUFHSSx5QkFBaUM7QUFDckM7QUFFQTtFQUNJLGNBQXlCO0FBQzdCO0FBRUE7OztFQUdJLGNBQXNCO0FBQzFCIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFNwZWNpZmljIHN0eWxlcyBvZiBzaWduaW4gY29tcG9uZW50XHJcbiAqL1xyXG4vKlxyXG4gKiBHZW5lcmFsIHN0eWxlc1xyXG4gKi9cclxuLmlvbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigxMDQsIDE0NSwgMTYyKSwgcmdiKDEyLCA5NywgMzMpKTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLypcclxuICogQ2FyZCBjb21wb25lbnRcclxuICovXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbiAgICAvKiBqdXN0IGluIGNhc2UgdGhlcmUgbm8gY29udGVudCovXHJcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLyogc2hhZG93cyBhbmQgcm91bmRlZCBib3JkZXJzICovXHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiBGb3JtIHN0eWxlc1xyXG4gKi9cclxuLnByb2ZpbGUtbmFtZS1jYXJkIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgIG1pbi1oZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnJlYXV0aC1lbWFpbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAjaW5wdXRFbWFpbCxcclxuLmZvcm0tc2lnbmluICNpbnB1dFBhc3N3b3JkIHtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1lbWFpbF0sXHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSxcclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9dGV4dF0sXHJcbi5mb3JtLXNpZ25pbiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTA0LCAxNDUsIDE2Mik7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zaWduaW4ge1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ5MGZlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHJnYigxMDQsIDE0NSwgMTYyKSwgcmdiKDEyLCA5NywgMzMpKTsqL1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxufVxyXG5cclxuLmJ0bi5idG4tc2lnbmluOmhvdmVyLFxyXG4uYnRuLmJ0bi1zaWduaW46YWN0aXZlLFxyXG4uYnRuLmJ0bi1zaWduaW46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA5NywgMzMpO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICAgIGNvbG9yOiByZ2IoMTA0LCAxNDUsIDE2Mik7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIsXHJcbi5mb3Jnb3QtcGFzc3dvcmQ6YWN0aXZlLFxyXG4uZm9yZ290LXBhc3N3b3JkOmZvY3Vze1xyXG4gICAgY29sb3I6IHJnYigxMiwgOTcsIDMzKTtcclxufSJdfQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"card card-container\">\n      <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n      <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n      <p id=\"profile-name\" class=\"profile-name-card\"></p>\n      <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n        <span id=\"reauth-email\" class=\"reauth-email\"></span>\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"text\" required name=\"email\" ngModel autofocus></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" required name=\"password\" ngModel></ion-input>\n        </ion-item>\n        <br>\n        <div id=\"remember\" class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block btn-signin\"\n                type=\"submit\"\n                [disabled]=\"loginForm.invalid || loginForm.pending\">Sign in</button>\n      </form><!-- /form -->\n      <a href=\"#\" class=\"forgot-password\">\n        Forgot the password?\n      </a>\n    </div><!-- /card-container -->\n  </div><!-- /container -->\n</ion-content>");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




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

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");







let LoginPage = class LoginPage {
    constructor(authService, loadingController, route, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || null;
        this.authService.authState$.subscribe(state => {
            this.authState = state;
            if (this.authState) {
                if (this.returnUrl !== null) {
                    this.router.navigateByUrl(this.returnUrl).then();
                }
                else {
                    this.router.navigateByUrl('/').then();
                }
            }
        });
    }
    login(loginForm) {
        if (loginForm.invalid) {
            return;
        }
        else {
            const { email, password } = loginForm.value;
            this.authService.login(email, password).then();
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map