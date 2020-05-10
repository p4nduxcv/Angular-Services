import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './../model/employee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployessService {
  private _url: string = '/assets/data/employees1.json';
  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getEmployees(): Observable<IEmployee[]> {
    //cast karala thiynnne observable eka IEmployee array ekata
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    console.log('hit')
    return Observable.throw(error.message || 'server error');
  }
}
