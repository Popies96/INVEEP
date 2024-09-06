import { Component, AfterViewInit, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements AfterViewInit, OnInit {
  translations: any = {};

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentTranslations.subscribe(
      (data) => this.translations = data
    );
  }

  ngAfterViewInit() {
    const images = document.querySelectorAll('.animated-image');
    const totalDuration = 44; 
    const interval = totalDuration * 1000; 

    this.startAnimationLoop(images, interval);
  }

  startAnimationLoop(images: NodeListOf<Element>, interval: number) {
    const resetAnimation = () => {
      images.forEach((image) => {
        const imgElement = image as HTMLElement;
        imgElement.classList.remove('animated-image');
        void imgElement.offsetWidth;    
        imgElement.classList.add('animated-image');
      });
    };
    resetAnimation();
    setInterval(resetAnimation, interval);
  }

  setLanguage(lang: string): void {
    this.translationService.loadTranslations(lang).subscribe(
      () => {
        this.translations = this.translationService.getTranslations();
      }
    );
  }
}
