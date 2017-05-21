import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { PalettesApiService } from "../../services/palettes-api.service"

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

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': [component]}}]);
  }

  loadUserPalettes() {
    this.palettesApiService.getPalettesByUserId()
    .subscribe(res => {
      console.log(res)
    })
  }

}
