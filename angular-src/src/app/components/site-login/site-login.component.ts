import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-login',
  templateUrl: './site-login.component.html',
  styleUrls: ['./site-login.component.scss']
})
export class SiteLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  colours: Array<string> = [ // colours array to use for random hover effects
    "#00be9c",
    "#20ce6d",
    "#2c97df",
    "#9c56b8",
    "#ecf0f1",
    "#f3c500",
    "#e87e04",
    "#ea4b36"
  ]

  applyInputStyle() {
    let max = Math.floor(this.colours.length);
    let randomStyle = Math.floor(Math.random() * max)
    return {"color": this.colours[randomStyle]}
  }

  applyButtonStyle() {
    let max = Math.floor(this.colours.length);
    let randomStyle = Math.floor(Math.random() * max)
    return {"color": this.colours[randomStyle], "border": "5px solid " + this.colours[randomStyle]}
  }

}
