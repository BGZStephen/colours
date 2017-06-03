webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteViewComponent = (function () {
    function SiteViewComponent() {
    }
    SiteViewComponent.prototype.ngOnInit = function () {
    };
    return SiteViewComponent;
}());
SiteViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-site-view',
        template: __webpack_require__(276),
        styles: [__webpack_require__(258)]
    }),
    __metadata("design:paramtypes", [])
], SiteViewComponent);

//# sourceMappingURL=site-view.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 153;


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(182);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(259),
        styles: [__webpack_require__(241)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__site_site_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// modules



// guards

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* router */],
            __WEBPACK_IMPORTED_MODULE_6__site_site_module__["a" /* SiteModule */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__["a" /* DashboardModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__colour_library_api_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_colour_library_components_barrel__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColourLibraryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// sevices

// components
// dashboard specific

var ColourLibraryModule = (function () {
    function ColourLibraryModule() {
    }
    return ColourLibraryModule;
}());
ColourLibraryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_7__components_colour_library_components_barrel__["a" /* ColourLibraryViewComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
        ],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_6__colour_library_api_service__["a" /* ColourLibraryApiService */]]
    })
], ColourLibraryModule);

//# sourceMappingURL=colour-library.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colour_library_api_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColourLibraryViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColourLibraryViewComponent = (function () {
    function ColourLibraryViewComponent(colourLibraryApiService, flashMessage) {
        this.colourLibraryApiService = colourLibraryApiService;
        this.flashMessage = flashMessage;
        this.activeModal = -1;
        // COLOUR ADD STYLES
        this.hexConversion = "FFFFFF";
        this.rgbConversion = { "red": "051", "green": "102", "blue": "153" };
    }
    ColourLibraryViewComponent.prototype.ngOnInit = function () {
        this.loadColourLibrary();
        this.convertRgbToHex();
        this.getUserPalettes();
    };
    ColourLibraryViewComponent.prototype.activeModalStyle = function (index) {
        if (index == this.activeModal) {
            return { "opacity": "1", "min-height": "calc(100vh - 120px)", "max-height": "200vh" };
        }
        else {
            return { "opacity": "0", "min-height": "0", "max-height": "0" };
        }
    };
    ColourLibraryViewComponent.prototype.addColour = function (colourLibraryObject) {
        var _this = this;
        this.colourLibraryApiService.addColour(colourLibraryObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show(res.message, { cssClass: "flash-success--dashboard", timeout: 2000 });
                _this.activeModal = -1;
                _this.loadColourLibrary();
            }
            else {
                _this.flashMessage.show(res.message, { cssClass: "flash-failure--dashboard", timeout: 2000 });
            }
        });
    };
    ColourLibraryViewComponent.prototype.addColourToPalette = function (colourLibraryObject) {
        var _this = this;
        this.colourLibraryApiService.addColourToPalette(colourLibraryObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show(res.message, { cssClass: "flash-success--dashboard", timeout: 2000 });
                _this.activeModal = -1;
                _this.loadColourLibrary();
            }
            else {
                _this.flashMessage.show(res.message, { cssClass: "flash-failure--dashboard", timeout: 2000 });
            }
        });
    };
    ColourLibraryViewComponent.prototype.deleteColour = function (colourLibraryObject) {
        var _this = this;
        this.colourLibraryApiService.deleteColour(colourLibraryObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show(res.message, { cssClass: "flash-success--dashboard", timeout: 2000 });
                _this.activeModal = -1;
                _this.loadColourLibrary();
            }
            else {
                _this.flashMessage.show(res.message, { cssClass: "flash-failure--dashboard", timeout: 2000 });
            }
        });
    };
    ColourLibraryViewComponent.prototype.getUserPalettes = function () {
        var _this = this;
        this.colourLibraryApiService.getUserPalettes()
            .subscribe(function (res) {
            if (res.success == false) {
            }
            else {
                _this.userPalettes = res;
            }
        });
    };
    ColourLibraryViewComponent.prototype.loadColourLibrary = function () {
        var _this = this;
        this.colourLibraryApiService.getColourLibrary()
            .subscribe(function (res) {
            _this.colourLibrary = res;
        });
    };
    ColourLibraryViewComponent.prototype.toggleModal = function (index) {
        if (this.activeModal == index) {
            this.activeModal = -1;
        }
        else {
            this.activeModal = index;
        }
    };
    ColourLibraryViewComponent.prototype.setActiveColour = function (hexValue) {
        if (hexValue) {
            this.activeColour = hexValue;
        }
        else {
            this.activeColour = "";
        }
    };
    ColourLibraryViewComponent.prototype.convertRgbToHex = function () {
        var redValue = parseInt(this.rgbConversion.red, 10).toString(16);
        if (redValue.length < 2) {
            redValue = "0" + redValue;
        }
        var greenValue = parseInt(this.rgbConversion.green, 10).toString(16);
        if (greenValue.length < 2) {
            greenValue = "0" + greenValue;
        }
        var blueValue = parseInt(this.rgbConversion.blue, 10).toString(16);
        if (blueValue.length < 2) {
            blueValue = "0" + blueValue;
        }
        var hexConstructor = redValue + greenValue + blueValue;
        this.hexConversion = hexConstructor;
    };
    ColourLibraryViewComponent.prototype.convertHexToRgb = function (hexValue) {
        if (hexValue.length == 6) {
            var redHex = parseInt(hexValue.substr(0, 2), 16);
            this.rgbConversion.red = redHex;
            var greenHex = parseInt(hexValue.substr(2, 2), 16);
            this.rgbConversion.green = greenHex;
            var blueHex = parseInt(hexValue.substr(4, 2), 16);
            this.rgbConversion.blue = blueHex;
        }
    };
    ColourLibraryViewComponent.prototype.setRgbColor = function (color, value) {
        if (color == "red") {
            this.rgbConversion.red = value;
        }
        else if (color == "green") {
            this.rgbConversion.green = value;
        }
        else if (color == "blue") {
            this.rgbConversion.blue = value;
        }
    };
    return ColourLibraryViewComponent;
}());
ColourLibraryViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-colour-library-view',
        template: __webpack_require__(260),
        styles: [__webpack_require__(242)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__colour_library_api_service__["a" /* ColourLibraryApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__colour_library_api_service__["a" /* ColourLibraryApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ColourLibraryViewComponent);

var _a, _b;
//# sourceMappingURL=colour-library-view.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_navbar_dashboard_navbar_component__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_navbar_dashboard_navbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_notification_bar_dashboard_notification_bar_component__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dashboard_notification_bar_dashboard_notification_bar_component__["a"]; });
// dashboard exports


// dashboard palette specific
//# sourceMappingURL=dashboard-components-barrel.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_api_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardNavbarComponent = (function () {
    function DashboardNavbarComponent(dashboardApiService, router) {
        this.dashboardApiService = dashboardApiService;
        this.router = router;
        this.colours = ["#00be9c", "#20ce6d", "#2c97df", "#9c56b8", "#f3c500", "#e87e04"];
        this.menuVisibility = false;
        this.activeSubMenu = -1;
    }
    DashboardNavbarComponent.prototype.ngOnInit = function () {
    };
    //  style functions
    DashboardNavbarComponent.prototype.setActiveSubMenu = function (index) {
        if (index == this.activeSubMenu) {
            this.activeSubMenu = -1;
        }
        else {
            this.activeSubMenu = index;
        }
    };
    DashboardNavbarComponent.prototype.setHoverStyle = function (index) {
        return { "background": this.colours[index], "color": "#1D1F25" };
    };
    DashboardNavbarComponent.prototype.setMenuStyle = function () {
        if (this.menuVisibility == true) {
            return { "max-height": "100vh" };
        }
        else {
            return { "max-height": "0" };
        }
    };
    DashboardNavbarComponent.prototype.setSubMenuStyle = function (index) {
        if (index == this.activeSubMenu) {
            var subMenuLength = document.getElementsByClassName("second-level-list")[index].children.length;
            var subMenuHeight = (45 * subMenuLength) + "px";
            return { "max-height": subMenuHeight };
        }
        else {
            return { "max-height": "0" };
        }
    };
    // component navigation functions
    DashboardNavbarComponent.prototype.clearComponent = function () {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': null } }]);
    };
    DashboardNavbarComponent.prototype.setComponent = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': [component] } }]);
    };
    // geneeral functions
    DashboardNavbarComponent.prototype.logout = function () {
        this.dashboardApiService.logout();
        this.router.navigate(['/']);
    };
    return DashboardNavbarComponent;
}());
DashboardNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-navbar',
        template: __webpack_require__(261),
        styles: [__webpack_require__(243)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dashboard_api_service__["a" /* DashboardApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dashboard_api_service__["a" /* DashboardApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DashboardNavbarComponent);

var _a, _b;
//# sourceMappingURL=dashboard-navbar.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardNotificationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardNotificationBarComponent = (function () {
    function DashboardNotificationBarComponent() {
    }
    DashboardNotificationBarComponent.prototype.ngOnInit = function () {
    };
    return DashboardNotificationBarComponent;
}());
DashboardNotificationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-notification-bar',
        template: __webpack_require__(262),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [])
], DashboardNotificationBarComponent);

//# sourceMappingURL=dashboard-notification-bar.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_api_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_view_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__colour_library_colour_library_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__palettes_palettes_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_components_barrel__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// sevices

// views

// modules



//components
// dashboard specific

var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__dashboard_view_component__["a" /* DashboardViewComponent */], __WEBPACK_IMPORTED_MODULE_11__components_dashboard_components_barrel__["a" /* DashboardNavbarComponent */], __WEBPACK_IMPORTED_MODULE_11__components_dashboard_components_barrel__["b" /* DashboardNotificationBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_9__profile_profile_module__["a" /* ProfileModule */],
            __WEBPACK_IMPORTED_MODULE_10__palettes_palettes_module__["a" /* PalettesModule */],
            __WEBPACK_IMPORTED_MODULE_8__colour_library_colour_library_module__["a" /* ColourLibraryModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__dashboard_view_component__["a" /* DashboardViewComponent */], __WEBPACK_IMPORTED_MODULE_11__components_dashboard_components_barrel__["a" /* DashboardNavbarComponent */], __WEBPACK_IMPORTED_MODULE_11__components_dashboard_components_barrel__["b" /* DashboardNotificationBarComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__dashboard_api_service__["a" /* DashboardApiService */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__palettes_api_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaletteAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaletteAddComponent = (function () {
    function PaletteAddComponent(palettesApiService, flashMessage, router) {
        this.palettesApiService = palettesApiService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    PaletteAddComponent.prototype.ngOnInit = function () {
    };
    PaletteAddComponent.prototype.createPalette = function (paletteObject) {
        var _this = this;
        this.palettesApiService.createPalette(paletteObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show("Palette created successfuly", { cssClass: "flash-success--dashboard", timeout: 3000 });
            }
            else {
                _this.flashMessage.show("Failed to create Palette", { cssClass: "flash-failure--dashboard", timeout: 3000 });
            }
        });
    };
    PaletteAddComponent.prototype.setComponent = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': [component] } }]);
    };
    return PaletteAddComponent;
}());
PaletteAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-palette-add',
        template: __webpack_require__(264),
        styles: [__webpack_require__(246)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__palettes_api_service__["a" /* PalettesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__palettes_api_service__["a" /* PalettesApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], PaletteAddComponent);

var _a, _b, _c;
//# sourceMappingURL=palette-add.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__palettes_api_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaletteEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaletteEditComponent = (function () {
    function PaletteEditComponent(activatedRoute, palettesApiService, flashMessage, router) {
        this.activatedRoute = activatedRoute;
        this.palettesApiService = palettesApiService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    PaletteEditComponent.prototype.ngOnInit = function () {
        this.loadPalette();
    };
    PaletteEditComponent.prototype.loadPalette = function () {
        var _this = this;
        this.activatedRoute.params
            .map(function (params) { return params['paletteId']; })
            .subscribe(function (paletteId) {
            var paletteObject = { _id: paletteId };
            _this.palettesApiService.getPaletteById(paletteObject)
                .subscribe(function (res) {
                _this.palette = res;
            });
        });
    };
    PaletteEditComponent.prototype.setComponent = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': [component] } }]);
    };
    PaletteEditComponent.prototype.updatePalette = function (paletteObject, paletteId) {
        var _this = this;
        paletteObject._id = paletteId;
        this.palettesApiService.updatePalette(paletteObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show(res.message, { cssClass: "flash-success--dashboard", timeout: 3000 });
            }
            else {
                _this.flashMessage.show("Failed to update Palette", { cssClass: "flash-failure--dashboard", timeout: 3000 });
            }
        });
    };
    return PaletteEditComponent;
}());
PaletteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-palette-edit',
        template: __webpack_require__(265),
        styles: [__webpack_require__(247)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__palettes_api_service__["a" /* PalettesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__palettes_api_service__["a" /* PalettesApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], PaletteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=palette-edit.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__palettes_api_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaletteViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaletteViewComponent = (function () {
    function PaletteViewComponent(palettesApiService, flashMessage, activatedRoute) {
        this.palettesApiService = palettesApiService;
        this.flashMessage = flashMessage;
        this.activatedRoute = activatedRoute;
        this.hexConversion = "FFFFFF";
        this.rgbConversion = { "red": "051", "green": "102", "blue": "153" };
    }
    PaletteViewComponent.prototype.ngOnInit = function () {
        this.loadPalette();
        this.convertRgbToHex();
    };
    PaletteViewComponent.prototype.addPaletteItem = function (paletteObject) {
        var _this = this;
        this.palettesApiService.addPaletteItem(paletteObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show("Palette item added", { cssClass: "flash-success--dashboard", timeout: 3000 });
                _this.loadPalette();
            }
            else {
                _this.flashMessage.show("Palette item addition failed", { cssClass: "flash-failure--dashboard", timeout: 3000 });
            }
        });
    };
    PaletteViewComponent.prototype.convertRgbToHex = function () {
        var redValue = parseInt(this.rgbConversion.red, 10).toString(16);
        if (redValue.length < 2) {
            redValue = "0" + redValue;
        }
        var greenValue = parseInt(this.rgbConversion.green, 10).toString(16);
        if (greenValue.length < 2) {
            greenValue = "0" + greenValue;
        }
        var blueValue = parseInt(this.rgbConversion.blue, 10).toString(16);
        if (blueValue.length < 2) {
            blueValue = "0" + blueValue;
        }
        var hexConstructor = redValue + greenValue + blueValue;
        this.hexConversion = hexConstructor;
    };
    PaletteViewComponent.prototype.convertHexToRgb = function (hexValue) {
        if (hexValue.length == 6) {
            var redHex = parseInt(hexValue.substr(0, 2), 16);
            this.rgbConversion.red = redHex;
            var greenHex = parseInt(hexValue.substr(2, 2), 16);
            this.rgbConversion.green = greenHex;
            var blueHex = parseInt(hexValue.substr(4, 2), 16);
            this.rgbConversion.blue = blueHex;
        }
    };
    PaletteViewComponent.prototype.deletePaletteItem = function (paletteObject) {
        var _this = this;
        this.palettesApiService.deletePaletteItem(paletteObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show("Palette item deleted", { cssClass: "flash-success--dashboard", timeout: 3000 });
                _this.loadPalette();
            }
            else {
                _this.flashMessage.show("Palette item deletion failed", { cssClass: "flash-failure--dashboard", timeout: 3000 });
            }
        });
    };
    PaletteViewComponent.prototype.loadPalette = function () {
        var _this = this;
        this.activatedRoute.params
            .map(function (params) { return params['paletteId']; })
            .subscribe(function (paletteId) {
            var paletteObject = { _id: paletteId };
            _this.palettesApiService.getPaletteById(paletteObject)
                .subscribe(function (res) {
                _this.palette = res;
            });
        });
    };
    PaletteViewComponent.prototype.setRgbColor = function (color, value) {
        if (color == "red") {
            this.rgbConversion.red = value;
        }
        else if (color == "green") {
            this.rgbConversion.green = value;
        }
        else if (color == "blue") {
            this.rgbConversion.blue = value;
        }
    };
    return PaletteViewComponent;
}());
PaletteViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-palette-view',
        template: __webpack_require__(266),
        styles: [__webpack_require__(248)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__palettes_api_service__["a" /* PalettesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__palettes_api_service__["a" /* PalettesApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], PaletteViewComponent);

var _a, _b, _c;
//# sourceMappingURL=palette-view.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__palettes_api_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PalettesManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PalettesManageComponent = (function () {
    function PalettesManageComponent(router, palettesApiService) {
        this.router = router;
        this.palettesApiService = palettesApiService;
    }
    PalettesManageComponent.prototype.ngOnInit = function () {
        this.loadUserPalettes();
    };
    PalettesManageComponent.prototype.deletePalette = function (paletteId) {
        var _this = this;
        var paletteObject = { paletteId: paletteId };
        this.palettesApiService.deletePalette(paletteObject)
            .subscribe(function (res) {
            _this.loadUserPalettes();
        });
    };
    PalettesManageComponent.prototype.setComponent = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': [component] } }]);
    };
    PalettesManageComponent.prototype.setPalette = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': ['palette-edit', component] } }]);
    };
    PalettesManageComponent.prototype.loadUserPalettes = function () {
        var _this = this;
        this.palettesApiService.getPalettesByUserId()
            .subscribe(function (res) {
            if (res.success == false) {
                _this.userPalettes = [];
            }
            else {
                _this.userPalettes = res;
            }
        });
    };
    return PalettesManageComponent;
}());
PalettesManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-palettes-manage',
        template: __webpack_require__(267),
        styles: [__webpack_require__(249)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__palettes_api_service__["a" /* PalettesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__palettes_api_service__["a" /* PalettesApiService */]) === "function" && _b || Object])
], PalettesManageComponent);

