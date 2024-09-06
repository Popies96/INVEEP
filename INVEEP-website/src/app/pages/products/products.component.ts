import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  showFilters: boolean = false;
  categories = [
    { title: 'Options 1', options: ['Option 1', 'Option 2', 'Option 3'] },
    { title: 'Options 2', options: ['Option 1', 'Option 2', 'Option 3'] },
    { title: 'Options 3', options: ['Option 1', 'Option 2', 'Option 3'] },
  ];

  constructor(private productService: ProductServiceService) {}
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  toggleFilter() {
    this.showFilters = !this.showFilters;
  }
}
