import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { TextareaComponent } from './components/textarea/textarea.component';



@NgModule({
  declarations: [
    TextareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    TextareaComponent,
  ]
})
export class SharedModule { }
