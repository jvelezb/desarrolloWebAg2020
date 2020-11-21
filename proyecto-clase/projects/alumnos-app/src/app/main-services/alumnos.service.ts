import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Alumno } from '../models/alumnos';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { map, retry, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  endpoint = 'http://localhost:3000/api/alumno';

  constructor(private http: HttpClient) {}

  private extraData(res: Response) {
    let body = res;

    return body || {};
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getAlumnos() {
    console.log("en el servicio")
    return this.http.get<Alumno[]>(this.endpoint).pipe(retry(3),catchError(this.handleError));
  }

  insertarAlumnos(alumnos: Alumno) {
    this.http.post<Alumno>(this.endpoint, alumnos).subscribe({
      next: data => {
            console.log("datos",data)
        },
        error: error => {

            console.error(' error!', error);
        }
    })
  }
}
