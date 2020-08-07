import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public formInput = {
        username: '',
        password: '',
    };
    public formError = {
        username: '',
        passwprd: '',
    };

    constructor(private accountService: AccountService) {
    }

    ngOnInit(): void {}


    public testAnimate() {
        if (this.formError.username == '') {
            this.formError.username = 'error';
        } else {
            this.formError.username = '';
        }
    }

    public onkeyInput(event) {
        if (event.key == 'Enter') {
            this.sendAuth();
        }
    }

    private sendAuth() {
        this.accountService.getHello().subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.error(err);
        });
    }


}
