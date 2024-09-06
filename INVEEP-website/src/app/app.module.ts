import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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

import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactInfoComponent } from './components/contact/contact-info/contact-info.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FeaturesComponent } from './components/features/features.component';
import { AnimateOnScrollDirective } from './directives/animate-on-scroll.directive';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserService } from './user.service';
import {  HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from '../app/pages/add-product/add-product.component';
import { PaymentComponent } from '../app/components/payment/payment.component';
import {ShopNavComponent} from '../app/components/shop-nav/shop-nav.component' ; 
import {ShopLayoutComponent} from '../app/components/shop-layout/shop-layout.component'

import {CartComponent} from '../app/pages/cart/cart.component'
import { LoadingComponent } from './components/loading/loading.component';
import { MessageComponent } from './components/message/message.component';


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
    FooterComponent,
    ContactComponent,
    ContactInfoComponent,
    SectionTitleComponent,
    ActionsComponent,
    FeaturesComponent,
    AnimateOnScrollDirective,
    CarousselComponent,
    ShopComponent,
    ProfileComponent,
    ProductsComponent,
    ProductInfoComponent ,
    AddProductComponent,
    PaymentComponent , 
    ShopNavComponent,
    ShopLayoutComponent , 
    CartComponent , 
    LoadingComponent ,
    MessageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,HttpClientModule,FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
