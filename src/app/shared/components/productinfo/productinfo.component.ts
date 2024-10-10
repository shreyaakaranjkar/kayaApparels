import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllClothingService } from '../../services/allClothingService.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {
  products!:any
  constructor( private _route:ActivatedRoute, private _router:Router, private _productinfo:AllClothingService) { }

  ngOnInit(): void {
this._route.snapshot.params['']
this._productinfo.getdata().subscribe(res1=>{
 this._productinfo.singleuserprofile$.subscribe(res=>{
  if(res.id){
    this.products=res1
    console.log(this.products);
    
  }
 }) 
  
  
})

  }


}
