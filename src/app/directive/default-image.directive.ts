import { Directive, HostListener, Input, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDefaultImage]'
})
export class DefaultImageDirective {
  @Input() @HostBinding() src: string;  

  constructor(private element: ElementRef) { }

  @HostListener('error') onError() {
    this.src = '../../assets/no-thumbnail.png';
    //this.element.nativeElement.attributes['src'].value = this.src;    
  }
}
