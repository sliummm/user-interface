import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url="http://localhost:3000/product"

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get(this.url,{responseType:"json"})
  }

  getProductById(id:any):Observable<any>{
    return this.http.get(`${this.url}/${id}`,{responseType:"json"})
  }

}
