import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class SiteApiService {

  constructor(
    private http: Http
  ) { }

  baseUrl: string = "http://localhost:3006/"

  authenticate(userObject) {
    return this.http.post(this.baseUrl + "users/authenticate", userObject)
    .map(res => res.json())
  }

  registerUser(userObject) {
    return this.http.post(this.baseUrl + "users/register", userObject)
    .map(res => res.json())
  }

  storeToken(userObject) {
    localStorage.setItem('token', userObject.token)
    localStorage.setItem('user', JSON.stringify(userObject.user))
  }

}
