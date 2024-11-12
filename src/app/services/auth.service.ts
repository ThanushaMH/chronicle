import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  sendOtp(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-otp`, { email });
  }

  changePassword(email: string, otp: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, { email, otp, newPassword });
  }

   
  // Method to Base64 encode the login data
  encodeData(data: any): string {
    const jsonData = JSON.stringify(data); // Convert object to JSON string
    return btoa(jsonData); // Encode the JSON string to Base64
  }

  // New method to log in a user
  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    const encodedData = this.encodeData(loginData); // Encode the data before sending

    return this.http.post(`${this.apiUrl}/login`, { data: encodedData }); // Send the encoded data
  }
}
