import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  baseURL: string = "http://localhost:3001/";
  constructor(private http: HttpClient) { }


  AddReviews(restaraunt: string, Taste: number, Atmosphere: number, Price: number, Planet: number, Comments: String) {
    const headers = { 'content-type': 'application/json'}
    const body = {
      "restaurant" : restaraunt,
      "Taste" : Taste,
      "Atmosphere" : Atmosphere,
      "Price" : Price,
      "Planet" : Planet,
      "Comments" : Comments

    }

    return this.http.post(this.baseURL + 'addReviews', body,{'headers':headers})

  }

  getAverage(restaraunt:string) {
    const headers = { 'content-type': 'application/json'}
    const body = {
      "restaurant" : restaraunt,
    }

    return this.http.post(this.baseURL + 'getReviews', body,{'headers':headers})

  }
}
