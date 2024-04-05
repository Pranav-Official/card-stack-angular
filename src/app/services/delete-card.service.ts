import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cardDetailsType, cardResponsType } from '../types/cardDetailsTypes'; // Assuming you have defined these types
import { deleteCardResponse } from '../types/cardListTypes';
@Injectable({
  providedIn: 'root',
})
export class DeleteCardService {
  constructor(private http: HttpClient) {}

  deleteCard(id: string) {
    console.log(id);
    return this.http.patch<{
      status: boolean;
      message: string;
      data: deleteCardResponse;
    }>('api/v1/deleteCard', {card_id: id});
  }
}
