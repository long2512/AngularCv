import { IBlog } from './../../../models/blog';
import { BlogService } from './../../../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  listBlog!: IBlog[]
  constructor(private blogService: BlogService) { 
     this.showAllBlog()
  }

  ngOnInit(): void {
  }
  showAllBlog(){
    this.blogService.getAllBlog().subscribe(data=> this.listBlog = data)
  }
}
