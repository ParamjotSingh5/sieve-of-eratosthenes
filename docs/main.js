(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\Angular\Sieve of Eratosthenes\sieve-of-eratosthenes\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    processLimit() {
        if (this.Limittxt) {
            this.router.navigate([`/generate/${this.Limittxt}`]);
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 14, vars: 1, consts: [["href", "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"], [1, "container"], [1, "row"], [1, "col-md-4"], [1, "input-group", "col-md-12", "mb-3"], ["type", "text", "id", "limittxt", "placeholder", "Enter Limit eg. 1000", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In mathematics, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sieve of Eratosthenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " is an ancient algorithm for finding all prime numbers up to any given limit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_10_listener($event) { return ctx.Limittxt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_11_listener() { return ctx.processLimit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Limittxt);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/"]; };
class AppComponent {
    constructor() {
        this.title = 'sieve-of-eratosthenes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 2, consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-white", "border-bottom", "box-shadow", "mb-3"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "flex-sm-row-reverse"], [1, "border-top", "footer", "text-muted"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sieve of Eratosthenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A9 2021 - Sieve of Eratosthenes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Sora:wght@800&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lexend+Giga&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Alatsi&display=swap');\r\na.navbar-brand[_ngcontent-%COMP%] {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n  }\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #0366d6;\r\n  }\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #1b6ec2;\r\n    border-color: #1861ac;\r\n  }\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #1b6ec2;\r\n    border-color: #1861ac;\r\n  }\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n@media (min-width: 768px) {\r\n    html[_ngcontent-%COMP%] {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n.border-top[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #e5e5e5;\r\n  }\r\n.border-bottom[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #e5e5e5;\r\n  }\r\n.box-shadow[_ngcontent-%COMP%] {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\r\nbutton.accept-policy[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    line-height: inherit;\r\n  }\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 100%;\r\n  }\r\n.footer[_ngcontent-%COMP%] {    \r\n    white-space: nowrap;\r\n    line-height: 60px;         \r\n    width: 100%;    \r\n    text-align: center;    \r\n    margin-top: 20px;\r\n  }\r\n\r\n.containerCustom[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;   \r\n  }\r\n.earthElementContainer[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    flex-grow: 0;\r\n    flex-basis:auto;\r\n    background-color: #EBEBD3;\r\n    border-radius: 3px;\r\n    margin: 10px;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n    min-width: 106px;\r\n    cursor: pointer;\r\n  }\r\n.elementPropWrapper[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;    \r\n  }\r\n.elementAtomicNumber[_ngcontent-%COMP%]{\r\n    color: #1446A0;\r\n  }\r\n.elementAtomicMass[_ngcontent-%COMP%]{\r\n    color: #DB3069;\r\n  }\r\n.elementSymbol[_ngcontent-%COMP%]{\r\n    color: #3C3C3B;\r\n  }\r\n.hide-text[_ngcontent-%COMP%] {    \r\n    white-space: nowrap; \r\n    max-width: 60px; \r\n    overflow: hidden;\r\n    text-overflow: ellipsis;     \r\n  }\r\n.selectedElementsForRythimg[_ngcontent-%COMP%]{\r\n    background-color: #7DD181;\r\n    color: white;\r\n  }\r\n.defaultCursor[_ngcontent-%COMP%]{\r\n    cursor: default;\r\n  }\r\n.RhymingWordsContainer[_ngcontent-%COMP%]{\r\n    background-color: #f8f5f1;\r\n  }\r\n.SelectedElementWords[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    font-size: 30px;\r\n  }\r\n.earthElementContainer1[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    flex-grow: 0;\r\n    flex-basis:auto;\r\n    background-color: #f8a488;\r\n    border-radius: 3px;\r\n    margin: 10px;    \r\n    min-width: 106px;\r\n    cursor: text;\r\n  }\r\n.generatedElementRhythm[_ngcontent-%COMP%]{\r\n    font-family: 'Alatsi', sans-serif;\r\n    font-size: 65px;\r\n    text-transform: capitalize;    \r\n    color: black;\r\n    text-align: center;    \r\n  \r\n    -webkit-background-clip: text;    \r\n  \r\n            background-clip: text;     \r\n    background-position: center;\r\n  }\r\n.wordSelectorListEachElements[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    flex-grow: 0;\r\n    flex-basis:auto;\r\n    margin: 10px;    \r\n    min-width: 106px;    \r\n   }\r\n.textAlignCenter[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtGQUFrRjtBQUNsRixnRkFBZ0Y7QUFDaEYsMkVBQTJFO0FBRTNFO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7QUFFQSx5REFBeUQ7QUFDekQ7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2QjtBQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7QUFFQTtzREFDb0Q7QUFDcEQ7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjtBQUVBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFFQTtJQUNFLDhDQUE4QztFQUNoRDtBQUVBO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtFQUN0QjtBQUVBO3NEQUNvRDtBQUNwRDtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBRSxxQ0FBcUM7SUFDeEQsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFHQSxXQUFXO0FBRVg7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7QUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHdGQUF3RjtJQUN4RixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBRUE7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQiw2QkFBcUI7O1lBQXJCLHFCQUFxQjtJQUNyQiwyQkFBMkI7RUFDN0I7QUFDQztJQUNDLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7R0FDakI7QUFFQTtJQUNDLGtCQUFrQjtHQUNuQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvcmE6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxleGVuZCtHaWdhJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGF0c2kmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5hLm5hdmJhci1icmFuZCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIH1cclxuICBcclxuICAvKiBQcm92aWRlIHN1ZmZpY2llbnQgY29udHJhc3QgYWdhaW5zdCB3aGl0ZSBiYWNrZ3JvdW5kICovXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzAzNjZkNjtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiNmVjMjtcclxuICAgIGJvcmRlci1jb2xvcjogIzE4NjFhYztcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiNmVjMjtcclxuICAgIGJvcmRlci1jb2xvcjogIzE4NjFhYztcclxuICB9XHJcbiAgXHJcbiAgLyogU3RpY2t5IGZvb3RlciBzdHlsZXNcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXItdG9wIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIH1cclxuICAuYm9yZGVyLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICB9XHJcbiAgXHJcbiAgLmJveC1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLmFjY2VwdC1wb2xpY3kge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0aWNreSBmb290ZXIgc3R5bGVzXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBodG1sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXIgeyAgICBcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDsgLyogVmVydGljYWxseSBjZW50ZXIgdGhlIHRleHQgdGhlcmUgKi8gICAgICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAvKiBjdXN0b20gKi9cclxuXHJcbiAgLmNvbnRhaW5lckN1c3RvbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwOyAgIFxyXG4gIH1cclxuXHJcbiAgLmVhcnRoRWxlbWVudENvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LWJhc2lzOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkQzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcclxuICAgIG1pbi13aWR0aDogMTA2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZWxlbWVudFByb3BXcmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxyXG4gIH1cclxuXHJcbiAgLmVsZW1lbnRBdG9taWNOdW1iZXJ7XHJcbiAgICBjb2xvcjogIzE0NDZBMDtcclxuICB9XHJcblxyXG4gIC5lbGVtZW50QXRvbWljTWFzc3tcclxuICAgIGNvbG9yOiAjREIzMDY5O1xyXG4gIH1cclxuXHJcbiAgLmVsZW1lbnRTeW1ib2x7XHJcbiAgICBjb2xvcjogIzNDM0MzQjtcclxuICB9XHJcblxyXG4gIC5oaWRlLXRleHQgeyAgICBcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gICAgbWF4LXdpZHRoOiA2MHB4OyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgICAgIFxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkRWxlbWVudHNGb3JSeXRoaW1ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdERDE4MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9ICBcclxuXHJcbiAgLmRlZmF1bHRDdXJzb3J7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICAuUmh5bWluZ1dvcmRzQ29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjVmMTtcclxuICB9XHJcblxyXG4gIC5TZWxlY3RlZEVsZW1lbnRXb3Jkc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuZWFydGhFbGVtZW50Q29udGFpbmVyMXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LWJhc2lzOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhNDg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxMHB4OyAgICBcclxuICAgIG1pbi13aWR0aDogMTA2cHg7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbiAgfVxyXG5cclxuICAuZ2VuZXJhdGVkRWxlbWVudFJoeXRobXtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWxhdHNpJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyAgICBcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7ICAgICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgIC53b3JkU2VsZWN0b3JMaXN0RWFjaEVsZW1lbnRze1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtYmFzaXM6YXV0bztcclxuICAgIG1hcmdpbjogMTBweDsgICAgXHJcbiAgICBtaW4td2lkdGg6IDEwNnB4OyAgICBcclxuICAgfVxyXG5cclxuICAgLnRleHRBbGlnbkNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generator/generator.component */ "zGoA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        _generator_generator_component__WEBPACK_IMPORTED_MODULE_5__["GeneratorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "riZI":
/*!********************************!*\
  !*** ./src/app/NumberState.ts ***!
  \********************************/
/*! exports provided: NumberState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberState", function() { return NumberState; });
class NumberState {
    constructor(id, isChecked) {
        this.id = id;
        this.checkedOut = isChecked;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generator/generator.component */ "zGoA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], pathMatch: 'full' },
    { path: 'generate/:id', component: _generator_generator_component__WEBPACK_IMPORTED_MODULE_2__["GeneratorComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zGoA":
/*!**************************************************!*\
  !*** ./src/app/generator/generator.component.ts ***!
  \**************************************************/
/*! exports provided: GeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function() { return GeneratorComponent; });
/* harmony import */ var _NumberState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberState */ "riZI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "notAPrimeNumber": a0 }; };
function GeneratorComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const map_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, map_r2.checkedOut));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](map_r2.id);
} }
const _c1 = function (a0) { return { "hide": a0 }; };
function GeneratorComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const map_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, map_r4.checkedOut));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](map_r4.id);
} }
function GeneratorComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GeneratorComponent_div_29_div_1_Template, 3, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.limitMap);
} }
class GeneratorComponent {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
        this.limitMap = [];
        this.multiplierList = [2, 3, 5, 7];
        this._filteredPrime = false;
        this.startfilteringPrime = () => {
            this._filteredPrime = true;
            var fixedLimit = this.limit;
            this.multiplierList.forEach((value) => {
                var max;
                max = fixedLimit / value;
                for (var i = 1; i <= max; i++) {
                    var foo = i * value;
                    if (foo != value) {
                        this.limitMap.find(x => x.id === foo).checkedOut = true;
                    }
                }
            });
        };
    }
    ngOnInit() {
        this.limit = Number(this.activeRoute.snapshot.paramMap.get('id'));
        this.generateMapForLimit();
    }
    generateMapForLimit() {
        for (var i = 2; i <= this.limit; i++) {
            var numberstate = new _NumberState__WEBPACK_IMPORTED_MODULE_0__["NumberState"](i, false);
            this.limitMap.push(numberstate);
        }
    }
}
GeneratorComponent.ɵfac = function GeneratorComponent_Factory(t) { return new (t || GeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
GeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GeneratorComponent, selectors: [["app-generator"]], decls: 30, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseRhythming", "aria-expanded", "false", "aria-controls", "collapseRhythming", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseRhythming", 1, "collapse"], [1, "card"], [1, "card-header"], [1, "card-body", "row"], [1, "col", "listEle"], [1, "col", "listEle", "notAPrimeNumber"], [1, "overflow_header"], [1, "row", "List_Content"], ["class", "col listEle", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "row List_Content", 4, "ngIf"], [1, "col", "listEle", 3, "ngClass"]], template: function GeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GeneratorComponent_Template_button_click_5_listener() { return ctx.startfilteringPrime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Filter Prime");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Prime Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Not a Prime Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, GeneratorComponent_div_25_Template, 3, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Prime Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, GeneratorComponent_div_29_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("limit is: ", ctx.limit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.limitMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._filteredPrime);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".earthElementContainer[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    flex-grow: 0;\r\n    background-color: #EBEBD3;\r\n    border-radius: 3px;\r\n    margin: 10px;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n    min-width: 106px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .listEle[_ngcontent-%COMP%]{    \r\n    background-color: #EBEBD3;    \r\n    padding: 10px;\r\n    margin: 10px;\r\n    min-width: 50px;\r\n    text-align: center;\r\n    max-width: -webkit-min-content;\r\n    max-width: min-content;\r\n  }\r\n\r\n  .overflow_header[_ngcontent-%COMP%]{\r\n    position: revert;\r\n  }\r\n\r\n  .List_Content[_ngcontent-%COMP%]{\r\n    overflow: auto;    \r\n    max-height: 400px;\r\n  }\r\n\r\n  .notAPrimeNumber[_ngcontent-%COMP%]{\r\n    background-color: orange;\r\n    opacity: 0.5;\r\n  }\r\n\r\n  .hide[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3RkFBd0Y7SUFDeEYsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUFzQjtJQUF0QixzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZiIsImZpbGUiOiJnZW5lcmF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lYXJ0aEVsZW1lbnRDb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJEMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmxpc3RFbGV7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJEMzsgICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcclxuICB9XHJcbiAgLm92ZXJmbG93X2hlYWRlcntcclxuICAgIHBvc2l0aW9uOiByZXZlcnQ7XHJcbiAgfVxyXG4gIC5MaXN0X0NvbnRlbnR7XHJcbiAgICBvdmVyZmxvdzogYXV0bzsgICAgXHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcblxyXG4gIC5ub3RBUHJpbWVOdW1iZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICAuaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map