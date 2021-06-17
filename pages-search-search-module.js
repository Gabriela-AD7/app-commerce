(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "Dwri":
/*!*********************************************!*\
  !*** ./src/app/pages/search/search.page.ts ***!
  \*********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search.page.html */ "eQ5q");
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.page.scss */ "bHDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");





let SearchPage = class SearchPage {
    constructor(productService) {
        this.productService = productService;
        this.filteredProducts = [];
    }
    ngOnInit() {
    }
    search(ev) {
        this.touched = false;
        this.filteredProducts = [];
        this.showSkeleton = true;
        this.productService.searchProducts(ev.target.value).subscribe((prods) => {
            if (prods.length <= 0) {
                this.touched = true;
            }
            else {
                this.touched = false;
            }
            this.showSkeleton = false;
            this.filteredProducts = prods;
        }); //, err=>console.log(err)
    }
};
SearchPage.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchPage);



/***/ }),

/***/ "P8Ee":
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "Dwri");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "bHDT":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "eQ5q":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n      <ion-title>Search</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar debounce=\"500\" color=\"light\" (ionChange)=\"search($event)\" placeholder=\"Enter keyword...\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list *ngIf=\"filteredProducts.length>0\">\n          <ion-item *ngFor=\"let p of filteredProducts\">\n            <ion-thumbnail>\n              <ion-img [src]=\"p.images[0].src\" alt={{p.name}}></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h4>{{p.name}}</h4>\n              <p>{{p.price | currency: \"MXN\"}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n        <!--show skeleton-->\n        <ion-list *ngIf=\"showSkeleton\">\n          <ion-item *ngFor=\"let d of [].constructor(5)\">\n            <ion-thumbnail>\n              <ion-skeleton-text animated>\n              </ion-skeleton-text>\n              <ion-label>\n                <h4><ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text></h4>\n                <ion-text>\n                  <p><ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text></p>\n                </ion-text>\n              </ion-label>\n            </ion-thumbnail>\n          </ion-item>\n        </ion-list>\n        <!--no items found-->\n        <ion-list *ngIf=\"filteredProducts.length<=0 && touched\" lines=\"none\">\n          <ion-item>\n            <ion-label>\n              <h3>No products found</h3>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "vuQK":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "P8Ee");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "Dwri");







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-search-search-module.js.map