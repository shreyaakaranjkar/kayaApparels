import { Component, OnInit } from '@angular/core';
import { AllClothingService } from '../../services/allClothingService.service';
import { signup } from '../../interface/host';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
singleuser!:signup
  constructor( private _userser:AllClothingService) { 
    
  }
  ngOnInit(): void {
    console.log("userprofile");
    this._userser.singleuserprofile$.subscribe((res:any)=>{
      this.singleuser=res
      console.log(this.singleuser);
  })
   


    

    

  }

}
