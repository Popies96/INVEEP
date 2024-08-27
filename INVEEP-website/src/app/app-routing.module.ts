import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {  } from './components/testimonials/testimonials.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';



const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'shop', component: ShopComponent },
  { path: 'profile/:id', component: ProfileComponent },
  {path: 'products' , component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
