import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestarauntService {
  baseURL: string = "http://localhost:3001/";
  constructor( private http: HttpClient) { }


  getRestaurant(): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body = {
    }
    console.log(body)
    return this.http.post(this.baseURL + 'get-restaurants', body,{'headers':headers})
  }

  getReviews(restaraunt: string) {
    const headers = { 'content-type': 'application/json'}
    const body = {
      "restaraunt" : restaraunt,
    }

    return this.http.post(this.baseURL + 'getReviews', body,{'headers':headers})

  }

}
