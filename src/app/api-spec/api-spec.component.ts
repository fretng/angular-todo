import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-api-spec',
    templateUrl: './api-spec.component.html',
    styleUrls: ['./api-spec.component.scss'],
})
export class ApiSpecComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    printJson(json): string {
        let str = JSON.stringify(json, null, 4);
        return str;
    }
}
