import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';

const routes: Routes = [
  { path: '', component: TeacherComponent},
  { path: 'address', component: StudentprofileComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
