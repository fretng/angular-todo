import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment as env } from '../../../environments/environment';
import { throwError, Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hello } from '../mapping/hello.mapping';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }

    public getHello(): Observable<any> {
        var url = env.apiUrl + '';
        return this.http.get<Hello>(url).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        if (error instanceof ErrorEvent) {
            console.error('Error : ' + error);
            return throwError('code error');
        } else {
            // console.log(error);
            console.log(`Api error : (${error.status}) ${error.message}`);
        }
        var err = {
            reason: 'Connect api error',
            msg: error.error,
        }
        return throwError(err);
    }

    public register(username: string, password: string): Observable<any> {
        var params = {
            username: username,
            password: password,
        };
        var url = env.apiUrl + '/account';
        return this.http.post(url, params).pipe(catchError(this.handleError));
    }

    public login(username: string, password: string): Observable<any> {
        var params = {
            username: username,
            password: password,
        };
        var url = env.apiUrl + '/account/auth';
        return this.http.post(url, params).pipe(catchError(this.handleError));
    }
}
