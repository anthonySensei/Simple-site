import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]>{

    return of(USERS);
  }

  getUser(id: number | string) {
  return this.getUsers().pipe(
    map((users: User[]) => users.find(user => user.id === +id))
  );
}
}
