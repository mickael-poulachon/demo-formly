import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StepComponent} from './step.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';
import {StepperComponent} from '../../component/stepper/stepper.component';

const routesVisibility: Routes = [
  {
    path: '',
    component: StepComponent
  }
];

@NgModule({
  declarations: [StepComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesVisibility),
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [        { name: 'stepper', component: StepperComponent }
      ]
    })
  ]
})
export class StepModule { }
