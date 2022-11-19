import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestCompComponent } from './test-comp/test-comp.component';


import { RouterEvent, RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';

const  routes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: 'signup', component: SignupComponent},
   {path: 'test-comp', component: TestCompComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestCompComponent,
    SignupComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
