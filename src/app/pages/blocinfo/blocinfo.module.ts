import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlocinfoComponent} from './blocinfo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';
import {StepperComponent} from '../../component/stepper/stepper.component';
import {InformationComponent} from '../../component/information/information.component';

const routesVisibility: Routes = [
  {
    path: '',
    component: BlocinfoComponent
  }
];

@NgModule({
  declarations: [BlocinfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesVisibility),
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
          { name: 'stepper', component: StepperComponent },
          { name: 'information', component: InformationComponent }
      ]
    })
  ]
})
export class BlocinfoModule { }
