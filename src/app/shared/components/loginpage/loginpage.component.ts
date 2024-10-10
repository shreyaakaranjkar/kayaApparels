import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllClothingService } from '../../services/allClothingService.service';
import {  signup } from '../../interface/host';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  forminputs!:FormGroup;
  formregister!:FormGroup;
  islogin:boolean=false;
  loginarr!:Array<any>
  arryform!:any;
  showobj!:signup
  signuparray:Array<any>=[]
  usersarray=["User","Sellar","Admin"]
  userprofileobj!:signup
  Inputfile!:any


 
  constructor(private _route:Router, private _registerser:AllClothingService, private _authser:AuthserviceService) { }

  ngOnInit(): void {
    this._registerser.getuser().subscribe((res:any)=>{
      this.signuparray=res
      console.log(this.signuparray);
    })

    this.logins()
    this.signup()
  }

logins(){
  this.forminputs=new FormGroup({
    username:new FormControl(null),
    password:new FormControl(null),
    securityq:new FormControl(null),
    status:new FormControl(null)
  })
}

signup(){
  this.formregister=new FormGroup({
    username:new FormControl(null),
    gmail:new FormControl(null),
    contact:new FormControl(null),
    password:new FormControl(null),
    ConfirmPassword:new FormControl(null),
    securityq:new FormControl(null),
    status:new FormControl(null),
    file:new FormControl(null),

  })
}

  loginform(){
  let newobj=this.forminputs.value
  this._authser.isauthenticate().then(res=>{
    if(res){
      console.log("true");  
    }
    else{
      console.log("false");
    }
  })
  this.signuparray.find(res=>{
    if(res.username==newobj.username && res.password==newobj.password){
     console.log(res);
    
    if(res.status===newobj.status){
     this._authser.islogin(newobj.status)
this._registerser.singleuserprofile$.next(res)

    }
    }
  })
  // this.signuparray.forEach(res=>{
  //   console.log(res.id);
    
  // })
  }
  signinform(){
  let userobj=this.formregister.value
this._registerser.createuserobj(userobj).subscribe(res=>{
  this.showobj=res

  console.log(this.showobj);
  this.formregister.reset()
})
this.islogin=false
  
  }
 
filechange(event: any) {
this.formregister.patchValue({
  image_field_name_in_reactive_form: event.target.files[0],
});

}
}