(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "144Y":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Cqfx":
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.page.html */ "dKDm");
/* harmony import */ var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.page.scss */ "144Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */




let CheckoutPage = class CheckoutPage {
    constructor(cartService) {
        this.cartService = cartService;
        this.paymentGateway = [];
        this.subTotal = 0;
        this.cartTotal = 0;
        this.products = [];
        this.MexicanStates = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].states;
        this.finalTax = 0;
        this.math = Math;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isPersonalUp = false;
            this.isBillingUp = false;
            this.isShippingUp = false;
            this.isPaymentUp = false;
            this.sameShipping = true;
            this.cartService.getAllPaymentGateways()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((pg) => pg.filter(p => p.enabled === true))).subscribe(pg => {
                this.paymentGateway = pg;
                console.log(this.paymentGateway);
            });
            this.cartService.cartData.subscribe(data => this.products = data.productData);
            this.cartService.cartTotal.subscribe(total => this.cartTotal = total);
            if (localStorage.getItem('user') !== null) {
                this.userDetails = JSON.parse(localStorage.getItem('user'));
            }
            //this.storage.get('user').then(userData => this.userDetails = userData);
            this.cartService.getTaxes()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((taxes) => taxes.map(t => t.rate)))
                .subscribe(data => {
                let taxRate;
                // @ts-ignore
                taxRate = parseInt(data[0], 10);
                this.taxesRate = taxRate;
                this.subTotal = this.cartTotal;
                let taxCalculation = (this.taxesRate * this.subTotal) / 100;
                if (taxCalculation < 1) {
                    taxCalculation = 1;
                    this.finalTax = taxCalculation;
                }
                else {
                    this.finalTax = Math.floor(Math.abs((this.taxesRate * this.subTotal) / 100));
                }
                this.cartTotal = this.subTotal + this.finalTax;
            }, err => console.error(err));
        });
    }
    toggleUp(section) {
        switch (section) {
            case 'billing':
                this.isBillingUp = !this.isBillingUp;
                break;
            case 'shipping':
                this.isShippingUp = !this.isShippingUp;
                break;
            case 'payment':
                this.isPaymentUp = !this.isPaymentUp;
                break;
            default:
                this.isPersonalUp = !this.isPersonalUp;
                break;
        }
    }
    toggleShipping() {
        this.sameShipping = !this.sameShipping;
    }
    checkout(checkoutForm) {
        const data = checkoutForm.value;
        const user = JSON.parse(localStorage.getItem('user'));
        const lineItems = [];
        this.products.forEach(p => {
            lineItems.push({
                product_id: p.id,
                quantity: parseInt(String(p.in_cart), 10)
            });
        });
        let formData = null;
        if (this.sameShipping) {
            formData = {
                set_paid: true,
                payment_method: this.paymentGateway[0].id,
                payment_method_title: this.paymentGateway[0].method_title,
                // customer_id: this.userDetails[0].id,
                customer_id: user[0].id > 0 ? user[0].id : 0,
                billing: {
                    address_1: data.b_address_line_1,
                    address_2: data.b_address_line_2,
                    city: data.b_city,
                    state: data.b_state,
                    country: 'MX',
                    postcode: data.b_postcode,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    phone: data.phone,
                },
                shipping: {
                    address_1: data.b_address_line_1,
                    address_2: data.b_address_line_2,
                    city: data.b_city,
                    state: data.b_state,
                    country: 'MX',
                    postcode: data.b_postcode,
                    first_name: data.first_name,
                    last_name: data.last_name
                },
                line_items: lineItems
            };
        }
        else {
            formData = {
                set_paid: true,
                payment_method: this.paymentGateway[0].id,
                payment_method_title: this.paymentGateway[0].method_title,
                customer_id: user[0].id > 0 ? user[0].id : 0,
                billing: {
                    address_1: data.b_address_line_1,
                    address_2: data.b_address_line_2,
                    city: data.b_city,
                    state: data.b_state,
                    country: 'MX',
                    postcode: data.b_postcode,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    phone: data.phone,
                },
                shipping: {
                    address_1: data.s_address_line_1,
                    address_2: data.s_address_line_2,
                    city: data.s_city,
                    state: data.s_state,
                    country: 'MX',
                    postcode: data.s_postcode,
                    first_name: data.first_name,
                    last_name: data.last_name
                },
                line_items: lineItems
            };
        }
        // @ts-ignore
        this.cartService.createOrder(formData).then();
    }
};
CheckoutPage.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutPage);



