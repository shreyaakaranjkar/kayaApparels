import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private _rout:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let usersrole:string=localStorage.getItem("userrole")!
   let usersarray=route.data['userrole']

   if(usersarray.includes(usersrole)){
    return true
   }
   else{
    let UrlTree:UrlTree=this._rout.createUrlTree([''])
    return UrlTree
   }
  }
  
}
