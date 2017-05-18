import { Routes, RouterModule } from "@angular/router"

// views
import { HomeViewComponent, DashboardViewComponent} from './views/views-barrel';

// components for aux routes
// site
import { SiteIntroComponent, SiteRegisterComponent, SiteLoginComponent } from "./components/components-barrel"

//dashboard
import { DashboardProfileComponent } from "./components/components-barrel"

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "/home/(siteOutlet:intro)", pathMatch: 'full'},
  {path: "home", component: HomeViewComponent, children: [
    {path: "intro", component: SiteIntroComponent, outlet: "siteOutlet"},
    {path: "register", component: SiteRegisterComponent, outlet: "siteOutlet"},
    {path: "login", component: SiteLoginComponent, outlet: "siteOutlet"},
  ]},
  {path: "dashboard", component: DashboardViewComponent, children: [
    {path: "profile", component: DashboardProfileComponent, outlet: "dashboardOutlet"},
    {path: "profile-edit", component: SiteRegisterComponent, outlet: "dashboardOutlet"},
    {path: "profile-password-edit", component: SiteLoginComponent, outlet: "dashboardOutlet"},
  ]}
]

export const router = RouterModule.forRoot(APP_ROUTES)
