import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseUrl = 'http://localhost:3000';
  private token = localStorage.getItem('token');
  constructor(private http: HttpClient) {}
  getContactList() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<{ data: object[] }>(
      this.baseUrl + '/api/v1/getContactList',
      {
        headers,
      }
    );
  }
}
