import { Directive, ElementRef, ViewContainerRef, TemplateRef, AfterViewInit, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sxToggle]'
})
export class ToggleDirective implements OnInit {

  show: string;
  role = 'user';

  @Input() set sxToggle(value) {
    this.show = value;
    this.toggle();
  }
  constructor(el: ElementRef,
    private view: ViewContainerRef,
    private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
    console.log(this.show, this.role);
  }



  toggle() {
    this.view.clear();
    if ((this.show && this.role) && (this.show === this.role)) {
      this.view.createEmbeddedView(this.template);
    }
  }

}
