import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-filetype',
  templateUrl: './filetype.component.html',
  styleUrls: ['./filetype.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FiletypeComponent implements OnInit {

  form = new FormGroup({});
  model = { showEmail: null, answer: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'file',
      type: 'file',
      templateOptions: {
        type: 'application/pdf'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }

}
