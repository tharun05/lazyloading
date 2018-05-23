import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';


const routes: Routes = [
  { path:'',component:LoginComponent},
  { path:'login',component:LoginComponent},
  { path:'password',component:PasswordComponent},
  { path:'setpassword',component:SetpasswordComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