var _a, _b;
//# sourceMappingURL=palettes-manage.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__palettes_api_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PalettesViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PalettesViewComponent = (function () {
    function PalettesViewComponent(router, palettesApiService) {
        this.router = router;
        this.palettesApiService = palettesApiService;
    }
    PalettesViewComponent.prototype.ngOnInit = function () {
        this.loadUserPalettes();
    };
    PalettesViewComponent.prototype.loadUserPalettes = function () {
        var _this = this;
        this.palettesApiService.getPalettesByUserId()
            .subscribe(function (res) {
            if (res.success == false) {
                _this.userPalettes = [];
            }
            else {
                _this.userPalettes = res;
            }
        });
    };
    PalettesViewComponent.prototype.setComponent = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': [component] } }]);
    };
    PalettesViewComponent.prototype.setPalette = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': ['palette', component] } }]);
    };
    return PalettesViewComponent;
}());
PalettesViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-palettes-view',
        template: __webpack_require__(268),
        styles: [__webpack_require__(250)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__palettes_api_service__["a" /* PalettesApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__palettes_api_service__["a" /* PalettesApiService */]) === "function" && _b || Object])
], PalettesViewComponent);

var _a, _b;
//# sourceMappingURL=palettes-view.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__palettes_api_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PalettesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// sevices

//components
// dashboard specific

var PalettesModule = (function () {
    function PalettesModule() {
    }
    return PalettesModule;
}());
PalettesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["a" /* PaletteViewComponent */], __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["b" /* PalettesViewComponent */], __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["c" /* PaletteAddComponent */], __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["d" /* PaletteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["e" /* PalettesManageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["a" /* PaletteViewComponent */], __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["b" /* PalettesViewComponent */], __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["c" /* PaletteAddComponent */], __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["d" /* PaletteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_palettes_components_barrel__["e" /* PalettesManageComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__palettes_api_service__["a" /* PalettesApiService */]]
    })
], PalettesModule);

//# sourceMappingURL=palettes.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_api_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileChangePasswordComponent = (function () {
    function ProfileChangePasswordComponent(profileApiService, flashMessage, router) {
        this.profileApiService = profileApiService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ProfileChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ProfileChangePasswordComponent.prototype.clearComponent = function () {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': null } }]);
    };
    ProfileChangePasswordComponent.prototype.updatePassword = function (userObject) {
        var _this = this;
        if (userObject.currentPassword == userObject.newPassword) {
            this.flashMessage.show("Current and New Password cannot match", { cssClass: "flash-failure--dashboard", timeout: 3000 });
        }
        else {
            this.profileApiService.updatePassword(userObject)
                .subscribe(function (res) {
                if (res.success) {
                    _this.flashMessage.show(res.message, { cssClass: "flash-success--dashboard", timeout: 3000 });
                    _this.clearComponent();
                }
                else {
                    _this.flashMessage.show(res.message, { cssClass: "flash-failure--dashboard", timeout: 3000 });
                }
            });
        }
    };
    return ProfileChangePasswordComponent;
}());
ProfileChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-change-password',
        template: __webpack_require__(269),
        styles: [__webpack_require__(251)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__profile_api_service__["a" /* ProfileApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__profile_api_service__["a" /* ProfileApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ProfileChangePasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=profile-change-password.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_api_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileEditComponent = (function () {
    function ProfileEditComponent(profileApiService, flashMessage, router) {
        this.profileApiService = profileApiService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
        this.loadUser();
    };
    ProfileEditComponent.prototype.loadUser = function () {
        var _this = this;
        this.profileApiService.getCurrentUser()
            .subscribe(function (res) {
            _this.user = res;
        });
    };
    ProfileEditComponent.prototype.setComponent = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': [component] } }]);
    };
    ProfileEditComponent.prototype.updateProfile = function (userObject) {
        var _this = this;
        this.profileApiService.updateProfile(userObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show("Profile updated successfuly", { cssClass: "flash-success--dashboard", timeout: 3000 });
                _this.loadUser();
                _this.setComponent('profile');
            }
            else {
                _this.flashMessage.show("Failed to update profile", { cssClass: "flash-failure--dashboard", timeout: 3000 });
            }
        });
    };
    return ProfileEditComponent;
}());
ProfileEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-edit',
        template: __webpack_require__(270),
        styles: [__webpack_require__(252)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_api_service__["a" /* ProfileApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_api_service__["a" /* ProfileApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ProfileEditComponent);

var _a, _b, _c;
//# sourceMappingURL=profile-edit.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_api_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileViewComponent = (function () {
    function ProfileViewComponent(profileApiService, router) {
        this.profileApiService = profileApiService;
        this.router = router;
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        this.loadUser();
    };
    ProfileViewComponent.prototype.loadUser = function () {
        var _this = this;
        this.profileApiService.getCurrentUser()
            .subscribe(function (res) {
            _this.user = res;
        });
    };
    ProfileViewComponent.prototype.setComponent = function (component) {
        this.router.navigate(['/dashboard', { outlets: { 'dashboardOutlet': [component] } }]);
    };
    return ProfileViewComponent;
}());
ProfileViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-view',
        template: __webpack_require__(271),
        styles: [__webpack_require__(253)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_api_service__["a" /* ProfileApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_api_service__["a" /* ProfileApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileViewComponent);

var _a, _b;
//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_api_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_components_barrel__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// sevices

// profile components

var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__components_profile_components_barrel__["a" /* ProfileViewComponent */], __WEBPACK_IMPORTED_MODULE_7__components_profile_components_barrel__["b" /* ProfileEditComponent */], __WEBPACK_IMPORTED_MODULE_7__components_profile_components_barrel__["c" /* ProfileChangePasswordComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__components_profile_components_barrel__["a" /* ProfileViewComponent */], __WEBPACK_IMPORTED_MODULE_7__components_profile_components_barrel__["b" /* ProfileEditComponent */], __WEBPACK_IMPORTED_MODULE_7__components_profile_components_barrel__["c" /* ProfileChangePasswordComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__profile_api_service__["a" /* ProfileApiService */]]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteIntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteIntroComponent = (function () {
    function SiteIntroComponent() {
    }
    SiteIntroComponent.prototype.ngOnInit = function () {
    };
    return SiteIntroComponent;
}());
SiteIntroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-site-intro',
        template: __webpack_require__(272),
        styles: [__webpack_require__(254)]
    }),
    __metadata("design:paramtypes", [])
], SiteIntroComponent);

