import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, private toast: ToastService) { }

  baseUrl = "http://localhost:3000"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  handleError = () => catchError( err => {
      const { error } = err.error
      const message = error || err.statusText

      console.log(err)

      this.toast.show(message, "error")
      return throwError(() => new Error(err));
    })


  setAuthorizationToken(token: any) {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', token)
  }

  get(route: string) {
    return this.http.get(this.baseUrl + route, this.httpOptions)
      .pipe(
        this.handleError()
      )
  }

  post(route: string, values: any) {
    return this.http.post(this.baseUrl + route, values, this.httpOptions)
      .pipe(
        this.handleError()
      )
  }

  put(route: string, values: any) {
    return this.http.put(this.baseUrl + route, values, this.httpOptions)
      .pipe(
        this.handleError()
      )
  }
}
