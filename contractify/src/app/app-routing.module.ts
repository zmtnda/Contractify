import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FarmownerComponent } from './farmowner/farmowner.component';
import { TeacherComponent } from './teacher/teacher.component';


const routes: Routes = [
  { path: '', component: HomeComponent }

  ,{path: 'admin', loadChildren: './admin/admn.module#AdminModule'}
  ,{path: 'teacher', loadChildren: './teacher/teacher.module#TeacherModule'}
  ,{path: 'farmowner', loadChildren: './farmowner/farmowner.module#FarmownerModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
