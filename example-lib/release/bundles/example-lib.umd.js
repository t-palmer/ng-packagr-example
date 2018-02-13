(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
	(factory((global['example-lib'] = {}),global.ng.core,global.ng.common,global.ng.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ExampleTextComponent = /** @class */ (function () {
    function ExampleTextComponent() {
    }
    return ExampleTextComponent;
}());
ExampleTextComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-example-text',
                template: "<h1>Example Text Component</h1>\n"
            },] },
];
/** @nocollapse */
ExampleTextComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    return ExampleModule;
}());
ExampleModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ],
                declarations: [
                    ExampleTextComponent
                ],
                providers: [],
                exports: [
                    common.CommonModule,
                    forms.FormsModule,
                    ExampleTextComponent
                ]
            },] },
];
/** @nocollapse */
ExampleModule.ctorParameters = function () { return []; };

exports.ExampleModule = ExampleModule;
exports.ExampleTextComponent = ExampleTextComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=example-lib.umd.js.map
