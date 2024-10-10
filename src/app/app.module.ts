import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/components/material/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { NavbarcompComponent } from './shared/components/navbarcomp/navbarcomp.component';
import { LoginpageComponent } from './shared/components/loginpage/loginpage.component'
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';


import { SallerComponent } from './shared/components/saller/saller.component';
import { AdminComponent } from './shared/components/admin/admin.component';
import { UserComponent } from './shared/components/user/user.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductinfoComponent } from './shared/components/productinfo/productinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarcompComponent,
    LoginpageComponent,
    SallerComponent,
    AdminComponent,
    UserComponent,
    UserProfileComponent,
    ProductComponent,
    ProductinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
