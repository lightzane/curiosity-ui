import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[cy]'
})
export class CyDirective implements AfterViewInit {

  @Input('cy') cy = '';

  constructor(public el: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.setAttribute('data-cy', this.cy);
  }

}
