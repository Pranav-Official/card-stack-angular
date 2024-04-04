import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

type RegistrationResponse = {
  status: boolean;
  message: string;
  data: {
    token: string;
    user_id: string;
  };
};

const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  userSignup(user: {
    user_email: string;
    password: string;
    user_fullname: string;
  }): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(
      `${baseUrl}/userRegistration`,
      user
    );
  }
}
