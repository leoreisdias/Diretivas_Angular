import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[FullHighlight]'
})
export class FullHighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'red')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseOut() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white')
    this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white'
  @Input('FullHighlight') highlightColor: string = 'purple'

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
