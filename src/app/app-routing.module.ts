import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashdoardComponent } from './dashdoard/dashdoard.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { AboutComponent } from './about/about.component';
import { AirbnbComponent } from './airbnb/airbnb.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'',component:DashdoardComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'categories',component:CategoriesComponent, canActivate:[AuthGuard]},
  {path:'posts',component:AllPostComponent, canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent},
  {path:'airbnb',component:AirbnbComponent, canActivate:[AuthGuard]},
  {path:'posts/new',component:NewPostComponent, canActivate:[AuthGuard]},
  {path:'contactus',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
