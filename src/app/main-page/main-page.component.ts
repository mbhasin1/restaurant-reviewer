


//import { GetNurseService } from '../services/get-nurse.service';

import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';

import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { RestarauntService } from '../services/restaraunt.service';


export interface Restaurant {

  'Name': string;
  'Phone': string;
  'Cuisine': string;
  
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  login: any = ''
  constructor(public activatedRoute: ActivatedRoute, private router: Router, private restaurantService: RestarauntService) {
    this.login = (this.router.getCurrentNavigation()!.extras.state);

    if (this.login !== undefined) {
    console.log(this.login.email);
    console.log(this.login.test);
   }
  }

  displayedColumns: string[] = ['Name', 'Phone', 'Cuisine'];

  row0: Restaurant = {
    Name: 'Mcdonalds',
    Phone: '55555555',
    Cuisine: 'Fast Food'
  }

  dataSource = new MatTableDataSource<Restaurant>([]);

  clickedRows = new Set<Restaurant>();


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    //this.dataSource = NURSE_DATA;
    const RESTAURANT_DATA: Restaurant[] = []
    RESTAURANT_DATA.unshift(this.row0);
    console.log("yo");

    // this.dataSource = new MatTableDataSource<Restaurant>(RESTAURANT_DATA);
    // console.log(this.dataSource)
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

     this.restaurantService.getRestaurant()
    .subscribe(data => {

      for (let i = 0; i < data.data.length; i++) {
        const row: Restaurant = {
          'Name' : data.data[i].Name,
          'Phone' : data.data[i].Phone,
          'Cuisine' : data.data[i].Cuisine
        }

        RESTAURANT_DATA.unshift(row);


      }

      this.dataSource = new MatTableDataSource<Restaurant>(RESTAURANT_DATA);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    


  }

  RestaurantSearch(event: Event) {
    const search = (event.target as HTMLInputElement).value;

    this.dataSource.filter = search.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  onRowClick(row: any) {
    this.router.navigateByUrl("/review", {state: row })
  }

}
