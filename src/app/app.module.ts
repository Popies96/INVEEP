import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactInfoComponent } from './components/contact/contact-info/contact-info.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FeaturesComponent } from './components/features/features.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LayoutComponent,
    HeroSectionComponent,
    ButtonsComponent,
    FooterComponent,
    ContactComponent,
    ContactInfoComponent,
    SectionTitleComponent,
    ActionsComponent,
    FeaturesComponent,
    
    
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
