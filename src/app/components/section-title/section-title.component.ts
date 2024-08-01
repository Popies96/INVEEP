import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css'],
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() paragraph: string = '';
  @Input() width: string = '570px';
  @Input() center: boolean = false;
  @Input() mb: string = '100px';
}
