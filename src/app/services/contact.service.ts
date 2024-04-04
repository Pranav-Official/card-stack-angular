import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  getContactList() {
    return this.http.get<{ data: object[] }>('api/v1/getContactList', {});
  }
}