/***/ }),

/***/ "Pnj6":
/*!***********************************************************!*\
  !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "Cqfx");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "Tjht":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "Pnj6");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "Cqfx");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const url1 = 'https://appcomputadoras1.cloudns.cl/wordPress/wp-json/wc/v3';
const authUrl1 = 'https://appcomputadoras1.cloudns.cl/wordPress/wp-json/jwt-auth/v1/token';
const tokenVerifyUrl1 = 'https://appcomputadoras1.cloudns.cl/wordPress/wp-json/jwt-auth/v1/token/validate';
const environment = {
    production: true,
    backend_api_url: url1,
    auth_url: authUrl1,
    token_verify_url: tokenVerifyUrl1,
    readOnlyKeys: {
        consumer_key: 'ck_ea4769f54adb9d62b7299d8952dafe68693ac54a',
        consumer_secret: 'cs_a08e524307177fb78fb4c5add0823907502d6e79'
    },
    writableKeys: {
        consumer_key: 'ck_5213d91dbf9fecf1a1f8e084e0be6bde1eafa904',
        consumer_secret: 'cs_a4cc132068abb26f5fb06fa93c0b5843eaa2872f'
    },
    states: [
        { value: 'JL', name: 'Jalisco' },
        { value: 'AG', name: 'Aguas Calientes' },
        { value: 'DF', name: 'Distrito Federal' }
    ]
};


/***/ }),

