import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { PalettesApiService } from "../../services/palettes-api.service"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'app-dashboard-palette-add',
  templateUrl: './dashboard-palette-add.component.html',
  styleUrls: ['./dashboard-palette-add.component.scss']
})
export class DashboardPaletteAddComponent implements OnInit {

  constructor(
    private palettesApiService: PalettesApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createPalette(paletteObject) {
    this.palettesApiService.createPalette(paletteObject)
    .subscribe(res => {
      if(res.success) {
        this.flashMessage.show("Palette created successfuly", {cssClass: "flash-success--dashboard", timeout: 3000})
      } else {
        this.flashMessage.show("Failed to create Palette", {cssClass: "flash-failure--dashboard", timeout: 3000})
      }
    })
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': [component]}}]);
  }

}
