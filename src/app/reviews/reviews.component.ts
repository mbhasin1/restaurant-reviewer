import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Restaurant } from '../main-page/main-page.component';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  row: any;
  Taste: number = 0;
  Atmosphere: number = 0;
  Planet: number = 0;
  Price: number = 0;

  avg_taste = 0;
  avg_planet = 0;
  avg_atmosphere = 0;
  avg_price = 0;

  comments: string = '';

  constructor(public activatedRoute: ActivatedRoute, private router: Router, private reviewService: ReviewsService) {
    this.row = (this.router.getCurrentNavigation()!.extras.state);
   }

  

  ngOnInit(): void {
    let sum_price = 0;
    let sum_taste = 0;
    let sum_atmosphere = 0;
    let sum_planet = 0;
    this.reviewService.getAverage(this.row.Name).subscribe(
      data => {
        const temp = (JSON.stringify(data));
        const data_json = JSON.parse(temp);
        console.log(data_json.data.length)
      
      for (let i = 0; i < data_json.data.length; i++) {
        sum_price += data_json.data[i].Price;
        sum_taste += data_json.data[i].Taste;
        sum_atmosphere += data_json.data[i].Atmosphere;
        sum_planet += data_json.data[i].Planet;

      }

      console.log(sum_atmosphere)
      this.avg_price = sum_price / data_json.data.length;
      this.avg_taste = sum_taste / data_json.data.length;
      this.avg_atmosphere = sum_atmosphere / data_json.data.length;
      this.avg_planet = sum_planet / data_json.data.length;

      console.log(this.avg_atmosphere, this.avg_planet, this.avg_taste, this.avg_price);

    })
    
  }

  addReview(): void {
    this.reviewService.AddReviews(this.row.Name, this.Taste, this.Atmosphere, this.Planet, this.Price, this.comments).subscribe(
      data => {
        
      }
    )
    
    this.router.navigateByUrl('home', { state: this.row }); 
  }

  cancel(){
    this.router.navigateByUrl('home', { state: this.row });
  }

}
