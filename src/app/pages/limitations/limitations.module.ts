import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LimitationsComponent} from './limitations.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';

const routesVisibility: Routes = [
  {
    path: '',
    component: LimitationsComponent
  }
];

@NgModule({
  declarations: [LimitationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesVisibility),
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot()
  ]
})
export class LimitationsModule { }
