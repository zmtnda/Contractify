import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeacherComponent } from './teacher/teacher.component';
import { FarmownerComponent } from './farmowner/farmowner.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TeacherComponent,
    FarmownerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
