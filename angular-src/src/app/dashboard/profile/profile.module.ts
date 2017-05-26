import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "../../app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"

// sevices
import { ProfileApiService } from "./profile-api.service"

// profile components
import { DashboardProfileComponent, DashboardProfileEditComponent,
          DashboardChangePasswordComponent } from './components/profile-components-barrel';


@NgModule({
  declarations: [
    DashboardProfileComponent, DashboardProfileEditComponent, DashboardChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule,
  ],
  exports: [
    DashboardProfileComponent, DashboardProfileEditComponent, DashboardChangePasswordComponent,
  ],
  providers: [ProfileApiService]
})
export class ProfileModule { }
