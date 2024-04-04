import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cardDetailsType, cardResponsType } from '../types/cardDetailsTypes'; // Assuming you have defined these types

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CreateCardService {
  constructor(private http: HttpClient) {}

  createCard(
    cardDetails: cardDetailsType
  ): Observable<{ cardResponse: cardResponsType }> {
    return this.http.post<{ cardResponse: cardResponsType }>(
      baseUrl + '/api/v1/createNewCard',
      cardDetails
    );
  }
}
