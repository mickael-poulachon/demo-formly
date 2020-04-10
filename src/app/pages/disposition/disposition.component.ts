import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DispositionComponent implements OnInit {

  form = new FormGroup({});
  model = {showEmail: null, answer: ''};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6 order-1',
          key: 'answer',
          type: 'input',
          templateOptions: {
            label: 'Mon champs a gauche',
            placeholder: 'votre texte'
          }
        },
        {
          key: 'answer',
          type: 'input',
          className: 'col-6 order-2',
          templateOptions: {
            label: 'Mon champs à droite',
            placeholder: 'votre texte'
          }
        }
      ]
    },

    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'answer',
          type: 'input',
          className: 'col-6 order-2',
          templateOptions: {
            label: 'Mon champs à droite',
            placeholder: 'votre texte'
          }
        },
        {
          key: 'answer',
          type: 'input',
          className: 'col-6 order-1',
          templateOptions: {
            label: 'Mon champs à gauche',
            placeholder: 'votre texte'
          }
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model.showEmail === 3 && this.model.answer !== '');
    console.log(this.model);
  }

}
