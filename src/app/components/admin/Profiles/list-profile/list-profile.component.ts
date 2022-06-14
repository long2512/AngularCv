import { ProfileService } from './../../../../services/profile.service';
import { IProfile } from './../../../../models/profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  profileList!: IProfile[]
  constructor(private profileService: ProfileService) { 
    this.showProfile()
  }

  ngOnInit(): void {
  }
  showProfile(){
    this.profileService.getProfile().subscribe((data)=>{
      this.profileList = data
    })
  }

}
