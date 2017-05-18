import { Routes, RouterModule } from "@angular/router"
import { HomeViewComponent, DashboardViewComponent} from './views/views-barrel';
import { SiteIntroComponent, SiteRegisterComponent, SiteLoginComponent } from "./components/components-barrel"

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "/home/(siteOutlet:intro)", pathMatch: 'full'},
  {path: "home", component: HomeViewComponent, children: [
    {path: "intro", component: SiteIntroComponent, outlet: "siteOutlet"},
    {path: "register", component: SiteRegisterComponent, outlet: "siteOutlet"},
    {path: "login", component: SiteLoginComponent, outlet: "siteOutlet"},
  ]},
  {path: "dashboard", component: DashboardViewComponent}
]

export const router = RouterModule.forRoot(APP_ROUTES)
