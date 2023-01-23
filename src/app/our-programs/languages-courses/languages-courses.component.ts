import { OurProgramsService } from 'src/services/our-programs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-courses',
  templateUrl: './languages-courses.component.html',
  styleUrls: ['./languages-courses.component.css']
})
export class LanguagesCoursesComponent implements OnInit {
  LanguagesCourses=  {name:"General English",describtion:"Hello <br> World"}

 constructor(private OurProgramsService:OurProgramsService) {
  
  }

  ngOnInit(): void {

  }

  openContent(id: string){
    let a=document.querySelector(".conversation-english") as HTMLElement;
    let b=document.querySelector(".Business-english") as HTMLElement;
    let c=document.querySelector(".kids-english") as HTMLElement;
    let d=document.querySelector(".toefl-english") as HTMLElement;
    let e=document.querySelector(".arabic") as HTMLElement;
    let f=document.querySelector(".other") as HTMLElement;
    let g=document.querySelector(".general-english") as HTMLElement;
  
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
    e.style.display="none";
    f.style.display="none";
    g.style.display="none";
  
  
    let x=document.querySelector(id) as HTMLElement;
      x.style.display="block" 
  }
  setActiveTab(id:string){
    
    let a=document.querySelector(".conversation") as HTMLElement;
    let b=document.querySelector(".Business") as HTMLElement;
    let c=document.querySelector(".kids") as HTMLElement;
    let d=document.querySelector(".toefl") as HTMLElement;
    let e=document.querySelector(".ara") as HTMLElement;
    let f=document.querySelector(".other-btn") as HTMLElement;
    let g=document.querySelector(".general") as HTMLElement;
  
    a.classList.remove("actives");
    b.classList.remove("actives");
    c.classList.remove("actives");
    d.classList.remove("actives");
    e.classList.remove("actives");
    f.classList.remove("actives");
    g.classList.remove("actives");
  
    let x=document.querySelector(id) as HTMLElement;
  x.classList.add("actives")
  
  }
}
