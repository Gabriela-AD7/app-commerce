(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-checkout-checkout-module~tab1-tab1-module~tab3-tab3-module"],{

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _backend_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backend.interceptor */ "9M9t");








let CartService = class CartService {
    constructor(httpClient, loadingController, alertController, toastController, 
    //private storage: Storage,
    router) {
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        //local variables
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].backend_api_url;
        this.cartDataArray = {
            count: 0,
            productData: []
        };
        this.cartData$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({
            count: 0, productData: []
        });
        this.totalAmount = 0;
        this.totalAmount$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this.totalAmount = 0;
        if (localStorage.getItem('cart') !== null) {
            this.cartDataArray = JSON.parse(localStorage.getItem('cart'));
            this.cartData$.next(this.cartDataArray);
            this.calculateTotal();
        }
        /* this.storage.get('cart').then(data=>{
           if(data){
             this.cartDataArray=data;
             this.cartData$.next(this.cartDataArray);
           }
         });*/
    }
    get cartData() {
        return this.cartData$.asObservable();
    }
    addToCart(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: 'Adding to cart...',
                animated: true,
                spinner: 'circles',
                backdropDismiss: false,
                showBackdrop: true
            });
            const alert = yield this.alertController.create({
                header: 'Cart Updated',
                buttons: [{
                        text: 'Continue',
                        role: 'cancel',
                        cssClass: 'continue',
                        handler: () => {
                            console.log('Product added');
                        }
                    },
                    {
                        text: 'View cart',
                        cssClass: 'view-cart',
                        handler: () => {
                            this.router.navigateByUrl('/tabs/tab3').then();
                        }
                    }],
                animated: true,
                message: 'Product added to cart',
                backdropDismiss: false,
                cssClass: 'add-product'
            });
            const toast = yield this.toastController.create({
                message: 'Only 5 alow in cart',
                header: 'Max Quantity Reached',
                duration: 2000,
                position: 'bottom',
                animated: true,
                color: 'warning',
                buttons: [{
                        side: 'end',
                        role: 'cancel',
                        text: 'Ok'
                    }]
            });
            yield loader.present().then();
            //when the cart is not completely empty
            if (this.cartDataArray.count !== 0) {
                const index = this.cartDataArray.productData.findIndex(p => p.id === product.id);
                if (index > -1) {
                    this.calculateTotal();
                    if (this.cartDataArray.productData[index].in_cart >= 5) {
                        this.cartDataArray.productData[index].in_cart = 5;
                        //this.storage.set('cart', {...this.cartDataArray}).then();
                        localStorage.setItem('cart', JSON.stringify(Object.assign({}, this.cartDataArray)));
                        yield loader.dismiss().then();
                        yield toast.present().then();
                    }
                    else {
                        this.cartDataArray.productData[index].in_cart += 1;
                        this.calculateTotal();
                        //this.storage.set('cart', {...this.cartDataArray}).then();
                        localStorage.setItem('cart', JSON.stringify(Object.assign({}, this.cartDataArray)));
                        yield loader.dismiss().then();
                        yield alert.present().then();
                    }
                    this.cartData$.next(this.cartDataArray);
                }
                else {
                    this.cartDataArray.productData.push(product);
                    const newProductIndex = this.cartDataArray.productData.findIndex(p => p.id === product.id);
                    this.cartDataArray.productData[newProductIndex].in_cart = 1;
                    this.calculateTotal();
                    yield loader.dismiss().then();
                    yield alert.present().then();
                    this.cartDataArray.count = this.cartDataArray.productData.length;
                    //this.storage.set('cart', {...this.cartDataArray}).then();
                    localStorage.setItem('cart', JSON.stringify(Object.assign({}, this.cartDataArray)));
                    this.cartData$.next(this.cartDataArray);
                }
                //end if cart is not empty
            }
            else {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                this.cartDataArray.productData.push(Object.assign(Object.assign({}, product), { in_cart: 1 }));
                this.cartDataArray.count = this.cartDataArray.productData.length;
                this.calculateTotal();
                //this.storage.set('cart', {...this.cartDataArray}).then();
                localStorage.setItem('cart', JSON.stringify(Object.assign({}, this.cartDataArray)));
                yield loader.dismiss().then();
                yield alert.present().then();
                this.cartData$.next(this.cartDataArray);
            }
        });
    }
    removeFromCart(product) {
        this.cartDataArray.productData = this.cartDataArray.productData.filter(p => p.id !== product.id);
        this.cartDataArray.count = this.cartDataArray.productData.length;
        this.cartData$.next(this.cartDataArray);
        this.totalAmount$.next(this.totalAmount);
        localStorage.setItem('cart', JSON.stringify(Object.assign({}, this.cartDataArray)));
        this.calculateTotal();
        return this.cartDataArray.productData;
    }
    calculateTotal() {
        this.totalAmount = 0;
        if (this.cartDataArray.productData.length === 0) {
            this.totalAmount = 0;
            this.totalAmount$.next(this.totalAmount);
            return;
        }
        this.cartDataArray.productData.forEach(p => {
            this.totalAmount += parseInt(p.price, 10) * p.in_cart;
        });
        this.totalAmount$.next(this.totalAmount);
    }
    updateQuantify(indexOfProduct, neInCartValue) {
        this.cartDataArray.productData[indexOfProduct].in_cart = neInCartValue;
        this.calculateTotal();
        localStorage.setItem('cart', JSON.stringify(Object.assign({}, this.cartDataArray)));
        this.cartData$.next(this.cartDataArray);
        this.totalAmount$.next(this.totalAmount);
    }
    emptyCart() {
        this.cartDataArray = {
            count: 0,
            productData: []
        };
        this.calculateTotal();
        this.cartData$.next(this.cartDataArray);
    }
    get cartTotal() {
        return this.totalAmount$.asObservable();
    }
    createOrder(orderData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(_backend_interceptor__WEBPACK_IMPORTED_MODULE_7__["WriteObject"], '');
            headers = headers.set('Content-Type', 'application/json, charset=utf-8');
            const loader = yield this.loadingController.create({
                message: 'Placing order...',
                animated: true,
                spinner: 'circular'
            });
            const toast2 = yield this.toastController.create({
                message: 'Check mail please...',
                header: 'Complete form',
                duration: 3000,
                position: 'top',
                animated: true,
                color: 'warning',
                buttons: [{
                        side: 'end',
                        role: 'cancel',
                        text: 'Ok'
                    }]
            });
            yield loader.present().then();
            this.httpClient.post(`${this.serverUrl}/orders`, Object.assign({}, orderData), { headers })
                .subscribe((newOrderDetails) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loader.dismiss().then();
                this.emptyCart();
                const navigationExtras = {
                    state: {
                        message: 'Order placed',
                        products: this.cartDataArray.productData,
                        orderId: newOrderDetails.id,
                        total: parseFloat(newOrderDetails.total)
                    }
                };
                this.emptyCart();
                this.router.navigate(['/thankyou'], navigationExtras).then();
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loader.dismiss().then();
                yield toast2.present().then();
                console.log(err);
            }));
        });
    }
    getAllPaymentGateways() {
        return this.httpClient.get(`${this.serverUrl}/payment_gateways`);
    }
    getTaxes() {
        return this.httpClient.get(`${this.serverUrl}/taxes`);
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ })

}]);
//# sourceMappingURL=default~pages-checkout-checkout-module~tab1-tab1-module~tab3-tab3-module.js.map