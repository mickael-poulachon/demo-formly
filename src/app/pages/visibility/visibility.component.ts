import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VisibilityComponent implements OnInit {

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'showEmail',
      type: 'radio',
      templateOptions: {
        label: 'Sélectionnez l\'option 3 pour voir l\'email',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4' },
        ],
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      },
      hideExpression: 'model.showEmail !== 3',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }


}
