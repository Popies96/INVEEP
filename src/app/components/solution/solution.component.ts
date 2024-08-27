import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent extends HeroSectionComponent implements OnInit{

  constructor(public override translationService: TranslationService) {
    super(translationService); 
  }

  override ngOnInit(): void {
    super.ngOnInit(); 
}
}