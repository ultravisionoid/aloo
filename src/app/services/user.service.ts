import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTable } from '../Model/UserTable';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  baseUrl:string="http://localhost:3000/users";

  constructor(private _http:HttpClient) { }
  getAllUser(){
    return this._http.get<UserTable[]>(this.baseUrl);
  }
  postUser(u:UserTable){
    return this._http.post<UserTable>(this.baseUrl,JSON.stringify(u),this.httpOptions);
  }
  deleteUser(id){
    return this._http.delete<UserTable>(this.baseUrl+"\\"+id,this.httpOptions);

  }
}
