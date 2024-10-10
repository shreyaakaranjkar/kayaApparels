import { Component, OnInit } from '@angular/core';
import { AllClothingService } from '../../services/allClothingService.service';
import { allproduct } from '../../interface/host';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  allproducts!:Array<allproduct>
  constructor(private _products:AllClothingService, private _rout:Router) { }

  ngOnInit(): void {
this._products.getdata().subscribe((res:any)=>{
  this.allproducts=res
  
  console.log(res);
  
  
})
  }
  formfilter(event:Event){
let val=(event.target as HTMLInputElement).value
  }
  travel(){
   this._products.singleuserprofile$.subscribe(res=>{
    if(res.id){
      this._rout.navigate(['/id'])
    }
   })
  }
}
