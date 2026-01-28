import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'http://localhost:8080/api/users/register';

  constructor(private http: HttpClient) {}

  signUp(data: any): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.apiUrl, data, { observe: 'response' });
  }
}
