import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // El templateRef es lo que se va a mostrar y el viewContainer es dónde.
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
