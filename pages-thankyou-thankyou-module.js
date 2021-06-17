(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-thankyou-thankyou-module"],{

/***/ "OFnP":
/*!***************************************************!*\
  !*** ./src/app/pages/thankyou/thankyou.module.ts ***!
  \***************************************************/
/*! exports provided: ThankyouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thankyou-routing.module */ "R15E");
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thankyou.page */ "ib95");







let ThankyouPageModule = class ThankyouPageModule {
};
ThankyouPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThankyouPageRoutingModule"]
        ],
        declarations: [_thankyou_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouPage"]]
    })
], ThankyouPageModule);



/***/ }),

/***/ "R15E":
/*!***********************************************************!*\
  !*** ./src/app/pages/thankyou/thankyou-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ThankyouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageRoutingModule", function() { return ThankyouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thankyou.page */ "ib95");




const routes = [
    {
        path: '',
        component: _thankyou_page__WEBPACK_IMPORTED_MODULE_3__["ThankyouPage"]
    }
];
let ThankyouPageRoutingModule = class ThankyouPageRoutingModule {
};
ThankyouPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThankyouPageRoutingModule);



/***/ }),

/***/ "aIav":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thankyou/thankyou.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Thank You</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/\">\n        <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"jumbotron text-center\">\n          <h1 class=\"display-3\">Thank You!</h1>\n          <p class=\"lead\"><strong>Please check your email</strong> for order confirmation.</p>\n          <hr>\n          <p>\n          <p>Order Id : <strong>{{orderId}}</strong></p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"d-flex justify-content-center\">\n        <ion-button routerLink=\"/\" color=\"primary\" fill=\"solid\" expand=\"full\" size=\"large\">Go To Home</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "aJK1":
/*!***************************************************!*\
  !*** ./src/app/pages/thankyou/thankyou.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGFua3lvdS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ib95":
/*!*************************************************!*\
  !*** ./src/app/pages/thankyou/thankyou.page.ts ***!
  \*************************************************/
/*! exports provided: ThankyouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPage", function() { return ThankyouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_thankyou_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./thankyou.page.html */ "aIav");
/* harmony import */ var _thankyou_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thankyou.page.scss */ "aJK1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ThankyouPage = class ThankyouPage {
    constructor(router) {
        this.router = router;
        this.products = [];
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        this.message = state.message;
        this.products = state.products;
        console.log(this.products);
        this.orderId = state.orderId;
        this.cartTotal = state.total;
    }
    ngOnInit() {
    }
};
ThankyouPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ThankyouPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-thankyou',
        template: _raw_loader_thankyou_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thankyou_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ThankyouPage);



/***/ })

}]);
//# sourceMappingURL=pages-thankyou-thankyou-module.js.map