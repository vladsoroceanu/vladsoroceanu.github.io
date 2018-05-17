(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/form/form.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/actions/form/form.actions.ts ***!
  \**********************************************/
/*! exports provided: FORM_GET, FORM_LOADED, FormGetAction, FormLoadedAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_GET", function() { return FORM_GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_LOADED", function() { return FORM_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGetAction", function() { return FormGetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoadedAction", function() { return FormLoadedAction; });
var FORM_GET = '[Form] Get';
var FORM_LOADED = '[Form] Loaded';
var FormGetAction = /** @class */ (function () {
    function FormGetAction() {
        this.type = FORM_GET;
    }
    return FormGetAction;
}());

var FormLoadedAction = /** @class */ (function () {
    function FormLoadedAction(payload) {
        this.payload = payload;
        this.type = FORM_LOADED;
    }
    return FormLoadedAction;
}());



/***/ }),

/***/ "./src/app/actions/image/image.actions.ts":
/*!************************************************!*\
  !*** ./src/app/actions/image/image.actions.ts ***!
  \************************************************/
/*! exports provided: IMAGES_LOADED, IMAGES_LOADED_UPDATE, IMAGES_GET, IMAGES_ADD, ImagesLoadedAction, ImagesLoadedUpdateAction, ImagesGetAction, ImagesAddAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES_LOADED", function() { return IMAGES_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES_LOADED_UPDATE", function() { return IMAGES_LOADED_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES_GET", function() { return IMAGES_GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES_ADD", function() { return IMAGES_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesLoadedAction", function() { return ImagesLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesLoadedUpdateAction", function() { return ImagesLoadedUpdateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesGetAction", function() { return ImagesGetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesAddAction", function() { return ImagesAddAction; });
var IMAGES_LOADED = '[Images] Loaded';
var IMAGES_LOADED_UPDATE = '[Images] Loaded Update';
var IMAGES_GET = '[Images] Get';
var IMAGES_ADD = '[Images] Add';
var ImagesLoadedAction = /** @class */ (function () {
    function ImagesLoadedAction(payload) {
        this.payload = payload;
        this.type = IMAGES_LOADED;
    }
    return ImagesLoadedAction;
}());

var ImagesLoadedUpdateAction = /** @class */ (function () {
    function ImagesLoadedUpdateAction(payload) {
        this.payload = payload;
        this.type = IMAGES_LOADED_UPDATE;
    }
    return ImagesLoadedUpdateAction;
}());

var ImagesGetAction = /** @class */ (function () {
    function ImagesGetAction(payload) {
        this.payload = payload;
        this.type = IMAGES_GET;
    }
    return ImagesGetAction;
}());

var ImagesAddAction = /** @class */ (function () {
    function ImagesAddAction(payload) {
        this.payload = payload;
        this.type = IMAGES_ADD;
    }
    return ImagesAddAction;
}());



/***/ }),

/***/ "./src/app/actions/index.ts":
/*!**********************************!*\
  !*** ./src/app/actions/index.ts ***!
  \**********************************/