//# sourceMappingURL=site-intro.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_api_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SiteLoginComponent = (function () {
    function SiteLoginComponent(flashMessage, siteApiService, router) {
        this.flashMessage = flashMessage;
        this.siteApiService = siteApiService;
        this.router = router;
        // colours array to use for random hover effects
        this.colours = ["#00be9c", "#20ce6d", "#2c97df", "#9c56b8", "#ecf0f1", "#f3c500", "#e87e04", "#ea4b36"];
        this.buttonStyles = [];
        this.inputStyles = [];
    }
    SiteLoginComponent.prototype.ngOnInit = function () {
        this.generateInputStyles(); // generate styles for both inputs and buttonss to give random color effect
        this.generateButtonStyles();
    };
    // set styling start
    SiteLoginComponent.prototype.generateButtonStyles = function () {
        var buttonCount = document.getElementsByClassName("form-button"); // get total number of form inputs
        for (var i = 0; i < buttonCount.length; i++) {
            var max = Math.floor(this.colours.length);
            var randomStyle = Math.floor(Math.random() * max);
            this.buttonStyles.push({ "color": this.colours[randomStyle], "border": "4px solid" + this.colours[randomStyle] });
        }
    };
    SiteLoginComponent.prototype.generateInputStyles = function () {
        var inputCount = document.getElementsByClassName("form-input"); // get total number of form inputs
        for (var i = 0; i < inputCount.length; i++) {
            var max = Math.floor(this.colours.length);
            var randomStyle = Math.floor(Math.random() * max);
            this.inputStyles.push({ "color": this.colours[randomStyle] });
        }
    };
    SiteLoginComponent.prototype.applyInputStyle = function (index) {
        return this.inputStyles[index];
    };
    SiteLoginComponent.prototype.applyButtonStyle = function (index) {
        return this.buttonStyles[index];
    };
    // set styling end
    SiteLoginComponent.prototype.login = function (userObject) {
        var _this = this;
        this.siteApiService.authenticate(userObject)
            .subscribe(function (res) {
            if (res.success) {
                _this.siteApiService.storeToken(res);
                _this.flashMessage.show("Login successful", { cssClass: "flash-success", timeout: 1500 });
                setTimeout(function () {
                    _this.router.navigate(['/dashboard']);
                }, 2000);
            }
            else {
                _this.flashMessage.show(res.message, { cssClass: "flash-failure", timeout: 2000 });
            }
        });
    };
    SiteLoginComponent.prototype.setComponent = function (component) {
        this.router.navigate(['/home', { outlets: { 'siteOutlet': [component] } }]);
    };
    return SiteLoginComponent;
}());
SiteLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-site-login',
        template: __webpack_require__(273),
        styles: [__webpack_require__(255)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__site_api_service__["a" /* SiteApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__site_api_service__["a" /* SiteApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], SiteLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=site-login.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteNavbarComponent = (function () {
    function SiteNavbarComponent(router) {
        this.router = router;
        this.colours = [
            { "background": "#00be9c", "color": "#1D1F25" },
            { "background": "#20ce6d", "color": "#1D1F25" },
            { "background": "#2c97df", "color": "#f5f5f5" },
            { "background": "#9c56b8", "color": "#f5f5f5" },
            { "background": "#ecf0f1", "color": "#1D1F25" },
            { "background": "#f3c500", "color": "#1D1F25" },
            { "background": "#e87e04", "color": "#f5f5f5" },
            { "background": "#ea4b36", "color": "#f5f5f5" }
        ];
        this.navbarVisibility = false; // used to set visibility of the navbar, toggled with menu-toggle
        this.activeHover = -1; // used to check with LI is being hovered, if none, revert to -1
        this.resizeToggleNavbar(); // set navbar visibility on page load, used to make sure it's hidden on small screen loads, and visible on large screen loads
    }
    SiteNavbarComponent.prototype.ngOnInit = function () {
    };
    // styling functions
    //hover styling
    SiteNavbarComponent.prototype.applyHoverStyle = function (index) {
        if (index == this.activeHover) {
            var max = Math.floor(this.colours.length);
            var randomStyle = Math.floor(Math.random() * max);
            return this.colours[randomStyle];
        }
    };
    SiteNavbarComponent.prototype.setHoverStyle = function (index) {
        if (index == this.activeHover) {
            this.activeHover = -1;
        }
        else {
            this.activeHover = index;
        }
    };
    // hover styling end
    // navbar visibility
    SiteNavbarComponent.prototype.resizeToggleNavbar = function () {
        if (screen.width > 1024) {
            this.navbarVisibility = true;
        }
        else {
            this.navbarVisibility = false;
        }
    };
    SiteNavbarComponent.prototype.setNavbarVisibility = function () {
        if (this.navbarVisibility == true) {
            return { "left": "0" };
        }
        else {
            return { "left": "-100%" };
        }
    };
    SiteNavbarComponent.prototype.setActionBarVisibility = function () {
        if (this.navbarVisibility == true) {
            return { "right": "0%" };
        }
        else {
            return { "right": "-100%" };
        }
    };
    // navbar visibility end
    // component navigation
    SiteNavbarComponent.prototype.setComponent = function (component) {
        if (screen.width < 1024) {
            this.navbarVisibility = false;
        }
        this.router.navigate(['/home', { outlets: { 'siteOutlet': [component] } }]);
    };
    return SiteNavbarComponent;
}());
SiteNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-site-navbar',
        template: __webpack_require__(274),
        styles: [__webpack_require__(256)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SiteNavbarComponent);

var _a;
//# sourceMappingURL=site-navbar.component.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_api_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SiteRegisterComponent = (function () {
    function SiteRegisterComponent(flashMessage, siteApiService, router) {
        this.flashMessage = flashMessage;
        this.siteApiService = siteApiService;
        this.router = router;
        // colours array to use for random hover effects
        this.colours = ["#00be9c", "#20ce6d", "#2c97df", "#9c56b8", "#ecf0f1", "#f3c500", "#e87e04", "#ea4b36"];
        this.buttonStyles = [];
        this.inputStyles = [];
    }
    SiteRegisterComponent.prototype.ngOnInit = function () {
        this.generateInputStyles(); // generate styles for both inputs and buttonss to give random color effect
        this.generateButtonStyles();
    };
    // set styling start
    SiteRegisterComponent.prototype.generateButtonStyles = function () {
        var buttonCount = document.getElementsByClassName("form-button"); // get total number of form inputs
        for (var i = 0; i < buttonCount.length; i++) {
            var max = Math.floor(this.colours.length);
            var randomStyle = Math.floor(Math.random() * max);
            this.buttonStyles.push({ "color": this.colours[randomStyle], "border": "4px solid" + this.colours[randomStyle] });
        }
    };
    SiteRegisterComponent.prototype.generateInputStyles = function () {
        var inputCount = document.getElementsByClassName("form-input"); // get total number of form inputs
        for (var i = 0; i < inputCount.length; i++) {
            var max = Math.floor(this.colours.length);
            var randomStyle = Math.floor(Math.random() * max);
            this.inputStyles.push({ "color": this.colours[randomStyle] });
        }
    };
    SiteRegisterComponent.prototype.applyInputStyle = function (index) {
        return this.inputStyles[index];
    };
    SiteRegisterComponent.prototype.applyButtonStyle = function (index) {
        return this.buttonStyles[index];
    };
    // set styling end
    // user registation / validation
    SiteRegisterComponent.prototype.registerUser = function (userObject) {
        var _this = this;
        if (this.validate(userObject)) {
            this.siteApiService.registerUser(userObject)
                .subscribe(function (res) {
                if (res.success) {
                    _this.flashMessage.show("Regisrtation successful", { cssClass: "flash-success", timeout: 2000 });
                    setTimeout(function () {
                        _this.setComponent('login');
                    }, 2500);
                }
                else {
                    _this.flashMessage.show(res.message, { cssClass: "flash-failure", timeout: 2000 });
                }
            });
        }
    };
    SiteRegisterComponent.prototype.validate = function (userObject) {
        if (this.validateInput("First Name", userObject.firstName) && this.validateInput("Last Name", userObject.lastName) && this.validateEmail(userObject.email) && this.validateInput("Username", userObject.username) && this.validatePassword(userObject.password)) {
            return true;
        }
        else {
            return false;
        }
    };
    SiteRegisterComponent.prototype.validateInput = function (userObjectItemName, userObjectItem) {
        if (userObjectItem.length >= 3) {
            return true;
        }
        else {
            this.flashMessage.show(userObjectItemName + " does not meet minimum length (3)", { cssClass: "flash-failure", timeout: 2000 });
        }
    };
    SiteRegisterComponent.prototype.validateEmail = function (userObjectEmail) {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(userObjectEmail)) {
            return true;
        }
        else {
            this.flashMessage.show("Incorrect email format", { cssClass: "flash-failure", timeout: 2000 });
        }
    };
    SiteRegisterComponent.prototype.validatePassword = function (userObjectPassword) {
        if (userObjectPassword.length > 6) {
            return true;
        }
        else {
            this.flashMessage.show("Password must be longer than 6 characters", { cssClass: "flash-failure", timeout: 3000 });
        }
    };
    // user registation / validation end
    SiteRegisterComponent.prototype.setComponent = function (component) {
        this.router.navigate(['/home', { outlets: { 'siteOutlet': [component] } }]);
    };
    return SiteRegisterComponent;
}());
SiteRegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-site-register',
        template: __webpack_require__(275),
        styles: [__webpack_require__(257)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__site_api_service__["a" /* SiteApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__site_api_service__["a" /* SiteApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], SiteRegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=site-register.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__site_api_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__site_view_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_site_components_barrel__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// sevices

// views

//components
// site specific

var SiteModule = (function () {
    function SiteModule() {
    }
    return SiteModule;
}());
SiteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__site_view_component__["a" /* SiteViewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_site_components_barrel__["a" /* SiteNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_site_components_barrel__["b" /* SiteIntroComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_site_components_barrel__["c" /* SiteRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_site_components_barrel__["d" /* SiteLoginComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* router */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__site_view_component__["a" /* SiteViewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_site_components_barrel__["a" /* SiteNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_site_components_barrel__["b" /* SiteIntroComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_site_components_barrel__["c" /* SiteRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_site_components_barrel__["d" /* SiteLoginComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__site_api_service__["a" /* SiteApiService */]],
    })
], SiteModule);

