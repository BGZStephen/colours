import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { PalettesApiService } from "../../services/palettes-api.service"
import "rxjs/Rx"

@Component({
  selector: 'app-dashboard-palette-individual',
  templateUrl: './dashboard-palette-individual.component.html',
  styleUrls: ['./dashboard-palette-individual.component.scss']
})
export class DashboardPaletteIndividualComponent implements OnInit {

  constructor(
    private palettesApiService: PalettesApiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
    .map(params => params['paletteId'])
    .subscribe((paletteId) => {
      let paletteObject = {paletteId: paletteId}
      this.palettesApiService.getPaletteById(paletteObject)
      .subscribe(res => {
        console.log(res)
        this.palette = res
      })
    })
    this.convertRgbToHex()
  }

  ngOnInit() {
  }

  hexConversion: string = "FFFFFF";
  rgbConversion: any = { "red": "051", "green": "102", "blue": "153"}
  palette: object;

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

  convertHexToRgb(hexValue) {
    if(hexValue.length == 6) {
      let redHex = parseInt(hexValue.substr(0, 2), 16)
      this.rgbConversion.red = redHex
      let greenHex = parseInt(hexValue.substr(2, 2), 16)
      this.rgbConversion.green = greenHex
      let blueHex = parseInt(hexValue.substr(4, 2), 16)
      this.rgbConversion.blue = blueHex

    }
  }

}
