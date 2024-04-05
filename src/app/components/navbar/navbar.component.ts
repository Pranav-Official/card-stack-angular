import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink],
  providers: [AuthenticationService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  router = inject(Router);
  authservice = inject(AuthenticationService);

  userLogout() {
    this.authservice.userLogout();
    this.router.navigateByUrl('/');
  }
}
import { AuthenticationService } from '../../services/authentication.service';
