import { IProject } from './../models/project';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URL: string = 'http://localhost:3000/project';
  constructor(private http: HttpClient) { }

  getProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.API_URL)
  }

  getThreeProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>('http://localhost:3000/project?_start=0&_end=3')
  }

  getOneProject(id: number | string): Observable<IProject>{
    return this.http.get<IProject>(`http://localhost:3000/project/${id}`)
  }

  addProject(project: IProject): Observable<IProject>{
    return this.http.post<IProject>(`http://localhost:3000/project`, project)
  }
  updateProject(project: IProject): Observable<IProject>{
    return this.http.put<IProject>(`http://localhost:3000/project/${project.id}`, project)
  }
  removeProject(id: number | string): Observable<IProject[]>{
    return this.http.delete<IProject[]>(`http://localhost:3000/project/${id}`)
  }

}
