import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CreateCardService } from '../../services/create-card.service.';

@Component({
  selector: 'app-create-card-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [CreateCardService],
  templateUrl: './create-card-form.component.html',
  styleUrl: './create-card-form.component.css',
})
export class CreateCardFormComponent {
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
          this.submitSuccess = true;
          setTimeout(() => {
            this.submitSuccess = false;
          }, 2000);
        },
        error: (error: any) => {
          console.error('Error creating card:', error);
          this.submitFail = true;
          setTimeout(() => {
            this.submitFail = false;
          }, 2000);
        },
      });
    } else {
      this.createCardForm.markAllAsTouched();
    }
  }
}
