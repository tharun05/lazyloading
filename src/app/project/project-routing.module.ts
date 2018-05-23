import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'course',component:CourseComponent},
  { path:'contact',component:ContactComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
