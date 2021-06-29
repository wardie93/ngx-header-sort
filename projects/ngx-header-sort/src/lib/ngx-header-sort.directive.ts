import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import {
    NgxHeaderSortOptions,
    NGX_HEADER_SORT_OPTIONS
} from './ngx-header-sort.options';

@Directive({
    selector: '[ngxHeaderSort]'
})
export class NgxHeaderSortDirective {
    @Input('ngxHeaderSort')
    columnName!: string;

    @HostListener('click')
    onClickEvent(): void {
        this.onClick();
    }

    private iconElement?: ElementRef;
    private iconAdded = false;
    private descending = false;

    constructor(
        private readonly element: ElementRef,
        private readonly renderer: Renderer2,
        @Inject(NGX_HEADER_SORT_OPTIONS)
        private readonly options: NgxHeaderSortOptions
    ) {
    }

    private onClick(): void {
        if (!this.iconAdded) {
            this.addSortIcon();
        }
        else{
            this.changeDirection();
        }
    }

    private addSortIcon(): void {
        this.iconElement = new ElementRef(this.renderer.createElement('i'));
        this.renderer.appendChild(
            this.element.nativeElement,
            this.iconElement.nativeElement
        );
        this.addClass(this.iconElement, this.options.ascendingIconClass);
        this.iconAdded = true;
    }

    private changeDirection(): void {
        if (this.descending) {
            this.removeClass(this.iconElement!, 'ngx-header-sort--descending');
            this.addClass(this.iconElement!, 'ngx-header-sort--ascending');
        }
        else{
            this.removeClass(this.iconElement!, 'ngx-header-sort--ascending');
            this.addClass(this.iconElement!, 'ngx-header-sort--descending');
        }
        this.descending = !this.descending;
    }

    private addClass(element: ElementRef, $class: string): void {
        $class.split(' ').forEach(c => {
            this.renderer.addClass(element.nativeElement, c);
        });
    }

    private removeClass(element: ElementRef, $class: string): void {
        $class.split(' ').forEach(c => {
            this.renderer.removeClass(element.nativeElement, c);
        });
    }
}
