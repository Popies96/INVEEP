import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  isDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  
products:Product[]=[]
  constructor(private productService: ProductServiceService ) {}
ngOnInit(): void {
  this.loadProducts()
}
loadProducts(): void {
  this.productService.getAllProducts().subscribe(products => { this.products = products})
}
}
