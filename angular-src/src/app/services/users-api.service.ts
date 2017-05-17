import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class UsersApiService {

  constructor(
    private http: Http
  ) { }

  registerUser(userObject) {
    return this.http.post("http://localhost:3006/users/register", userObject)
    .map(res => res.json())
  }

}
