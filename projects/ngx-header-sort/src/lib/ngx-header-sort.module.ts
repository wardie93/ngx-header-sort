import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { NgxHeaderSortDirective } from './ngx-header-sort.directive';
import {
    DEFAULT_OPTIONS,
    NgxHeaderSortOptions,
    NGX_HEADER_SORT_OPTIONS
} from './ngx-header-sort.options';

export interface HeaderSortProviderOptions {
    provider?: Provider;
    config?: NgxHeaderSortOptions;
}

@NgModule({
    declarations: [NgxHeaderSortDirective],
    imports: [CommonModule],
    exports: [NgxHeaderSortDirective]
})
export class NgxHeaderSortModule {
    static forRoot(
        options?: HeaderSortProviderOptions
    ): ModuleWithProviders<NgxHeaderSortModule> {
        return {
            ngModule: NgxHeaderSortModule,
            providers: [
                options?.provider || {
                    provide: NGX_HEADER_SORT_OPTIONS,
                    useValue: setDefaultOptions(options?.config)
                }
            ]
        };
    }
}

function setDefaultOptions(
    options?: NgxHeaderSortOptions
): NgxHeaderSortOptions {
    const defaultOptions = DEFAULT_OPTIONS;
    const opts = {
        ascendingIconClass:
            options?.ascendingIconClass || defaultOptions.ascendingIconClass
    };

    if (opts.ascendingIconClass === '') {
        throw Error('A value is required for ascendingIconClass');
    }

    return opts;
}
