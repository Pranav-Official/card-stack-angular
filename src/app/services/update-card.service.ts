import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardDetailsType, cardResponsType } from '../types/cardDetailsTypes';

@Injectable({
  providedIn: 'root'
})
export class UpdateCardService {

  constructor(private http: HttpClient) {}

  updateCard(cardDetails: cardDetailsType): Observable<cardResponsType> {
    console.log(cardDetails);
    return this.http.patch<cardResponsType>('api/v1/editCard', cardDetails);
  }
}