/***/ "dKDm":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"/tabs/tab3\">\n        <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">Checkout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form #checkoutForm=\"ngForm\">\n    <ion-grid>\n      <!-- Personal Details-->\n      <ion-row>\n        <ion-col>\n          <ion-list lines=\"full\">\n            <ion-list-header color=\"dark\" lines=\"full\" slot=\"start\">\n              <ion-label (click)=\"toggleUp('personal')\"\n                         class=\"d-flex justify-content-between align-items-center\"\n                         data-bs-target=\"#personalDetails\" data-bs-toggle=\"collapse\">\n                <h2 class=\"ion-color-tertiary\" style=\"color: #e5e5e5;\">Customer Details </h2>\n                <ion-icon (click)=\"toggleUp('personal')\" *ngIf=\"!isPersonalUp\"\n                          class=\"justify-self-start\"\n                          data-bs-target=\"#personalDetails\" data-bs-toggle=\"collapse\"\n                          name=\"chevron-down-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n                <ion-icon (click)=\"toggleUp('personal')\" *ngIf=\"isPersonalUp\" class=\"justify-self-start\"\n                          data-bs-target=\"#personalDetails\" data-bs-toggle=\"collapse\"\n                          name=\"chevron-up-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n              </ion-label>\n            </ion-list-header>\n            <div class=\"collapse\" id=\"personalDetails\">\n              <ion-item>\n                <ion-label position=\"floating\">First Name</ion-label>\n                <ion-input #fname=\"ngModel\" name=\"first_name\" ngModel required type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Last Name</ion-label>\n                <ion-input #lname=\"ngModel\" name=\"last_name\" ngModel required type=\"text\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input #email=\"ngModel\" name=\"email\" ngModel required type=\"email\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Phone</ion-label>\n                <ion-input #phone=\"ngModel\" name=\"phone\" ngModel required type=\"text\"></ion-input>\n              </ion-item>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <!-- Billing Details-->\n      <ion-row>\n        <ion-col>\n          <ion-list lines=\"full\">\n            <ion-list-header color=\"secondary\" lines=\"full\" slot=\"start\">\n              <ion-label (click)=\"toggleUp('billing')\"\n                         class=\"d-flex justify-content-between align-items-center\"\n                         data-bs-target=\"#billingDetails\" data-bs-toggle=\"collapse\">\n                <h2 class=\"ion-color-tertiary\" style=\"color: #3f1ce0;\">Billing Address </h2>\n                <ion-icon (click)=\"toggleUp('billing')\" *ngIf=\"!isBillingUp\" class=\"justify-self-start\"\n                          data-bs-target=\"#billingDetails\" data-bs-toggle=\"collapse\"\n                          name=\"chevron-down-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #3f1ce0;\"></ion-icon>\n                <ion-icon (click)=\"toggleUp('billing')\" *ngIf=\"isBillingUp\" class=\"justify-self-start\"\n                          data-bs-target=\"#billingDetails\" data-bs-toggle=\"collapse\"\n                          name=\"chevron-up-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #3f1ce0;\"></ion-icon>\n              </ion-label>\n            </ion-list-header>\n            <ion-item class=\"collapse\" id=\"billingDetails\">\n              <ion-label position=\"stacked\">Address Line 1</ion-label>\n              <ion-input #b_address_line_1=\"ngModel\" name=\"b_address_line_1\" ngModel required\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Address Line 2</ion-label>\n              <ion-input #b_address_line_2=\"ngModel\" name=\"b_address_line_2\" ngModel\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">City</ion-label>\n              <ion-input #b_city=\"ngModel\" name=\"b_city\" ngModel required\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Postal Code</ion-label>\n              <ion-input #b_postcode=\"ngModel\" name=\"b_postcode\" ngModel required\n                         type=\"text\"></ion-input>\n            </ion-item>\n            <ion-item class=\"collapse\" id=\"billingDetails\">\n            <ion-label position=\"stacked\">State</ion-label>\n              <ion-select #b_state=\"ngModel\" name=\"b_state\" ngModel placeholder=\"Select State Here\"  required>\n                <ion-select-option *ngFor=\"let s of MexicanStates; index as i\"\n                                   [value]=\"s.value\">{{ s.name }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <!-- Checkbox-->\n      <ion-row>\n        <ion-col>\n          <ion-item style=\"border: 1px solid lightgray;\">\n            <ion-checkbox (ionChange)=\"toggleShipping()\" [checked]=\"sameShipping\" color=\"secondary\"\n                          slot=\"start\"></ion-checkbox>\n            <ion-label>Shipping same as Billing Address</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Shipping Details-->\n      <ion-row *ngIf=\"!sameShipping\">\n        <ion-col>\n          <ion-list lines=\"full\">\n            <ion-list-header color=\"medium\" lines=\"full\" slot=\"start\">\n              <ion-label (click)=\"toggleUp('shipping')\"\n                         class=\"d-flex justify-content-between align-items-center\"\n                         data-bs-target=\"#shippingDetails\" data-bs-toggle=\"collapse\">\n                <h2 class=\"ion-color-tertiary\" style=\"color: #350303;\">Shipping Address </h2>\n                <ion-icon (click)=\"toggleUp('shipping')\" *ngIf=\"!isShippingUp\"\n                          class=\"justify-self-start\"\n                          data-bs-target=\"#shippingDetails\" data-bs-toggle=\"collapse\"\n                          name=\"chevron-down-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #3f1ce0;\"></ion-icon>\n                <ion-icon (click)=\"toggleUp('shipping')\" *ngIf=\"isShippingUp\" class=\"justify-self-start\"\n                          data-bs-target=\"#shippingDetails\"\n                          data-bs-toggle=\"collapse\" name=\"chevron-up-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #3f1ce0;\"></ion-icon>\n              </ion-label>\n            </ion-list-header>\n            <ion-item class=\"collapse\" id=\"shippingDetails\">\n              <ion-label position=\"stacked\">Address Line 1</ion-label>\n              <ion-input #s_address_line_1=\"ngModel\" name=\"s_address_line_1\" ngModel required\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Address Line 2</ion-label>\n              <ion-input #s_address_line_2=\"ngModel\" name=\"s_address_line_2\" ngModel\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">City</ion-label>\n              <ion-input #s_city=\"ngModel\" name=\"s_city\" ngModel required\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Postal Code</ion-label>\n              <ion-input #s_postcode=\"ngModel\" name=\"s_postcode\" ngModel required\n                         type=\"text\"></ion-input>\n            </ion-item>\n            <ion-item class=\"collapse\" id=\"shippingDetails\">\n              <ion-label position=\"stacked\">State</ion-label>\n              <ion-select #s_state=\"ngModel\" name=\"s_state\" ngModel placeholder=\"Select State Here\" required>\n                <ion-select-option *ngFor=\"let s of MexicanStates; index as i\"\n                                   [value]=\"s.value\">{{ s.name }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <ion-grid>\n    <!-- Payment Details-->\n    <ion-row>\n      <ion-col>\n        <ion-list *ngIf=\"paymentGateway.length > 0\" lines=\"full\">\n          <ion-list-header color=\"tertiary\" lines=\"full\" slot=\"start\">\n            <ion-label (click)=\"toggleUp('payment')\"\n                       class=\"d-flex justify-content-between align-items-center\"\n                       data-bs-target=\"#paymentDetails\" data-bs-toggle=\"collapse\">\n              <h2 class=\"ion-color-tertiary\" style=\"color: #f0f1dd;\">Payment Options </h2>\n              <ion-icon (click)=\"toggleUp('payment')\" *ngIf=\"!isShippingUp\" class=\"justify-self-start\"\n                        data-bs-target=\"#shippingDetails\" data-bs-toggle=\"collapse\"\n                        name=\"chevron-down-outline\"\n                        size=\"medium\" slot=\"icon-only\" style=\"color: #f0f1dd;\"></ion-icon>\n              <ion-icon (click)=\"toggleUp('payment')\" *ngIf=\"isShippingUp\" class=\"justify-self-start\"\n                        data-bs-target=\"#shippingDetails\"\n                        data-bs-toggle=\"collapse\" name=\"chevron-up-outline\"\n                        size=\"medium\" slot=\"icon-only\" style=\"color: #f0f1dd;\"></ion-icon>\n            </ion-label>\n          </ion-list-header>\n        </ion-list>\n        <ion-item class=\"collapse\" id=\"paymentDetails\">\n          <ion-checkbox checked\n                        color=\"primary\"\n                        readonly\n                        slot=\"start\"></ion-checkbox>\n          <ion-label>\n            {{ paymentGateway[0]?.title | uppercase}}\n            <p>{{ paymentGateway[0]?.description}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col *ngIf=\"paymentGateway.length <= 0\" class=\"d-flex justify-content-center\">\n        <ion-spinner color=\"primary\" name=\"dots\" size=\"large\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n\n    <!-- ORDER SUMMARY -->\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-card-header color=\"medium\">\n            <ion-card-title>Order Summary</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"none\">\n              <ion-item>\n                <ion-label slot=\"start\" routerLink=\"/tabs/tab3\">\n                  Items SubTotal ({{(cartService.cartData | async).count }})\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-spinner name=\"bubbles\" *ngIf=\"!subTotal\"></ion-spinner>\n                  <ion-text *ngIf=\"subTotal\">{{ subTotal | currency:'USD' }}</ion-text>\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label slot=\"start\">\n                  Shipping\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-text>FREE</ion-text>\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label slot=\"start\">\n                  Taxes\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-spinner name=\"bubbles\" *ngIf=\"!finalTax\"></ion-spinner>\n                  <ion-text *ngIf=\"finalTax\">{{ finalTax|currency:'USD'}}</ion-text>\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label slot=\"start\">\n                  Total\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-text>{{ cartTotal | currency:'USD'}}</ion-text>\n                </ion-label>\n              </ion-item>\n\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--SUBMIT BUTTON-->\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"checkout(checkoutForm)\"\n                  [disabled]=\"checkoutForm.invalid || checkoutForm.pending\"\n                  color=\"warning\"\n                  expand=\"full\"\n                  fill=\"solid\"\n                  size=\"large\"\n                  type=\"submit\"\n      >Checkout\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module.js.map