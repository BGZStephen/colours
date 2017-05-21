import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { FlashMessagesService } from "angular2-flash-messages"
import { PalettesApiService } from "../../services/palettes-api.service"

@Component({
  selector: 'app-dashboard-palette-edit',
  templateUrl: './dashboard-palette-edit.component.html',
  styleUrls: ['./dashboard-palette-edit.component.scss']
})
export class DashboardPaletteEditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private palettesApiService: PalettesApiService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.loadPalette()
  }

  palette: object;

  loadPalette() {
    this.activatedRoute.params
    .map(params => params['paletteId'])
    .subscribe((paletteId) => {
      let paletteObject = {paletteId: paletteId}
      this.palettesApiService.getPaletteById(paletteObject)
      .subscribe(res => {
        console.log(res)
        this.palette = res
      })
    })
  }

  updatePalette(paletteObject, paletteId) {
    paletteObject.paletteId = paletteId
    this.palettesApiService.updatePalette(paletteObject)
    .subscribe(res => {
      if(res.success) {
        this.flashMessage.show("Palette updated successfuly", {cssClass: "flash-success--dashboard", timeout: 3000})
      } else {
        this.flashMessage.show("Failed to update Palette", {cssClass: "flash-failure--dashboard", timeout: 3000})
      }
    })
  }

}
