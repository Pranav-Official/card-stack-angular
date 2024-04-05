import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CreateCardService } from '../../services/create-card.service.';
import { responseStatus } from '../../types/contactTypes';

@Component({
  selector: 'app-create-card-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [CreateCardService],
  templateUrl: './create-card-form.component.html',
  styleUrl: './create-card-form.component.css',
})
export class CreateCardFormComponent {
  @Output() status = new EventEmitter<responseStatus>();

  pattern: string | RegExp =
    '(http(s)?://.)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)';
  createCardForm!: FormGroup;
  submitSuccess: boolean = false;
  submitFail: boolean = false;

  constructor(
    private fb: FormBuilder,
    private createCardService: CreateCardService
  ) {
    this.createCardForm = this.fb.group({
      card_name: new FormControl('', [Validators.required]),
      job_title: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      company_name: new FormControl(''),
      company_website: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.createCardForm.valid) {
      const formData = this.createCardForm.value;
      const cardData = { ...formData, contact_name: formData.card_name };
      this.createCardService.createCard(cardData).subscribe({
        next: (response: any) => {
          console.log('Card created successfully:', response);
          this.createCardForm.reset();
          this.status.emit('success');
        },
        error: (error: any) => {
          this.status.emit('error');
          console.error('Error creating card:', error);
        },
      });
    } else {
      this.createCardForm.markAllAsTouched();
    }
  }
}
