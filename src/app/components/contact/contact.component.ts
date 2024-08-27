import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent extends HeroSectionComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder , public override translationService: TranslationService) {
    super(translationService);
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  override ngOnInit(): void {
    super.ngOnInit(); 
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
    }
  }
}