//# sourceMappingURL=site.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px; }\n\n.header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.main-header {\n  font-size: 2em;\n  margin-bottom: 20px; }\n\n.output-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative; }\n\n.colour-library-item {\n  margin-bottom: 10px;\n  padding: 0 5px;\n  width: 50%; }\n  @media (min-width: 540px) {\n    .colour-library-item {\n      width: 33.333%; } }\n  @media (min-width: 768px) {\n    .colour-library-item {\n      width: 25%; } }\n  @media (min-width: 1024px) {\n    .colour-library-item {\n      width: 25%; } }\n  @media (min-width: 1280px) {\n    .colour-library-item {\n      width: 12.5%; } }\n  @media (min-width: 1600px) {\n    .colour-library-item {\n      width: 10%; } }\n\n.colour-preview-pane {\n  padding-top: calc(100% - 60px); }\n\n.colour-library-item-description-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #1D1F25;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 30px; }\n\n.colour-library-item-description {\n  color: #FBFAFA;\n  font-size: 1.2em;\n  font-weight: 900;\n  text-align: center;\n  width: 100%; }\n\n.actions-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%; }\n\n.fa-trash, .fa-plus {\n  background: #1D1F25;\n  color: #FBFAFA;\n  font-size: 1.2em;\n  padding: 6px 0;\n  text-align: center;\n  transition: all 0.5s ease;\n  width: 100%; }\n\n.fa-trash:hover, .fa-plus:hover {\n  color: #1D1F25;\n  background: #f3c500; }\n\n.add-colour-modal-container,\n.add-to-palette-modal-container {\n  background: white;\n  overflow: hidden;\n  position: absolute;\n  transition: all 0.3s ease;\n  width: 100%;\n  z-index: 100; }\n\n.add-colour-header {\n  background: #00be9c;\n  color: #1D1F25; }\n\n.add-colour-form {\n  width: 100%; }\n\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.add-colour-label {\n  background: #00be9c;\n  color: #1D1F25;\n  display: inline-block;\n  font-size: 1.8em;\n  font-weight: 700;\n  height: 45px;\n  margin-bottom: 15px;\n  margin-right: 10px;\n  padding: 5px 15px; }\n\n.add-colour-input {\n  border: none;\n  border-bottom: 3px solid #00be9c;\n  color: #00be9c;\n  display: inline-block;\n  font-size: 1.8em;\n  font-weight: 700;\n  height: 45px;\n  margin-bottom: 15px;\n  max-width: 100%;\n  padding: 5px; }\n\n.rgb-input {\n  width: 80px; }\n\n.input-cancel,\n.input-save {\n  border: none;\n  background: #ea4b36;\n  color: #1D1F25;\n  cursor: pointer;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  width: 50%; }\n  @media (min-width: 500px) {\n    .input-cancel,\n    .input-save {\n      margin-top: 10px;\n      margin-right: 5px;\n      width: auto; } }\n\n.input-save {\n  background: #2c97df; }\n\n.colour-add-row {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 60px; }\n\n.colour-add-preview-header {\n  color: #1D1F25;\n  display: inline-block;\n  font-size: 1.8em;\n  margin-right: 20px; }\n\n.colour-add-preview {\n  display: inline-block;\n  height: 60px;\n  width: 60px; }\n\n.palettes-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%; }\n\n.palette {\n  padding: 5px;\n  width: 100%; }\n  @media (min-width: 540px) {\n    .palette {\n      width: 50%; } }\n  @media (min-width: 768px) {\n    .palette {\n      width: 50%; } }\n  @media (min-width: 1024px) {\n    .palette {\n      width: 33.333%; } }\n  @media (min-width: 1280px) {\n    .palette {\n      width: 25%; } }\n\n.palettes-row {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.fa-times {\n  margin-right: 20px; }\n\n.fa-times:hover {\n  color: #cc0000; }\n\n.palette-colour-label {\n  background: #00be9c;\n  color: #1D1F25;\n  display: inline-block;\n  font-size: 1.5em;\n  font-weight: 700;\n  margin-left: 20px;\n  margin-right: 10px;\n  padding: 5px 15px; }\n\n.palette-colour-input {\n  border: none;\n  border-bottom: 3px solid #00be9c;\n  color: #00be9c;\n  display: inline-block;\n  font-size: 1.5em;\n  font-weight: 700;\n  max-width: 100%;\n  padding: 5px; }\n\n.palette-header {\n  color: #1D1F25;\n  font-size: 1.5em;\n  margin-right: 20px; }\n\n.palette-name {\n  background: #1D1F25;\n  color: #FBFAFA;\n  font-size: 1.5em;\n  padding: 10px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .main-container {\n      position: fixed;\n      width: 300px; } }\n\n.logo-container {\n  background: #1D1F25;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  padding-left: 15px;\n  position: relative; }\n  @media (min-width: 1024px) {\n    .logo-container {\n      border-bottom: 1px solid #333742; } }\n\n.logo {\n  color: #FBFAFA; }\n\n.navbar-container {\n  background: #1D1F25;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease; }\n  @media (min-width: 1024px) {\n    .navbar-container {\n      min-height: calc(100vh - 50px);\n      max-height: calc(100vh - 50px);\n      overflow: scroll; } }\n\n.navbar-container::-webkit-scrollbar {\n  display: none; }\n\n.menu-toggle {\n  color: #FBFAFA;\n  position: absolute;\n  right: 15px; }\n  @media (min-width: 1024px) {\n    .menu-toggle {\n      display: none; } }\n\n.top-level-list {\n  background: #24262e;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  list-style: none;\n  width: 100%; }\n\n.top-level-item {\n  border-bottom: 1px solid #333742;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%; }\n\n.top-level-content {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #FBFAFA;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  font-size: 1.2em;\n  font-weight: 700;\n  height: 45px;\n  letter-spacing: 0.075em;\n  padding-left: 15px;\n  position: relative;\n  text-transform: uppercase;\n  transition: 0.3s ease;\n  width: 100%; }\n\n.top-level-content > .fa:first-of-type {\n  margin-right: 10px;\n  width: 24px; }\n\n.fa-caret-down {\n  position: absolute;\n  right: 20px; }\n\n.second-level-list {\n  background: #24262e;\n  color: #FBFAFA;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  list-style: none;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  width: 100%; }\n\n.second-level-item {\n  border-top: 1px solid #333742;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 45px;\n  width: 100%; }\n\n.second-level-content {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  font-size: 1.2em;\n  font-weight: 700;\n  height: 45px;\n  letter-spacing: 0.075em;\n  padding-left: 30px;\n  position: relative;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n  width: 100%; }\n\n.second-level-content:hover {\n  background: #f0ecec;\n  color: #1D1F25; }\n\n.second-level-content > .fa:first-of-type {\n  margin-right: 10px;\n  width: 24px; }\n\n.logout-item {\n  background: #24262e; }\n  @media (min-width: 1024px) {\n    .logout-item {\n      bottom: 0;\n      position: absolute;\n      width: 300px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  width: 100%; }\n\n.notification-bar-container {\n  background: #24262e; }\n\n.notification-bar {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  padding-left: 20px; }\n\n.notifications-intro {\n  color: #d9d0d0;\n  font-size: 1.2em;\n  font-weight: 700;\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .main-container {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; } }\n\n.left-content-container {\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .left-content-container {\n      width: 300px; } }\n\n.right-content-container {\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .right-content-container {\n      width: calc(100% - 300px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px; }\n\n.header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.main-header {\n  font-size: 2em;\n  margin-bottom: 20px; }\n\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.form-label {\n  background: #1D1F25;\n  color: #FBFAFA;\n  display: inline-block;\n  font-size: 1.6em;\n  font-weight: 700;\n  height: 45px;\n  margin-bottom: 15px;\n  margin-right: 10px;\n  padding: 5px 15px;\n  width: 100%; }\n  @media (min-width: 600px) {\n    .form-label {\n      font-size: 1.8em;\n      width: auto; } }\n\n.form-input {\n  border: none;\n  border-bottom: 3px solid #9c56b8;\n  color: #9c56b8;\n  display: inline-block;\n  font-size: 1.6em;\n  font-weight: 700;\n  height: 45px;\n  margin-bottom: 15px;\n  max-width: 100%;\n  padding: 5px;\n  width: 100%; }\n  @media (min-width: 600px) {\n    .form-input {\n      font-size: 1.8em;\n      width: auto; } }\n\n.input-cancel,\n.input-save {\n  border: none;\n  background: #ea4b36;\n  color: #1D1F25;\n  cursor: pointer;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  width: 50%; }\n  @media (min-width: 500px) {\n    .input-cancel,\n    .input-save {\n      margin-top: 10px;\n      margin-right: 5px;\n      width: auto; } }\n\n.input-save {\n  background: #2c97df; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px; }\n\n.header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.main-header {\n  font-size: 2em;\n  margin-bottom: 20px; }\n\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.form-label {\n  background: #1D1F25;\n  color: #FBFAFA;\n  display: inline-block;\n  font-size: 1.6em;\n  font-weight: 700;\n  height: 45px;\n  margin-bottom: 15px;\n  margin-right: 10px;\n  padding: 5px 15px;\n  width: 100%; }\n  @media (min-width: 600px) {\n    .form-label {\n      font-size: 1.8em;\n      width: auto; } }\n\n.form-input {\n  border: none;\n  border-bottom: 3px solid #9c56b8;\n  color: #9c56b8;\n  display: inline-block;\n  font-size: 1.6em;\n  font-weight: 700;\n  height: 45px;\n  margin-bottom: 15px;\n  max-width: 100%;\n  padding: 5px;\n  width: 100%; }\n  @media (min-width: 600px) {\n    .form-input {\n      font-size: 1.8em;\n      width: auto; } }\n\n.input-cancel,\n.input-save {\n  border: none;\n  background: #ea4b36;\n  color: #1D1F25;\n  cursor: pointer;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  width: 50%; }\n  @media (min-width: 500px) {\n    .input-cancel,\n    .input-save {\n      margin-top: 10px;\n      margin-right: 5px;\n      width: auto; } }\n\n.input-save {\n  background: #2c97df; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px; }\n\n.header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.main-header {\n  font-size: 2em;\n  margin-bottom: 20px; }\n\n.output-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.output-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .output-left {\n      padding: 10px 10px 10px 0px;\n      width: 40%; } }\n\n.palette-header-container {\n  width: 100%; }\n\n.palette-header,\n.add-colour-header {\n  background: #1D1F25;\n  color: #FBFAFA;\n  display: inline-block;\n  font-size: 1.8em;\n  margin-bottom: 15px;\n  padding: 5px 15px; }\n\n.palette-description {\n  background: #1D1F25;\n  color: #FBFAFA;\n  display: inline-block;\n  font-size: 1.4em;\n  margin-bottom: 5px;\n  padding: 5px 15px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .palette-description {\n      width: 90%; } }\n\n.palette-seperator {\n  border: 3px solid #00be9c;\n  margin: 15px 0 20px 0;\n  width: 100%; }\n\n.add-colour-header {\n  background: #00be9c;\n  color: #1D1F25; }\n\n.add-colour-form {\n  width: 100%; }\n\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.add-colour-label {\n  background: #00be9c;\n  color: #1D1F25;\n  display: inline-block;\n  font-size: 1.8em;\n  font-weight: 700;\n  height: 45px;\n  margin-bottom: 15px;\n  margin-right: 10px;\n  padding: 5px 15px; }\n\n.add-colour-input {\n  border: none;\n  border-bottom: 3px solid #00be9c;\n  color: #00be9c;\n  display: inline-block;\n  font-size: 1.8em;\n  font-weight: 700;\n  height: 45px;\n  margin-bottom: 15px;\n  max-width: 100%;\n  padding: 5px; }\n\n.rgb-input {\n  width: 80px; }\n\n.input-cancel,\n.input-save {\n  border: none;\n  background: #ea4b36;\n  color: #1D1F25;\n  cursor: pointer;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  width: 50%; }\n  @media (min-width: 500px) {\n    .input-cancel,\n    .input-save {\n      margin-top: 10px;\n      margin-right: 5px;\n      width: auto; } }\n\n.input-save {\n  background: #2c97df; }\n\n.colour-add-row {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 60px; }\n\n.colour-add-preview-header {\n  color: #1D1F25;\n  display: inline-block;\n  font-size: 1.8em;\n  margin-right: 20px; }\n\n.colour-add-preview {\n  display: inline-block;\n  height: 60px;\n  width: 60px; }\n\n.output-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .output-right {\n      width: 60%;\n      padding: 10px 0 10px 10px; } }\n\n.palette-items-contaoiner {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  @media (min-width: 1024px) {\n    .palette-items-contaoiner {\n      max-height: calc(100vh - 150px);\n      overflow: scroll; } }\n\n@media (min-width: 1024px) {\n  .palette-items-contaoiner::-webkit-scrollbar {\n    display: none; } }\n\n.palette-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #1D1F25;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 94px;\n  margin: 5px 0;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 12px;\n  width: 100%; }\n\n.palette-colour-preview {\n  background: tomato;\n  margin-bottom: 5px;\n  width: 100%;\n  height: 30px; }\n  @media (min-width: 550px) {\n    .palette-colour-preview {\n      height: 70px;\n      margin-bottom: 0px;\n      min-height: 40px;\n      width: 70px; } }\n\n.palette-item-description-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 10px;\n  position: relative;\n  width: 100%; }\n  @media (min-width: 550px) {\n    .palette-item-description-container {\n      margin-bottom: 0px;\n      width: calc(100% - 70px); } }\n\n.palette-item-color {\n  color: #FBFAFA;\n  font-size: 1.2em;\n  font-weight: 900;\n  margin: 5px 0;\n  margin-right: 12px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .palette-item-color {\n      display: inline-block;\n      margin: 0;\n      margin-right: 12px;\n      width: auto; } }\n\n.palette-item-description {\n  color: #FBFAFA;\n  font-size: 1.2em;\n  font-weight: 900;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .palette-item-description {\n      display: inline-block;\n      width: auto; } }\n\n.palette-item-actions-container {\n  opacity: 0;\n  position: absolute;\n  right: 0px;\n  transition: opacity 0.3s ease; }\n\n.palette-item:hover .palette-item-actions-container {\n  opacity: 1; }\n\n.action-delete {\n  background: #1D1F25;\n  color: #FBFAFA;\n  cursor: pointer;\n  font-size: 1.4em;\n  padding: 10px;\n  transition: color 0.3s ease; }\n\n.action-delete:hover {\n  color: #cc0000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px; }\n\n.header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.main-header {\n  font-size: 2em;\n  margin-bottom: 20px; }\n\n.palettes-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%; }\n\n.palette {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.palette-header-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px;\n  width: auto; }\n\n.palette-header {\n  background: #1D1F25;\n  color: #FBFAFA;\n  cursor: pointer;\n  display: inline-block;\n  margin-bottom: 5px;\n  padding: 5px 15px; }\n\n.fa-pencil {\n  cursor: pointer;\n  font-size: 1.6em;\n  margin-left: 8px;\n  padding: 8px;\n  transition: color 0.3s ease; }\n\n.fa-pencil:hover {\n  color: #7A6E8D; }\n\n.fa-trash {\n  cursor: pointer;\n  font-size: 1.6em;\n  padding: 8px;\n  transition: color 0.3s ease; }\n\n.fa-trash:hover {\n  color: #cc0000; }\n\n.palette-output-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-left: -4px;\n  width: 100%; }\n\n.palette-item {\n  background: #1D1F25;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 10px;\n  margin: 4px;\n  width: calc(33% - 8px); }\n  @media (min-width: 600px) {\n    .palette-item {\n      width: calc(25% - 8px); } }\n  @media (min-width: 1024px) {\n    .palette-item {\n      width: calc(12.5% - 8px); } }\n\n.palette-item-color-display {\n  background: #369;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: 100%;\n  width: 100%; }\n\n.palette-item-description {\n  background: #2a2d36;\n  color: #FBFAFA;\n  padding: 5px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .palette-item-description {\n      display: inline; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px; }\n\n.header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.main-header {\n  font-size: 2em;\n  margin-bottom: 20px; }\n\n.palettes-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%; }\n\n.palette {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.palette-header-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px;\n  width: auto; }\n\n.palette-header {\n  background: #1D1F25;\n  color: #FBFAFA;\n  cursor: pointer;\n  display: inline-block;\n  margin-bottom: 5px;\n  padding: 5px 15px; }\n\n.palette-output-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-left: -4px;\n  width: 100%; }\n\n.palette-item {\n  background: #1D1F25;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 10px;\n  margin: 4px;\n  width: calc(33% - 8px); }\n  @media (min-width: 600px) {\n    .palette-item {\n      width: calc(25% - 8px); } }\n  @media (min-width: 1024px) {\n    .palette-item {\n      width: calc(12.5% - 8px); } }\n\n.palette-item-color-display {\n  background: #369;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: 100%;\n  width: 100%; }\n\n.palette-item-description {\n  background: #2a2d36;\n  color: #FBFAFA;\n  padding: 5px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .palette-item-description {\n      display: inline; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px; }\n\n.header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.main-header {\n  font-size: 2em; }\n  @media (min-width: 1024px) {\n    .main-header {\n      margin-bottom: 20px; } }\n\n.fa-pencil {\n  cursor: pointer;\n  font-size: 1.4em;\n  margin-left: 10px;\n  padding: 10px; }\n\n.input-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 15px 0; }\n  @media (min-width: 1024px) {\n    .input-row {\n      margin: 5px 0; } }\n\n.input-label {\n  background: #1D1F25;\n  color: #FBFAFA;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .input-label {\n      margin-right: 5px;\n      width: auto; } }\n\n.input-description {\n  border: none;\n  border-bottom: 4px solid #1D1F25;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .input-description {\n      margin-left: 10px;\n      width: auto; } }\n  .input-description .input-description::-webkit-input-placeholder {\n    color: #1D1F25; }\n  .input-description .input-description:-ms-input-placeholder {\n    color: #1D1F25; }\n  .input-description .input-description::placeholder {\n    color: #1D1F25; }\n\n.input-cancel,\n.input-save {\n  border: none;\n  background: #ea4b36;\n  color: #1D1F25;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  width: 50%; }\n  @media (min-width: 1024px) {\n    .input-cancel,\n    .input-save {\n      margin-top: 20px;\n      margin-right: 5px;\n      width: auto; } }\n\n.input-save {\n  background: #2c97df; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px; }\n\n.header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.main-header {\n  font-size: 2em; }\n  @media (min-width: 1024px) {\n    .main-header {\n      margin-bottom: 20px; } }\n\n.fa-pencil {\n  cursor: pointer;\n  font-size: 1.4em;\n  margin-left: 10px;\n  padding: 10px; }\n\n.input-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 15px 0; }\n  @media (min-width: 1024px) {\n    .input-row {\n      margin: 5px 0; } }\n\n.input-label {\n  background: #1D1F25;\n  color: #FBFAFA;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .input-label {\n      margin-right: 5px;\n      width: auto; } }\n\n.input-description {\n  border: none;\n  border-bottom: 4px solid #1D1F25;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .input-description {\n      margin-left: 10px;\n      width: auto; } }\n  .input-description .input-description::-webkit-input-placeholder {\n    color: #1D1F25; }\n  .input-description .input-description:-ms-input-placeholder {\n    color: #1D1F25; }\n  .input-description .input-description::placeholder {\n    color: #1D1F25; }\n\n.input-cancel,\n.input-save {\n  border: none;\n  background: #ea4b36;\n  color: #1D1F25;\n  cursor: pointer;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  width: 50%; }\n  @media (min-width: 1024px) {\n    .input-cancel,\n    .input-save {\n      margin-top: 20px;\n      margin-right: 5px;\n      width: auto; } }\n\n.input-save {\n  background: #2c97df; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  padding: 10px 15px; }\n\n.header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.main-header {\n  font-size: 2em;\n  margin-bottom: 20px; }\n\n.fa-pencil {\n  cursor: pointer;\n  font-size: 1.4em;\n  margin-left: 10px;\n  padding: 10px; }\n\n.output-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 15px 0; }\n  @media (min-width: 1024px) {\n    .output-row {\n      margin: 5px 0; } }\n\n.output-label {\n  background: #1D1F25;\n  color: #FBFAFA;\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .output-label {\n      margin-right: 5px;\n      width: auto; } }\n\n.output-description {\n  font-size: 1.5em;\n  font-weight: 900;\n  height: 50px;\n  padding: 10px 15px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .output-description {\n      width: auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  background: url(\"/assets/images/colours-bg.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-attachment: scroll;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  padding-top: 20px;\n  width: 100%; }\n\n.content-container {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 8px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .content-container {\n      margin: 0 auto;\n      padding-left: 40px;\n      width: 60%; } }\n\nh1 {\n  background: #1D1F25;\n  color: #FBFAFA;\n  display: inline-block;\n  font-size: 2.5em;\n  margin-bottom: 5px;\n  padding: 10px 25px;\n  text-align: center;\n  width: auto; }\n  @media (min-width: 768px) {\n    h1 {\n      font-size: 4em;\n      margin-bottom: 30px;\n      padding: 10px 25px;\n      text-align: left; } }\n  @media (min-width: 1024px) {\n    h1 {\n      font-size: 6em; } }\n\np {\n  color: #FBFAFA;\n  display: inline-block;\n  font-size: 1.4em;\n  font-weight: 700;\n  background: #1D1F25;\n  margin: 5px 0;\n  padding: 10px 25px; }\n  @media (min-width: 768px) {\n    p {\n      font-size: 1.7em; } }\n  @media (min-width: 1024px) {\n    p {\n      font-size: 2em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  background: url(\"/assets/images/colours-bg.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-attachment: scroll;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  padding-top: 20px;\n  width: 100%; }\n\n.login-form {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 40px;\n  padding: 8px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .login-form {\n      margin: 0 auto;\n      padding-left: 40px;\n      width: 60%; } }\n\n.form-row {\n  margin: 3px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .form-row {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; } }\n\n.form-label {\n  background: #FBFAFA;\n  color: #1D1F25;\n  font-size: 1.5em;\n  font-weight: 900;\n  margin-right: 5px;\n  padding: 5px 10px;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .form-label {\n      font-size: 2em;\n      width: auto; } }\n\n.form-input-wrapper {\n  background: #1D1F25;\n  display: inline-block;\n  padding: 5px 10px;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .form-input-wrapper {\n      width: auto; } }\n\n.form-input {\n  background: #1D1F25;\n  border: none;\n  border-bottom: 4px solid #FBFAFA;\n  color: #FBFAFA;\n  font-size: 1.5em;\n  font-weight: 900;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .form-input {\n      font-size: 2em;\n      width: auto; } }\n\n.form-input::-webkit-input-placeholder {\n  color: #FBFAFA; }\n\n.form-input:-ms-input-placeholder {\n  color: #FBFAFA; }\n\n.form-input::placeholder {\n  color: #FBFAFA; }\n\n.form-button-wrapper {\n  background: #1D1F25;\n  display: inline-block;\n  margin-top: 5px;\n  padding: 6px; }\n\n.form-button {\n  background: #1D1F25;\n  border: none;\n  color: #1D1F25;\n  cursor: pointer;\n  font-size: 1.5em;\n  font-weight: 900;\n  padding: 5px 10px; }\n  @media (min-width: 768px) {\n    .form-button {\n      font-size: 2em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  width: 100%; }\n\n.navbar-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #1D1F25;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 60px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  left: 0;\n  padding: 0 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: background 0.3s ease;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .navbar-container {\n      background: rgba(29, 31, 37, 0.5); } }\n\n.navbar-container:hover {\n  background: #1d1f25; }\n\n.menu-toggle-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #FBFAFA;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  @media (min-width: 1024px) {\n    .menu-toggle-container {\n      display: none; } }\n\n.navbar-toggle {\n  font-size: 1.4em;\n  padding: 10px 5px 10px 10px; }\n\n.menu-toggle-description {\n  font-size: 1.2em;\n  padding: 10px 10px 10px 5px;\n  text-transform: uppercase;\n  font-weight: 900; }\n\n.navbar-list {\n  background: #1D1F25;\n  border-top: 4px solid #FBFAFA;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  left: -100%;\n  list-style: none;\n  position: absolute;\n  top: 100%;\n  transition: all 0.2s ease;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .navbar-list {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: none;\n      border-top: none;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding-left: 10px;\n      top: auto; } }\n\n.navbar-item {\n  color: #FBFAFA;\n  cursor: pointer;\n  font-size: 1.2em;\n  font-weight: 900;\n  padding: 12px 20px;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .navbar-item {\n      border-radius: 5px;\n      padding: 8px 10px;\n      margin: 0 15px;\n      width: auto; } }\n\n@media (min-width: 1024px) {\n  .navbar-item:first-of-type {\n    margin-left: 0; } }\n\n.navbar-icon {\n  margin-right: 8px; }\n\n.navbar-action-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  top: 100%;\n  transition: right 0.2s ease; }\n  @media (min-width: 420px) {\n    .navbar-action-list {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      margin-left: auto;\n      position: absolute;\n      top: -54px;\n      right: -100%; } }\n  @media (min-width: 1024px) {\n    .navbar-action-list {\n      right: 10px;\n      top: auto; } }\n\n.navbar-action-item {\n  color: #FBFAFA;\n  cursor: pointer;\n  font-size: 1.2em;\n  font-weight: 900;\n  padding: 12px 20px;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n  width: 100%; }\n  @media (min-width: 420px) {\n    .navbar-action-item {\n      border-radius: 5px;\n      padding: 8px 10px;\n      margin: 0 15px;\n      width: auto; } }\n\n.navbar-action-icon {\n  margin-right: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  background: url(\"/assets/images/colours-bg.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-attachment: scroll;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n  padding-top: 20px;\n  width: 100%; }\n\n.register-form {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 40px;\n  padding: 8px;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .register-form {\n      margin: 0 auto;\n      padding-left: 40px;\n      width: 60%; } }\n\n.form-row {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 3px 0;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .form-row {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; } }\n\n.form-label {\n  background: #FBFAFA;\n  color: #1D1F25;\n  font-size: 1.5em;\n  font-weight: 900;\n  margin-right: 5px;\n  padding: 5px 10px;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .form-label {\n      font-size: 2em;\n      width: auto; } }\n\n.form-input-wrapper {\n  background: #1D1F25;\n  display: inline-block;\n  padding: 5px 10px;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .form-input-wrapper {\n      width: auto; } }\n\n.form-input {\n  background: #1D1F25;\n  border: none;\n  border-bottom: 3px solid #FBFAFA;\n  color: #FBFAFA;\n  font-size: 1.5em;\n  font-weight: 900;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .form-input {\n      font-size: 2em;\n      width: auto; } }\n\n.form-input::-webkit-input-placeholder {\n  color: #FBFAFA; }\n\n.form-input:-ms-input-placeholder {\n  color: #FBFAFA; }\n\n.form-input::placeholder {\n  color: #FBFAFA; }\n\n.form-button-wrapper {\n  background: #1D1F25;\n  display: inline-block;\n  margin-top: 5px;\n  padding: 6px; }\n\n.form-button {\n  background: #1D1F25;\n  border: none;\n  color: #1D1F25;\n  cursor: pointer;\n  font-size: 1.5em;\n  font-weight: 900;\n  padding: 5px 10px; }\n  @media (min-width: 768px) {\n    .form-button {\n      font-size: 2em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".main-container {\n  min-height: 100vh;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"header-container\">\n    <h2 class=\"main-header\">Colour Library</h2>\n  </div>\n  <div class=\"output-container\" *ngIf=\"colourLibrary\">\n    <div class=\"colour-library-item\">\n      <div class=\"colour-library-item-description-container\">\n        <p class=\"colour-library-item-description\">Add new Colour</p>\n      </div>\n      <div class=\"colour-preview-pane\" [ngStyle]=\"{'background': '#369369'}\">\n      </div>\n      <div class=\"actions-container\">\n        <i class=\"fa fa-plus\" (click)=\"toggleModal(1)\"></i>\n      </div>\n    </div>\n    <div class=\"colour-library-item\" *ngFor=\"let colourItem of colourLibrary.colours\">\n      <div class=\"colour-library-item-description-container\">\n        <p class=\"colour-library-item-description\">#{{colourItem.hex}}</p>\n      </div>\n      <div class=\"colour-preview-pane\" [ngStyle]=\"{'background': '#' + colourItem.hex}\">\n      </div>\n      <div class=\"actions-container\">\n        <i class=\"fa fa-plus\" (click)=\"toggleModal(2); setActiveColour(colourItem.hex)\" *ngIf=\"userPalettes\"></i>\n        <i class=\"fa fa-trash\" (click)=\"deleteColour({hex: colourItem.hex})\"></i>\n      </div>\n    </div>\n    <div class=\"add-colour-modal-container\" [ngStyle]=\"activeModalStyle(1)\">\n      <div class=\"add-colour-form-container\">\n        <form #f=\"ngForm\" (ngSubmit)=\"addColour({colourLibraryId: colourLibrary._id, hex: hex.value})\" class=\"add-colour-form\">\n          <div class=\"form-row\">\n            <label class=\"add-colour-label\">Hex: </label>\n            <input class=\"add-colour-input\" type=\"text\" placeholder=\"#369369\" ngModel=\"{{hexConversion}}\" id=\"hex\" #hex name=\"hex\" (keyup)=\"convertHexToRgb(hex.value)\">\n          </div>\n          <div class=\"form-row\">\n            <label class=\"add-colour-label\">RGB: </label>\n            <div class=\"rgb-container\">\n              <input class=\"add-colour-input rgb-input\" type=\"text\" placeholder=\"255\" ngModel=\"{{rgbConversion.red}}\" id=\"rgbR\" #rgbR name=\"rgbR\" (keyup)=\"setRgbColor('red', rgbR.value); convertRgbToHex()\">\n              <input class=\"add-colour-input rgb-input\" type=\"text\" placeholder=\"255\" ngModel=\"{{rgbConversion.green}}\" id=\"rgbG\" #rgbG name=\"rgbG\" (keyup)=\"setRgbColor('green', rgbG.value); convertRgbToHex()\">\n              <input class=\"add-colour-input rgb-input\" type=\"text\" placeholder=\"255\" ngModel=\"{{rgbConversion.blue}}\" id=\"rgbB\" #rgbB name=\"rgbB\" (keyup)=\"setRgbColor('blue', rgbB.value); convertRgbToHex()\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <a class=\"input-cancel\" (click)=\"toggleModal(1)\">Cancel</a>\n            <input type=\"submit\" value=\"Add\" class=\"input-save\">\n          </div>\n          <div class=\"colour-add-row\">\n            <h3 class=\"colour-add-preview-header\">Colour preview:</h3>\n            <div class=\"colour-add-preview\" [ngStyle]=\"{'background': '#' + hex.value}\">\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"add-to-palette-modal-container\" [ngStyle]=\"activeModalStyle(2)\">\n      <div class=\"palettes-container\" *ngIf=\"userPalettes\">\n        <div class=\"palettes-row\">\n          <i class=\"fa fa-times fa-2x\" (click)=\"toggleModal(2)\"></i>\n          <h3 class=\"palette-header\">Add Colour to Palette</h3>\n        </div>\n        <div class=\"palettes-row\">\n          <div class=\"colour-add-preview\" *ngIf=\"activeColour\" [ngStyle]=\"{'background': '#' + activeColour}\">\n          </div>\n          <label class=\"palette-colour-label\">Description: </label>\n          <input class=\"palette-colour-input\" type=\"text\" placeholder=\"Colour Description\" name=\"description\" #description ngModel>\n        </div>\n        <div class=\"palette\" *ngFor=\"let palette of userPalettes\">\n          <h3 class=\"palette-name\" (click)=\"addColourToPalette({paletteId: palette._id, hex: activeColour, description: description.value})\">{{palette.name}}</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"logo-container\">\n    <h1 class=\"logo\">Colours.</h1>\n    <i class=\"fa fa-bars fa-2x menu-toggle\" (click)=\"menuVisibility = !menuVisibility\"></i>\n  </div>\n  <div class=\"navbar-container\" [ngStyle]=\"setMenuStyle()\">\n    <ul class=\"top-level-list\">\n      <li class=\"top-level-item\" (mouseover)=\"hoverActive = 0\" (mouseleave)=\"hoverActive = -1\">\n        <div class=\"top-level-content\" (click)=\"setActiveSubMenu(-1); clearComponent()\" [ngStyle]=\"hoverActive == 0 ? setHoverStyle(0) : {}\">\n          <i class=\"fa fa-home\"></i><p>Home</p>\n        </div>\n      </li>\n      <li class=\"top-level-item\" (mouseover)=\"hoverActive = 1\" (mouseleave)=\"hoverActive = -1\">\n        <div class=\"top-level-content\" (click)=\"setActiveSubMenu(0)\" [ngStyle]=\"hoverActive == 1 ? setHoverStyle(1) : {}\">\n          <i class=\"fa fa-user\"></i><p>Profile</p><i class=\"fa fa-caret-down\"></i>\n        </div>\n        <ul class=\"second-level-list\" [ngStyle]=\"setSubMenuStyle(0)\">\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\" (click)=\"setComponent('profile')\">\n              <i class=\"fa fa-search\"></i><p>View Profile</p>\n            </div>\n          </li>\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\" (click)=\"setComponent('profile-edit')\">\n              <i class=\"fa fa-cog\"></i><p>Edit Profile</p>\n            </div>\n          </li>\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\" (click)=\"setComponent('profile-password-edit')\">\n              <i class=\"fa fa-lock\"></i><p>Change Password</p>\n            </div>\n          </li>\n        </ul>\n      </li>\n      <!-- <li class=\"top-level-item\" (mouseover)=\"hoverActive = 2\" (mouseleave)=\"hoverActive = -1\" >\n        <div class=\"top-level-content\" (click)=\"setActiveSubMenu(1)\" [ngStyle]=\"hoverActive == 2 ? setHoverStyle(2) : {}\">\n          <i class=\"fa fa-list\"></i><p>Projects</p><i class=\"fa fa-caret-down\"></i>\n        </div>\n        <ul class=\"second-level-list\" [ngStyle]=\"setSubMenuStyle(1)\">\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\">\n              <i class=\"fa fa-plus\"></i><p>Add</p>\n            </div>\n          </li>\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\">\n              <i class=\"fa fa-search\"></i><p>View</p>\n            </div>\n          </li>\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\">\n              <i class=\"fa fa-cog\"></i><p>Manage</p>\n            </div>\n          </li>\n        </ul>\n      </li> -->\n      <li class=\"top-level-item\" (mouseover)=\"hoverActive = 3\" (mouseleave)=\"hoverActive = -1\">\n        <div class=\"top-level-content\" (click)=\"setActiveSubMenu(1)\" [ngStyle]=\"hoverActive == 3 ? setHoverStyle(3) : {}\">\n          <i class=\"fa fa-paint-brush\"></i><p>Palettes</p><i class=\"fa fa-caret-down\"></i>\n        </div>\n        <ul class=\"second-level-list\" [ngStyle]=\"setSubMenuStyle(1)\">\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\" (click)=\"setComponent('palette-add')\">\n              <i class=\"fa fa-plus\"></i><p>Add</p>\n            </div>\n          </li>\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\" (click)=\"setComponent('palettes-view')\">\n              <i class=\"fa fa-search\"></i><p>View</p>\n            </div>\n          </li>\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\" (click)=\"setComponent('palettes-manage')\">\n              <i class=\"fa fa-cog\"></i><p>Manage</p>\n            </div>\n          </li>\n        </ul>\n      </li>\n      <li class=\"top-level-item\" (mouseover)=\"hoverActive = 5\" (mouseleave)=\"hoverActive = -1\">\n        <div class=\"top-level-content\" (click)=\"setComponent('colour-library')\" [ngStyle]=\"hoverActive == 5 ? setHoverStyle(5) : {}\">\n          <i class=\"fa fa-th\"></i><p>Colour Library</p>\n        </div>\n      </li>\n      <!-- <li class=\"top-level-item\" (mouseover)=\"hoverActive = 6\" (mouseleave)=\"hoverActive = -1\">\n        <div class=\"top-level-content\" (click)=\"setActiveSubMenu(2)\" [ngStyle]=\"hoverActive == 6 ? setHoverStyle(0) : {}\">\n          <i class=\"fa fa-paint-brush\"></i><p>Tools</p><i class=\"fa fa-caret-down\"></i>\n        </div>\n        <ul class=\"second-level-list\" [ngStyle]=\"setSubMenuStyle(2)\">\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\" (click)=\"setComponent('palette-add')\">\n              <i class=\"fa fa-plus\"></i><p>RGB to Hex</p>\n            </div>\n          </li>\n          <li class=\"second-level-item\">\n            <div class=\"second-level-content\" (click)=\"setComponent('palettes-view')\">\n              <i class=\"fa fa-search\"></i><p>Hex to RGB</p>\n            </div>\n          </li>\n        </ul>\n      </li> -->\n      <li class=\"top-level-item logout-item\" (mouseover)=\"hoverActive = 4\" (mouseleave)=\"hoverActive = -1\">\n        <div class=\"top-level-content\" (click)=\"setActiveSubMenu(-1); logout()\" [ngStyle]=\"hoverActive == 4 ? setHoverStyle(4) : {}\">\n          <i class=\"fa fa-power-off\"></i><p>Logout</p>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"notification-bar-container\">\n    <div class=\"notification-bar\">\n      <p class=\"notifications-intro\">Notifications: </p>\n      <flash-messages></flash-messages>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"left-content-container\">\n    <app-dashboard-navbar></app-dashboard-navbar>\n  </div>\n  <div class=\"right-content-container\">\n    <app-dashboard-notification-bar></app-dashboard-notification-bar>\n    <router-outlet name=\"dashboardOutlet\"></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"header-container\">\n    <h2 class=\"main-header\">Add Palette</h2>\n  </div>\n  <div class=\"output-container\">\n    <form #f=\"ngForm\" (ngSubmit)=\"createPalette(f.value)\" class=\"palette-add-form\">\n      <div class=\"form-row\">\n        <label class=\"form-label\" for=\"name\">Palette Name: </label>\n        <input class=\"form-input\" type=\"text\" placeholder=\"Colour Palette #1\" id=\"name\" #name name=\"name\" ngModel>\n      </div>\n      <div class=\"form-row\">\n        <label class=\"form-label\" for=\"description\">Palette Description: </label>\n        <input class=\"form-input\" type=\"text\" placeholder=\"Palette Description #1\" id=\"description\" #description name=\"description\" ngModel>\n      </div>\n      <div class=\"form-row\">\n        <button class=\"input-cancel\" (click)=\"setComponent('palettes-manage')\">Cancel</button>\n        <input type=\"submit\" value=\"Add\" class=\"input-save\">\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"header-container\">\n    <h2 class=\"main-header\">Palette > Edit</h2>\n  </div>\n  <div class=\"output-container\" *ngIf=\"palette\">\n    <form #f=\"ngForm\" (ngSubmit)=\"updatePalette(f.value, palette._id)\" class=\"palette-edit-form\">\n      <div class=\"form-row\">\n        <label class=\"form-label\" for=\"name\">Palette Name: </label>\n        <input class=\"form-input\" type=\"text\" placeholder=\"Colour Palette #1\" ngModel=\"{{palette.name}}\" id=\"name\" #name name=\"name\">\n      </div>\n      <div class=\"form-row\">\n        <label class=\"form-label\" for=\"description\">Palette Description: </label>\n        <input class=\"form-input\" type=\"text\" placeholder=\"Palette Description #1\" ngModel=\"{{palette.description}}\" id=\"description\" #description name=\"description\">\n      </div>\n      <div class=\"form-row\">\n        <button class=\"input-cancel\" (click)=\"setComponent('palettes-manage')\">Cancel</button>\n        <input type=\"submit\" value=\"Save\" class=\"input-save\">\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"header-container\">\n    <h2 class=\"main-header\">Palette</h2>\n  </div>\n  <div class=\"output-container\" *ngIf=\"palette\">\n    <div class=\"output-left\">\n      <div class=\"palette-header-container\">\n        <h2 class=\"palette-header\">{{palette.name}}</h2>\n      </div>\n      <div class=\"palette-description-container\">\n        <p class=\"palette-description\">{{palette.description}}</p>\n      </div>\n      <hr class=\"palette-seperator\">\n      <div class=\"add-colour-header-container\">\n        <h2 class=\"add-colour-header\">Add Colour</h2>\n      </div>\n      <form #f=\"ngForm\" (ngSubmit)=\"addPaletteItem({paletteId: palette._id, hex: hex.value, description: description.value})\" class=\"add-colour-form\">\n        <div class=\"form-row\">\n          <label class=\"add-colour-label\">Hex: </label>\n          <input class=\"add-colour-input\" type=\"text\" placeholder=\"#369369\" ngModel=\"{{hexConversion}}\" id=\"hex\" #hex name=\"hex\" (keyup)=\"convertHexToRgb(hex.value)\">\n        </div>\n        <div class=\"form-row\">\n          <label class=\"add-colour-label\">RGB: </label>\n          <div class=\"rgb-container\">\n            <input class=\"add-colour-input rgb-input\" type=\"text\" placeholder=\"255\" ngModel=\"{{rgbConversion.red}}\" id=\"rgbR\" #rgbR name=\"rgbR\" (keyup)=\"setRgbColor('red', rgbR.value); convertRgbToHex()\">\n            <input class=\"add-colour-input rgb-input\" type=\"text\" placeholder=\"255\" ngModel=\"{{rgbConversion.green}}\" id=\"rgbG\" #rgbG name=\"rgbG\" (keyup)=\"setRgbColor('green', rgbG.value); convertRgbToHex()\">\n            <input class=\"add-colour-input rgb-input\" type=\"text\" placeholder=\"255\" ngModel=\"{{rgbConversion.blue}}\" id=\"rgbB\" #rgbB name=\"rgbB\" (keyup)=\"setRgbColor('blue', rgbB.value); convertRgbToHex()\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <label class=\"add-colour-label\">Description: </label>\n          <input class=\"add-colour-input\" type=\"text\" placeholder=\"Colour Description\" name=\"description\" #description ngModel>\n        </div>\n        <div class=\"form-row\">\n          <input type=\"submit\" value=\"Add\" class=\"input-save\">\n        </div>\n        <hr class=\"palette-seperator\">\n        <div class=\"colour-add-row\">\n          <h3 class=\"colour-add-preview-header\">Colour preview:</h3>\n          <div class=\"colour-add-preview\" [ngStyle]=\"{'background': '#' + hex.value}\">\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"output-right\">\n      <div class=\"palette-items-contaoiner\">\n        <div class=\"palette-item\" *ngFor=\"let paletteItem of palette.paletteItems\">\n          <div class=\"palette-colour-preview\" [ngStyle]=\"{'background': '#' + paletteItem.colour.hex}\">\n          </div>\n          <div class=\"palette-item-description-container\">\n            <p class=\"palette-item-color\">#{{paletteItem.colour.hex}}</p>\n            <p class=\"palette-item-description\">{{paletteItem.description}}</p>\n            <div class=\"palette-item-actions-container\">\n              <i class=\"fa fa-trash action-delete\" (click)=\"deletePaletteItem({paletteId: palette._id, paletteItemId: paletteItem._id})\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"header-container\">\n    <h2 class=\"main-header\">Palettes > Manage</h2>\n  </div>\n  <div class=\"palettes-container\" *ngIf=\"userPalettes\">\n    <div class=\"palette\" *ngFor=\"let palette of userPalettes\">\n      <div class=\"palette-header-container\">\n        <h2 class=\"palette-header\" (click)=\"setPalette(palette._id)\">{{palette.name}}</h2>\n        <i class=\"fa fa-pencil\" (click)=\"setPalette(palette._id)\"></i>\n        <i class=\"fa fa-trash\" (click)=\"deletePalette(palette._id)\"></i>\n      </div>\n      <div class=\"palette-output-container\" *ngIf=\"palette.paletteItems\">\n        <div class=\"palette-item\" *ngFor=\"let paletteItem of palette.paletteItems | slice:0:8\">\n          <div class=\"palette-item-color-display\" [ngStyle]=\"{'background': '#' + paletteItem.colour.hex}\">\n          </div>\n          <div class=\"palette-item-description\">\n            <p>#{{paletteItem.colour.hex}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"header-container\">\n    <h2 class=\"main-header\">Palettes > View</h2>\n  </div>\n  <div class=\"palettes-container\" *ngIf=\"userPalettes\">\n    <div class=\"palette\" *ngFor=\"let palette of userPalettes\">\n      <div class=\"palette-header-container\">\n        <h2 class=\"palette-header\" (click)=\"setPalette(palette._id)\">{{palette.name}}</h2>\n      </div>\n      <div class=\"palette-output-container\" *ngIf=\"palette.paletteItems\">\n        <div class=\"palette-item\" *ngFor=\"let paletteItem of palette.paletteItems | slice:0:8\">\n          <div class=\"palette-item-color-display\" [ngStyle]=\"{'background': '#' + paletteItem.colour.hex}\">\n          </div>\n          <div class=\"palette-item-description\">\n            <p>#{{paletteItem.colour.hex}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"header-container\">\n    <h2 class=\"main-header\">Profile > Change Password</h2>\n  </div>\n  <form #f=\"ngForm\" (ngSubmit)=\"updatePassword(f.value)\" class=\"profile-form\">\n    <div class=\"input-row\">\n      <p class=\"input-label\">Current Password:</p>\n      <input type=\"password\" placeholder=\"Current Password\" name=\"currentPassword\" id=\"currentPassword\" #currentPassword class=\"input-description\" ngModel>\n    </div>\n    <div class=\"input-row\">\n      <p class=\"input-label\">New Password:</p>\n      <input type=\"password\" placeholder=\"New Password\" name=\"newPassword\" id=\"newPassword\" #newPassword class=\"input-description\" ngModel>\n    </div>\n    <div class=\"input-row\">\n      <button class=\"input-cancel\" (click)=\"clearComponent()\">Cancel</button>\n      <input type=\"submit\" value=\"Save\" class=\"input-save\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"content-container\" *ngIf=\"user\">\n    <div class=\"header-container\">\n      <h2 class=\"main-header\">Profile > Edit</h2>\n    </div>\n    <form #f=\"ngForm\" (ngSubmit)=\"updateProfile(f.value)\" class=\"profile-form\">\n      <div class=\"input-row\">\n        <p class=\"input-label\">First Name:</p>\n        <input type=\"text\" placeholder=\"First Name\" ngModel=\"{{user.firstName}}\" name=\"firstName\" id=\"firstName\" #firstName class=\"input-description\" >\n      </div>\n      <div class=\"input-row\">\n        <p class=\"input-label\">Last Name:</p>\n        <input type=\"text\" placeholder=\"Last Name\" ngModel=\"{{user.lastName}}\" name=\"lastName\" id=\"lastName\" #lastName class=\"input-description\">\n      </div>\n      <div class=\"input-row\">\n        <p class=\"input-label\">Username:</p>\n        <input type=\"text\" placeholder=\"Username\" ngModel=\"{{user.username}}\" name=\"username\" id=\"username\" #username class=\"input-description\">\n      </div>\n      <div class=\"input-row\">\n        <p class=\"input-label\">Email:</p>\n        <input type=\"text\" placeholder=\"Email\" ngModel=\"{{user.email}}\" name=\"email\" id=\"email\" #email class=\"input-description\">\n      </div>\n      <div class=\"input-row\">\n        <button class=\"input-cancel\" (click)=\"setComponent('profile')\">Cancel</button>\n        <input type=\"submit\" value=\"Save\" class=\"input-save\">\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"content-container\" *ngIf=\"user\">\n    <div class=\"header-container\">\n      <h2 class=\"main-header\">Profile</h2>\n      <i class=\"fa fa-pencil\" (click)=\"setComponent('profile-edit')\"></i>\n    </div>\n    <div class=\"output-row\">\n      <p class=\"output-label\">First Name:</p>\n      <p class=\"output-description\">{{user.firstName}}</p>\n    </div>\n    <div class=\"output-row\">\n      <p class=\"output-label\">Last Name:</p>\n      <p class=\"output-description\">{{user.lastName}}</p>\n    </div>\n    <div class=\"output-row\">\n      <p class=\"output-label\">Username:</p>\n      <p class=\"output-description\">{{user.username}}</p>\n    </div>\n    <div class=\"output-row\">\n      <p class=\"output-label\">Email:</p>\n      <p class=\"output-description\">{{user.email}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"content-container\">\n    <h1>Introducing Colours.</h1>\n    <p>The colour management toolkit.</p>\n    <p>Built by developers.</p>\n    <p>With developers in mind.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <form #f=\"ngForm\" (ngSubmit)=\"login(f.value)\" class=\"login-form\">\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"username\">Email:</label>\n      <div class=\"form-input-wrapper\">\n        <input class=\"form-input\" type=\"text\" name=\"email\" placeholder=\"Email\" [ngStyle]=\"applyInputStyle(0)\" id=\"email\" ngModel>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"password\">Password:</label>\n      <div class=\"form-input-wrapper\">\n        <input class=\"form-input\" type=\"password\" name=\"password\" placeholder=\"P@$$W0r|)\" [ngStyle]=\"applyInputStyle(1)\" id=\"password\" ngModel>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-button-wrapper\">\n        <input type=\"submit\" class=\"form-button\" value=\"Login\" [ngStyle]=\"applyButtonStyle(0)\">\n      </div>\n      <flash-messages></flash-messages>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"navbar-container\">\n    <div class=\"menu-toggle-container\" (click)=\"navbarVisibility = !navbarVisibility\">\n      <i class=\"fa fa-bars navbar-toggle\"></i>\n      <p class=\"menu-toggle-description\">Menu</p>\n    </div>\n    <ul class=\"navbar-list\" (window:resize)=\"resizeToggleNavbar()\" [ngStyle]=\"setNavbarVisibility()\">\n      <li class=\"navbar-item\" (mouseenter)=\"setHoverStyle(0)\" (mouseleave)=\"setHoverStyle(0)\" [ngStyle]=\"applyHoverStyle(0)\" (click)=\"setComponent('intro')\"><i class=\"fa fa-home navbar-icon\"></i>Home</li>\n      <!-- <li class=\"navbar-item\"(mouseenter)=\"setHoverStyle(1)\" (mouseleave)=\"setHoverStyle(1)\" [ngStyle]=\"applyHoverStyle(1)\"><i class=\"fa fa-list navbar-icon\"></i>Features</li>\n      <li class=\"navbar-item\"(mouseenter)=\"setHoverStyle(2)\" (mouseleave)=\"setHoverStyle(2)\" [ngStyle]=\"applyHoverStyle(2)\"><i class=\"fa fa-envelope navbar-icon\"></i>Contact</li> -->\n      <div class=\"navbar-action-list\" [ngStyle]=\"setActionBarVisibility()\">\n        <li class=\"navbar-action-item\" (mouseenter)=\"setHoverStyle(3)\" (mouseleave)=\"setHoverStyle(3)\" [ngStyle]=\"applyHoverStyle(3)\" (click)=\"setComponent('register')\"><i class=\"fa fa-pencil navbar-action-icon\"></i>Register</li>\n        <li class=\"navbar-action-item\" (mouseenter)=\"setHoverStyle(4)\" (mouseleave)=\"setHoverStyle(4)\" [ngStyle]=\"applyHoverStyle(4)\" (click)=\"setComponent('login')\"><i class=\"fa fa-sign-in navbar-action-icon\"></i>Login</li>\n      </div>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <form #f=\"ngForm\" (ngSubmit)=\"registerUser(f.value)\" class=\"register-form\">\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"firstName\">First Name:</label>\n      <div class=\"form-input-wrapper\">\n        <input class=\"form-input\" type=\"text\" name=\"firstName\" placeholder=\"John\" [ngStyle]=\"applyInputStyle(0)\" id=\"firstName\" ngModel>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"lastName\">Last Name:</label>\n      <div class=\"form-input-wrapper\">\n        <input class=\"form-input\" type=\"text\" name=\"lastName\" placeholder=\"Doe\" [ngStyle]=\"applyInputStyle(1)\" id=\"lastName\" ngModel>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"username\">Username:</label>\n      <div class=\"form-input-wrapper\">\n        <input class=\"form-input\" type=\"text\" name=\"username\" placeholder=\"Username\" [ngStyle]=\"applyInputStyle(2)\" id=\"username\" ngModel>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"email\">Email:</label>\n      <div class=\"form-input-wrapper\">\n        <input class=\"form-input\" type=\"text\" name=\"email\" placeholder=\"john.doe@test.com\" [ngStyle]=\"applyInputStyle(3)\" id=\"email\" ngModel>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <label class=\"form-label\" for=\"password\">Password:</label>\n      <div class=\"form-input-wrapper\">\n        <input class=\"form-input\" type=\"password\" name=\"password\" placeholder=\"P@$$W0r|)\" [ngStyle]=\"applyInputStyle(4)\" id=\"password\" ngModel>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-button-wrapper\">\n        <input class=\"form-button\" type=\"submit\" value=\"Register\" [ngStyle]=\"applyButtonStyle(0)\">\n      </div>\n      <flash-messages></flash-messages>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-site-navbar></app-site-navbar>\n  <router-outlet name=\"siteOutlet\"></router-outlet>\n</div>\n"

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_site_view_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_view_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_components_site_components_barrel__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_palettes_components_palettes_components_barrel__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_colour_library_components_colour_library_components_barrel__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_profile_components_profile_components_barrel__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });

