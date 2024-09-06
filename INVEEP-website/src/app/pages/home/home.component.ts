import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  translations: any = {};

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadTranslations(this.translationService.getCurrentLang()).subscribe(
      (data: any) => {
        this.translations = data;
      },
      (error: any) => {
        console.error('Error loading translations:', error);
      }
    );
  }
}

