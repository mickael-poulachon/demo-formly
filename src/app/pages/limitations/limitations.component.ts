import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-limitations',
  templateUrl: './limitations.component.html',
  styleUrls: ['./limitations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LimitationsComponent implements OnInit {

  form = new FormGroup({});
  model = { showEmail: null, answer: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'answer',
      type: 'input',
      templateOptions: {
        label: 'Minimum 3 caractère, Maximum 8',
        placeholder: 'votre texte',
        required: true,
        maxLength: 8,
        minLength: 3
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model.showEmail === 3 && this.model.answer !== '');
    console.log(this.model);
  }

}
