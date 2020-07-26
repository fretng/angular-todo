import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public name = '';

    constructor(private accountService: AccountService) {
    }

    ngOnInit(): void {}

    public onkeyInput(event) {
        if (event.key == 'Enter') {
            this.sendAuth();
        }
    }

    private sendAuth() {
        this.accountService.getHello().subscribe((res) => {
            console.log(res);
        });
    }
}
