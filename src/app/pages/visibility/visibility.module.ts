import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisibilityComponent} from './visibility.component';
import {RouterModule, Routes} from '@angular/router';
import {FormlyModule} from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {ReactiveFormsModule} from '@angular/forms';

const routesVisibility: Routes = [
  {
    path: '',
    component: VisibilityComponent
  }
];


@NgModule({
  declarations: [VisibilityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesVisibility),
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot()
  ],
  exports: [RouterModule]
})
export class VisibilityModule {
}
