import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    Renderer2,
    SimpleChanges
} from '@angular/core';
import { NgxHeaderSortEvent } from './ngx-header-sort.event';
import {
    NgxHeaderSortOptions,
    NGX_HEADER_SORT_OPTIONS
} from './ngx-header-sort.options';

@Directive({
    selector: '[ngxHeaderSort]'
})
export class NgxHeaderSortDirective implements OnChanges, OnDestroy {
    @Input('ngxHeaderSort')
    columnName!: string;
    @Input()
    sorting?: string;

    @Output()
    change = new EventEmitter<NgxHeaderSortEvent>();

    @HostListener('click')
    onClickEvent(): void {
        this.onClick();
    }

    private iconElement?: ElementRef;
    private descending = false;
    private ascendingInternalClass = 'ngx-header-sort--ascending';
    private descendingInternalClass = 'ngx-header-sort--descending';

    constructor(
        private readonly element: ElementRef,
        private readonly renderer: Renderer2,
        @Inject(NGX_HEADER_SORT_OPTIONS)
        private readonly options: NgxHeaderSortOptions
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['sorting']) {
            if (this.sorting !== this.columnName) {
                this.reset();
            }
        }
    }

    ngOnDestroy(): void {
        this.reset();
    }

    private onClick(): void {
        if (this.iconElement == undefined) {
            this.addSortIcon();
        } else {
            this.changeDirection();
        }
        this.change.emit({
            columnName: this.columnName,
            descending: this.descending
        });
    }

    private addSortIcon(): void {
        this.iconElement = new ElementRef(this.renderer.createElement('i'));
        this.renderer.appendChild(
            this.element.nativeElement,
            this.iconElement.nativeElement
        );
        this.addClass(this.iconElement, this.options.ascendingIconClass);
        this.addClass(this.iconElement, this.ascendingInternalClass);
    }

    private reset(): void {
        if (this.iconElement) {
            this.renderer.removeChild(
                this.element.nativeElement,
                this.iconElement.nativeElement
            );
            this.iconElement = undefined;
            this.descending = false;
        }
    }

    private changeDirection(): void {
        this.removeClass(this.iconElement!, this.descendingInternalClass);
        this.removeClass(this.iconElement!, this.ascendingInternalClass);
        this.descending = !this.descending;
        this.addClass(
            this.iconElement!,
            this.descending
                ? this.descendingInternalClass
                : this.ascendingInternalClass
        );
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
