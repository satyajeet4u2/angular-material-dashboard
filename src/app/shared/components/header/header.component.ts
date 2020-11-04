import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material'
import {LoginModalDialogComponent} from '../login-modal-dialog/login-modal-dialog.component';

export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email: string;
  password: string;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<LoginModalDialogComponent>,
              public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 3000);
  }

  loginPopUp($event) {
    console.log($event);
    const dialogRef = this.dialog.open(LoginModalDialogComponent, {
      width: '750px',
      data: {name: this.email, animal: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result;
    });
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
