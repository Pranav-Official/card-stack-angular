import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactListReturnType, contactType } from '../types/contactTypes';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  getContactList() {
    return this.http.get<contactListReturnType>('api/v1/getContactList', {});
  }
}
