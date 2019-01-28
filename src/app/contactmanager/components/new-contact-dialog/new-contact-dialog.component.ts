import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {User} from "../../models/user";

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  user: User;

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>) { }

  ngOnInit() {
    this.user = new User();
  }

  save(): void {
    this.dialogRef.close(this.user);
  }

  dismiss(): void{
    this.dialogRef.close(null);
  }
}
