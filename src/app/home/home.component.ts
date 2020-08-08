import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';
import { Router } from '@angular/router';

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
    public errorMsg: string = '';

    constructor(private accountService: AccountService, private router: Router) {
    }

    ngOnInit(): void {}


    public testAnimate() {
        if (this.errorMsg == '') {
            this.errorMsg = 'error';
        } else {
            this.errorMsg = '';
        }

        this.router.navigateByUrl('/list');
    }

    public onkeyInput(event) {
        if (event.key == 'Enter') {
            this.sendAuth();
        }
    }

    public sendRegister() {
        if (!this.validateInput()) {
            return;
        }
    }

    private sendAuth() {
        if (!this.validateInput()) {
            return;
        }
        this.accountService.getHello().subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.error(err);
        });
    }

    private validateInput() {
        if (this.formInput.username == '' || this.formInput.password == '') {
            this.errorMsg = 'Please input username, password!';
            return false;
        } else {
            this.errorMsg = '';
            return true;
        }
    }


}
