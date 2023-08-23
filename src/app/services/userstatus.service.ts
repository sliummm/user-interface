import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstatusService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user!:any
  errorMessage!:any
  constructor() { }

  get authStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(): void {
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
