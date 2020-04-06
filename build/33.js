webpackJsonp([33],{

/***/ 2081:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModule", function() { return CoreLoginSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site__ = __webpack_require__(2233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(13);
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






var CoreLoginSitePageModule = /** @class */ (function () {
    function CoreLoginSitePageModule() {
    }
    CoreLoginSitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site__["a" /* CoreLoginSitePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site__["a" /* CoreLoginSitePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginSitePageModule);
    return CoreLoginSitePageModule;
}());

//# sourceMappingURL=site.module.js.map

/***/ }),

/***/ 2233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_url__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configconstants__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classes_utils_url__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(1);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/**
 * Page to enter or select the site URL to connect to.
 */
var CoreLoginSitePage = /** @class */ (function () {
    function CoreLoginSitePage(navParams, navCtrl, fb, appProvider, sitesProvider, loginHelper, modalCtrl, domUtils, eventsProvider, translate, urlUtils) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.modalCtrl = modalCtrl;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.translate = translate;
        this.urlUtils = urlUtils;
        this.fixedDisplay = 'buttons';
        this.showKeyboard = false;
        this.filter = '';
        this.showKeyboard = !!navParams.get('showKeyboard');
        var url = '';
        // Load fixed sites if they're set.
        if (this.loginHelper.hasSeveralFixedSites()) {
            this.fixedSites = this.loginHelper.getFixedSites();
            this.fixedDisplay = __WEBPACK_IMPORTED_MODULE_7__configconstants__["a" /* CoreConfigConstants */].multisitesdisplay;
            // Autoselect if not defined.
            if (['list', 'listnourl', 'select', 'buttons'].indexOf(this.fixedDisplay) < 0) {
                this.fixedDisplay = this.fixedSites.length > 8 ? 'list' : (this.fixedSites.length > 3 ? 'select' : 'buttons');
            }
            this.filteredSites = this.fixedSites;
            url = this.fixedSites[0].url;
        }
        this.siteForm = fb.group({
            siteUrl: [url, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required]
        });
    }
    /**
     * Try to connect to a site.
     *
     * @param e Event.
     * @param url The URL to connect to.
     */
    CoreLoginSitePage.prototype.connect = function (e, url) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.appProvider.closeKeyboard();
        if (!url) {
            this.domUtils.showErrorModal('core.login.siteurlrequired', true);
            return;
        }
        if (!this.appProvider.isOnline()) {
            this.domUtils.showErrorModal('core.networkerrormsg', true);
            return;
        }
        url = url.trim();
        if (url.match(/^(https?:\/\/)?campus\.example\.edu/)) {
            this.showLoginIssue(null, this.translate.instant('core.login.errorexampleurl'));
            return;
        }
        this.hideLoginIssue();
        var modal = this.domUtils.showModalLoading(), siteData = this.sitesProvider.getDemoSiteData(url);
        if (siteData) {
            // It's a demo site.
            this.sitesProvider.getUserToken(siteData.url, siteData.username, siteData.password).then(function (data) {
                return _this.sitesProvider.newSite(data.siteUrl, data.token, data.privateToken).then(function () {
                    _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
                    return _this.loginHelper.goToSiteInitialPage();
                }, function (error) {
                    _this.loginHelper.treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                    if (error.loggedout) {
                        _this.navCtrl.setRoot('CoreLoginSitesPage');
                    }
                });
            }, function (error) {
                _this.loginHelper.treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                if (error.loggedout) {
                    _this.navCtrl.setRoot('CoreLoginSitesPage');
                }
            }).finally(function () {
                modal.dismiss();
            });
        }
        else {
            // Not a demo site.
            this.sitesProvider.checkSite(url)
                .catch(function (error) {
                // Attempt guessing the domain if the initial check failed
                var domain = __WEBPACK_IMPORTED_MODULE_10__classes_utils_url__["a" /* CoreUrl */].guessMoodleDomain(url);
                return domain ? _this.sitesProvider.checkSite(domain) : Promise.reject(error);
            })
                .then(function (result) { return _this.login(result); })
                .catch(function (error) { return _this.showLoginIssue(url, error); })
                .finally(function () { return modal.dismiss(); });
        }
    };
    /**
     * The filter has changed.
     *
     * @param Received Event.
     */
    CoreLoginSitePage.prototype.filterChanged = function (event) {
        var newValue = event.target.value && event.target.value.trim().toLowerCase();
        if (!newValue || !this.fixedSites) {
            this.filteredSites = this.fixedSites;
        }
        else {
            this.filteredSites = this.fixedSites.filter(function (site) {
                return site.name.toLowerCase().indexOf(newValue) > -1 || site.url.toLowerCase().indexOf(newValue) > -1;
            });
        }
    };
    /**
     * Show a help modal.
     */
    CoreLoginSitePage.prototype.showHelp = function () {
        var modal = this.modalCtrl.create('CoreLoginSiteHelpPage');
        modal.present();
    };
    /**
     * Hide the login error.
     */
    CoreLoginSitePage.prototype.hideLoginIssue = function () {
        this.error = null;
    };
    /**
     * Show an error that aims people to solve the issue.
     *
     * @param url The URL the user was trying to connect to.
     * @param error Error to display.
     */
    CoreLoginSitePage.prototype.showLoginIssue = function (url, error) {
        this.error = {
            url: url,
            message: this.domUtils.getErrorMessage(error),
        };
        if (url) {
            this.error.fullUrl = this.urlUtils.isAbsoluteURL(url) ? url : 'https://' + url;
        }
    };
    /**
     * Process login to a site.
     *
     * @param response Response obtained from the site check request.
     *
     * @return Promise resolved after logging in.
     */
    CoreLoginSitePage.prototype.login = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sitesProvider.checkRequiredMinimumVersion(response.config).then(function () {
                        _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
                        if (response.warning) {
                            _this.domUtils.showErrorModal(response.warning, true, 4000);
                        }
                        if (_this.loginHelper.isSSOLoginNeeded(response.code)) {
                            // SSO. User needs to authenticate in a browser.
                            _this.loginHelper.confirmAndOpenBrowserForSSOLogin(response.siteUrl, response.code, response.service, response.config && response.config.launchurl);
                        }
                        else {
                            _this.navCtrl.push('CoreLoginCredentialsPage', { siteUrl: response.siteUrl, siteConfig: response.config });
                        }
                    }).catch(function () {
                        // Ignore errors.
                    })];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('siteFormEl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CoreLoginSitePage.prototype, "formElement", void 0);
    CoreLoginSitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-site',template:/*ion-inline-start:"/Users/allen/sourcetree/moodleapp382/src/core/login/pages/site/site.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.login.connecttomoodle\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only navPush="CoreAppSettingsPage" [attr.aria-label]="\'core.settings.appsettings\' | translate">\n                <core-icon name="fa-cogs"></core-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="core-center-view">\n    <div class="box">\n        <div text-center padding>\n            <img src="assets/img/login_logo.png" class="avatar-full login-logo" role="presentation">\n        </div>\n        <form ion-list [formGroup]="siteForm" (ngSubmit)="connect($event, siteForm.value.siteUrl)" *ngIf="!fixedSites || fixedDisplay == \'select\'" #siteFormEl>\n            <!-- Form to input the site URL if there are no fixed sites. -->\n            <ng-container *ngIf="!fixedSites">\n                <ion-item>\n                    <ion-label stacked><h2>{{ \'core.login.siteaddress\' | translate }}</h2></ion-label>\n                    <ion-input type="url" name="url" placeholder="https://campus.example.edu" formControlName="siteUrl" [core-auto-focus]="showKeyboard"></ion-input>\n                </ion-item>\n            </ng-container>\n\n            <ion-item *ngIf="fixedSites && fixedDisplay == \'select\'" margin-vertical text-wrap>\n                <ion-label stacked for="siteSelect">{{ \'core.login.selectsite\' | translate }}</ion-label>\n                <ion-select formControlName="siteUrl" name="url" placeholder="{{ \'core.login.siteaddress\' | translate }}" interface="action-sheet">\n                    <ion-option *ngFor="let site of fixedSites" [value]="site.url">{{site.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <button ion-button block [disabled]="!siteForm.valid">{{ \'core.login.connect\' | translate }}</button>\n        </form>\n        <!-- Pick the site from a list of fixed sites. -->\n        <ion-list *ngIf="fixedSites && (fixedDisplay == \'list\' || fixedDisplay == \'listnourl\')">\n            <ion-item no-lines><h2 class="item-heading">{{ \'core.login.selectsite\' | translate }}</h2></ion-item>\n            <ion-searchbar *ngIf="fixedSites.length > 4" [(ngModel)]="filter" (ionInput)="filterChanged($event)" (ionCancel)="filterChanged()" [placeholder]="\'core.login.findyoursite\' | translate"></ion-searchbar>\n            <ion-item *ngFor="let site of filteredSites" (click)="connect($event, site.url)" [title]="site.name" detail-push text-wrap>\n                <h2>{{site.name}}</h2>\n                <p *ngIf="fixedDisplay == \'list\'">{{site.url}}</p>\n            </ion-item>\n        </ion-list>\n\n        <!-- Display them using buttons. -->\n        <div *ngIf="fixedSites && fixedDisplay == \'buttons\'">\n            <p class="padding no-padding-bottom">{{ \'core.login.selectsite\' | translate }}</p>\n            <a *ngFor="let site of fixedSites" ion-button block (click)="connect($event, site.url)" [title]="site.name" margin-bottom>{{site.name}}</a>\n        </div>\n\n        <!-- Error. -->\n        <div padding-top *ngIf="error" >\n            <ion-card class="core-site-error">\n                <ion-card-header>\n                    {{ \'core.whoops\' | translate }}\n                </ion-card-header>\n                <ion-card-content>\n                    <p><core-format-text [text]="error.message" [filter]="false"></core-format-text></p>\n                    <ng-container *ngIf="error.url">\n                        <p>{{ \'core.login.problemconnectingerror\' | translate }}</p>\n                        <p padding><a [href]="error.fullUrl" core-link>{{ error.url }}</a></p>\n                        <p><strong>{{ \'core.login.problemconnectingerrorcontinue\' | translate }}</strong></p>\n                    </ng-container>\n                </ion-card-content>\n                <ion-card-header>\n                    {{ \'core.login.stillcantconnect\' | translate }}\n                </ion-card-header>\n                <ion-card-content>\n                    <p>{{ \'core.login.contactyouradministrator\' | translate }}</p>\n                    <p>{{ \'core.whoissiteadmin\' | translate }}</p>\n                </ion-card-content>\n            </ion-card>\n        </div>\n\n        <!-- Help. -->\n        <ion-list no-lines>\n            <a ion-item text-center class="core-login-need-help" (click)="showHelp()" detail-none>\n                {{ \'core.needhelp\' | translate }}\n            </a>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/allen/sourcetree/moodleapp382/src/core/login/pages/site/site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* CoreLoginHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events__["a" /* CoreEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_url__["a" /* CoreUrlUtilsProvider */]])
    ], CoreLoginSitePage);
    return CoreLoginSitePage;
}());

//# sourceMappingURL=site.js.map

/***/ })

});
//# sourceMappingURL=33.js.map