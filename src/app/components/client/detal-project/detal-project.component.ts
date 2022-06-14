import { IProject } from './../../../models/project';
import { ProjectService } from './../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detal-project',
  templateUrl: './detal-project.component.html',
  styleUrls: ['./detal-project.component.css']
})
export class DetalProjectComponent implements OnInit {
  id: number | null = null;
  detailProject!: IProject
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if(this.id != null){
      this.projectService.getOneProject(this.id).subscribe(data => this.detailProject = data)
    }
  }

}
