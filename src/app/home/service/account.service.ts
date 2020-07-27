import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

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
            console.log(`Api error : (${error.status}) ${error.message}`);
        }
        return throwError('Connect api error');
    }
}
