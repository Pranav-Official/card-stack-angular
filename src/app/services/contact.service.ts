import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { contactType } from '../types/contactTypes';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  getContactList() {
    return this.http.get<{
      data: contactType[];
      message: string;
      status: boolean;
    }>('api/v1/getContactList', {});
  }
}
