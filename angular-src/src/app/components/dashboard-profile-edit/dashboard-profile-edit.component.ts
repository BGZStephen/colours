import { Component, OnInit } from '@angular/core';
import { UsersApiService } from "../../services/users-api.service"
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from "@angular/router"

@Component({
  selector: 'app-dashboard-profile-edit',
  templateUrl: './dashboard-profile-edit.component.html',
  styleUrls: ['./dashboard-profile-edit.component.scss']
})
export class DashboardProfileEditComponent implements OnInit {

  constructor(
    private usersApiService: UsersApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadUser()
  }

  user: object;

  loadUser() {
    this.usersApiService.getCurrentUser()
    .subscribe(res => {
      this.user = res
    })
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'dashboardOutlet': [component]}}]);
  }

  updateProfile(userObject) {
    this.usersApiService.updateProfile(userObject)
    .subscribe(res => {
      if(res.success) {
        this.flashMessage.show("Profile updated successfuly", {cssClass: "flash-success--dashboard", timeout: 3000})
        this.loadUser()
        this.setComponent('profile')
      } else {
        this.flashMessage.show("Failed to update profile", {cssClass: "flash-failure--dashboard", timeout: 3000})
      }
    })
  }
}
