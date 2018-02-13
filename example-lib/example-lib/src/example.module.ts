import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleTextComponent } from "./example-text.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ExampleTextComponent
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ExampleTextComponent
  ]
})
export class ExampleModule { }
