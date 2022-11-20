import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = "http://localhost:3001/";

  constructor(private http: HttpClient) { }

  login(email:string, password:string): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body = {
      "email" : email,
      "password": password
    }
    console.log(body)
    return this.http.post(this.baseURL + 'users/login', body,{'headers':headers})
  }

  createUser(email:string, password:string, lname:string, role:string, fname:string): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    
    

    const body = {
      "email" : email,
      "password": password,
      "lname" : lname,
      "fname" : fname,
      
    }
    console.log(body)
    return this.http.post(this.baseURL + 'users', body,{'headers':headers})
  }
}
