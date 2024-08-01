import { Component, Directive, ElementRef, Renderer2 } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IntersectObserverDirective } from './intersect-observer.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div appIntersectObserver></div>`
})
class TestComponent {}

describe('IntersectObserverDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directiveEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntersectObserverDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges(); // Trigger initial data binding

    // Access the directive's element
    directiveEl = fixture.debugElement.query(By.directive(IntersectObserverDirective)).nativeElement;
  });

  it('should create an instance', () => {
    // Create the directive with Angular's dependency injection
    const directive = new IntersectObserverDirective(fixture.debugElement.query(By.directive(IntersectObserverDirective)).nativeElement, TestBed.inject(Renderer2));
    expect(directive).toBeTruthy();
  });
});
