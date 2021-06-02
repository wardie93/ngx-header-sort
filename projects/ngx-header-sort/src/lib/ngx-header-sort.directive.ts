import { Directive, ElementRef, Inject, Renderer2 } from '@angular/core';
import {
    NgxHeaderSortOptions,
    NGX_HEADER_SORT_OPTIONS
} from './ngx-header-sort.options';

@Directive({
    selector: '[ngxHeaderSort]'
})
export class NgxHeaderSortDirective {
    constructor(
        private readonly element: ElementRef,
        private readonly renderer: Renderer2,
        @Inject(NGX_HEADER_SORT_OPTIONS)
        private readonly options: NgxHeaderSortOptions
    ) {
        this.addSortIcon();
    }

    private addSortIcon(): void {
        const element = new ElementRef(this.renderer.createElement('i'));
        this.renderer.appendChild(
            this.element.nativeElement,
            element.nativeElement
        );
        this.addClass(element, this.options.ascendingIconClass);
    }

    private addClass(element: ElementRef, $class: string): void {
        $class.split(' ').forEach(c => {
            this.renderer.addClass(element.nativeElement, c);
        });
    }
}
