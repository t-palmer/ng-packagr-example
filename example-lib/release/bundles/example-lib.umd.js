(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@swimlane/ngx-datatable')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', '@swimlane/ngx-datatable'], factory) :
	(factory((global['example-lib'] = {}),global.ng.core,global.ng.common,global.ng.forms,global.ngxDatatable));
}(this, (function (exports,core,common,forms,ngxDatatable) { 'use strict';

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
var ExampleTableComponent = /** @class */ (function () {
    function ExampleTableComponent() {
        this.rows = [
            { name: 'Austin', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
        ];
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
    }
    return ExampleTableComponent;
}());
ExampleTableComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-example-table',
                template: "\n    <div>\n      <ngx-datatable\n        [rows]=\"rows\"\n        [columns]=\"columns\">\n      </ngx-datatable>\n    </div>\n  "
            },] },
];
/** @nocollapse */
ExampleTableComponent.ctorParameters = function () { return []; };
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
                    forms.FormsModule,
                    ngxDatatable.NgxDatatableModule
                ],
                declarations: [
                    ExampleTextComponent,
                    ExampleTableComponent
                ],
                providers: [],
                exports: [
                    common.CommonModule,
                    forms.FormsModule,
                    ExampleTextComponent,
                    ExampleTableComponent,
                    ngxDatatable.NgxDatatableModule
                ]
            },] },
];
/** @nocollapse */
ExampleModule.ctorParameters = function () { return []; };

exports.NgxDatatableModule = ngxDatatable.NgxDatatableModule;
exports.ColumnMode = ngxDatatable.ColumnMode;
exports.SortType = ngxDatatable.SortType;
exports.SortDirection = ngxDatatable.SortDirection;
exports.SelectionType = ngxDatatable.SelectionType;
exports.ClickType = ngxDatatable.ClickType;
exports.ContextmenuType = ngxDatatable.ContextmenuType;
exports.DatatableComponent = ngxDatatable.DatatableComponent;
exports.DataTableHeaderComponent = ngxDatatable.DataTableHeaderComponent;
exports.DataTableHeaderCellComponent = ngxDatatable.DataTableHeaderCellComponent;
exports.DataTableBodyComponent = ngxDatatable.DataTableBodyComponent;
exports.DataTableBodyCellComponent = ngxDatatable.DataTableBodyCellComponent;
exports.DataTableBodyRowComponent = ngxDatatable.DataTableBodyRowComponent;
exports.ProgressBarComponent = ngxDatatable.ProgressBarComponent;
exports.ScrollerComponent = ngxDatatable.ScrollerComponent;
exports.DataTableRowWrapperComponent = ngxDatatable.DataTableRowWrapperComponent;
exports.DataTableSelectionComponent = ngxDatatable.DataTableSelectionComponent;
exports.DatatableGroupHeaderDirective = ngxDatatable.DatatableGroupHeaderDirective;
exports.DatatableGroupHeaderTemplateDirective = ngxDatatable.DatatableGroupHeaderTemplateDirective;
exports.DataTableFooterComponent = ngxDatatable.DataTableFooterComponent;
exports.DataTablePagerComponent = ngxDatatable.DataTablePagerComponent;
exports.DatatableFooterDirective = ngxDatatable.DatatableFooterDirective;
exports.DataTableFooterTemplateDirective = ngxDatatable.DataTableFooterTemplateDirective;
exports.DataTableColumnDirective = ngxDatatable.DataTableColumnDirective;
exports.DataTableColumnHeaderDirective = ngxDatatable.DataTableColumnHeaderDirective;
exports.DataTableColumnCellDirective = ngxDatatable.DataTableColumnCellDirective;
exports.DatatableRowDetailDirective = ngxDatatable.DatatableRowDetailDirective;
exports.DatatableRowDetailTemplateDirective = ngxDatatable.DatatableRowDetailTemplateDirective;
exports.ScrollbarHelper = ngxDatatable.ScrollbarHelper;
exports.DimensionsHelper = ngxDatatable.DimensionsHelper;
exports.ExampleModule = ExampleModule;
exports.ExampleTextComponent = ExampleTextComponent;
exports.ExampleTableComponent = ExampleTableComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=example-lib.umd.js.map
