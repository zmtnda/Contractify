import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
// import { TeacherComponent } from './teacher/teacher.component';
// import { FarmownerComponent } from './farmowner/farmowner.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeacherModule } from './teacher/teacher.module'

@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    // TeacherComponent,
    // FarmownerComponent,
    HomeComponent,
    SidenavComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeacherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
