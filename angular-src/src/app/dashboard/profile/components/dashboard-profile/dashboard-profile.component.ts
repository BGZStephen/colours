import { Component, OnInit } from '@angular/core';
import { ProfileApiService } from "../../profile-api.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

  constructor(
    private profileApiService: ProfileApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadUser()
  }

  user: object;

  loadUser() {
    this.profileApiService.getCurrentUser()
    .subscribe(res => {
      this.user = res
    })
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': [component]}}]);
  }

}
