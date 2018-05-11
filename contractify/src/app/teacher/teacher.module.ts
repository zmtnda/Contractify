import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherComponent,
    SidenavComponent,
    StudentprofileComponent,
    DashboardComponent
  ]
})
export class TeacherModule { }
