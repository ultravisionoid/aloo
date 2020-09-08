import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserTable } from 'src/app/Model/UserTable';

import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm:FormGroup;
  
  users: UserTable[];

  constructor(private formBuilder:FormBuilder,private http: HttpClient,private _userService: UserService) { }

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
    this._userService.getAllUser()
    .subscribe(data=>{
      this.users=data;
    })
  }
  
  // u:UserTable={}
  onSubmit(a:string,b:string,c:string)
  {
    var k=this.users.length;
    var ins={"id":k+1,"firstName":a,"lastName":b,"email":c};

    // id=users.

    this._userService.postUser(ins).subscribe(data=>{
      console.log(data);
      alert("user added");
    })

    
    
  }
}
