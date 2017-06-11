import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './login/auth.service';

@Injectable()
export class AppGuard implements CanActivate {

    constructor(private authService: AuthService){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.authService.isAuthenticated();
    }
}