import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepComponent implements OnInit {

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
          templateOptions: { label: 'Step 1.1' },
          hideExpression: '!(model.glasses === 2)',
          fieldGroup: [
            {
              key: 'eyes',
              type: 'select',
              templateOptions: {
                label: 'Have you ever measured your eyes?',
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
          templateOptions: { label: 'Step 1.2' },
          hideExpression: '!(model.glasses === 1)',
          expressionProperties: {
            'model.glasses_amount': 'field.templateOptions.hidden ? null : model.glasses_amount'
          },
          fieldGroup: [
            {
              key: 'glasses_amount',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'How many glasses do you own?',
                required: true
              }
            }
          ]
        },
        {
          templateOptions: { label: 'Step 1.2.1' },
          hideExpression: '!(model.glasses_amount >= 1) || !(model.glasses === 1)',
          expressionProperties: {
            'model.brand': 'field.templateOptions.hidden ? null : model.brand'
          },
          fieldGroup: [
            {
              key: 'brand',
              type: 'input',
              templateOptions: {
                type: 'string',
                label: 'What brand of glasses do you wear?',
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
