import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'localhost:3333/auth';
  constructor(private httpClient: HttpClient) {}

  authentication(data: { email: string; password: string }): Observable<any> {
    return this.httpClient.post('/api/auth', data);
  }
}
