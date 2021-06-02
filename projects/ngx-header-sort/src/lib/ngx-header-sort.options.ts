import { InjectionToken } from '@angular/core';

export const NGX_HEADER_SORT_OPTIONS = new InjectionToken(
    'NGX_HEADER_SORT_OPTIONS'
);

export interface NgxHeaderSortOptions {
    ascendingIconClass: string;
}

export const DEFAULT_OPTIONS: NgxHeaderSortOptions = {
    ascendingIconClass: ''
};
