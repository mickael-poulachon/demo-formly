import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RequisComponent} from './requis.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';

const routesVisibility: Routes = [
  {
    path: '',
    component: RequisComponent
  }
];

@NgModule({
  declarations: [RequisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesVisibility),
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot()
  ]
})
export class RequisModule { }
