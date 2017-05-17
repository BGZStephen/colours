import { Routes, RouterModule } from "@angular/router"
import { HomeViewComponent } from './views/views-barrel';
import { SiteIntroComponent, SiteRegisterComponent } from "./components/components-barrel"

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "/home/(siteOutlet:intro)", pathMatch: 'full'},
  {path: "home", component: HomeViewComponent, children: [
    {path: "intro", component: SiteIntroComponent, outlet: "siteOutlet"},
    {path: "register", component: SiteRegisterComponent, outlet: "siteOutlet"},
  ]},
]

export const router = RouterModule.forRoot(APP_ROUTES)
