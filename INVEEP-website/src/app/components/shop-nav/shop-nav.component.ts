import { Component, HostListener } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-shop-nav',
  templateUrl: './shop-nav.component.html',
  styleUrls: ['./shop-nav.component.css']
})
export class ShopNavComponent {
  isCartDropdownVisible = false;  
  isAccountDropdownVisible = false; 
  sticky = false;
 
  constructor(private router: Router) {
    
  }
  
  toggleCartDropdown() {
    this.isCartDropdownVisible = !this.isCartDropdownVisible;
  }

  toggleAccountDrop() {
    this.isAccountDropdownVisible = !this.isAccountDropdownVisible;
  }

  @HostListener('window:scroll', [])
  handleStickyNavbar() {
    this.sticky = window.scrollY >= 100;
}

navigateToCart(): void {
  this.router.navigate(['/cart']);
}

  


 
}
