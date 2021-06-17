(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "c14U");





let Tab3Page = class Tab3Page {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        this.cartService.cartData.subscribe(data => {
            this.cart = data;
        });
        this.cartService.cartTotal.subscribe(total => {
            this.total = total;
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "PphB":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-view/cart-view.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card *ngFor=\"let p of productsInCart; index as i\">\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-left\">\n              {{ p.name }}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-thumbnail slot=\"end\" style=\"width:120px; height: auto;\">\n                <ion-img [src]=\"p.images[0].src\" style=\"width:120px; height: auto;\"></ion-img>\n              </ion-thumbnail>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label class=\"price\">\n                <ion-text class=\"price-inner\">\n                  <h3>{{ p.price | currency:'USD'}}</h3>&nbsp;&nbsp;\n                </ion-text>\n              </ion-label>\n              <ion-label class=\"d-flex align-items-center border border-light-updated\">\n                <ion-text>Qty: </ion-text><ion-select slot=\"end\" value=\"{{ p.in_cart }}\" (ionChange)=\"updateQuantify(p, $event, i)\">\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n                <ion-select-option value=\"3\">3</ion-select-option>\n                <ion-select-option value=\"4\">4</ion-select-option>\n                <ion-select-option value=\"5\">5</ion-select-option>\n              </ion-select>\n              </ion-label>\n            </ion-item>\n            <ion-item-divider></ion-item-divider>\n            <ion-button (click)=\"removeItemFromCart(p)\" color=\"tertiary\">Remove</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>");

/***/ }),

/***/ "Y8Pz":
/*!*************************************************************!*\
  !*** ./src/app/components/cart-view/cart-view.component.ts ***!
  \*************************************************************/
/*! exports provided: CartViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartViewComponent", function() { return CartViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart-view.component.html */ "PphB");
/* harmony import */ var _cart_view_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-view.component.scss */ "p3bp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");





let CartViewComponent = class CartViewComponent {
    constructor(cartService) {
        this.cartService = cartService;
        // eslint-disable-next-line @angular-eslint/no-input-rename
        this.productsInCart = [];
    }
    ngOnInit() { }
    updateQuantify(p, ev, index) {
        const updateInCartValue = ev.target.value;
        this.cartService.updateQuantify(index, updateInCartValue);
    }
    removeItemFromCart(prod) {
        this.productsInCart = this.cartService.removeFromCart(prod);
    }
};
CartViewComponent.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
CartViewComponent.propDecorators = {
    productsInCart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['prod',] }]
};
CartViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-view',
        template: _raw_loader_cart_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_view_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartViewComponent);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      My Cart ({{cart.count || 0}})\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"cart.productData.length > 0; then show else showOther\"></div>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Cart</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ng-template #showOther>\n  <div class=\"d-flex ion-justify-content-center\">\n  <ion-img src=\"/assets/empty-cart.svg\" style=\"width: 200px; height: 250px;\"></ion-img>\n  </div>\n  <div class=\"d-flex ion-justify-content-center\" style=\"padding-top: 10px\">\n    <ion-label>No items in cart</ion-label>\n  </div>\n  <div class=\"d-flex ion-justify-content-center\">\n    <ion-button class=\"ion-text-center\" routerLink=\"/tabs/tab1\">Go to shop</ion-button>\n  </div>\n</ng-template>\n\n<ng-template #show>\n  <app-cart-view [prod]=\"cart.productData\"></app-cart-view>\n</ng-template>\n</ion-content>\n\n  <ion-footer>\n    <ion-toolbar *ngIf=\"cart.productData.length > 0\">\n      <ion-label slot=\"start\"> \n        <ion-text class=\"totalPrice\">{{total | currency:\"USD\"}}</ion-text>\n      </ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button routerLink=\"/checkout\"\n        class=\"ion-activatable ripple-parent\"\n        color=\"warning\"\n        expande=\"full\"\n        fill=\"solid\"\n        size=\"large\">\n          Go to checkout\n          <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");
/* harmony import */ var _components_cart_view_cart_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/cart-view/cart-view.component */ "Y8Pz");










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"], _components_cart_view_cart_view_component__WEBPACK_IMPORTED_MODULE_9__["CartViewComponent"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".totalPrice {\n  font-size: 30px;\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RhbFByaWNle1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "p3bp":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-view/cart-view.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map