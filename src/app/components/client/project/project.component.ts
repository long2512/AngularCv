import { ProjectService } from './../../../services/project.service';
import { IProject } from './../../../models/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  threeProject!: IProject[]
  listProject!: IProject[]
  constructor( private projectService: ProjectService) {
    this.showProject()
   }

  ngOnInit(): void {
  }

  showProject(){
    this.projectService.getProject().subscribe(data=> this.listProject = data)
  }
  

}
