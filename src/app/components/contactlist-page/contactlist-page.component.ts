import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CreateCardFormComponent } from '../create-card-form/create-card-form.component';
import { contactType } from '../../types/contactTypes';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-contactlist-page',
  standalone: true,
  imports: [CommonModule, CreateCardFormComponent, RouterModule],
  providers: [ContactService],
  templateUrl: './contactlist-page.component.html',
  styleUrl: './contactlist-page.component.css',
})
export class ContactlistPageComponent {
  data: contactType[] | null = null;
  contactService = inject(ContactService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.contactService.getContactList().subscribe({
      next: (contactList) => {
        console.log(contactList);
        this.data = contactList.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
