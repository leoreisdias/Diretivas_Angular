import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'red')
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseOut() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white')
    this.backgroundColor = 'white'
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    //Outras linhas de codigo podem vir aqui
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(
    // private _elementRef: ElementRef, private _renderer: Renderer2
  ) {
  }

}
