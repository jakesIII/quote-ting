import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTopHighlight]'
})
export class TopHighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onclick(){
    this.textDeco("rgba(31, 17, 17, 0.733)")
  }


  private textDeco (action:any){
    this.elem.nativeElement.style.backgroundColor = action;
  }

}

// 'rgba(31, 17, 17, 0.733)'