import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { IntersectObserverDirective } from './components/intersect-observer.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolutionComponent } from './components/solution/solution.component';
import { PromoComponent } from './components/promo/promo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LayoutComponent,
    HeroSectionComponent,
    ButtonsComponent,
    AboutComponent,
    TestimonialsComponent,
    IntersectObserverDirective,
    SolutionComponent,
    PromoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