//guards

// views


// components for aux routes
// site

//dashboard


//profile

var APP_ROUTES = [
    { path: "", redirectTo: "/home/(siteOutlet:intro)", pathMatch: 'full' },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_2__site_site_view_component__["a" /* SiteViewComponent */], children: [
            { path: "intro", component: __WEBPACK_IMPORTED_MODULE_4__site_components_site_components_barrel__["b" /* SiteIntroComponent */], outlet: "siteOutlet" },
            { path: "register", component: __WEBPACK_IMPORTED_MODULE_4__site_components_site_components_barrel__["c" /* SiteRegisterComponent */], outlet: "siteOutlet" },
            { path: "login", component: __WEBPACK_IMPORTED_MODULE_4__site_components_site_components_barrel__["d" /* SiteLoginComponent */], outlet: "siteOutlet" },
        ] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_view_component__["a" /* DashboardViewComponent */], children: [
            { path: "colour-library", component: __WEBPACK_IMPORTED_MODULE_6__dashboard_colour_library_components_colour_library_components_barrel__["a" /* ColourLibraryViewComponent */], outlet: "dashboardOutlet" },
            { path: "palette/:paletteId", component: __WEBPACK_IMPORTED_MODULE_5__dashboard_palettes_components_palettes_components_barrel__["a" /* PaletteViewComponent */], outlet: "dashboardOutlet" },
            { path: "palette-add", component: __WEBPACK_IMPORTED_MODULE_5__dashboard_palettes_components_palettes_components_barrel__["c" /* PaletteAddComponent */], outlet: "dashboardOutlet" },
            { path: "palette-edit/:paletteId", component: __WEBPACK_IMPORTED_MODULE_5__dashboard_palettes_components_palettes_components_barrel__["d" /* PaletteEditComponent */], outlet: "dashboardOutlet" },
            { path: "palettes-manage", component: __WEBPACK_IMPORTED_MODULE_5__dashboard_palettes_components_palettes_components_barrel__["e" /* PalettesManageComponent */], outlet: "dashboardOutlet" },
            { path: "palettes-view", component: __WEBPACK_IMPORTED_MODULE_5__dashboard_palettes_components_palettes_components_barrel__["b" /* PalettesViewComponent */], outlet: "dashboardOutlet" },
            { path: "profile", component: __WEBPACK_IMPORTED_MODULE_7__dashboard_profile_components_profile_components_barrel__["a" /* ProfileViewComponent */], outlet: "dashboardOutlet" },
            { path: "profile-edit", component: __WEBPACK_IMPORTED_MODULE_7__dashboard_profile_components_profile_components_barrel__["b" /* ProfileEditComponent */], outlet: "dashboardOutlet" },
            { path: "profile-password-edit", component: __WEBPACK_IMPORTED_MODULE_7__dashboard_profile_components_profile_components_barrel__["c" /* ProfileChangePasswordComponent */], outlet: "dashboardOutlet" },
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]] }
];
var router = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PalettesApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PalettesApiService = (function () {
    function PalettesApiService(http) {
        this.http = http;
        this.baseUrl = "";
    }
    PalettesApiService.prototype.addPaletteItem = function (paletteObject) {
        this.loadToken();
        paletteObject.createdBy = JSON.parse(this.user)._id;
        return this.http.post(this.baseUrl + "colours/createForPalette", paletteObject)
            .map(function (res) { return res.json(); });
    };
    PalettesApiService.prototype.deletePaletteItem = function (paletteObject) {
        this.loadToken();
        paletteObject.createdBy = JSON.parse(this.user)._id;
        return this.http.post(this.baseUrl + "colours/deleteFromPalette", paletteObject)
            .map(function (res) { return res.json(); });
    };
    PalettesApiService.prototype.createPalette = function (paletteObject) {
        this.loadToken();
        paletteObject.createdBy = JSON.parse(this.user)._id;
        return this.http.post(this.baseUrl + "palettes/create", paletteObject)
            .map(function (res) { return res.json(); });
    };
    PalettesApiService.prototype.deletePalette = function (paletteObject) {
        this.loadToken();
        paletteObject.userId = JSON.parse(this.user)._id;
        return this.http.post(this.baseUrl + "palettes/deleteOne", paletteObject)
            .map(function (res) { return res.json(); });
    };
    PalettesApiService.prototype.getPaletteById = function (paletteObject) {
        return this.http.post(this.baseUrl + "palettes/getById", paletteObject)
            .map(function (res) { return res.json(); });
    };
    PalettesApiService.prototype.getPalettesByUserId = function () {
        this.loadToken();
        var userObject = { "createdBy": JSON.parse(this.user)._id };
        return this.http.post(this.baseUrl + "palettes/getByUserId", userObject)
            .map(function (res) { return res.json(); });
    };
    PalettesApiService.prototype.loadToken = function () {
        this.user = localStorage.getItem('user');
    };
    PalettesApiService.prototype.updatePalette = function (paletteObject) {
        return this.http.post(this.baseUrl + "palettes/update", paletteObject)
            .map(function (res) { return res.json(); });
    };
    return PalettesApiService;
}());
PalettesApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PalettesApiService);

