import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "localhost:8080/auth";

  constructor(private http:HttpClient) { }

  login(username: String, password: String):Observable<any>{
    return this.http.post<any>('${this.apiUrl}/login',{username, password});
  }
}
