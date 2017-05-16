import { Routes, RouterModule } from "@angular/router"
import { HomeViewComponent } from './views/views-barrel';

const APP_ROUTES: Routes = [
  {path: "", component: HomeViewComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
