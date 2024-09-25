import { Component, OnInit } from '@angular/core';
import { AllClothingService } from '../../services/allClothingService.service';
import { Dashboard } from '../../interface/host';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private clothingServ : AllClothingService) { }

  allClothingImg! : Array<any>
  ngOnInit(): void {
   this.clothingServ.getDashboardImages().subscribe((res:any)=> {
    console.log(res)
    this.allClothingImg = res;
   })
  }

}
