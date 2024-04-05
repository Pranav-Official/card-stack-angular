import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type RegistrationResponse = {
  status: boolean;
  message: string;
  data: {
    token: string;
    user_id: string;
  };
};

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
    return this.http.post<RegistrationResponse>(`userRegistration`, user);
  }
  userLogin(user: {
    user_email: string;
    password: string;
  }): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(`userLogin`, user);
  }
}
