import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FiletypeComponent} from './filetype.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';
import {FileTypeCustomComponent} from '../../component/file-type-custom/file-type-custom.component';

const routesVisibility: Routes = [
  {
    path: '',
    component: FiletypeComponent
  }
];

@NgModule({
  declarations: [FiletypeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesVisibility),
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FileTypeCustomComponent, wrappers: ['form-field'] },
      ]
    })
  ]
})
export class FiletypeModule { }
