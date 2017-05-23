import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { PalettesApiService } from "../../services/palettes-api.service"

@Component({
  selector: 'app-dashboard-palettes-view',
  templateUrl: './dashboard-palettes-view.component.html',
  styleUrls: ['./dashboard-palettes-view.component.scss']
})
export class DashboardPalettesViewComponent implements OnInit {

  constructor(
    private router: Router,
    private palettesApiService: PalettesApiService
  ) { }

  ngOnInit() {
    this.loadUserPalettes()
  }

  userPalettes: Array<object>

  loadUserPalettes() {
    this.palettesApiService.getPalettesByUserId()
    .subscribe(res => {
      if(res.success != false) {
        this.userPalettes = res;
      }
    })
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': [component]}}]);
  }

  setPalette(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': ['palette', component]}}]);
  }

}