/*! exports provided: FORM_GET, FORM_LOADED, FormGetAction, FormLoadedAction, IMAGES_LOADED, IMAGES_LOADED_UPDATE, IMAGES_GET, IMAGES_ADD, ImagesLoadedAction, ImagesLoadedUpdateAction, ImagesGetAction, ImagesAddAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_form_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/form.actions */ "./src/app/actions/form/form.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORM_GET", function() { return _form_form_actions__WEBPACK_IMPORTED_MODULE_0__["FORM_GET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORM_LOADED", function() { return _form_form_actions__WEBPACK_IMPORTED_MODULE_0__["FORM_LOADED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGetAction", function() { return _form_form_actions__WEBPACK_IMPORTED_MODULE_0__["FormGetAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLoadedAction", function() { return _form_form_actions__WEBPACK_IMPORTED_MODULE_0__["FormLoadedAction"]; });

/* harmony import */ var _image_image_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/image.actions */ "./src/app/actions/image/image.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMAGES_LOADED", function() { return _image_image_actions__WEBPACK_IMPORTED_MODULE_1__["IMAGES_LOADED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMAGES_LOADED_UPDATE", function() { return _image_image_actions__WEBPACK_IMPORTED_MODULE_1__["IMAGES_LOADED_UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMAGES_GET", function() { return _image_image_actions__WEBPACK_IMPORTED_MODULE_1__["IMAGES_GET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMAGES_ADD", function() { return _image_image_actions__WEBPACK_IMPORTED_MODULE_1__["IMAGES_ADD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagesLoadedAction", function() { return _image_image_actions__WEBPACK_IMPORTED_MODULE_1__["ImagesLoadedAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagesLoadedUpdateAction", function() { return _image_image_actions__WEBPACK_IMPORTED_MODULE_1__["ImagesLoadedUpdateAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagesGetAction", function() { return _image_image_actions__WEBPACK_IMPORTED_MODULE_1__["ImagesGetAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagesAddAction", function() { return _image_image_actions__WEBPACK_IMPORTED_MODULE_1__["ImagesAddAction"]; });















/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _routes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes.module */ "./src/app/routes.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_my_form_my_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/my-form/my-form.component */ "./src/app/components/my-form/my-form.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");
/* harmony import */ var _services_image_items_image_items_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/image-items/image-items.service */ "./src/app/services/image-items/image-items.service.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _effects_load_images__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./effects/load-images */ "./src/app/effects/load-images.ts");
/* harmony import */ var _services_form_form_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/form/form.service */ "./src/app/services/form/form.service.ts");
/* harmony import */ var _effects_load_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effects/load-form */ "./src/app/effects/load-form.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_collection_image_collection_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/collection-image/collection-image.component */ "./src/app/components/collection-image/collection-image.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_my_form_my_form_component__WEBPACK_IMPORTED_MODULE_12__["MyFormComponent"],
                _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_13__["CollectionComponent"],
                _components_collection_image_collection_image_component__WEBPACK_IMPORTED_MODULE_20__["CollectionImageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_7__["DragulaModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_15__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_effects_load_images__WEBPACK_IMPORTED_MODULE_16__["LoadImagesEffect"], _effects_load_form__WEBPACK_IMPORTED_MODULE_18__["LoadFormEffect"]]),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_routes_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutes"], { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [
                _services_image_items_image_items_service__WEBPACK_IMPORTED_MODULE_14__["ImageItemsService"],
                _services_form_form_service__WEBPACK_IMPORTED_MODULE_17__["FormService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/collection-image/collection-image.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/collection-image/collection-image.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (click)=\"onClick($event)\" [@imageState]=\"loaded\">\n    <img src=\"{{src}}\" (load)=\"onLoad()\">\n    <i class=\"material-icons plus\" [attr.selected]=\"selected\">add_box</i>\n</div>"

/***/ }),

/***/ "./src/app/components/collection-image/collection-image.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/collection-image/collection-image.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plus {\n  position: absolute;\n  left: 10px;\n  color: white;\n  padding: 5px 0 0 5px;\n  text-shadow: 1px 1px 2px black, 0 0 1em #666, 0 0 0.2em #666; }\n  .plus[selected=\"true\"] {\n    color: #ff4081; }\n"

/***/ }),

/***/ "./src/app/components/collection-image/collection-image.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/collection-image/collection-image.component.ts ***!
  \***************************************************************************/
/*! exports provided: CollectionImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionImageComponent", function() { return CollectionImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionImageComponent = /** @class */ (function () {
    function CollectionImageComponent() {
        this.selected = false;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loaded = false;
    }
    CollectionImageComponent.prototype.onLoad = function () {
        this.loaded = true;
    };
    CollectionImageComponent.prototype.onClick = function (event) {
        this.selected = !this.selected;
        this.onSelect.emit(this.selected);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CollectionImageComponent.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CollectionImageComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CollectionImageComponent.prototype, "onSelect", void 0);
    CollectionImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collection-image',
            template: __webpack_require__(/*! ./collection-image.component.html */ "./src/app/components/collection-image/collection-image.component.html"),
            styles: [__webpack_require__(/*! ./collection-image.component.scss */ "./src/app/components/collection-image/collection-image.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('imageState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-out'))
                ])
            ]
        })
    ], CollectionImageComponent);
    return CollectionImageComponent;
}());



/***/ }),

/***/ "./src/app/components/collection/collection.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/collection/collection.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column\">\n  <div class=\"folder-header\">\n    <span>Available Movies</span>\n    <button mat-icon-button color=\"accent\" (click)=\"selectAll()\"><mat-icon>add</mat-icon></button>\n  </div>\n  <ul class=\"container available\" [dragula]=\"dragulaBagName\" [dragulaModel]='itemList'>\n    <li class=\"image-container\" *ngFor=\"let item of itemList; let i = index\" [attr.selected]=\"item.selected\">\n      <collection-image class=\"image\" [src]=\"item.src\" [selected]=\"item.selected\" (onSelect)=\"selectItem(i)\"></collection-image>\n    </li>\n  </ul>\n</div>\n\n<div class=\"column\">\n  <div class=\"folder-header\"><span>Add to Collection</span></div>\n  <ul class=\"container added\" [dragula]=\"dragulaBagName\" [dragulaModel]='addedList'>\n    <li class=\"image-container\" *ngFor=\"let item of addedList\">\n        <collection-image class=\"image\" [src]=\"item.src\"></collection-image>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/collection/collection.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/collection/collection.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  display: flex;\n  top: 0;\n  left: 240px;\n  width: calc(100% - 290px);\n  padding: 20px 20px 20px 30px; }\n\n.column {\n  width: 50%;\n  margin: 10px; }\n\n.column .folder-header {\n    height: 2rem; }\n\n.column .folder-header span {\n      font-size: 1.5rem; }\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  list-style-type: none;\n  border-top: 1px solid #666; }\n\n.container.added {\n    min-height: 180px; }\n\n.image-container {\n  position: relative;\n  width: 120px;\n  height: 160px;\n  padding: 10px;\n  cursor: pointer;\n  transition: all .25s ease; }\n\n.image-container:hover {\n    -webkit-filter: brightness(1.25);\n            filter: brightness(1.25); }\n\n.image-container .image-label {\n    display: none; }\n"

/***/ }),

/***/ "./src/app/components/collection/collection.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/collection/collection.component.ts ***!
  \***************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(dragulaService, store) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.store = store;
        this.itemListIdentifier = 'available';
        this.addedListIdentifier = 'added';
        this.dragulaBagName = 'bag-items';
        this.itemList = [];
        this.addedList = [];
        // subscribe to the loaded images
        this.subscription = store.select(_reducers__WEBPACK_IMPORTED_MODULE_3__["getLoadedImages"]).subscribe(function (items) {
            _this.itemList = items;
        });
        // subscribe to the added images
        var addedSubscription = store.select(_reducers__WEBPACK_IMPORTED_MODULE_3__["getAddedImages"]).subscribe(function (items) {
            _this.addedList = items;
        });
        this.subscription.add(addedSubscription);
        // add dragged images to the addedList
        var dropSubscription = this.dragulaService.dropModel.subscribe(function (drop) { return _this.onDrop(drop); });
        this.subscription.add(dropSubscription);
    }
    CollectionComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["ImagesGetAction"]());
    };
    CollectionComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.dragulaService.destroy(this.dragulaBagName);
    };
    CollectionComponent.prototype.selectItem = function (index) {
        var item = this.itemList[index];
        item.selected = !item.selected;
    };
    CollectionComponent.prototype.selectAll = function () {
        this.itemList = this.itemList.map(function (item) {
            item.selected = !item.selected;
            return item;
        });
    };
    CollectionComponent.prototype.onDrop = function (drop) {
        var _this = this;
        var source = drop[3].className;
        var destination = drop[2].className;
        if (source === drop) {
            return;
        }
        else if (destination.indexOf(this.itemListIdentifier) > 0) {
            this.addedList = this.addedList.filter(function (item) {
                if (item.selected) {
                    item.selected = false;
                    _this.itemList.push(item);
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        else if (destination.indexOf(this.addedListIdentifier) > 0) {
            this.itemList = this.itemList.filter(function (item) {
                if (item.selected) {
                    item.selected = false;
                    _this.addedList.push(item);
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        // push the arrays to the state
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["ImagesLoadedAction"](this.itemList));
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["ImagesAddAction"](this.addedList));
    };
    CollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collection',
            template: __webpack_require__(/*! ./collection.component.html */ "./src/app/components/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.scss */ "./src/app/components/collection/collection.component.scss")]
        }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/components/my-form/my-form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/my-form/my-form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-container\" [formGroup]=\"options\">\n  <div class=\"field-container\" *ngFor=\"let field of form$ | async\">\n      <div *ngIf=\"field.datagramValueType === 'STRING'\">\n          <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n              <input matInput required placeholder=\"{{field.name}}\">\n          </mat-form-field>\n      </div>\n      <div *ngIf=\"field.datagramValueType === 'BOOLEAN'\">\n        <mat-checkbox>{{field.name}}</mat-checkbox>\n      </div>\n      <div *ngIf=\"field.datagramValueType === 'REF_CODE'\">\n          <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n          <mat-select required>\n            <mat-option value=\"None\">None</mat-option>\n            <mat-option *ngFor=\"let opt of field.options\" value=\"{{opt}}\">{{opt}}</mat-option>\n          </mat-select>\n          <mat-label>{{field.name}}</mat-label>\n        </mat-form-field>\n      </div>\n  </div>\n  <div class=\"button-container\">\n      <button mat-raised-button color=\"primary\">Save</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/my-form/my-form.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/my-form/my-form.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 240px;\n  width: calc(100% - 290px);\n  padding: 20px 20px 20px 30px; }\n\n.form-container {\n  display: flex;\n  flex-wrap: wrap; }\n\n.form-container .field-container {\n    flex-basis: 50%; }\n\n.form-container .field-container .mat-form-field {\n      width: calc(100% - 40px); }\n\n.form-container .button-container {\n    display: flex;\n    width: calc(100% - 40px);\n    justify-content: flex-end; }\n\n.form-container .button-container > button {\n      width: 150px; }\n"

/***/ }),

/***/ "./src/app/components/my-form/my-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/my-form/my-form.component.ts ***!
  \*********************************************************/
/*! exports provided: MyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFormComponent", function() { return MyFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyFormComponent = /** @class */ (function () {
    function MyFormComponent(store, fb) {
        this.store = store;
        this.options = fb.group({ floatLabel: 'auto' });
        console.log(this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_4__["getGroupForm"]).subscribe(function (form) { return console.log(form); }));
        this.form$ = this.store.select(_reducers__WEBPACK_IMPORTED_MODULE_4__["getGroupForm"]);
    }
    MyFormComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_2__["FormGetAction"]());
    };
    MyFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-form',
            template: __webpack_require__(/*! ./my-form.component.html */ "./src/app/components/my-form/my-form.component.html"),
            styles: [__webpack_require__(/*! ./my-form.component.scss */ "./src/app/components/my-form/my-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MyFormComponent);
    return MyFormComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"shrine-drawer mdc-drawer mdc-drawer--permanent\">\n  <img class=\"atom-logo\" src=\"assets/atom-logo.png\" />\n  <div class=\"mdc-drawer__content\">\n    <nav class=\"mdc-list\">\n      <a class=\"mdc-list-item\" routerLink=\"form\">\n        Form\n      </a>\n      <a class=\"mdc-list-item\" routerLink=\"collection\">\n        Collection\n      </a>\n    </nav>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  position: absolute; }\n\nnav {\n  height: inherit; }\n\n.shrine-logo-drawer {\n  width: 48px;\n  padding: 40px 0 0;\n  margin: 0 auto;\n  fill: currentColor; }\n\n.shrine-title {\n  -ms-grid-row-align: center;\n      align-self: center;\n  margin: 5px auto; }\n\n.atom-logo {\n  width: 75px;\n  margin: 0 auto;\n  padding: 10px;\n  height: auto; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(breakpointObserver, router, route) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.route = route;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset);
        this.routeTitle = '';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.routeTitle = "" + event.url.substr(1, 1).toUpperCase() + event.url.substring(2);
            }
        });
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/effects/load-form.ts":
/*!**************************************!*\
  !*** ./src/app/effects/load-form.ts ***!
  \**************************************/
/*! exports provided: LoadFormEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFormEffect", function() { return LoadFormEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_form_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/form/form.service */ "./src/app/services/form/form.service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoadFormEffect = /** @class */ (function () {
    function LoadFormEffect(formService, actions$) {
        var _this = this;
        this.formService = formService;
        this.actions$ = actions$;
        this.loadForm$ = this.actions$
            .ofType(_actions__WEBPACK_IMPORTED_MODULE_2__["FORM_GET"])
            .switchMap(function () {
            return _this.formService.getForm().map(function (data) {
                return new _actions__WEBPACK_IMPORTED_MODULE_2__["FormLoadedAction"](data);
            });
        });
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LoadFormEffect.prototype, "loadForm$", void 0);
    LoadFormEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_form_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], LoadFormEffect);
    return LoadFormEffect;
}());



