import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './shared/services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'kayaApparels';
isloginusers!: boolean;
constructor(private _authservice:AuthserviceService){}
ngOnInit(): void {
  this._authservice.loginsub$.subscribe(res=>{
    this.isloginusers=res
  })
}

}
