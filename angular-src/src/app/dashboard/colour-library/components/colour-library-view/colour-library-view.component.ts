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

  ngOnInit() {
    this.loadColourLibrary()
  }

  loadColourLibrary() {
    this.colourLibraryApiService.getColourLibrary()
    .subscribe(res => {
      this.colourLibrary = res;
    })
  }

  deleteColour(colourLibraryObject) {
    this.colourLibraryApiService.deleteColour(colourLibraryObject)
    .subscribe(res => {
      console.log(res)
      this.loadColourLibrary()
    })
  }

}
