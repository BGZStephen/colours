import { Component, OnInit } from '@angular/core';
import { ColourLibraryApiService } from "../../colour-library-api.service"

@Component({
  selector: 'app-colour-library-view',
  templateUrl: './colour-library-view.component.html',
  styleUrls: ['./colour-library-view.component.scss']
})
export class ColourLibraryViewComponent implements OnInit {

  constructor(
    private colourLibraryApiService: ColourLibraryApiService
  ) {}

  colourLibrary: Array<object>
  activeModal: number = -1

  ngOnInit() {
    this.loadColourLibrary()
    this.convertRgbToHex()
  }
  activeModalStyle(index) {
    if(index == this.activeModal) {
      return {"opacity": "1", "max-height": "200vh"}
    } else {
      return {"opacity": "0", "max-height": "0"}
    }
  }

  addColour(colourLibraryObject) {
    console.log(colourLibraryObject)
    this.colourLibraryApiService.addColour(colourLibraryObject)
    .subscribe(res => {
      console.log(res)
    })
  }

  deleteColour(colourLibraryObject) {
    this.colourLibraryApiService.deleteColour(colourLibraryObject)
    .subscribe(res => {
      this.loadColourLibrary()
    })
  }

  loadColourLibrary() {
    this.colourLibraryApiService.getColourLibrary()
    .subscribe(res => {
      this.colourLibrary = res;
    })
  }

  toggleAddColourModal() {
    if(this.activeModal == 1) {
      this.activeModal = -1
    } else {
      this.activeModal = 1
    }
  }


  // COLOUR ADD STYLES

  hexConversion: string = "FFFFFF";
  rgbConversion: any = { "red": "051", "green": "102", "blue": "153"}
  palette: object;

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
