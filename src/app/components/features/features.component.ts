import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent extends HeroSectionComponent implements OnInit {

  constructor(public override translationService: TranslationService) {
    super(translationService); 
  }

  override ngOnInit(): void {
    super.ngOnInit(); 
}
}
