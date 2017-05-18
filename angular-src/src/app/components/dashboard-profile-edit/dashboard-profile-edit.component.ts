import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-profile-edit',
  templateUrl: './dashboard-profile-edit.component.html',
  styleUrls: ['./dashboard-profile-edit.component.scss']
})
export class DashboardProfileEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateProfile(userObject) {
    console.log(userObject)
  }

}
