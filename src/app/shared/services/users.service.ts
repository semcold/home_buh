import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { map } from "rxjs/operators";
import { BaseApi } from '../core/base-api';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService extends BaseApi{
  constructor(public http: HttpClient) {
    super(http);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.get(`users?email=${email}`)
    .pipe(map((users: User[]) => users[0] ? users[0] : undefined));
  }

  createNewUser(user: User):  Observable<User> {
    return this.post("users", user);
  }
}
