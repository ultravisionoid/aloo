import {Component,OnInit} from '@angular/core';
import {Product} from '../../model/Product'
import{GenderPipe} from '../../pipes/gender.pipe'
@Component({
    selector:'app-emp',
    templateUrl:'./employee.component.html'
})
export class employeeComponent implements OnInit{
    //Simple Array Declaration
  Subjects: string[] = ["Angular", "Java", "Dotnet"];
  ShowFaculy: boolean = false;
  FacultyName: string = "Rashmi";
  employees: any[] = [
    {
      code: 'emp101', name: 'Rashmi', gender: 'Female',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
      code: 'emp101', name: 'Nisha', gender: 'Female',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
      code: 'emp101', name: 'Abhay', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    }
  ];
  products:Product[]=[
    {id:11,name:"Note8",cost:43434,category:'Electronics'},
    {id:12,name:"Keyboard",cost:3434,category:'Electronics'},
    {id:13,name:"Chair",cost:4434,category:'Furniture'}
  ];
  funcClick(id:number){
    alert("Clicked");
    document.getElementById("aa").innerHTML="<h1>CLICKED<h1>";
  }
  funcDelete(id:number){
    alert(id);
    document.getElementById("DELETE").innerHTML="<h1>deleted<h1>";
  }
  funcUpdate(id:100, name:string){
    alert(id+" "+name);
    document.getElementById("Update").innerHTML="<h1>updated<h1>";
  }

    constructor(){};

    ngOnInit(): void {
    }
}