import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post<any>(environment.backendHost+"/login", loginData);
  }

  logout(): Observable<any> {
    return this.http.delete<any>(environment.backendHost+`/logout`);
  }
}
