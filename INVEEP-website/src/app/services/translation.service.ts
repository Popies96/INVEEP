import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  private translations: any = {};
  private currentLang: string = 'en';
  private translationsSubject = new BehaviorSubject<any>(this.translations);
  currentTranslations = this.translationsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadTranslations(lang: string): Observable<void> {
    return this.http.get<any>(`../assets/language/${lang}.json`).pipe(
      map((translations) => {
        this.translations = translations;
        this.currentLang = lang;
        this.translationsSubject.next(this.translations);
      })
    );
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  getCurrentLang(): string {
    return this.currentLang;
  }
  getTranslations(): any {
    return this.translations;
  }
}
