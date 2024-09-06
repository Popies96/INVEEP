import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends HeroSectionComponent implements OnInit {

  constructor(public override translationService: TranslationService) {
    super(translationService); 
  }

  override ngOnInit(): void {
    super.ngOnInit(); 
}
  @ViewChild('inveepVideo')
  video!: ElementRef<HTMLVideoElement>;

  override ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.video.nativeElement.play();
        } else {
          this.video.nativeElement.pause();
        }
      });
    });

    observer.observe(this.video.nativeElement);
  }
}