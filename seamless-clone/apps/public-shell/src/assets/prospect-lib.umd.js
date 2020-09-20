(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@seamless-clone/core')) :
    typeof define === 'function' && define.amd ? define('prospect-lib', ['exports', '@angular/core', '@angular/common', '@angular/router', '@seamless-clone/core'], factory) :
    (global = global || self, factory(global['prospect-lib'] = {}, global.ng.core, global.ng.common, global.ng.router, global.core$1));
}(this, (function (exports, core, common, router, core$1) { 'use strict';

    var ProspectLibService = /** @class */ (function () {
        function ProspectLibService() {
        }
        ProspectLibService.ɵfac = function ProspectLibService_Factory(t) { return new (t || ProspectLibService)(); };
        ProspectLibService.ɵprov = core.ɵɵdefineInjectable({ token: ProspectLibService, factory: ProspectLibService.ɵfac, providedIn: 'root' });
        return ProspectLibService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ProspectLibService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var ProspectHomeComponent = /** @class */ (function () {
        function ProspectHomeComponent(someService) {
            this.someService = someService;
        }
        ProspectHomeComponent.prototype.ngOnInit = function () {
        };
        ProspectHomeComponent.ɵfac = function ProspectHomeComponent_Factory(t) { return new (t || ProspectHomeComponent)(core.ɵɵdirectiveInject(core$1.SomeServiceService)); };
        ProspectHomeComponent.ɵcmp = core.ɵɵdefineComponent({ type: ProspectHomeComponent, selectors: [["lib-prospect-home"]], decls: 4, vars: 1, consts: [[1, "border-blue"]], template: function ProspectHomeComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p", 0);
                core.ɵɵtext(1, " prospect-home works! ");
                core.ɵɵelement(2, "br");
                core.ɵɵtext(3);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate1(" Seamless/core library: ", ctx.someService.getHello(), " ");
            } }, styles: [".border-blue[_ngcontent-%COMP%]{border:1px dotted #00f}"] });
        return ProspectHomeComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ProspectHomeComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-prospect-home',
                    templateUrl: './prospect-home.component.html',
                    styleUrls: ['./prospect-home.component.scss']
                }]
        }], function () { return [{ type: core$1.SomeServiceService }]; }, null); })();

    var ProspectLazyComponent = /** @class */ (function () {
        function ProspectLazyComponent(someService) {
            this.someService = someService;
        }
        ProspectLazyComponent.prototype.ngOnInit = function () {
        };
        ProspectLazyComponent.ɵfac = function ProspectLazyComponent_Factory(t) { return new (t || ProspectLazyComponent)(core.ɵɵdirectiveInject(core$1.SomeServiceService)); };
        ProspectLazyComponent.ɵcmp = core.ɵɵdefineComponent({ type: ProspectLazyComponent, selectors: [["lib-prospect-lazy"]], decls: 5, vars: 3, template: function ProspectLazyComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, "prospect-list works!");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(2, "p");
                core.ɵɵtext(3);
                core.ɵɵpipe(4, "async");
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(4, 1, ctx.someService.getObservableOfHello()));
            } }, pipes: [common.AsyncPipe], styles: [""] });
        return ProspectLazyComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ProspectLazyComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-prospect-lazy',
                    templateUrl: './prospect-lazy.component.html',
                    styleUrls: ['./prospect-lazy.component.css']
                }]
        }], function () { return [{ type: core$1.SomeServiceService }]; }, null); })();

    var ProspectRoutingModule = /** @class */ (function () {
        function ProspectRoutingModule() {
        }
        ProspectRoutingModule.ɵmod = core.ɵɵdefineNgModule({ type: ProspectRoutingModule });
        ProspectRoutingModule.ɵinj = core.ɵɵdefineInjector({ factory: function ProspectRoutingModule_Factory(t) { return new (t || ProspectRoutingModule)(); }, imports: [[
                    common.CommonModule,
                    router.RouterModule.forChild([
                        { path: '', component: ProspectHomeComponent },
                        { path: 'prospect-list', component: ProspectLazyComponent }
                    ])
                ]] });
        return ProspectRoutingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(ProspectRoutingModule, { declarations: [ProspectHomeComponent, ProspectLazyComponent], imports: [common.CommonModule, router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ProspectRoutingModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule.forChild([
                            { path: '', component: ProspectHomeComponent },
                            { path: 'prospect-list', component: ProspectLazyComponent }
                        ])
                    ],
                    declarations: [ProspectHomeComponent, ProspectLazyComponent]
                }]
        }], null, null); })();

    var ProspectLibModule = /** @class */ (function () {
        function ProspectLibModule() {
        }
        ProspectLibModule.ɵmod = core.ɵɵdefineNgModule({ type: ProspectLibModule });
        ProspectLibModule.ɵinj = core.ɵɵdefineInjector({ factory: function ProspectLibModule_Factory(t) { return new (t || ProspectLibModule)(); }, imports: [[
                    common.CommonModule,
                    ProspectRoutingModule
                ]] });
        return ProspectLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(ProspectLibModule, { imports: [common.CommonModule,
            ProspectRoutingModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ProspectLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        common.CommonModule,
                        ProspectRoutingModule
                    ],
                    exports: []
                }]
        }], null, null); })();

    exports.ProspectLibModule = ProspectLibModule;
    exports.ProspectLibService = ProspectLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=prospect-lib.umd.js.map
