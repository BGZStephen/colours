import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-dashboard-palettes-manage',
  templateUrl: './dashboard-palettes-manage.component.html',
  styleUrls: ['./dashboard-palettes-manage.component.scss']
})
export class DashboardPalettesManageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': [component]}}]);
  }

}
