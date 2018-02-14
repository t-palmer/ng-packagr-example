import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
export { NgxDatatableModule, ColumnMode, SortType, SortDirection, SelectionType, ClickType, ContextmenuType, DatatableComponent, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableBodyCellComponent, DataTableBodyRowComponent, ProgressBarComponent, ScrollerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DataTableFooterComponent, DataTablePagerComponent, DatatableFooterDirective, DataTableFooterTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, ScrollbarHelper, DimensionsHelper } from '@swimlane/ngx-datatable';
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NgxDatatableModule
                ],
                declarations: [
                    ExampleTextComponent,
                    ExampleTableComponent
                ],
                providers: [],
                exports: [
                    CommonModule,
                    FormsModule,
                    ExampleTextComponent,
                    ExampleTableComponent,
                    NgxDatatableModule
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
export { ExampleModule, ExampleTextComponent, ExampleTableComponent };
//# sourceMappingURL=example-lib.js.map
