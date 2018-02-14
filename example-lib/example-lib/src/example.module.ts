import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleTextComponent } from './example-text.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ExampleTableComponent} from './example-table.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    ExampleTextComponent,
    ExampleTableComponent
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ExampleTextComponent,
    ExampleTableComponent,
    NgxDatatableModule
  ]
})
export class ExampleModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExampleModule,
      providers: [
        NgxDatatableModule
      ]
    };
  }


}
