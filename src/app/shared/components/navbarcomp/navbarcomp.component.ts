import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.scss']
})
export class NavbarcompComponent implements OnInit {
  component :boolean=true
  getuserrole!:string
  constructor() { }

  ngOnInit(): void {
    this.getuserrole=localStorage.getItem("userrole")!
  }
  
  onclick(ele:any){
    if(this.component){
ele.classList.add("show")
this.component=false
    }
    else{
      this.component=false
      ele.classList.remove("show")
      this.component=true
    }
}

onclicklist(){
  const alllist=document.querySelectorAll("li")
  console.log(alllist)
  let neviget=document.getElementById("navbarNav")
  if(alllist){
    neviget?.classList.remove("show")
  } 
}
}
