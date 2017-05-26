import { Routes, RouterModule } from "@angular/router"

//guards
import { AuthGuard } from "./guards/auth.guard"

// views
import { HomeViewComponent, DashboardViewComponent} from './views/views-barrel';

// components for aux routes
// site
import { SiteIntroComponent, SiteRegisterComponent, SiteLoginComponent } from "./site/components/site-components-barrel"

//dashboard
import { DashboardPalettesManageComponent, DashboardPaletteIndividualComponent,
        DashboardPalettesViewComponent, DashboardPaletteAddComponent, DashboardPaletteEditComponent } from "./dashboard/components/dashboard-components-barrel"

//profile

import { DashboardProfileComponent, DashboardProfileEditComponent, DashboardChangePasswordComponent } from "./dashboard/profile/components/profile-components-barrel"

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "/home/(siteOutlet:intro)", pathMatch: 'full'},
  {path: "home", component: HomeViewComponent, children: [
    {path: "intro", component: SiteIntroComponent, outlet: "siteOutlet"},
    {path: "register", component: SiteRegisterComponent, outlet: "siteOutlet"},
    {path: "login", component: SiteLoginComponent, outlet: "siteOutlet"},
  ]},
  {path: "dashboard", component: DashboardViewComponent, children: [
    {path: "palette/:paletteId", component: DashboardPaletteIndividualComponent, outlet: "dashboardOutlet"},
    {path: "palette-add", component: DashboardPaletteAddComponent, outlet: "dashboardOutlet"},
    {path: "palette-edit/:paletteId", component: DashboardPaletteEditComponent, outlet: "dashboardOutlet"},
    {path: "palettes-manage", component: DashboardPalettesManageComponent, outlet: "dashboardOutlet"},
    {path: "palettes-view", component: DashboardPalettesViewComponent, outlet: "dashboardOutlet"},
    {path: "profile", component: DashboardProfileComponent, outlet: "dashboardOutlet"},
    {path: "profile-edit", component: DashboardProfileEditComponent, outlet: "dashboardOutlet"},
    {path: "profile-password-edit", component: DashboardChangePasswordComponent, outlet: "dashboardOutlet"},
  ],  canActivate:[AuthGuard]}
]

export const router = RouterModule.forRoot(APP_ROUTES)
