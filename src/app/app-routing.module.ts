import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './shared/components/loginpage/loginpage.component';
import { AdminComponent } from './shared/components/admin/admin.component';
import { UserComponent } from './shared/components/user/user.component';
import { SallerComponent } from './shared/components/saller/saller.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavbarcompComponent } from './shared/components/navbarcomp/navbarcomp.component';
import { AuthguardGuard } from './shared/guards/authguard.guard';
import { RoleGuard } from './shared/guards/role.guard';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductinfoComponent } from './shared/components/productinfo/productinfo.component';

const routes: Routes = [
{
  path:'',
  component:LoginpageComponent,
  title:'loginPage'
},

{
  path:"Admin",
  data:{
    userrole:["Admin"]
  },
  
  component:AdminComponent,
  canActivate:[
    AuthguardGuard,RoleGuard
  ]
  

},
{
  path:"User",
  data:{
    userrole:["User","Admin",'Sellar']
  },
  component:UserProfileComponent,
  canActivate:[
    AuthguardGuard,RoleGuard
  ],
  // children:[
    
  //   {
  //     path:"id",
  //     component:ProductinfoComponent
  //   }
  // ]
},
{
     path:"id",
       component:ProductinfoComponent
  },

{
  path:"Sellar",
  data:{
    userrole:["Sellar",'Admin']
  },
  component:SallerComponent,
  canActivate:[
    AuthguardGuard,RoleGuard
  ]
},
{
  path:"dashboard",
  data:{
    userrole:["User","Admin"]
  },
  component:DashboardComponent,
  canActivate:[
    AuthguardGuard,RoleGuard
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
