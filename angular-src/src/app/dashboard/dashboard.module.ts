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
import {DashboardViewComponent } from '../views/views-barrel';

//components

// dashboard specific
import { DashboardNavbarComponent, DashboardNotificationBarComponent, DashboardProfileComponent,
         DashboardProfileEditComponent, DashboardChangePasswordComponent, DashboardPalettesManageComponent,
         DashboardPaletteIndividualComponent, DashboardPalettesViewComponent, DashboardPaletteAddComponent,
         DashboardPaletteEditComponent } from './components/dashboard-components-barrel';


@NgModule({
  declarations: [
    DashboardViewComponent, DashboardNavbarComponent, DashboardNotificationBarComponent,
    DashboardProfileComponent, DashboardProfileEditComponent, DashboardChangePasswordComponent,
    DashboardPalettesManageComponent, DashboardPaletteIndividualComponent, DashboardPalettesViewComponent,
    DashboardPaletteAddComponent, DashboardPaletteEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule,
  ],
  exports: [
    DashboardViewComponent, DashboardNavbarComponent, DashboardNotificationBarComponent,
    DashboardProfileComponent, DashboardProfileEditComponent, DashboardChangePasswordComponent,
    DashboardPalettesManageComponent, DashboardPaletteIndividualComponent, DashboardPalettesViewComponent,
    DashboardPaletteAddComponent, DashboardPaletteEditComponent
  ],
  providers: [UsersApiService, PalettesApiService]
})
export class DashboardModule { }
