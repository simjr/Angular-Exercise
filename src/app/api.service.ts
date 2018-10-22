import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import {of} from "rxjs/observable/of";
import { Holidays } from './holidays';
import { delay } from 'rxjs/operators/delay';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

	private url: string = 'http://nolaborables.com.ar/api/v2/feriados/2018';

	constructor (private http: HttpClient) {}

	getHolidaysByYear(): Observable<Holidays[]> {
		return this.http.get<Holidays[]>(this.url)
		.pipe(
			delay(5000),
			tap(holidays => this.log('Obteniendo Feriados')),
      catchError(this.handleError('getHolidaysByYear', []))
    );
	}
	
	private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
 
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	 
	    // TODO: better job of transforming error for user consumption
	    this.log(`${operation} failed: ${error.message}`);
	 
	    // Let the app keep running by returning an empty result.
	    return of(result as T);
  	};
	}
	private log(message: string) {
    console.log('ApiService: ' + message);
  }

}
