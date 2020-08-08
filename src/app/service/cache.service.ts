import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CacheService {
    private readonly TOKEN_KEY = 'token';
    private readonly USERNAME_KEY = 'username';

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

    removeToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    isLogin(): boolean {
        let token = this.getToken();
        if (token) {
            return true;
        }
        return false;
    }

    saveUsername(username: string) {
        localStorage.setItem(this.USERNAME_KEY, username);
    }

    getUsername(): string {
        return localStorage.getItem(this.USERNAME_KEY);
    }
}
