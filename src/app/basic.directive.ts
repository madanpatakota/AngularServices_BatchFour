import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBasic]',
})
export class BasicDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  @HostBinding('style.background-color')
  backgroundcolor: string;

  @Input() color: string;
  @Input() inMouseLeave: string;
  @Input() inMouseEnter: string;

  ngOnInit(): void {
    console.log(this.elementRef);
    console.log(this.render);
    this.backgroundcolor = this.color;
    // this.elementRef.nativeElement.
    // style.background = "yellow";
    //i am taking the element referece from the DOM
    //This is not good practive
    //

    //this.render.
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );

    // this.render.addClass()
  }

  @HostListener('mouseenter') mouseenter() {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'red'
    // );
    this.backgroundcolor = this.inMouseEnter;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundcolor = this.inMouseLeave;
  }

  //whoever using(span) the appbasic directive let it be..
  //but just make that element background color is yellow..
}
