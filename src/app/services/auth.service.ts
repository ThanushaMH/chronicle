import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private apiUrl = 'http://localhost:8080/api'; // Replace with your API URL

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  // Observable to track login status
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  // Set login status
  setLoginStatus(status: boolean) {
    this.isLoggedInSubject.next(status);
  }

  // Get current login status
  getLoginStatus(): boolean {
    return this.isLoggedInSubject.getValue();
  }

  logout() {
    this.setLoginStatus(false); // Update login state
  }
  
  login(username: string, password: string): Observable<any> {
    // Simple condition to simulate login success or failure
    if (username === 'spandanas' && password === 'password123') {
      // Return a successful login response as an observable
      return of({ message: 'Login successful!' });
    } else {
      // Return an error response as an observable
      return throwError(() => new Error('Invalid credentials'));
    }
     // Logout function
 
  }
  /*constructor(private http: HttpClient) {}

  sendOtp(email: string): Observable<any> {
    return this.http.post(${this.apiUrl}/send-otp, { email });
  }

  changePassword(email: string, otp: string, newPassword: string): Observable<any> {
    return this.http.post(${this.apiUrl}/change-password, { email, otp, newPassword });
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

    return this.http.post(${this.apiUrl}/login, { data: encodedData }); // Send the encoded data
  }*/
}