import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { cardListResponse, deleteCardResponse } from '../types/cardListTypes';

@Injectable({
  providedIn: 'root',
})
export class CardListService {
  deleteCard(id: string) {
    console.log(id);
    return this.http.patch<{
      status: boolean;
      message: string;
      data: deleteCardResponse;
    }>('api/v1/deleteCard', {card_id: id});
  }
  constructor(private http: HttpClient) {}
  getCardList(card_id: string) {
    const params = new HttpParams().set('card_id', card_id);

    return this.http.get<{
      status: boolean;
      message: string;
      data: cardListResponse;
    }>('api/v1/getCardList', {
      params: params,
    });
  }
}
