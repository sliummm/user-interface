import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private url="http://localhost:3030/users"

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http:HttpClient) { }

  userAuth(cred:any){
    return this.http.post(`${this.url}/auth`,cred,{responseType:"json"})
  }

  userSignIn(user:any){
    return this.http.post(this.url,user,{responseType:"json"})
  }
}
