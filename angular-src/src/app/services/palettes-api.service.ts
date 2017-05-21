import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class PalettesApiService {

  constructor(
    private http: Http,
  ) {}

  user: any;

  addPaletteItem(paletteObject) {
    return this.http.post("http://localhost:3006/palettes/addPaletteItem", paletteObject)
    .map(res => res.json())
  }

  createPalette(paletteObject) {
    this.loadToken()
    paletteObject.userId = JSON.parse(this.user).userId
    return this.http.post("http://localhost:3006/palettes/create", paletteObject)
    .map(res => res.json())
  }

  deletePalette(paletteObject) {
    this.loadToken()
    paletteObject.userId = JSON.parse(this.user).userId
    return this.http.post("http://localhost:3006/palettes/deleteOne", paletteObject)
    .map(res => res.json())
  }

  deletePaletteItem(paletteObject) {
    return this.http.post("http://localhost:3006/palettes/deletePaletteItem", paletteObject)
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

  updatePalette(paletteObject) {
    return this.http.post("http://localhost:3006/palettes/update", paletteObject)
    .map(res => res.json())
  }

}
