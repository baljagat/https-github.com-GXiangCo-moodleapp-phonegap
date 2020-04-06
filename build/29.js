webpackJsonp([29],{

/***/ 2040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPageModule", function() { return CoreSettingsAboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about__ = __webpack_require__(2190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(64);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreSettingsAboutPageModule = /** @class */ (function () {
    function CoreSettingsAboutPageModule() {
    }
    CoreSettingsAboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__about__["a" /* CoreSettingsAboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__about__["a" /* CoreSettingsAboutPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsAboutPageModule);
    return CoreSettingsAboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 2190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsAboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configconstants__ = __webpack_require__(65);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * Page that displays the about settings.
 */
var CoreSettingsAboutPage = /** @class */ (function () {
    function CoreSettingsAboutPage(appProvider, sitesProvider, svComponent, navCtrl) {
        this.svComponent = svComponent;
        this.navCtrl = navCtrl;
        var currentSite = sitesProvider.getCurrentSite();
        this.appName = appProvider.isDesktop() ? __WEBPACK_IMPORTED_MODULE_5__configconstants__["a" /* CoreConfigConstants */].desktopappname : __WEBPACK_IMPORTED_MODULE_5__configconstants__["a" /* CoreConfigConstants */].appname;
        this.versionName = __WEBPACK_IMPORTED_MODULE_5__configconstants__["a" /* CoreConfigConstants */].versionname;
        // Calculate the privacy policy to use.
        this.privacyPolicy = (currentSite && (currentSite.getStoredConfig('tool_mobile_apppolicy') ||
            currentSite.getStoredConfig('sitepolicy'))) || __WEBPACK_IMPORTED_MODULE_5__configconstants__["a" /* CoreConfigConstants */].privacypolicy;
    }
    /**
     * Opens a page.
     *
     * @param page The component deeplink name you want to push onto the navigation stack.
     */
    CoreSettingsAboutPage.prototype.openPage = function (page) {
        var navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        navCtrl.push(page);
    };
    CoreSettingsAboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-about',template:/*ion-inline-start:"/Users/allen/sourcetree/moodleapp382/src/core/settings/pages/about/about.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.settings.about\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-item text-wrap>\n        <h2>{{ appName }} {{ versionName }}</h2>\n    </ion-item>\n    <a ion-item text-wrap (click)="openPage(\'CoreSettingsLicensesPage\')" [title]="\'core.settings.opensourcelicenses\' | translate">\n        <core-icon name="fa-copyright" item-start></core-icon>\n        {{ \'core.settings.opensourcelicenses\' | translate }}\n    </a>\n    <a ion-item text-wrap *ngIf="privacyPolicy" [href]="privacyPolicy" core-link auto-login="no">\n        <core-icon name="fa-user-secret" item-start></core-icon>\n        {{ \'core.settings.privacypolicy\' | translate }}\n    </a>\n    <a ion-item text-wrap (click)="openPage(\'CoreSettingsDeviceInfoPage\')" [title]="\'core.settings.deviceinfo\' | translate">\n        <ion-icon name="phone-portrait" item-start></ion-icon>\n        {{ \'core.settings.deviceinfo\' | translate }}\n    </a>\n</ion-content>\n'/*ion-inline-end:"/Users/allen/sourcetree/moodleapp382/src/core/settings/pages/about/about.html"*/,
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__components_split_view_split_view__["a" /* CoreSplitViewComponent */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], CoreSettingsAboutPage);
    return CoreSettingsAboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=29.js.map