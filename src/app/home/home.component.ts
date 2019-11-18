import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies;
  constructor(public service:DataService) {
    this.getdata();
   }

  ngOnInit() {
  }
getdata()
{
  this.service.getdata().subscribe((data)=>{
    this.movies=data;
  })
}
}
