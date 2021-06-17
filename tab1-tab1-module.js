(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "07lf":
/*!*****************************************************************!*\
  !*** ./src/app/components/sort-modal/sort-modal.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-filter-menu (checkbox)=\"categoryFilter($event)\" [categories]=\"categories\"></app-filter-menu>\n<ion-router-outlet id=\"filter\"></ion-router-outlet>\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <!--<ion-button>\n        <ion-icon name=\"menu\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    -->\n    <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Computadoras\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/search\">\n        <ion-icon name=\"search-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"cart\" routerLink=\"/tabs/tab3\">\n        <ion-icon name=\"cart-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-badge color=\"light\" slot=\"end\">{{count || 0}}</ion-badge>\n  </ion-toolbar>\n  <ion-toolbar color=\"danger\">\n    <ion-segment (ionChange)=\"segmentChange($event)\">\n      <ion-segment-button value=\"all\">\n        <ion-label>All</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"featured\">Featured</ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"position: relative;\">\n  <ion-toolbar style=\"position: fixed; top: 112px;\">\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"dark\" expand=\"block\" fill=\"clear\"\n      (click)=\"openModal()\">\n        <ion-icon name=\"funnel-outline\" slot=\"end\"></ion-icon>\n        Sort\n        </ion-button>\n        <ion-button color=\"dark\" expand=\"block\" fill=\"clear\"\n        (click)=\"openFilter()\">\n        <ion-icon name=\"filter-outline\" slot=\"end\"></ion-icon>\n        Filter\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-slides [options]=\"sliderOptions\" autoplay=\"2000\" class=\"ion-padding\" pager style=\"margin-top: 4.2rem;\">\n    <ion-slide *ngFor=\"let slide of sliderImages\">\n      <img [src]=\"slide+'.jpg'\" alt=\"no image\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let prod of displayedList\" class=\"item-entry\" (click)=\"loadingSpinner()\" detail routerLink=\"/tabs/tab1/prod-detail/{{prod.id}}\"> \n            <ion-thumbnail>\n              <ion-img [src]=\"prod.images[0].src\" alt=\"{{prod.name}}\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h3 class=\"item-name\">{{prod.name}}</h3>\n              <ion-text>\n                <p class=\"price\">{{prod.price | currency: \"USD\"}}</p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMoreData($event)\" threshold=\"10px\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more products...\"\n      ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "FCim":
/*!******************************************************!*\
  !*** ./src/app/services/product-resolver.service.ts ***!
  \******************************************************/
/*! exports provided: ProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolverService", function() { return ProductResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "Gdn9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ProductResolverService = class ProductResolverService {
    constructor(productService, loadingController) {
        this.productService = productService;
        this.loadingController = loadingController;
    }
    resolve(route, state) {
        const id = route.params.id;
        return this.productService.getSingleProduct(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.loadingController.getTop()) {
                this.loadingController.dismiss().then();
            }
        })));
    }
};
ProductResolverService.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ProductResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductResolverService);



/***/ }),

/***/ "MI67":
/*!***************************************************************!*\
  !*** ./src/app/components/sort-modal/sort-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: SortModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortModalComponent", function() { return SortModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sort_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sort-modal.component.html */ "YED4");
/* harmony import */ var _sort_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-modal.component.scss */ "07lf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SortModalComponent = class SortModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    closeModal() {
        this.modalController.dismiss(null, 'cancel').then();
    }
    radioChange(ev) {
        this.modalController.dismiss(ev.target.value, 'sort');
    }
};
SortModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SortModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sort-modal',
        template: _raw_loader_sort_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sort_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SortModalComponent);



