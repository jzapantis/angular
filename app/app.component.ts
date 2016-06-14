import {Component} from '@angular/core';

export class ReasonClass {
    id: string;
    reasonName: string;
    desc: string;
    skills: string[];
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

    title = 'Why should you hire';

    person: PersonClass = {

        id: 1,
        personName: 'Joseph Zapantis'

    };
    public reasonsListForUI = reasonArray;

    public selectedReason: ReasonClass;

    constructor() {
        this.selectedReason = {
            'id': '',
            'reasonName': '',
            'desc': '',
            'skills': []
        }
    }
    onSelect(reasonPassed: ReasonClass) { this.selectedReason = reasonPassed; }
}

var reasonArray: ReasonClass[] = [
    {
        "id": '11', "reasonName": "On Time", "desc": "Earlybird gets the worm. Get it done right, on time.", "skills": [
            "Seems natural enough",
            "I did this in one day, and I've never before built an angular 2 app from scratch",
            "Ok, I admit - sleeping in once and a while on the couch is refreshing",
            "The person I love live in Hawaii, and I am stuck in Ohio and Time to travel is key - something x-team can offer me"
        ]
    },
    {
        "id": '12', "reasonName": "Broad Technology Stack", "desc": "Exposed to cross platform development using a combination of client and open source tools.", "skills": [
            "nodejs",
            "R",
            "css",
            "html",
            "javascript",
            "IBM: Cognos (BI Studio & Framework Developer Certified)",
            "IBM: Rational Performance Tester & SoapUI - Testing",
            "IBM: BigInsights (Big Data Management)",
            "IBM: Datastage (ETL)",
            "NoSQL and RDBMS (DB2, Cloudant, MongoDB, DashDB)",
            "IBM: Bluemix (WebHosting and Service Integration)",
            "Salesforce app Developer Trained"

        ]
    },
    {
        "id": '13', "reasonName": "Business Oriented", 
        "desc": "By going through business skill and becoming involved within my community I was able to learn the software software sides to a project.",
        "skills": [
            "Interpersonal team building and communication",
            "Graduated having taken Business Honors Classes and Offered Honorary Membership",
            "Experience writing analytical papers and building presentations for upper management ",
            "Solid understanding finance logistics"
        ]
    },
    {
        "id": '14', "reasonName": "Horizontal != Vertical", 
        "desc": "While I have experience in the financial, logistical, marketing and operational verticals, I am able to adapt to all kinds of different use cases.",
        "skills": [
            "Creative",
            "Quick Learner",
            "console.log()",
            "Google [==========]"
        ]
    },
    {
        "id": 'X', "reasonName": "Reset", 
        "desc": "",
        "skills": []
    }
];
