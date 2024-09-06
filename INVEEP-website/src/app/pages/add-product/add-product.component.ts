import { Component } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import {ProductServiceService } from 'src/app/product.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private route: ActivatedRoute , private productService: ProductServiceService,private router: Router ){}

  newProduct: Product = {
    id :0,
    name: '',
    price: 0,
    quantite: 0,
    description: '',
    user_ref: 150
  };

  addProduct() {
    this.productService.createProduct(this.newProduct).subscribe({
      next: (response) => {
        console.log('Product added successfully', response);
        this.router.navigate(['/products']); 
      },
      error: (error) => {
        console.error('Error adding product', error);
      },
      complete: () => {
        console.log('Product creation process completed');
      }
    });
  }
  
  }


