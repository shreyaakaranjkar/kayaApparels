import { Component, OnInit } from '@angular/core';
import { AllClothingService } from '../../services/allClothingService.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private clothingServ : AllClothingService) { }

  allClothingImg! : Array<any>
  ngOnInit(): void {

   this.clothingServ.getDashboardImages().subscribe(res => {
    console.log(res)
    this.allClothingImg = res;
   })
  }

}
