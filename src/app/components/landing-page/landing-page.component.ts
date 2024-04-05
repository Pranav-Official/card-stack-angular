import { Component } from '@angular/core';
import { ContactlistPageComponent } from '../contactlist-page/contactlist-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ContactlistPageComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
