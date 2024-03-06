import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true
})
export class IsBoldDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight="bold"
  }

}
