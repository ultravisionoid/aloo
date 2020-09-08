import { Injectable } from '@angular/core';
import  {Event} from "../model/event";
@Injectable({
  providedIn: 'root'
})
export class EventService {
  events:Event[]=[
    { id: 1, name: 'Angular', description: 'Angular Event', speaker: 'Himanshu' },
      { id: 2, name: 'React', description: 'React Event', speaker: 'Saurabh' },
      { id: 3, name: 'Java', description: 'Java Event', speaker: 'Meenal' }
  ]
  getEvents() {
    return this.events;
  }
  funcDelete(e:Event){
    
    const id=this.events.indexOf(e);
    this.events.splice(id,1);
  }
  funcAdd(n:string,d:string,s:string){
    var i={id:this.events.length+1,name:n,description:d,speaker:s};
    this.events.push(i);
  }
  constructor() { }
}
