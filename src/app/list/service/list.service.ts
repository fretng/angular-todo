import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ListService {
    constructor(private http: HttpClient) {}

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

    private getOption(token: string) {
        if (token == null) {
            return {};
        }
        let options = {
            headers: new HttpHeaders({ token: token }),
        };
        return options;
    }

    public addTodo(message: string, token: string): Observable<any> {
        let options = this.getOption(token);
        let params = {
            message: message,
        };
        let url = env.apiUrl + '/todo-list';
        return this.http.post(url, params, options).pipe(catchError(this.handleError));
    }

    public getTodoList(token: string): Observable<any> {
        let options = this.getOption(token);
        let url = env.apiUrl + '/todo-list';
        return this.http.get(url, options).pipe(catchError(this.handleError));
    }

    public checkTodo(itemId: number, isDone: boolean, token: string): Observable<any> {
        let option = this.getOption(token);
        let params = {
            isDone: isDone,
        };
        let url = env.apiUrl + '/todo-list/' + itemId;
        return this.http.put(url, params, option).pipe(catchError(this.handleError));
    }

    public deleteTodo(itemId: number, token: string): Observable<any> {
        let option = this.getOption(token);
        let url = env.apiUrl + '/todo-list/' + itemId;
        return this.http.delete(url, option).pipe(catchError(this.handleError));
    }
}