var _a;
//# sourceMappingURL=palettes-api.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileApiService = (function () {
    function ProfileApiService(http) {
        this.http = http;
        this.baseUrl = "";
    }
    ProfileApiService.prototype.getCurrentUser = function () {
        this.loadToken();
        var userObject = { "_id": JSON.parse(this.user)._id };
        return this.http.post(this.baseUrl + "users/getById", userObject)
            .map(function (res) { return res.json(); });
    };
    ProfileApiService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        this.user = localStorage.getItem('user');
    };
    ProfileApiService.prototype.updateProfile = function (userObject) {
        this.loadToken();
        userObject._id = JSON.parse(this.user)._id;
        return this.http.post(this.baseUrl + "users/update", userObject)
            .map(function (res) { return res.json(); });
    };
    ProfileApiService.prototype.updatePassword = function (userObject) {
        this.loadToken();
        userObject._id = JSON.parse(this.user)._id;
        return this.http.post(this.baseUrl + "users/updatePassword", userObject)
            .map(function (res) { return res.json(); });
    };
    return ProfileApiService;
}());
ProfileApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProfileApiService);

var _a;
//# sourceMappingURL=profile-api.service.js.map

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteApiService = (function () {
    function SiteApiService(http) {
        this.http = http;
        this.baseUrl = "";
    }
    SiteApiService.prototype.authenticate = function (userObject) {
        return this.http.post(this.baseUrl + "users/authenticate", userObject)
            .map(function (res) { return res.json(); });
    };
    SiteApiService.prototype.registerUser = function (userObject) {
        return this.http.post(this.baseUrl + "users/register", userObject)
            .map(function (res) { return res.json(); });
    };
    SiteApiService.prototype.storeToken = function (userObject) {
        localStorage.setItem('token', userObject.token);
        localStorage.setItem('user', JSON.stringify(userObject.user));
    };
    return SiteApiService;
}());
SiteApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SiteApiService);

