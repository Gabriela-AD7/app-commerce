(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prod-detail-prod-detail-module"],{

/***/ "3slQ":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/prod-detail/prod-detail.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides class=\"ion-padding\" pager style=\"width: 200px; height: 200px;\">\n    <ion-slide *ngFor=\"let i of product?.images\">\n      <ion-img [src]=\"i?.src\" alt=\"{{product?.name}}\"></ion-img>\n    </ion-slide>\n  </ion-slides>\n  <ion-item-divider></ion-item-divider>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              <h2>{{product?.name}}</h2>\n            </ion-card-title>\n            <ion-card-subtitle>\n              <ion-chip *ngFor=\"let c of product?.categories\" color=\"secondary\">\n                {{c?.name}}\n              </ion-chip>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-label>\n              <p>{{product?.description.substring(3, product.description.length-5)}}</p>\n              <ion-text>\n                <p>{{product?.price | currency:\"MNX\"}}</p>\n              </ion-text>\n            </ion-label>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style=\"padding: 0 10px;\">\n    <ion-label>\n      <ion-button color=\"primary\" expand=\"full\" fill=\"solid\" (click)=\"addProduct(product)\">\n        Add to cart\n      </ion-button>\n    </ion-label>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "Do85":
/*!********************************************************!*\
  !*** ./src/app/tab1/prod-detail/prod-detail.module.ts ***!
  \********************************************************/
/*! exports provided: ProdDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdDetailPageModule", function() { return ProdDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _prod_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prod-detail-routing.module */ "JNXI");
/* harmony import */ var _prod_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prod-detail.page */ "PlTw");







let ProdDetailPageModule = class ProdDetailPageModule {
};
ProdDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prod_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdDetailPageRoutingModule"]
        ],
        declarations: [_prod_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProdDetailPage"]]
    })
], ProdDetailPageModule);



/***/ }),

/***/ "JNXI":
/*!****************************************************************!*\
  !*** ./src/app/tab1/prod-detail/prod-detail-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProdDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdDetailPageRoutingModule", function() { return ProdDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _prod_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prod-detail.page */ "PlTw");




const routes = [
    {
        path: '',
        component: _prod_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProdDetailPage"]
    }
];
let ProdDetailPageRoutingModule = class ProdDetailPageRoutingModule {
};
ProdDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProdDetailPageRoutingModule);



/***/ }),

/***/ "PlTw":
/*!******************************************************!*\
  !*** ./src/app/tab1/prod-detail/prod-detail.page.ts ***!
  \******************************************************/
/*! exports provided: ProdDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdDetailPage", function() { return ProdDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_prod_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./prod-detail.page.html */ "3slQ");
/* harmony import */ var _prod_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prod-detail.page.scss */ "U37o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");







let ProdDetailPage = class ProdDetailPage {
    constructor(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.showData = false;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.product = data.product;
            this.showData = true;
        });
    }
    addProduct(product) {
        this.cartService.addToCart(product);
    }
};
ProdDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }
];
ProdDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-prod-detail',
        template: _raw_loader_prod_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_prod_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProdDetailPage);

/*
let id;
    this.route.params.subscribe(
      (data: Params)=>{
        id=data.id;
        this.productService.getSingleProduct(id).subscribe(
          (prod: ProductModel)=>{
           this.product=prod;
          });
      });
*/ 


/***/ }),

/***/ "U37o":
/*!********************************************************!*\
  !*** ./src/app/tab1/prod-detail/prod-detail.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=prod-detail-prod-detail-module.js.map