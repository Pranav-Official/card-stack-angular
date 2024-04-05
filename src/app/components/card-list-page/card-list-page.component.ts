import { Component, EventEmitter, Output } from '@angular/core';
import { CardListService } from '../../services/card-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateCardFormComponent } from "../create-card-form/create-card-form.component";
import { responseStatus } from '../../types/contactTypes';
import { DeleteCardService } from '../../services/delete-card.service';

@Component({
    selector: 'app-card-list-page',
    standalone: true,
    providers: [CardListService],
    templateUrl: './card-list-page.component.html',
    styleUrl: './card-list-page.component.css',
    imports: [CommonModule, CreateCardFormComponent]
})
export class CardListPageComponent {
  actionSuccess = false;
  actionFailure = false;
  actionMessage: string = '';
  editMode: boolean = false;
  

  cardList: any = [];
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    private cardListService: CardListService,
    private deleteCardService: DeleteCardService,
    private router: Router
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

  deleteCard(id: string) {
    this.deleteCardService.deleteCard(id).subscribe({
      next: (cardListResp) => {
        console.log(cardListResp);
        this.ngOnInit();
        this.actionSuccess = true;
        if(this.cardList[0] === undefined||this.cardList[0] === null){
          this.actionMessage = cardListResp.message + ". Card list is empty. Redirecting to home page...";
        }else{
          this.actionMessage = cardListResp.message + ". Card list is empty. Redirecting to home page...";
        }
      setTimeout(() => {
        this.actionSuccess = false;
        if(this.cardList.length == 0){
          this.router.navigate(['/']);
        }
      }, 3000);
      },
      error: (error) => {
        console.log(error);
        this.actionFailure = true;
        this.actionMessage = "Error deleting card";
      setTimeout(() => {
        this.actionFailure = false;
      }, 3000);
      },
    });
  }
  onStatusChange(status: responseStatus) {
    console.log('from child to parent', status);
    if (status == 'success') {
      if(this.editMode == true){
        this.actionMessage = "Card updated successfully";
        this.editMode = false;
      }
      this.actionSuccess = true;
      this.ngOnInit();
      setTimeout(() => {
        this.actionSuccess = false;
      }, 3000);
    }
    if (status == 'error') {
      if(this.editMode == true){
        this.actionMessage = "Card updated failed";
        this.editMode = false;
      }
      this.actionFailure = true;
      setTimeout(() => {
        this.actionFailure = false;
      }, 3000);
    }
  }
}
