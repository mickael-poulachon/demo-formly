import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../../component/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmationComponent implements OnInit {

  form = new FormGroup({});
  model = {showEmail: null};
  fields: FormlyFieldConfig[] = [
    {
      key: 'showEmail',
      type: 'radio',
      templateOptions: {
        label: 'Sélectionnez l\'option 3 pour voir l\'email',
        options: [
          {value: 1, label: 'Option 1'},
          {value: 2, label: 'Option 2'},
          {value: 3, label: 'Option 3'},
          {value: 4, label: 'Option 4'},
        ],
        change: (field, $event) => this.openDialog(field, $event)
      }
    }
  ];

  constructor(public dialog: MatDialog) {
  }

  openDialog(field, event) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.model[field.key] = null;
        event.source._checked = false;
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }

}
