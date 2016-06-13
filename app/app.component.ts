import {Component} from '@angular/core';

export class ReasonClass {
    id: string;
    reasonName: string;
    desc: string;
}

export class PersonClass {
    id: number;
    personName: string;
}


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/styles.css']
})

export class AppComponent {

    title = 'Why should you';

    person: PersonClass = {

        id: 1,
        personName: 'Politician A'

    };

    public reasonsListForUI = reasonArray;

    public selectedReason: ReasonClass;

    constructor(){
        this.selectedReason = {
            'id': '',
            'reasonName': '',
            'desc': ''
        }
    }

    onSelect(reasonPassed: ReasonClass) { this.selectedReason = reasonPassed; }


}

var reasonArray: ReasonClass[] = [
    { "id": '11', "reasonName": "On Time", "desc": "Earlybird gets the worm. Get it done right, on time."},
    { "id": '12', "reasonName": "Fiscal Responsible", "desc": "Earlybird gets the worm. Get it done right, on time."},
    { "id": '13', "reasonName": "Voting Record", "desc": "Earlybird gets the worm. Get it done right, on time."},
    { "id": '14', "reasonName": "Bill A Success", "desc": "Earlybird gets the worm. Get it done right, on time."},
    { "id": '15', "reasonName": "Loves People", "desc": "Earlybird gets the worm. Get it done right, on time."},
    { "id": '16', "reasonName": "Value Oriented", "desc": "Earlybird gets the worm. Get it done right, on time."},
    { "id": '17', "reasonName": "Proven Track Record", "desc": "Earlybird gets the worm. Get it done right, on time."},
    { "id": '18', "reasonName": "Well Educated", "desc": "Earlybird gets the worm. Get it done right, on time."},
    { "id": '19', "reasonName": "Successful Children", "desc": "Earlybird gets the worm. Get it done right, on time."}
];
