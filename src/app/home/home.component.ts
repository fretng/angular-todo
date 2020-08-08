import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';
import { CacheService } from 'src/app/service/cache.service';
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

    constructor(
        private accountService: AccountService,
        private router: Router,
        private cacheService: CacheService
    ) {
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

        this.accountService.register(this.formInput.username, this.formInput.password).subscribe(
            (res) => {
                console.log(res);
                this.sendAuth();
            },
            (err) => {
                console.log(err);
                this.errorMsg = err.msg.message;
            }
        );
    }

    public sendAuth() {
        if (!this.validateInput()) {
            return;
        }
        this.accountService.login(this.formInput.username, this.formInput.password).subscribe(
            (res) => {
                this.cacheService.saveToken(res.token);
                this.cacheService.saveUsername(this.formInput.username);
                console.log(res);
                this.router.navigateByUrl('/list');
            },
            (err) => {
                console.log(err);
                this.errorMsg = err.msg.message;
            },
        );
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

    public skipLogout() {
        this.cacheService.removeToken();
        this.router.navigateByUrl('/list');
    }
}
