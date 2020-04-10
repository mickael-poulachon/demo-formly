import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-steppopup',
  templateUrl: './steppopup.component.html',
  styleUrls: ['./steppopup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SteppopupComponent implements OnInit {

  form = new FormGroup({});
  model = { showEmail: null, answer: '' };
  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      fieldGroup: [
        {
          templateOptions: { label: 'Step 1' },
          fieldGroup: [
            {
              key: 'glasses',
              type: 'select',
              templateOptions: {
                type: 'string',
                label: 'Do you wear glasses?',
                options: [
                  { value: 1, label: 'Yes' },
                  { value: 2, label: 'No' }
                ],
                required: true
              }
            }
          ]
        },
        {
          templateOptions: {
            label: 'Step hidden' ,
            isPopup : true
          },
          fieldGroup: [
            {
              key: 'xxx',
              type: 'input',
              templateOptions: {
                type: 'string',
                label: 'c\'est ok ?',
                required: true
              }
            }
          ]
        },
        {
          templateOptions: { label: 'Step 2' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Where are you from?',
                required: true
              }
            }
          ]
        }
      ]
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