/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sort-modal/sort-modal.component */ "MI67");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let Tab1Page = class Tab1Page {
    constructor(productService, loadingController, toastController, modalControler, menuControler, cartService) {
        this.productService = productService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.modalControler = modalControler;
        this.menuControler = menuControler;
        this.cartService = cartService;
        this.sliderImages = [
            '/assets/slide1',
            '/assets/slide2',
            '/assets/slide3',
            '/assets/slide4',
            '/assets/slide5'
        ];
        this.sliderOptions = {
            autoplay: {
                delay: 2000
            },
            loop: true
        };
        this.listArrayOfProducts = [];
        this.displayedList = [];
        this.currentPage = 1;
        this.filterCount = 0;
        this.filteredCategoryList = [];
        this.categories = [];
        //this.count=0;
        this.loadMoreData(null).then();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: 'Getting products',
                spinner: 'bubbles',
                animated: true
            });
            yield loader.present().then();
            this.productService.getAllProducts().subscribe((products) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loader.dismiss().then();
                this.listArrayOfProducts = products;
                this.displayedList = [...this.listArrayOfProducts];
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loader.dismiss().then();
                console.log(err);
            }));
            this.categories = yield this.productService.getAllCategories().toPromise();
            this.cartService.cartData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(data => data.count)).subscribe(count => this.count = count);
        });
    }
    loadMoreData(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'No more products',
                animated: true,
                duration: 2000,
                buttons: [
                    {
                        text: 'Done',
                        role: 'cancel',
                        icon: 'close'
                    }
                ]
            });
            if (ev == null) {
                this.currentPage = 1;
            }
            else {
                this.currentPage++;
                this.productService.getAllProducts(this.currentPage).subscribe((prods) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.listArrayOfProducts = this.listArrayOfProducts.concat(prods);
                    this.displayedList = [...this.listArrayOfProducts];
                    if (ev != null) {
                        ev.target.complete();
                    }
                    if (prods.length < 10) {
                        yield toast.present().then;
                        ev.target.disabled = true;
                    }
                }), (err) => {
                    console.log(err);
                });
            }
        });
    }
    loadingSpinner() {
        this.loadingController.create({
            message: 'Loading details...',
            animated: true,
            spinner: 'crescent',
            backdropDismiss: false,
            showBackdrop: true
        }).then((el = new HTMLIonLoadingElement()) => el.present());
    }
    openModal() {
        this.modalControler.create({
            component: _components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_5__["SortModalComponent"],
            animated: true,
            cssClass: 'sortModal'
        }).then((el = new HTMLIonModalElement()) => {
            el.present().then();
            return el.onDidDismiss().then(resultData => {
                this.sort({ role: resultData.role, data: resultData.data });
            });
        });
    }
    sort(resultData) {
        const { role, data } = Object.assign({}, resultData);
        if (role === 'cancel') {
            return;
        }
        else if (role === 'sort') {
            if (data === 'title-asc') {
                this.displayedList.sort((a, b) => {
                    const x = a.name.toLowerCase();
                    const y = b.name.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (data === 'title-desc') {
                this.displayedList.sort((a, b) => {
                    const x = a.name.toLowerCase();
                    const y = b.name.toLowerCase();
                    if (x > y) {
                        return -1;
                    }
                    if (x < y) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (data === 'price-asc') {
                this.displayedList.sort((a, b) => {
                    //@ts-ignore
                    return a.price - b.price;
                });
            }
            else if (data === 'price-desc') {
                this.displayedList.sort((a, b) => {
                    //@ts-ignore
                    return b.price - a.price;
                });
            }
        }
    }
    openFilter() {
        this.menuControler.enable(true, 'filter').then();
        this.menuControler.open('filter').then();
    }
    categoryFilter(ev) {
        if (ev.selected && this.filterCount === 0) {
            this.filteredCategoryList.push(ev.name);
            this.filterCount++;
            this.displayedList = this.displayedList.filter(p => p.categories.some(cat => cat.name === ev.name));
        }
        else if (ev.selected && this.filterCount >= 1) {
            const newArray = [...this.listArrayOfProducts];
            this.filterCount++;
            if (!this.filteredCategoryList.includes(ev.name)) {
                this.filteredCategoryList.push(ev.name);
                const product = newArray.filter(p => p.categories.some(cat => cat.name === ev.name));
                let i;
                product.forEach(p => {
                    i = this.displayedList.findIndex(prod => prod.id === p.id);
                    if (i !== -1) {
                        return;
                    }
                    else {
                        this.displayedList = this.displayedList.concat(p);
                    }
                });
            }
            else {
                return;
            }
        }
        else if (!ev.selected && this.filterCount >= 1) {
            const newArray = [...this.listArrayOfProducts];
            this.filterCount--;
            this.filteredCategoryList = this.filteredCategoryList.filter(el => el !== ev.name);
            if (this.filteredCategoryList.length > 0) {
                this.displayedList = [];
                this.filteredCategoryList.forEach(el => {
                    this.displayedList = this.displayedList.concat(newArray.filter(p => p.categories.some(cat => cat.name === el)));
                });
            }
            if (this.filterCount === 0) {
                this.displayedList = [...this.listArrayOfProducts];
            }
        }
    }
    segmentChange(ev) {
        const value = ev.target.value;
        if (value === 'featured') {
            this.displayedList = this.listArrayOfProducts.filter(p => p.featured === true);
        }
        else {
            this.displayedList = [...this.listArrayOfProducts];
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_product_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-resolver.service */ "FCim");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");





const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_4__["Tab1Page"],
    },
    {
        path: 'prod-detail/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | prod-detail-prod-detail-module */ "prod-detail-prod-detail-module").then(__webpack_require__.bind(null, /*! ./prod-detail/prod-detail.module */ "Do85")).then(m => m.ProdDetailPageModule),
        resolve: { product: _services_product_resolver_service__WEBPACK_IMPORTED_MODULE_3__["ProductResolverService"] }
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "YED4":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sort-modal/sort-modal.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Sorting</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group (ionChange)=\"radioChange($event)\">\n      <ion-item>\n        <ion-label>Name Ascending</ion-label>\n          <ion-radio value=\"title-asc\">\n\n          </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Name Descending</ion-label>\n          <ion-radio value=\"title-desc\">\n\n          </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Price Low To High</ion-label>\n          <ion-radio value=\"price-asc\">\n\n          </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Price High To Low</ion-label>\n          <ion-radio value=\"price-desc\">\n\n          </ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "iqjW":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter-menu/filter-menu.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu contentId=\"filter\" menuId=\"filter\" side=\"end\">\n  <ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-title>Filter Menu</ion-title>\n      <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label class=\"d-flex ion-justify-content-between\">\n        <h2>Categories</h2>\n      </ion-label>\n      <ion-buttons>\n        <ion-button data-bs-toggle=\"collapse\" data-bs-target=\"#filterMenu\" (click)=\"onClick()\">\n          <ion-icon name=\"add-outline\" slot=\"end\" *ngIf=\"collapsed\"></ion-icon>\n          <ion-icon name=\"remove-outline\" slot=\"end\" *ngIf=\"!collapsed\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <hr>\n    </ion-list-header>\n    <ion-item *ngFor=\"let c of categories\" class=\"collapse.show\" id=\"filterMenu\">\n      <ion-checkbox color=\"secondary\"\n                    name=\"{{c.name}}\"\n                    slot=\"start\"\n                    (ionChange)=\"checkboxSelected($event)\"\n                    #checkbox>\n    </ion-checkbox>\n    <ion-text>{{c.name}}</ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>\n</ion-menu>");

/***/ }),

/***/ "pTsB":
/*!*****************************************************************!*\
  !*** ./src/app/components/filter-menu/filter-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: FilterMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMenuComponent", function() { return FilterMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filter_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filter-menu.component.html */ "iqjW");
/* harmony import */ var _filter_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-menu.component.scss */ "urbp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let FilterMenuComponent = class FilterMenuComponent {
    constructor(menuController) {
        this.menuController = menuController;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.checkbox = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // eslint-disable-next-line @angular-eslint/no-input-rename
        this.categories = [];
    }
    ngOnInit() {
        this.collapsed = true;
    }
    onClick() {
        this.collapsed = !this.collapsed;
    }
    closeMenu() {
        this.menuController.close('filter').then();
    }
    checkboxSelected(ev) {
        this.menuController.close('filter').then();
        this.checkbox.emit({
            name: ev.target.name,
            selected: ev.target.checked
        });
    }
};
FilterMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
FilterMenuComponent.propDecorators = {
    checkbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['checkbox',] }],
    categories: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['categories',] }],
    ionCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['checkbox', { static: false },] }]
};
FilterMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filter-menu',
        template: _raw_loader_filter_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filter_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FilterMenuComponent);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  margin-right: 20px;\n  position: absolute;\n  right: 0;\n  top: 10px;\n}\n\nion-icon[name=\"cart-outline\"] {\n  color: rgba(245, 7, 7, 0.877);\n}\n\nion-buttons[slot=\"end\"] > ion-button.cart {\n  margin-right: 20px;\n}\n\nion-buttons[slot=\"primary\"] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nion-buttons[slot=\"primary\"] ion-button {\n  flex: 1;\n}\n\n.item-entry {\n  padding: 10px 0;\n}\n\n.item-name {\n  font-size: 20px;\n  font-weight: 700;\n  font-style: normal;\n  font-family: Arial, sans-serif;\n  color: var(--ion-color-dark-tint);\n}\n\n.price {\n  color: var(--ion-color-tertary-tint);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQUNiOztBQUVBO0VBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0VBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFFYiw4QkFBOEI7QUFBbEM7O0FBSkE7RUFPUSxPQUFPO0FBQ2Y7O0FBR0E7RUFDSSxlQUFlO0FBQW5COztBQUdBO0VBQ0ksZUFBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGlDQUFpQztBQUFyQzs7QUFHQTtFQUNJLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUFuQiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZXtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG5pb24taWNvbltuYW1lPVwiY2FydC1vdXRsaW5lXCJde1xyXG4gICAgY29sb3I6IHJnYmEoMjQ1LCA3LCA3LCAwLjg3Nyk7XHJcbn1cclxuXHJcbmlvbi1idXR0b25zW3Nsb3Q9XCJlbmRcIl0gPiBpb24tYnV0dG9uLmNhcnR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b25zW3Nsb3Q9XCJwcmltYXJ5XCJde1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaXRlbS1lbnRyeXtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLml0ZW0tbmFtZXtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxufVxyXG5cclxuLnByaWNle1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0YXJ5LXRpbnQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sort-modal/sort-modal.component */ "MI67");
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/filter-menu/filter-menu.component */ "pTsB");










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_8__["SortModalComponent"], _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_9__["FilterMenuComponent"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "urbp":
/*!*******************************************************************!*\
  !*** ./src/app/components/filter-menu/filter-menu.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map