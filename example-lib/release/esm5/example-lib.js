import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    ExampleTextComponent
                ],
                providers: [],
                exports: [
                    CommonModule,
                    FormsModule,
                    ExampleTextComponent
                ]
            },] },
];
/** @nocollapse */
ExampleModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { ExampleModule, ExampleTextComponent };
//# sourceMappingURL=example-lib.js.map
