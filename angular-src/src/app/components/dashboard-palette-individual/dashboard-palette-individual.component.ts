import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-palette-individual',
  templateUrl: './dashboard-palette-individual.component.html',
  styleUrls: ['./dashboard-palette-individual.component.scss']
})
export class DashboardPaletteIndividualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.convertRgbToHex()
  }

  hexConversion: string = "#Hex";
  rgbConversion: any = { "red": "369", "green": "369", "blue": "369"}

  setRgbColor(color, value) {
    if(color == "red") {
      this.rgbConversion.red = value
    } else if (color == "green") {
      this.rgbConversion.green = value
    } else if (color == "blue") {
      this.rgbConversion.blue = value
    }
  }

  convertRgbToHex() {
    let redValue = parseInt(this.rgbConversion.red, 10).toString(16)
    if(redValue.length < 2) {
      redValue = "0" + redValue
    }
    let greenValue = parseInt(this.rgbConversion.green, 10).toString(16)
    if(greenValue.length < 2) {
      greenValue = "0" + greenValue
    }
    let blueValue = parseInt(this.rgbConversion.blue, 10).toString(16)
    if(blueValue.length < 2) {
      blueValue = "0" + blueValue
    }
    let hexConstructor = redValue + greenValue + blueValue
    this.hexConversion = hexConstructor
  }

}
