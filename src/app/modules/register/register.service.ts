import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  registerUser(user: {
    name: string;
    password: string;
    email: string;
  }): Observable<any> {
    return this.httpClient.post('/api/users', user);
  }
}
