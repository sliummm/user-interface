import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderPlacementService {

  private url="http://localhost:3000/order"

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http:HttpClient) { }

  getOrderById(id:any): Observable<any>{
    return this.http.get(`${this.url}/${id}`,{responseType:"json"})
  }

  getOrdersByUid(uid:any): Observable<any>{
    return this.http.get(`${this.url}/${uid}`,{responseType:"json"})
  }

  placeAnOrder(order:any){
    console.log(order);
    return this.http.post(this.url,order,{responseType:"json"})
  }
}
