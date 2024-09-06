import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading = false;
  
 
  showLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); 
  }
}
