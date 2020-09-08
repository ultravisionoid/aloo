import { Component, OnInit } from '@angular/core';
import{EventService} from "../../services/event.service";
import {Event} from "../../model/event"; 
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  // template:"<form></form>",
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  events:Event[]=[];
  constructor(private EventService:EventService) { 

  }
  ngOnInit(): void {
    this.events=this.EventService.getEvents();
  }
  funcDelete(e:Event){
    this.EventService.funcDelete(e);
  }
  funcAdd(n:string,d:string,s:string){
    this.EventService.funcAdd(n,d,s);
  }  

}
