import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { tokenNotExpired } from "angular2-jwt"
import "rxjs/Rx"

@Injectable()
export class UsersApiService {

  constructor(
    private http: Http
  ) { }

  authToken: any;
  user: any;

  authenticate(userObject) {
    return this.http.post("http://localhost:3006/users/authenticate", userObject)
    .map(res => res.json())
  }

  getCurrentUser() {
    this.loadToken()
    let userObject = {"userId": JSON.parse(this.user).userId}
    return this.http.post("http://localhost:3006/users/getById", userObject)
    .map(res => res.json())
  }

  loadToken() {
    this.authToken = localStorage.getItem('token')
    this.user = localStorage.getItem('user')
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    localStorage.clear()
    this.authToken = ""
    this.user = ""
    return true
  }

  registerUser(userObject) {
    return this.http.post("http://localhost:3006/users/register", userObject)
    .map(res => res.json())
  }

  storeToken(userObject) {
    localStorage.setItem('token', userObject.token)
    localStorage.setItem('user', JSON.stringify(userObject.user))
    this.authToken = userObject.token;
    this.user = userObject.user;
  }

  updateProfile(userObject) {
    userObject.userId = JSON.parse(this.user).userId
    return this.http.post("http://localhost:3006/users/update", userObject)
    .map(res => res.json())
  }
}