var _a;
//# sourceMappingURL=site-api.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColourLibraryApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColourLibraryApiService = (function () {
    function ColourLibraryApiService(http) {
        this.http = http;
        this.baseUrl = "";
    }
    ColourLibraryApiService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        this.user = localStorage.getItem('user');
    };
    ColourLibraryApiService.prototype.addColour = function (colourLibraryObject) {
        this.loadToken();
        colourLibraryObject.createdBy = JSON.parse(this.user)._id;
        return this.http.post(this.baseUrl + "colours/createForLibrary", colourLibraryObject)
            .map(function (res) { return res.json(); });
    };
    ColourLibraryApiService.prototype.addColourToPalette = function (colourLibraryObject) {
        this.loadToken();
        colourLibraryObject.createdBy = JSON.parse(this.user)._id;
        return this.http.post(this.baseUrl + "colours/createForPalette", colourLibraryObject)
            .map(function (res) { return res.json(); });
    };
    ColourLibraryApiService.prototype.deleteColour = function (colourLibraryObject) {
        this.loadToken();
        colourLibraryObject.userId = JSON.parse(this.user)._id;
        return this.http.post(this.baseUrl + "colour-libraries/deleteColour", colourLibraryObject)
            .map(function (res) { return res.json(); });
    };
    ColourLibraryApiService.prototype.getColourLibrary = function () {
        this.loadToken();
        var query = { _id: JSON.parse(this.user)._id };
        return this.http.post(this.baseUrl + "colour-libraries/getByUserId", query)
            .map(function (res) { return res.json(); });
    };
    ColourLibraryApiService.prototype.getUserPalettes = function () {
        this.loadToken();
        var query = { createdBy: JSON.parse(this.user)._id };
        return this.http.post(this.baseUrl + "palettes/getByUserId", query)
            .map(function (res) { return res.json(); });
    };
    return ColourLibraryApiService;
}());
ColourLibraryApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ColourLibraryApiService);

