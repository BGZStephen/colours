import { Routes, RouterModule } from "@angular/router"

//guards
import { AuthGuard } from "./guards/auth.guard"

// views
import { SiteViewComponent } from "./site/site-view.component"
import { DashboardViewComponent } from "./dashboard/dashboard-view.component"

// components for aux routes
// site
import { SiteIntroComponent, SiteRegisterComponent, SiteLoginComponent } from "./site/components/site-components-barrel"

//dashboard
import { PalettesManageComponent, PalettesViewComponent, PaletteViewComponent, PaletteAddComponent,
         PaletteEditComponent } from "./dashboard/palettes/components/palettes-components-barrel"

//profile

import { ProfileViewComponent, ProfileEditComponent, ProfileChangePasswordComponent } from "./dashboard/profile/components/profile-components-barrel"

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "/home/(siteOutlet:intro)", pathMatch: 'full'},
  {path: "home", component: SiteViewComponent, children: [
    {path: "intro", component: SiteIntroComponent, outlet: "siteOutlet"},
    {path: "register", component: SiteRegisterComponent, outlet: "siteOutlet"},
    {path: "login", component: SiteLoginComponent, outlet: "siteOutlet"},
  ]},
  {path: "dashboard", component: DashboardViewComponent, children: [
    {path: "palette/:paletteId", component: PaletteViewComponent, outlet: "dashboardOutlet"},
    {path: "palette-add", component: PaletteAddComponent, outlet: "dashboardOutlet"},
    {path: "palette-edit/:paletteId", component: PaletteEditComponent, outlet: "dashboardOutlet"},
    {path: "palettes-manage", component: PalettesManageComponent, outlet: "dashboardOutlet"},
    {path: "palettes-view", component: PalettesViewComponent, outlet: "dashboardOutlet"},
    {path: "profile", component: ProfileViewComponent, outlet: "dashboardOutlet"},
    {path: "profile-edit", component: ProfileEditComponent, outlet: "dashboardOutlet"},
    {path: "profile-password-edit", component: ProfileChangePasswordComponent, outlet: "dashboardOutlet"},
  ],  canActivate:[AuthGuard]}
]

export const router = RouterModule.forRoot(APP_ROUTES)
