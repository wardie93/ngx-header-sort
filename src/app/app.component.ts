import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    people = [
        {
            firstName: 'Trycia',
            lastName: 'Dickens'
        },
        {
            firstName: 'Bennett',
            lastName: 'Abshire'
        },
        {
            firstName: 'Elijah',
            lastName: 'Lemke'
        },
        {
            firstName: 'Kendall',
            lastName: 'Wuckert'
        },
        {
            firstName: 'Candida',
            lastName: 'Kerluke'
        },
        {
            firstName: 'Fae',
            lastName: 'Miller'
        },
        {
            firstName: 'Damian',
            lastName: 'Heaney'
        },
        {
            firstName: 'Rosalia',
            lastName: 'Carter'
        },
        {
            firstName: 'Julius',
            lastName: 'Rutherford'
        },
        {
            firstName: 'Axel',
            lastName: 'Kuhlman'
        }
    ];
}
