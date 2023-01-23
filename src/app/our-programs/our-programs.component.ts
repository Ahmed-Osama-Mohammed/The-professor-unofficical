import { OurProgramsService } from 'src/services/our-programs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-programs',
  templateUrl: './our-programs.component.html',
  styleUrls: ['./our-programs.component.css']
})
export class OurProgramsComponent implements OnInit {
   courses:any=[]
   routerLinks=["/our-programs/languages-courses","/our-programs/it-courses","/our-programs/business-administraton-and-management-program","our-programs/soft-skills","our-programs/teaching-diploma","our-programs/kids-program"]
  constructor(private OurProgramsService:OurProgramsService,private router:Router) {
    this.courses=this.OurProgramsService.getCourses()
   }

  ngOnInit(): void {
  }

  Navigator(id:number){
    this.router.navigate([this.routerLinks[id]])
  .then(() => {
    window.location.reload();
  });
  }

}
