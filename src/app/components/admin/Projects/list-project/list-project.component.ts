import { IProject } from './../../../../models/project';
import { ProjectService } from './../../../../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  listProject!: IProject[]
  constructor(private projectService: ProjectService) {
    this.getAllProjects()
   }

  ngOnInit(): void {
  }

  getAllProjects() {
    this.projectService.getProject().subscribe((data)=>{
      this.listProject = data
    })
  }
  onRemoveProject(id: number | string){
    const confirm = window.confirm("Bạn có chắc muốn xóa không")
    if(confirm){
      this.projectService.removeProject(id).subscribe(()=>{
          this.listProject = this.listProject.filter(item => item.id !== id);
      })
    }
  }

}
