import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'localhost:3333/auth';
  constructor(private httpClient: HttpClient) {
    this.recoveryDataFromLocalStorage();
  }
  public user: BehaviorSubject<null> = new BehaviorSubject(null);
  authentication(data: { email: string; password: string }): Observable<any> {
    return this.httpClient.post('/api/auth', data);
  }
  setUser(user: any): void {
    this.user.next(user);
  }
  public logout(): void {
    this.user.next(null);
    sessionStorage.clear();
  }
  setUserOnStorage(data: any): void {
    let user = null;
    if (data != null) {
      sessionStorage.setItem('token', JSON.stringify(data.token));
      sessionStorage.setItem('access_token', 'Bearer ' + data?.token);
      sessionStorage.setItem('user_data', JSON.stringify(data.user));
      this.user.next(data.user);
    }
  }
  public recoveryDataFromLocalStorage(): void {
    let data: any = sessionStorage.getItem('user_data');
    if (data) {
      data = JSON.parse(data);
      this.user.next(data);
    }
  }
}
