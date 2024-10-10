import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { allproduct, Dashboard, signup } from "../interface/host";

@Injectable({
    providedIn : 'root'
})

export class AllClothingService{
     dashboardUrl = `${environment.allClothingUrl}/dashboard`
    registerUser = `${environment.allClothingUrl}/registerUser`
    dataUrl=`${environment.allClothingUrl}/data`

    singleuserprofile$:BehaviorSubject<signup>=new BehaviorSubject<signup>({
    username: 'p',
    gmail:'p',
    contact: 'p',
    password: 'p',
    ConfirmPassword: 'p',
    securityq: 'p',
    status:'user',
    id:'123',
    file:""
    })

   
    constructor(private http : HttpClient){}

    getDashboardImages():Observable<any>{
        return this.http.get<any>(this.dashboardUrl)
    }
createuserobj(obj:signup):Observable<signup>{
return this.http.post<signup>(this.registerUser, obj)
}
getuser():Observable<any>{
return this.http.get<signup>(this.registerUser)
}
getdata():Observable<allproduct>{
    return this.http.get<allproduct>(this.dataUrl)
}
forimg(formData:any):Observable<signup>{
 return this.http.post<signup>(this.registerUser, formData)
}
}