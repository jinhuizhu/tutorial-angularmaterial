import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  // declare an observable so that our template can bind to it:
  users: Observable<User[]>;

  // sidenav referrs to the following in the template file:
  // <mat-sidenav #sidenav class="app-sidenav mat-elevation-z10"
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe( () => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }
  
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