/***/ }),

/***/ "./src/app/effects/load-images.ts":
/*!****************************************!*\
  !*** ./src/app/effects/load-images.ts ***!
  \****************************************/
/*! exports provided: LoadImagesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadImagesEffect", function() { return LoadImagesEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_items_image_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/image-items/image-items.service */ "./src/app/services/image-items/image-items.service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_withLatestFrom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/withLatestFrom */ "./node_modules/rxjs-compat/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoadImagesEffect = /** @class */ (function () {
    function LoadImagesEffect(imageItemsService, actions$, store) {
        var _this = this;
        this.imageItemsService = imageItemsService;
        this.actions$ = actions$;
        this.store = store;
        this.loadImages$ = this.actions$
            .ofType(_actions__WEBPACK_IMPORTED_MODULE_2__["IMAGES_GET"])
            .withLatestFrom(this.store)
            .filter((function (value, index) { return value[1].loadedImages.length === 0; }))
            .switchMap(function () {
            return _this.imageItemsService.getImageList(150)
                .map(function (data) {
                return new _actions__WEBPACK_IMPORTED_MODULE_2__["ImagesLoadedAction"](data);
            });
        });
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], LoadImagesEffect.prototype, "loadImages$", void 0);
    LoadImagesEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_image_items_image_items_service__WEBPACK_IMPORTED_MODULE_1__["ImageItemsService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], LoadImagesEffect);
    return LoadImagesEffect;
}());



