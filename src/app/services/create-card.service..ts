import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cardDetailsType, cardResponsType } from '../types/cardDetailsTypes'; // Assuming you have defined these types
@Injectable({
  providedIn: 'root',
})
export class CreateCardService {
  constructor(private http: HttpClient) {}

  createCard(cardDetails: cardDetailsType): Observable<cardResponsType> {
    console.log(cardDetails);
    return this.http.post<cardResponsType>('api/v1/createNewCard', cardDetails);
  }
}
