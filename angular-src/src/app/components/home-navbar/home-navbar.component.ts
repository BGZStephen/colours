import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {

  colours: Array<object> = [
    {"background": "#00be9c", "color": "#1D1F25"},
    {"background": "#20ce6d", "color": "#1D1F25"},
    {"background": "#2c97df", "color": "#f5f5f5"},
    {"background": "#9c56b8", "color": "#f5f5f5"},
    {"background": "#ecf0f1", "color": "#1D1F25"},
    {"background": "#f3c500", "color": "#1D1F25"},
    {"background": "#e87e04", "color": "#f5f5f5"},
    {"background": "#ea4b36", "color": "#f5f5f5"}
  ]

  activeHover: number = -1 // used to check with LI is being hovered, if none, revert to -1

  setHoverStyle(index) { // triggered on both mouse over and mouse out events to toggle application of applyHoverStyle
    if(index == this.activeHover) {
      this.activeHover = -1
    } else {
      this.activeHover = index
    }
  }

  applyHoverStyle(index) {
    if(index == this.activeHover) {
      let max = Math.floor(this.colours.length);
      let randomStyle = Math.floor(Math.random() * max)
      return this.colours[randomStyle]
    }
  }

  navbarVisibility: boolean = false;

  resizeToggleNavbar() {
    if(screen.width > 1024) {
      this.navbarVisibility = true;
    }
  }

  setNavbarVisibility() {
    if(this.navbarVisibility == true) {
      return {"left": "0"}
    } else {
      return {"left": "-100%"}
    }
  }

  setActionBarVisibility() {
    if(this.navbarVisibility == true) {
      return {"right": "0%"}
    } else {
      return {"right": "-100%"}
    }
  }

  constructor() {
    this.resizeToggleNavbar()
  }


  ngOnInit() {
  }

}
