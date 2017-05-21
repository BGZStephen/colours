import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"

// modules
import { AppComponent } from './app.component';

// sevices
import { UsersApiService } from "./services/users-api.service"
import { PalettesApiService } from "./services/palettes-api.service"

// guards
import { AuthGuard } from "./guards/auth.guard"

// views
import { HomeViewComponent, DashboardViewComponent } from './views/views-barrel';

//components

// site specific
import { SiteNavbarComponent, SiteIntroComponent, SiteRegisterComponent, SiteLoginComponent} from './components/components-barrel';

// dashboard specific
import { DashboardNavbarComponent, DashboardNotificationBarComponent, DashboardProfileComponent,
         DashboardProfileEditComponent, DashboardChangePasswordComponent, DashboardPalettesManageComponent,
         DashboardPaletteIndividualComponent, DashboardPalettesViewComponent, DashboardPaletteAddComponent,
         DashboardPaletteEditComponent } from './components/components-barrel';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    SiteNavbarComponent, SiteIntroComponent, SiteRegisterComponent, SiteLoginComponent,
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
    FlashMessagesModule
  ],
  providers: [UsersApiService, PalettesApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
