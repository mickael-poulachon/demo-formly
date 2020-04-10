import {Component, ViewChild} from '@angular/core';
import {FieldType, FormlyFieldConfig} from '@ngx-formly/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent extends FieldType {
  modalOptions: NgbModalOptions;
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('mymodal') mymodal;

  constructor(private modalService: NgbModal) {
    super();
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  move(index: number) {
    let nextStep = this.field.fieldGroup[index + 1];
    if (nextStep.templateOptions.isPopup) {
      this.open(this.mymodal);
      return;
    }
    this.stepper.selectedIndex = this.stepper.selectedIndex++;
  }

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }

  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.stepper.selectedIndex = +1;
    }, (reason) => {
      console.log('la');
    });
  }


}
