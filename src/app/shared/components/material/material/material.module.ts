import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';


let allmodules = [MatPaginatorModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...allmodules
  ],
  exports:[
    ...allmodules
  ]
})
export class MaterialModule { }