/***/ }),

/***/ "./src/app/reducers/form/load-form.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/form/load-form.ts ***!
  \********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function reducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["FORM_LOADED"]:
            return [
                __assign({}, action.payload.ACCESS_CHANNEL),
                __assign({}, action.payload.SECTION_NAVIGATION),
                __assign({}, action.payload.HEROBANNER),
                __assign({}, action.payload.ALIAS),
                __assign({}, action.payload.VIEW_ALL),
                __assign({}, action.payload.COLOR),
                __assign({}, action.payload.ORIENTATION),
                __assign({}, action.payload.INTERACTION)
            ];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/image/add-images.ts":
/*!**********************************************!*\
  !*** ./src/app/reducers/image/add-images.ts ***!
  \**********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");

function reducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["IMAGES_ADD"]:
            return action.payload.slice();
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/image/load-images.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/image/load-images.ts ***!
  \***********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");

function reducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["IMAGES_LOADED"]:
            return action.payload.slice();
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, getLoadedImages, getAddedImages, getGroupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadedImages", function() { return getLoadedImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddedImages", function() { return getAddedImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupForm", function() { return getGroupForm; });
/* harmony import */ var _image_load_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/load-images */ "./src/app/reducers/image/load-images.ts");
/* harmony import */ var _image_add_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/add-images */ "./src/app/reducers/image/add-images.ts");
/* harmony import */ var _form_load_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/load-form */ "./src/app/reducers/form/load-form.ts");



