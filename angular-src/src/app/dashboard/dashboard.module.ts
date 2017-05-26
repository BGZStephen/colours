import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"

// sevices
import { DashboardApiService } from "./dashboard-api.service"
import { UsersApiService } from "../services/users-api.service"
import { PalettesApiService } from "../services/palettes-api.service"

// views
import {DashboardViewComponent } from '../views/views-barrel';

// modules

import { ProfileModule } from "./profile/profile.module"

//components

// dashboard specific
import { DashboardNavbarComponent, DashboardNotificationBarComponent,DashboardPaletteIndividualComponent,
         DashboardPalettesViewComponent, DashboardPaletteAddComponent, DashboardPaletteEditComponent,
         DashboardPalettesManageComponent } from './components/dashboard-components-barrel';


@NgModule({
  declarations: [
    DashboardViewComponent, DashboardNavbarComponent, DashboardNotificationBarComponent,
    DashboardPalettesManageComponent, DashboardPaletteIndividualComponent, DashboardPalettesViewComponent,
    DashboardPaletteAddComponent, DashboardPaletteEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule,
    ProfileModule
  ],
  exports: [
    DashboardViewComponent, DashboardNavbarComponent, DashboardNotificationBarComponent,
    DashboardPalettesManageComponent, DashboardPaletteIndividualComponent, DashboardPalettesViewComponent,
    DashboardPaletteAddComponent, DashboardPaletteEditComponent
  ],
  providers: [DashboardApiService, UsersApiService, PalettesApiService]
})
export class DashboardModule { }
