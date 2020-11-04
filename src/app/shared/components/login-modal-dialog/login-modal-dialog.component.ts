import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../header/header.component';


@Component({
  selector: 'app-login-modal-dialog',
  templateUrl: './login-modal-dialog.component.html',
  styleUrls: ['./login-modal-dialog.component.scss']
})
export class LoginModalDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginModalDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
