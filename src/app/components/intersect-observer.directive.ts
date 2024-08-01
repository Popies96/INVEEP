import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appIntersectObserver]'
})
export class IntersectObserverDirective implements OnInit, OnDestroy {
  @Input() threshold: number = 0.1;
  @Input() animationClass: string = ''; // Input property for animation class
  @Output() visibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.visibilityChange.emit(entry.isIntersecting);
        if (entry.isIntersecting && this.animationClass) {
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
        }
      },
      { threshold: this.threshold }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