var _a;
//# sourceMappingURL=colour-library-api.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colour_library_view_colour_library_view_component__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__colour_library_view_colour_library_view_component__["a"]; });

//# sourceMappingURL=colour-library-components-barrel.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardApiService = (function () {
    function DashboardApiService(http) {
        this.http = http;
    }
    // user services
    DashboardApiService.prototype.logout = function () {
        localStorage.clear();
    };
    return DashboardApiService;
}());
DashboardApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DashboardApiService);

var _a;
//# sourceMappingURL=dashboard-api.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardViewComponent = (function () {
    function DashboardViewComponent() {
    }
    DashboardViewComponent.prototype.ngOnInit = function () {
    };
    return DashboardViewComponent;
}());
DashboardViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-view',
        template: __webpack_require__(263),
        styles: [__webpack_require__(245)]
    }),
    __metadata("design:paramtypes", [])
], DashboardViewComponent);

//# sourceMappingURL=dashboard-view.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__palettes_manage_palettes_manage_component__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__palettes_manage_palettes_manage_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__palettes_view_palettes_view_component__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__palettes_view_palettes_view_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__palette_view_palette_view_component__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__palette_view_palette_view_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__palette_add_palette_add_component__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__palette_add_palette_add_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__palette_edit_palette_edit_component__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__palette_edit_palette_edit_component__["a"]; });





//# sourceMappingURL=palettes-components-barrel.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_view_profile_view_component__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_view_profile_view_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_edit_profile_edit_component__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__profile_edit_profile_edit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_change_password_profile_change_password_component__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__profile_change_password_profile_change_password_component__["a"]; });



//# sourceMappingURL=profile-components-barrel.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_navbar_site_navbar_component__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__site_navbar_site_navbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_intro_site_intro_component__ = __webpack_require__(177);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__site_intro_site_intro_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_register_site_register_component__ = __webpack_require__(180);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__site_register_site_register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site_login_site_login_component__ = __webpack_require__(178);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__site_login_site_login_component__["a"]; });
// site exports




//# sourceMappingURL=site-components-barrel.js.map

/***/ })

},[542]);
//# sourceMappingURL=main.bundle.js.map