import { Component } from '@angular/core';
import { CardListService } from '../../services/card-list.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list-page',
  standalone: true,
  imports: [CommonModule],
  providers: [CardListService],
  templateUrl: './card-list-page.component.html',
  styleUrl: './card-list-page.component.css',
})
export class CardListPageComponent {
  cardList: any;
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    private cardListService: CardListService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.cardListService.getCardList(this.id).subscribe({
      next: (cardListResp) => {
        console.log(cardListResp);
        this.cardList = cardListResp.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
