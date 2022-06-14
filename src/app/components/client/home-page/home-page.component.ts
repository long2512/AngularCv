import { BlogService } from './../../../services/blog.service';
import { IBlog } from './../../../models/blog';
import { IProfile } from './../../../models/profile';
import { ProjectService } from './../../../services/project.service';
import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  listProject!: IProject[]
  twoBlog!: IBlog[];
  threeProject!: IProject[]
  constructor(
    private projectService: ProjectService,
    private blogService: BlogService
  ) {
    this.showProject()
    this.showTwoBlog()
    this.showThreeProject()
   }

  ngOnInit(): void {
  }

  
  showProject(){
    this.projectService.getProject().subscribe(data=> this.listProject = data)
  }
  showTwoBlog(){
    this.blogService.getTwoBlog().subscribe(data=> this.twoBlog = data)
  }
  showThreeProject(){
    this.projectService.getThreeProject().subscribe(data=> this.threeProject = data)
  }

}
