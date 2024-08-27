import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  translations: any = {};
   sticky = false;
  pathUrl: string = '';
  isLanguageMenuVisible = false;

  constructor(private router: Router , public translationService: TranslationService) {}

  ngOnInit(): void {
    this.pathUrl = this.router.url;
    this.translationService.currentTranslations.subscribe(
      (data) => this.translations = data
    );
  }

  @HostListener('window:scroll', [])
  handleStickyNavbar() {
    this.sticky = window.scrollY >= 100;
}
scrollToContact() {
  this.router.navigate([], { fragment: 'contact' });
}



toggleLanguageMenu(event: Event): void {
  event.preventDefault();
  this.isLanguageMenuVisible = !this.isLanguageMenuVisible;
  
}



setLanguage(lang: string): void {
  this.translationService.loadTranslations(lang).subscribe(() => {this.translations = this.translationService.getTranslations();});
  this.isLanguageMenuVisible = false;
}
}


