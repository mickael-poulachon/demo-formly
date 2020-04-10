import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-requis',
  templateUrl: './requis.component.html',
  styleUrls: ['./requis.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RequisComponent implements OnInit {

  form = new FormGroup({});
  model = { showEmail: null, answer: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'showEmail',
      type: 'radio',
      templateOptions: {
        label: 'Sélectionnez l\'option 3 pour et remplissez le second champs pour rendre obligatoire le champs email',
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4' },
        ],
      },
    },
    {
      key: 'answer',
      type: 'input',
      templateOptions: {
        label: 'votre réponse ?',
        placeholder: 'Enter email',
        required: true
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email'
      },
      expressionProperties: {
        'templateOptions.required': '(model.showEmail === 3 && model.answer !== \'\')',
      },
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
