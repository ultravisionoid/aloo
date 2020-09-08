import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {employeeComponent} from './components/employee/employee.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import{AboutComponent} from './components/about/about.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {ReactiveFormComponent} from './components/reactive-form/reactive-form.component';  
import {UserComponent} from './components/user/user.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {NgclassdemoComponent} from './components/ngclassdemo/ngclassdemo.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"emp",component:employeeComponent},
  {path:"about",component:AboutComponent},
  {path:"empList",component:EmployeeListComponent},
  {path:"reactiveList",component:ReactiveFormComponent},
  {path:"User",component:UserComponent},
  {path:"addUser",component: AddUserComponent},
  {path:"ngclass",component:NgclassdemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
