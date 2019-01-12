import { Component, OnInit } from '@angular/core';

/**
 * Root component of ContactManager app.
 */
@Component({
  selector: 'app-contactmanager-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: []
})
export class ContactmanagerAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
