import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public name = '';

    constructor() {
    }

    ngOnInit(): void {}

    public onkeyInput(event) {
        if (event.key == 'Enter') {
            console.log(this.name);
        }
    }
}
