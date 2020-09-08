import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserTable } from 'src/app/Model/UserTable';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: UserTable[];
  constructor(private _userService: UserService,private _router :Router) { }

  ngOnInit(): void {
    this._userService.getAllUser()
    .subscribe(data=>{
      this.users=data;
    })
    
   
  }
  addUser() {
    this._router.navigate(['addUser']);
  }
  deleteUser(id:number){
    this._userService.deleteUser(id)
    .subscribe(data=>{
       console.log(data);
    })
  }
  

}
