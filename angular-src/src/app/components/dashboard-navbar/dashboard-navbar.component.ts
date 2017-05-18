import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuVisibility: boolean = false;
  activeSubMenu: number = -1;

  setActiveSubMenu(index) {
    if(index == this.activeSubMenu) {
      this.activeSubMenu = -1
    } else {
      this.activeSubMenu = index
    }
  }

  setMenuStyle() {
    if(this.menuVisibility == true) {
      return {"max-height": "100vh"}
    } else {
      return {"max-height": "0"}
    }
  }

  setSubMenuStyle(index) {
    if(index == this.activeSubMenu) {
      let subMenuLength = document.getElementsByClassName("second-level-list")[index].children.length
      let subMenuHeight = (45 * subMenuLength) + "px"
      return {"max-height": subMenuHeight}
    } else {
      return {"max-height": "0"}
    }
  }

}
