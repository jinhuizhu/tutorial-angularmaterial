import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // internal users object that others can subscribe to
  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  };
  constructor(private httpClient: HttpClient) {
    this.dataStore = {
      users: []
    };

    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  /**
   * Load all the users.
   */
  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.httpClient.get<User[]>(usersUrl)
      .subscribe( data => {
        this.dataStore.users = data;

        // next():
        //  notify all subscribers that data is available:
        // Object.assign():
        //  we don't want to expose our internal datastore; hence we copy our datastore and return that instead:
        this._users.next(Object.assign({}, this.dataStore).users);
      }, error => {
        console.log('Failed to fetch users.');
      });
  }
}
