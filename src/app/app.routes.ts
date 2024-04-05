import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ContactlistPageComponent } from './components/contactlist-page/contactlist-page.component';
import { CardListPageComponent } from './components/card-list-page/card-list-page.component';

export const routes: Routes = [
  { path: '', component: ContactlistPageComponent },
  { path: 'list-cards/:id', component: CardListPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];
