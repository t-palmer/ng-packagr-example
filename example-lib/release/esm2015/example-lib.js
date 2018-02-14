import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
export { NgxDatatableModule, ColumnMode, SortType, SortDirection, SelectionType, ClickType, ContextmenuType, DatatableComponent, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableBodyCellComponent, DataTableBodyRowComponent, ProgressBarComponent, ScrollerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DataTableFooterComponent, DataTablePagerComponent, DatatableFooterDirective, DataTableFooterTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, ScrollbarHelper, DimensionsHelper } from '@swimlane/ngx-datatable';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ExampleTextComponent {
}
ExampleTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-example-text',
                template: `<h1>Example Text Component</h1>
`
            },] },
];
/** @nocollapse */
ExampleTextComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ExampleTableComponent {
    constructor() {
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
}
ExampleTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-example-table',
                template: `
    <div>
      <ngx-datatable
        [rows]="rows"
        [columns]="columns">
      </ngx-datatable>
    </div>
  `
            },] },
];
/** @nocollapse */
ExampleTableComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ExampleModule {
}
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
ExampleModule.ctorParameters = () => [];

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
