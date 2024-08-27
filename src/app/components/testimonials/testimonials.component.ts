import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslationService } from '../../services/translation.service';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TestimonialsComponent extends HeroSectionComponent implements OnInit {

  constructor(public override translationService: TranslationService) {
    super(translationService); 
  }

  override ngOnInit(): void {
    super.ngOnInit(); 
}
}