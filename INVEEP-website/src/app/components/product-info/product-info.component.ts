import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit{ 
  @ViewChild('carouselSlide') carouselSlide!: ElementRef;
  currentIndex = 0;
  slideWidth = 100; 
  totalSlides = 4; 

  ngOnInit(): void {
    this.updateCarousel();
  }


  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalSlides - 1; 
    }
    this.updateCarousel();
  }

 
  nextSlide(): void {
    if (this.currentIndex < this.totalSlides - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }

 
  private updateCarousel(): void {
    if (this.carouselSlide) {
      const slideContainer = this.carouselSlide.nativeElement as HTMLElement;
      slideContainer.style.transform = `translateX(-${this.currentIndex * this.slideWidth}%)`;
      slideContainer.style.width = `${this.slideWidth * this.totalSlides}%`;
    }
  }



  @Output() buy = new EventEmitter<void>();

  onBuy() {
    this.buy.emit();
  }
  
}
