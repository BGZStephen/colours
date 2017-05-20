import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-dashboard-palettes-view',
  templateUrl: './dashboard-palettes-view.component.html',
  styleUrls: ['./dashboard-palettes-view.component.scss']
})
export class DashboardPalettesViewComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': [component]}}]);
  }

}
