import { Routes, RouterModule } from "@angular/router"
import { HomeViewComponent } from './views/views-barrel';
import { SiteIntroComponent } from "./components/site-intro/site-intro.component"

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "home/(siteOutlet:intro)", pathMatch: 'full'},
  {path: "home", component: HomeViewComponent, children: [
    {path: "intro", component: SiteIntroComponent, outlet: "siteOutlet"},
  ]},
]

export const router = RouterModule.forRoot(APP_ROUTES)
