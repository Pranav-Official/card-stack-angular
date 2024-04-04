import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CreateCardFormComponent } from '../create-card-form/create-card-form.component';
@Component({
  selector: 'app-contactlist-page',
  standalone: true,
  imports: [CommonModule, CreateCardFormComponent],
  providers: [ContactService],
  templateUrl: './contactlist-page.component.html',
  styleUrl: './contactlist-page.component.css',
})
export class ContactlistPageComponent {
  // data: contactType[] = [
  //   { id: 1, name: 'Apputtan' },
  //   { id: 1, name: 'Savithri' },
  //   { id: 1, name: 'Jalaja' },
  //   { id: 1, name: 'Sushama' },
  //   { id: 1, name: 'Janaki' },
  // ];
  data: any;
  contactService = inject(ContactService);

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
