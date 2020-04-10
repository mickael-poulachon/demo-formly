import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VisibilityModule} from './pages/visibility/visibility.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FileTypeCustomComponent } from './component/file-type-custom/file-type-custom.component';
import { StepperComponent } from './component/stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    FileTypeCustomComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VisibilityModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormlyModule,
    MatDialogModule,
    MatStepperModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
