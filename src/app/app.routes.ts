import { Routes } from '@angular/router';
import { ContactlistPageComponent } from './components/contactlist-page/contactlist-page.component';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';

export const routes: Routes = [
  { path: '', component: ContactlistPageComponent },
  { path: 'add', component: CreateCardFormComponent },
  { path: 'list-cards/:id', component: CreateCardFormComponent },
];
