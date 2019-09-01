webpackJsonp([0],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(platform, navCtrl, user, http) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.user = user;
        this.http = http;
    }
    HomePage.prototype.ngOnInit = function () {
        this.userName = this.user._user.name;
    };
    HomePage.prototype.sendPushNotification = function () {
        var oneSignalApiUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* Config */].oneSignalApiUrl + 'notifications';
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* Config */].oneSignalRestApiKey
            })
        };
        var apiData = {
            headings: { en: "Hello" }, contents: { en: "Hello its just awesome!" },
            included_segments: ["All"],
            excluded_segments: ["None"],
            app_id: __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* Config */].oneSignalAppId
        };
        return this.http.post(oneSignalApiUrl, apiData, httpOptions).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log("Error whole push");
        });
    };
    HomePage.prototype.logout = function () {
        this.user.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionicApp\MirandaTest\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>	\n  <h4>Hello! {{userName}}</h4>\n  <p>You are successfully logged In!</p>\n  <p></p>\n  <p></p>\n  <p>\n  	<button ion-button color="default" (click)="sendPushNotification()" block>Send Push Notification</button>\n  </p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p><a href="#" (click)="logout()">Logout</a></p>\n</ion-content>\n'/*ion-inline-end:"D:\ionicApp\MirandaTest\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* User */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.oneSignalApiUrl = 'https://onesignal.com/api/v1/';
    Config.oneSignalAppId = '26fcba36-cd94-41f8-a68a-206c1d9db4f4';
    Config.oneSignalRestApiKey = 'OWJiZDc0ODgtZDhmMC00MGM0LWI4NWYtZjM4YWJjZjVjNzgy';
    Config.fireBaseServerId = '545688026989';
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(21);

var GroupValidator = /** @class */ (function () {
    function GroupValidator() {
    }
    GroupValidator.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    return GroupValidator;
}());

//# sourceMappingURL=groupvalidator.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_validators_password__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_validators_groupvalidator__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, user, toastCtrl, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.submitAttempt = false;
        this.validation_messages = {
            'name': [
                { type: 'maxlength', message: 'Name should have maximum 100 characters' },
                { type: 'required', message: 'Please enter your name.' }
            ],
            'email': [
                { type: 'email', message: 'Enter valid Email' },
                { type: 'emailtaken', message: 'Specified email is already in use' }
            ],
            'password': [
                { type: 'minlength', message: 'Password must be at least 6 characters long' },
                { type: 'required', message: 'Please enter your password' }
            ],
            'confirm_password': [
                { type: 'areequal', message: 'Password and confirm password don\'t match' }
            ]
        };
        if (this.user._user != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
        }
        this.registerForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            confirm_password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__app_validators_password__["a" /* PasswordValidator */].areEqual])]
        });
    }
    //,EmailExistsValidator.checkEmail
    RegisterPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        if (!this.registerForm.valid) {
            __WEBPACK_IMPORTED_MODULE_6__app_validators_groupvalidator__["a" /* GroupValidator */].validateAllFormFields(this.registerForm);
            return false;
        }
        else {
            var name = this.registerForm.get('name').value;
            var email = this.registerForm.get('email').value;
            var password = this.registerForm.get('password').value;
            ///////////////////////////////////////////////////////  
            var accountInfo = { name: name, email: email, password: password };
            this.user.isEmailExists(email).then(function (val) {
                if (val != null) {
                    if (val.emailtaken) {
                        var toast = _this.toastCtrl.create({
                            message: "This email is already in use.",
                            duration: 3000,
                            position: 'top',
                            cssClass: 'toast-danger'
                        });
                        toast.present();
                    }
                    else {
                        _this.user.Register(accountInfo).then(function (data) {
                            _this.storage.set(email, { name: name, password: password });
                            var toast = _this.toastCtrl.create({
                                message: "Registered successfully.",
                                duration: 3000,
                                position: 'top',
                                cssClass: 'toast-success'
                            });
                            toast.present();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        });
                    }
                }
            }).catch(function (e) {
                var toast = _this.toastCtrl.create({
                    message: "Oops something went wrong.",
                    duration: 3000,
                    position: 'top',
                    cssClass: 'toast-danger'
                });
                toast.present();
            });
            return false;
            //////////////////////////////////////////////////////
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\ionicApp\MirandaTest\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="registerForm">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Name</ion-label>\n        <ion-input type="text" formControlName="name" name="name"></ion-input>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.name" >\n        <div class="error-message" *ngIf="registerForm.get(\'name\').hasError(validation.type) && (registerForm.get(\'name\').dirty || registerForm.get(\'name\').touched)">\n            <p>{{validation.message}}</p>\n        </div>\n      </ng-container>\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="email" formControlName="email" name="email"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="registerForm.controls.email.pending">\n          <p>Checking email...</p>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.email" >\n        <div class="error-message" *ngIf="registerForm.get(\'email\').hasError(validation.type) && (registerForm.get(\'email\').dirty || registerForm.get(\'email\').touched)">\n            <p>{{validation.message}}</p>\n        </div>\n      </ng-container>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" formControlName="password" name="password"></ion-input>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.password" >\n        <div class="error-message" *ngIf="registerForm.get(\'password\').hasError(validation.type) && (registerForm.get(\'password\').dirty || registerForm.get(\'password\').touched)">\n            <p>{{validation.message}}</p>\n        </div>\n      </ng-container>\n      <ion-item>\n        <ion-label fixed>Confirm Password</ion-label>\n        <ion-input type="password" formControlName="confirm_password" name="confirm_password"></ion-input>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.confirm_password" >        \n        <div class="error-message" *ngIf="registerForm.get(\'confirm_password\').hasError(validation.type) && (registerForm.get(\'confirm_password\').dirty || registerForm.get(\'confirm_password\').touched)">\n            <p>{{validation.message}}</p>\n        </div>\n      </ng-container>\n      <div padding>\n        <button ion-button color="primary" (click)="doRegister()" block>Register</button>\n        <p></p>\n        <p></p>\n        <p>Already have an account? <a href="javascript:{};" (click)="gotoLogin()" color="secondary">Login</a></p>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\ionicApp\MirandaTest\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal_ngx__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['localstorage', 'indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal_ngx__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* User */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (platform.is('core') || platform.is('mobileweb')) {
                console.log("Platform is core or is mobile web");
            }
            else {
                var notificationOpenedCallback = function (jsonData) {
                    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                };
                window["plugins"].OneSignal
                    .startInit(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].oneSignalAppId, __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].fireBaseServerId)
                    .handleNotificationOpened(notificationOpenedCallback)
                    .endInit();
            }
        });
    }
    MyApp.prototype.onPushReceived = function (payload) {
        alert('Push recevied:' + payload.body);
    };
    MyApp.prototype.onPushOpened = function (payload) {
        alert('Push opened: ' + payload.body);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicApp\MirandaTest\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionicApp\MirandaTest\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.areEqual = function (control) {
        var password;
        var confirmPassword;
        var valid = true;
        if (control.parent) {
            password = control.parent.get('password').value;
            confirmPassword = control.parent.get('confirm_password').value;
        }
        if (password !== confirmPassword) {
            valid = false;
        }
        if (valid) {
            return null;
        }
        return {
            areequal: true
        };
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var User = /** @class */ (function () {
    function User(storage) {
        this.storage = storage;
    }
    User.prototype.login = function (accountInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(accountInfo.email).then(function (val) {
                if (val != null) {
                    var _password = val.password;
                    if (_password == accountInfo.password) {
                        var userData = { name: val.name, email: val.email };
                        _this._loggedIn(userData);
                        resolve(userData);
                    }
                    else {
                        reject("invalid password");
                    }
                }
                else {
                    reject("invalid email");
                }
            });
        });
    };
    User.prototype.isEmailExists = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(email).then(function (val) {
                if (val == null) {
                    resolve({ "emailtaken": false });
                }
                else {
                    resolve({ "emailtaken": true });
                }
            }).catch(function (e) {
                reject(null);
            });
        });
    };
    User.prototype.Register = function (accountInfo) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.set(accountInfo.email, { name: accountInfo.name, password: accountInfo.password }).then(function (val) {
                resolve(accountInfo);
            });
        });
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_validators_groupvalidator__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, toastCtrl, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.validation_messages = {
            'email': [
                { type: 'email', message: 'Enter valid Email' }
            ],
            'password': [
                { type: 'required', message: 'Enter password' }
            ]
        };
        if (this.user._user != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])]
        });
    }
    ;
    LoginPage.prototype.gotoRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            __WEBPACK_IMPORTED_MODULE_4__app_validators_groupvalidator__["a" /* GroupValidator */].validateAllFormFields(this.loginForm);
            return false;
            //console.log(this.registerForm.value);
        }
        else {
            var email = this.loginForm.get('email').value;
            var password = this.loginForm.get('password').value;
            var accountInfo = { email: email, password: password };
            this.user.login(accountInfo).then(function (val) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            }).catch(function (e) {
                var toast = _this.toastCtrl.create({
                    message: "Invalid email/password.",
                    duration: 3000,
                    position: 'top',
                    cssClass: 'toast-danger'
                });
                toast.present();
            });
            return false;
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ionicApp\MirandaTest\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="loginForm">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="email" formControlName="email" name="email"></ion-input>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.email" >\n        <div class="error-message" *ngIf="loginForm.get(\'email\').hasError(validation.type) && (loginForm.get(\'email\').dirty || loginForm.get(\'email\').touched)">\n            <p>{{validation.message}}</p>\n        </div>\n      </ng-container>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" formControlName="password" name="password"></ion-input>\n      </ion-item>\n      <ng-container *ngFor="let validation of validation_messages.password" >\n        <div class="error-message" *ngIf="loginForm.get(\'password\').hasError(validation.type) && (loginForm.get(\'password\').dirty || loginForm.get(\'password\').touched)">\n            <p>{{validation.message}}</p>\n        </div>\n      </ng-container>\n      <div padding>\n        <button ion-button color="primary" (click)="doLogin()" block>Login</button>\n        <p></p>\n        <p></p>\n        <p>Don\'t have an account? <a href="javascript:{};" (click)="gotoRegister()" color="secondary">Create Account</a></p>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\ionicApp\MirandaTest\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map