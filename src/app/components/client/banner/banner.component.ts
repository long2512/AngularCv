import { IProfile } from './../../../models/profile';
import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  listProfile!: IProfile[]
    
  constructor(private profileService: ProfileService) {
    this.showProfile()
   } 

  ngOnInit(): void {
  }
showProfile(){
    this.profileService.getProfile().subscribe(data=> this.listProfile = data)
  }
}
