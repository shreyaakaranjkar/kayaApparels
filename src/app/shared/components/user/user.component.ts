import { Component, OnInit } from '@angular/core';
import { AllClothingService } from '../../services/allClothingService.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userser:AllClothingService) { }

  ngOnInit(): void {
    console.log('user');
    this.userser.singleuserprofile$.subscribe(res=>{
      console.log(res);
      
    })
  }

}
