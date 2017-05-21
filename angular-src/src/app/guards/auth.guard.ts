import { Injectable } from "@angular/core"
import { Router, CanActivate } from "@angular/router"
import { UsersApiService } from "../services/users-api.service"

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private usersApiService: UsersApiService, private router: Router){

  }

  canActivate() {
    if(this.usersApiService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/'])
      return false;
    }
  }

}
