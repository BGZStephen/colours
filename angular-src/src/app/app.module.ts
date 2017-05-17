import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"

// modules
import { AppComponent } from './app.component';

// views
import { HomeViewComponent } from './views/views-barrel';

//components
import { SiteNavbarComponent, SiteIntroComponent, SiteRegisterComponent} from './components/components-barrel';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    SiteNavbarComponent,
    SiteIntroComponent,
    SiteRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
