import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"

// sevices
import { DashboardApiService } from "./dashboard-api.service"

// views
import {DashboardViewComponent } from '../views/views-barrel';

// modules

import { ProfileModule } from "./profile/profile.module"
import { PalettesModule } from "./palettes/palettes.module"

//components

// dashboard specific
import { DashboardNavbarComponent, DashboardNotificationBarComponent } from './components/dashboard-components-barrel';


@NgModule({
  declarations: [
    DashboardViewComponent, DashboardNavbarComponent, DashboardNotificationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule,
    ProfileModule,
    PalettesModule
  ],
  exports: [
    DashboardViewComponent, DashboardNavbarComponent, DashboardNotificationBarComponent,
  ],
  providers: [DashboardApiService]
})
export class DashboardModule { }
