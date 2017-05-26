import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class PalettesApiService {

  constructor(
    private http: Http
  ) { }

  user: any;

  addColour(paletteObject) {
    this.loadToken()
    paletteObject.createdBy = JSON.parse(this.user)._id
    return this.http.post("http://localhost:3006/colours/createForPalette", paletteObject)
    .map(res => res.json())
  }

  deleteColour(paletteObject) {
    this.loadToken()
    paletteObject.createdBy = JSON.parse(this.user)._id
    return this.http.post("http://localhost:3006/colours/deleteFromPalette", paletteObject)
    .map(res => res.json())
  }

  createPalette(paletteObject) {
    this.loadToken()
    paletteObject.createdBy = JSON.parse(this.user)._id
    return this.http.post("http://localhost:3006/palettes/create", paletteObject)
    .map(res => res.json())
  }

  deletePalette(paletteObject) {
    this.loadToken()
    paletteObject._id = JSON.parse(this.user)._id
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
    let userObject = {"createdBy": JSON.parse(this.user)._id}
    return this.http.post("http://localhost:3006/palettes/getByUserId", userObject)
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
