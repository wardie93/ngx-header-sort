import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[ngxHeaderSort]'
})
export class NgxHeaderSortDirective {
    constructor(
        private readonly element: ElementRef,
        private readonly renderer: Renderer2
    ) {
        this.renderer.addClass(this.element.nativeElement, 'ngx-header-sort');
    }
}
