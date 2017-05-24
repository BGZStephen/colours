import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"

// modules
import { AppComponent } from './app.component';
import { SiteModule } from "./site/site.module"
import { DashboardModule } from "./dashboard/dashboard.module"

// sevices
import { UsersApiService } from "./services/users-api.service"
import { PalettesApiService } from "./services/palettes-api.service"

// guards
import { AuthGuard } from "./guards/auth.guard"

// views
import { HomeViewComponent, DashboardViewComponent } from './views/views-barrel';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule,
    SiteModule,
    DashboardModule
  ],
  providers: [UsersApiService, PalettesApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
