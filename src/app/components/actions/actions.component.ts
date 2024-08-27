import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent extends HeroSectionComponent implements OnInit {

  constructor(public override translationService: TranslationService) {
    super(translationService); 
  }

  override ngOnInit(): void {
    super.ngOnInit(); 
}
}
