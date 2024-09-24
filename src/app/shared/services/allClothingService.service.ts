import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn : 'root'
})

export class AllClothingService{
    constructor(private http : HttpClient){}

    dashboardUrl = `${environment.allClothingUrl}/dashboard`

    //getDashboard Images

    getDashboardImages():Observable<any>{
        return this.http.get<any>(this.dashboardUrl)
    }
}