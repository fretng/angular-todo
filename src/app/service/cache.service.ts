import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CacheService {
    private readonly TOKEN_KEY = 'token';

    constructor() {}

    saveToken(token: string) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string {
        let token = localStorage.getItem(this.TOKEN_KEY);
        if (token == '') {
            return null;
        }
        return token;
    }
}