// expose reducers
var reducers = {
    loadedImages: _image_load_images__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    addedImages: _image_add_images__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    loadedForm: _form_load_form__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
// declare selectors
var getLoadedImages = function (state) { return state.loadedImages; };
var getAddedImages = function (state) { return state.addedImages; };
var getGroupForm = function (state) { return state.loadedForm; };


/***/ }),

/***/ "./src/app/routes.module.ts":
/*!**********************************!*\
  !*** ./src/app/routes.module.ts ***!
  \**********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _components_my_form_my_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/my-form/my-form.component */ "./src/app/components/my-form/my-form.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");


var AppRoutes = [
    {
        path: 'form',
        component: _components_my_form_my_form_component__WEBPACK_IMPORTED_MODULE_0__["MyFormComponent"],
        data: { title: 'Form' }
    },
    {
        path: 'collection',
        component: _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_1__["CollectionComponent"],
        data: { title: 'Collection' }
    },
    { path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    },
    { path: '**', component: _components_my_form_my_form_component__WEBPACK_IMPORTED_MODULE_0__["MyFormComponent"] }
];


/***/ }),

/***/ "./src/app/services/form/form.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/form/form.service.ts ***!
  \***********************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var formUrl = 'angular-prototype/assets/mock-data.json';
var FormService = /** @class */ (function () {
    function FormService(http) {
        this.http = http;
    }
    FormService.prototype.getForm = function () {
        return this.http.get(formUrl).map(function (data) {
            var groupForm = data.payload.nodeTypes.CATALOGUE.subTypes.GROUP.attributes;
            groupForm.ACCESS_CHANNEL.options = ['Sky Atlantic', 'Sky Cinema'];
            groupForm.SECTION_NAVIGATION.options = ['Default', 'Documentaries', 'Entertainment', 'Home'];
            groupForm.VIEW_ALL.options = ['False', 'True'];
            groupForm.ORIENTATION.options = ['Landscape', 'Portrait'];
            groupForm.INTERACTION.options = ['Background', 'Expand'];
            return groupForm;
        });
    };
    FormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./src/app/services/image-items/image-items.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/image-items/image-items.service.ts ***!
  \*************************************************************/
/*! exports provided: ImageItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItemsService", function() { return ImageItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ImageItemsService = /** @class */ (function () {
    function ImageItemsService() {
    }
    ImageItemsService.prototype.getImageList = function (limit) {
        if (limit === void 0) { limit = 10; }
        var itemList = [];
        for (var i = 0; i < limit; i++) {
            itemList.push({
                src: "http://placeimg.com/120/160/any?" + Math.round(Math.random() * 100000),
                label: 'Label'
            });
        }
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(itemList);
    };
    ImageItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ImageItemsService);
    return ImageItemsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vso05/dev/angular4-proto/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map