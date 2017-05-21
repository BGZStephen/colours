import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class PalettesApiService {

  constructor(
    private http: Http,
  ) {}

  user: any;

  createPalette(paletteObject) {
    this.loadToken()
    paletteObject.userId = JSON.parse(this.user).userId
    console.log(paletteObject)
    return this.http.post("http://localhost:3006/palettes/create", paletteObject)
    .map(res => res.json())
  }

  getPaletteById(paletteObject) {
    return this.http.post("http://localhost:3006/palettes/getById", paletteObject)
    .map(res => res.json())
  }

  getPalettesByUserId() {
    this.loadToken()
    return this.http.post("http://localhost:3006/palettes/getByUserId", {"userId": this.user.userId})
    .map(res => res.json())
  }

  loadToken() {
    this.user = localStorage.getItem('user')
  }

}
