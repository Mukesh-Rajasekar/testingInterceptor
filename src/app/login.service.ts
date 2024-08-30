import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Restaurant } from '../model/user';

interface TokenPayload {
  userId?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string="http://localhost:8765/api/v1/"
  constructor(private httpClient:HttpClient) { }

  loggedIn=false;

  generateToken(user: User): Observable<any> {
    
    return this.httpClient.post<any>(this.url + 'login', user);
  }

  loginUser(token: any) {
    localStorage.setItem('token', token); // api+token
   console.log("Getting Token: " + this.getToken());
    this.loggedIn=true;
    return true;
}

getToken() {
  return localStorage.getItem('token');
}

logout()
  {
    this.loggedIn=false;
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  getUserId(): any {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      console.log(decodedToken?.userId);
      return decodedToken?.userId || null;
    }
    return null;
  }

  private decodeToken(token: string): TokenPayload | null {
    try {
      // Split the token into its parts
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('JWT token does not have 3 parts.');
      }

      // Decode the payload part
      const payload = parts[1];
      const decodedPayload = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(decodedPayload) as TokenPayload;
    } catch (error) {
      console.error('Failed to decode token', error);
      return null;
    }
  }

  // addingFavRest(id?:string, restaurant?:Restaurant): Observable<any>{
  //   return this.httpClient.post<any>(this.url+"user/"+id+"/favorite-restaurant",restaurant);
  // }



}
