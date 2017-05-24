import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { PalettesApiService } from "../../../services/palettes-api.service"

@Component({
  selector: 'app-dashboard-palettes-manage',
  templateUrl: './dashboard-palettes-manage.component.html',
  styleUrls: ['./dashboard-palettes-manage.component.scss']
})
export class DashboardPalettesManageComponent implements OnInit {

  constructor(
    private router: Router,
    private palettesApiService: PalettesApiService
  ) {}

  userPalettes: Array<object>;

  ngOnInit() {
    this.loadUserPalettes()
  }

  deletePalette(paletteId) {
    let paletteObject = {paletteId: paletteId}
    this.palettesApiService.deletePalette(paletteObject)
    .subscribe(res => {
      this.loadUserPalettes()
    })
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': [component]}}]);
  }

  setPalette(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': ['palette-edit', component]}}]);
  }

  loadUserPalettes() {
    this.palettesApiService.getPalettesByUserId()
    .subscribe(res => {
      if(res.success == false) {
        this.userPalettes = [];
      } else {
        this.userPalettes = res;
      }
    })
  }

}
