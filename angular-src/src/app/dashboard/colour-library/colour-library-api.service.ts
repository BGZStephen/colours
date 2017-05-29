import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class ColourLibraryApiService {

  constructor(
    private http: Http
  ) { }

  user: any;
  authToken: any;

  loadToken() {
    this.authToken = localStorage.getItem('token')
    this.user = localStorage.getItem('user')
  }

  getColourLibrary() {
    this.loadToken()
    let query = {_id: JSON.parse(this.user)._id}
    return this.http.post("http://localhost:3006/colour-libraries/getByUserId", query)
    .map(res => res.json())
  }

  deleteColour(colourLibraryObject) {
    this.loadToken()
    colourLibraryObject.userId = JSON.parse(this.user)._id
    return this.http.post("http://localhost:3006/colour-libraries/deleteColour", colourLibraryObject)
    .map(res => res.json())
  }

  // colourId: req.body.colourId

}
