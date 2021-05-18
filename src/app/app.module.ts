import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxHeaderSortModule } from 'ngx-header-sort';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxHeaderSortModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
