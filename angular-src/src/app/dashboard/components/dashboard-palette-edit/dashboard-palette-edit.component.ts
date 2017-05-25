import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { FlashMessagesService } from "angular2-flash-messages"
import { PalettesApiService } from "../../../services/palettes-api.service"

@Component({
  selector: 'app-dashboard-palette-edit',
  templateUrl: './dashboard-palette-edit.component.html',
  styleUrls: ['./dashboard-palette-edit.component.scss']
})
export class DashboardPaletteEditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private palettesApiService: PalettesApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadPalette()
  }

  palette: object;

  loadPalette() {
    this.activatedRoute.params
    .map(params => params['paletteId'])
    .subscribe((paletteId) => {
      let paletteObject = {_id: paletteId}
      this.palettesApiService.getPaletteById(paletteObject)
      .subscribe(res => {
        console.log(res)
        this.palette = res
      })
    })
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': [component]}}]);
  }

  updatePalette(paletteObject, paletteId) {
    paletteObject._id = paletteId
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
