import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
  getdata()
  {
    return this.http.get("http://200.0.1.101:5000/mobiles");
  }
}
