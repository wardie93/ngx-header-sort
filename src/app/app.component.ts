import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    sortingProperty?: string;
    sortingDescending = false;

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

    sortChanged($event: { columnName: string, descending: boolean; }): void {
        this.sortingProperty = $event.columnName;
        this.sortingDescending = $event.descending;

        const multiplier = this.sortingDescending ? -1 : 1;

        this.people.sort((first, second) => {
            if (first.hasOwnProperty(this.sortingProperty!) && second.hasOwnProperty(this.sortingProperty!)) {
                const firstPropertyValue = (first as any)[this.sortingProperty!];
                const secondPropertyValue = (second as any)[this.sortingProperty!];

                if(firstPropertyValue > secondPropertyValue) {
                    return 1 * multiplier;
                }
                else{
                    return -1 * multiplier;
                }
            }

            return 0;
        });
    }
}
