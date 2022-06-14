import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IProfile} from "../models/profile"
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  API_URL: string = 'http://localhost:3000/profile';
  constructor(private http: HttpClient) { }

  getProfile(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(this.API_URL)
  }
  
}
