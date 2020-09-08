import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Fname:string ="aayush";
Lname:string="jhunjhunwala";
Age:number=21;
salary:number=10;
  constructor() { }

  ngOnInit(): void {
  }

}
