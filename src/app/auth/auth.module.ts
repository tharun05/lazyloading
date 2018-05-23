import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, PasswordComponent, SetpasswordComponent]
})
export class AuthModule { }
