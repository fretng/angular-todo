import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/service/cache.service';
import { Router } from '@angular/router'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    public username: string;

    constructor(
        private cacheService: CacheService,
        private router: Router
    ) {}

    ngOnInit(): void {
        if (this.cacheService.isLogin()) {
            this.username = this.cacheService.getUsername();
        } else {
            this.username = '';
        }
    }

    logout() {
        this.cacheService.removeToken();
        this.router.navigateByUrl('/');
    }
}
