import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ChartsModule
  ],
  declarations: [
    TeacherComponent,
    SidenavComponent,
    StudentprofileComponent,
    DashboardComponent
  ]
})
export class TeacherModule { }
