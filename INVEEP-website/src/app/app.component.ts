import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Inveep';
  translations: any = {};
  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe(
      (data) => this.translations = data
    );
  }

  setLanguage(lang: string): void {
    this.translationService.loadTranslations(lang).subscribe(
      () => {
        this.translations = this.translationService.getTranslations();
      }
    );
  }
}
