import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../all-services/helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  // user signup-data
  usersignup(userData: any) {
    return this.http.post(`${baseUrl}/user/`, userData);
  }
}
