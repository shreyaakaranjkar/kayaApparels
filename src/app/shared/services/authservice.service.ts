import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
isloginstatus:boolean=false;
private islogin$:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
loginsub$=this.islogin$.asObservable()
  constructor(private _rout:Router) {
    localStorage.setItem("Token","JWT Token")
   }
   isauthenticate():Promise<any>{
return new Promise ((resolve,reject)=>{
  setTimeout(() => {
    if(localStorage.getItem("Token")){
      this.isloginstatus=true
      
    }
    else{
      this.isloginstatus=false
      this._rout.navigate(['']);
      
    }
    resolve(this.isloginstatus)
  }, 1000);
  
}) 
   }
islogin(role:any){
  this.isloginstatus=true
 if(role==="Admin"){
  localStorage.setItem("userrole","Admin");
  this.islogin$.next(true)
  this._rout.navigate(['dashboard'])
 }
 else if(role=="User"){
  localStorage.setItem("userrole","User")
  this.islogin$.next(true)
  this._rout.navigate(['User'])
 }
 else if(role==="Sellar"){
  localStorage.setItem("userrole","Sellar")
  this.islogin$.next(true)
  this._rout.navigate(['Sellar'])
 }
}


}
