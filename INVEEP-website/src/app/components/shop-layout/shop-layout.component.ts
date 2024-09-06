import { Component, Input } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-shop-layout',
  templateUrl: './shop-layout.component.html',
  styleUrls: ['./shop-layout.component.css']
})
export class ShopLayoutComponent {
  @Input() children: any;

 
  
}
