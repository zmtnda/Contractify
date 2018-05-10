import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FarmownerComponent } from './farmowner/farmowner.component';
import { TeacherComponent } from './teacher/teacher.component';


const routes: Routes = [
  { path: '', component: HomeComponent }
  ,{path: 'admin', component: AdminComponent}
  ,{path: 'teacher', component: TeacherComponent}
  ,{path: 'farmowner', component: FarmownerComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
