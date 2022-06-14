import { HttpClient } from '@angular/common/http';
import { IBlog } from './../models/blog';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllBlog():Observable<IBlog[]> {
    return this.http.get<IBlog[]>('http://localhost:3000/blog')
  }
  getTwoBlog():Observable<IBlog[]> {
    return this.http.get<IBlog[]>('http://localhost:3000/blog?_start=0&_end=2')
  }
}
