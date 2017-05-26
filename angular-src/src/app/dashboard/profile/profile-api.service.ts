import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class ProfileApiService {

  constructor(
    private http: Http
  ) { }

  // user services

  user: any;
  authToken: any;

  getCurrentUser() {
    this.loadToken()
    let userObject = {"_id": JSON.parse(this.user)._id}
    return this.http.post("http://localhost:3006/users/getById", userObject)
    .map(res => res.json())
  }

  loadToken() {
    this.authToken = localStorage.getItem('token')
    this.user = localStorage.getItem('user')
  }
  updateProfile(userObject) {
    userObject._id = JSON.parse(this.user)._id
    return this.http.post("http://localhost:3006/users/update", userObject)
    .map(res => res.json())
  }

}
