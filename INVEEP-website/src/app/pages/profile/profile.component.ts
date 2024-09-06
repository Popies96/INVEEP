import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent extends HeroSectionComponent implements OnInit {
  user!: User;
  isDropdownVisible = false;
  coverImage!: File;
  isMessageVisible = false; 

  constructor(private route: ActivatedRoute, private userService: UserService, override translationService: TranslationService, private elementRef: ElementRef) {
    super(translationService);
  }

  override ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUser(+userId).subscribe((user) => {
        if (!user.profile_image || user.profile_image.trim() === '') {
          user.profile_image = 'none.png';
        }
        this.user = user;
        console.log(user);
      });
    }

    this.translationService.loadTranslations(this.translationService.getCurrentLang()).subscribe(
      (data: any) => {
        this.translations = data;
      },
      (error: any) => {
        console.error('Error loading translations:', error);
      }
    );
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  onCoverImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.coverImage = input.files[0];
      console.log('Selected cover image:', this.coverImage);
    }
  }

  isProductInfoVisible = false;
  isPaymentVisible = false;
  openProductInfo() {
    this.isProductInfoVisible = true;
  }

  closeProductInfo() {
    this.isProductInfoVisible = false;
  }

  openPaymentPopup() {
    this.isProductInfoVisible = false;
    this.isPaymentVisible = true;
  }

  closePaymentPopup() {
    this.isPaymentVisible = false;
  }

  toggleMessage() {
    this.isMessageVisible = true;
  }
  closeMessage() {
    this.isMessageVisible = false;
  }

  sticky = false;

  @HostListener('window:scroll', [])
  handleStickyNavbar() {
    this.sticky = window.scrollY >= 800;
}


}
