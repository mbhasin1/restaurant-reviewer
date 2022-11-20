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
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import {MatInputModule} from '@angular/material/input';
import { ReviewsComponent } from './reviews/reviews.component';

const  routes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: 'signup', component: SignupComponent},
   {path: 'test-comp', component: TestCompComponent},
   {path: '', component: LoginComponent},
   {path: 'home', component: MainPageComponent},
   {path: 'review', component: ReviewsComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestCompComponent,
    SignupComponent,
    MainPageComponent,
    ReviewsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
