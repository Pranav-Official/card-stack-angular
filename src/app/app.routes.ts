import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ContactlistPageComponent } from './components/contactlist-page/contactlist-page.component';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';

export const routes: Routes = [
  { path: '', component: ContactlistPageComponent },
  { path: 'add', component: CreateCardFormComponent },
  { path: 'list-cards/:id', component: CreateCardFormComponent },
   {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

];
