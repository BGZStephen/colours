import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"

// sevices
import { UsersApiService } from "../services/users-api.service"
import { PalettesApiService } from "../services/palettes-api.service"

// views
import { HomeViewComponent} from '../views/views-barrel';

//components

// site specific
import { SiteNavbarComponent, SiteIntroComponent, SiteRegisterComponent, SiteLoginComponent} from './components/site-components-barrel'


@NgModule({
  declarations: [
    HomeViewComponent,
    SiteNavbarComponent,
    SiteIntroComponent,
    SiteRegisterComponent,
    SiteLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule
  ],
  exports: [
    HomeViewComponent,
    SiteNavbarComponent,
    SiteIntroComponent,
    SiteRegisterComponent,
    SiteLoginComponent
  ],
})
export class SiteModule { }
