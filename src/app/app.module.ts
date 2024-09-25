import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/components/material/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { NavbarcompComponent } from './shared/components/navbarcomp/navbarcomp.component'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
