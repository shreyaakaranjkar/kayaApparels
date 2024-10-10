import { Component, OnInit, ViewChild } from '@angular/core';
import { AllClothingService } from '../../services/allClothingService.service';
import { Dashboard} from '../../interface/host';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  allClothingImg!:Array<Dashboard>
  displayedColumns: string[] = ['name','imgUrl'];
  dataSource:any=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private clothingServ : AllClothingService) { }
  
  ngOnInit(): void {
    this.clothingServ.getDashboardImages().subscribe((res:any)=> {
      console.log(res)
      this.allClothingImg = res;
      this.dataSource=new MatTableDataSource<Dashboard>(this.allClothingImg);
      this.dataSource.paginator = this.paginator;
    
   })
  }
 

 
  
 

}
