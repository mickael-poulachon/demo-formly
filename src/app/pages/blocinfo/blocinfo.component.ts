import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-blocinfo',
  templateUrl: './blocinfo.component.html',
  styleUrls: ['./blocinfo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlocinfoComponent implements OnInit {

  form = new FormGroup({});
  model = { showEmail: null, answer: '' };
  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      className: 'col-9 order-2',
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
    },
    {
      type: 'information',
      className: 'col-3 order-1',
      templateOptions: { content: 'Contenu du block en <b>html</b>' }
    }
  ];

  field2: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      className: 'col-9 order-1',
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
    },
    {
      type: 'information',
      className: 'col-3 order-2',
      templateOptions: { content: 'Step 1' }
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
