import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class PalettesApiService {

  constructor(
    private http: Http,
  ) {}

  user: any;

  loadToken() {
    this.user = localStorage.getItem('user')
  }

  getPalettesByUserId() {
    this.loadToken()
    return this.http.post("http://localhost:3006/palettes/getByUserId", {"userId": this.user.userId})
    .map(res => res.json())
  }

}
