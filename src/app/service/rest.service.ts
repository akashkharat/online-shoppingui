import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http:HttpClient) { }

  public getStandardHeaders():HttpHeaders{
    return new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  public getCategories():Observable<any>{
    let headers=this.getStandardHeaders();
    let url="http://localhost:8080/onlineshopping"+"/categories";
    return this._http.get(url,{headers:headers});
  }
}
