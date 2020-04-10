import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DispositionComponent} from './disposition.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';
import {FlexLayoutModule} from '@angular/flex-layout';

const routesVisibility: Routes = [
  {
    path: '',
    component: DispositionComponent
  }
];

@NgModule({
  declarations: [DispositionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesVisibility),
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot(),
    FlexLayoutModule
  ]
})
export class DispositionModule { }
