import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-courses',
  templateUrl: './it-courses.component.html',
  styleUrls: ['./it-courses.component.css']
})
export class ITCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit( ): void {
    
  }

  openContent(id: string){
    
    let a=document.querySelector(".d-max-content") as HTMLElement;
    let b=document.querySelector(".photoshop-content") as HTMLElement;
    let c=document.querySelector(".autocad-content") as HTMLElement;
    let d=document.querySelector(".mcsa") as HTMLElement;
    let e=document.querySelector(".ccna") as HTMLElement;
    let f=document.querySelector(".icdl") as HTMLElement;
    let g=document.querySelector(".graphics-btns") as HTMLElement;
  
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
    e.style.display="none";
    f.style.display="none";
    g.style.display="none";
    if(id==".d-max-content"||id==".photoshop-content" || id==".autocad-content")
    {g.style.display="block"}
    let x=document.querySelector(id) as HTMLElement;
      x.style.display="block" 
  }
  setActiveTab(id:string){
    
    let a=document.querySelector(".graphics") as HTMLElement;
    let b=document.querySelector(".mcsa-btn") as HTMLElement;
    let c=document.querySelector(".ccna-btn") as HTMLElement;
    let d=document.querySelector(".icdl-btn") as HTMLElement;
    let e=document.querySelector(".d-max") as HTMLElement;
    let f=document.querySelector(".photoshop") as HTMLElement;
    let g=document.querySelector(".autocad") as HTMLElement;
  
    a.classList.remove("actives");
    b.classList.remove("actives");
    c.classList.remove("actives");
    d.classList.remove("actives");
    e.classList.remove("actives");
    f.classList.remove("actives");
    g.classList.remove("actives");
  
    if(id==".d-max" || id==".photoshop" || id==".autocad"){
      a.classList.add("actives")
    }

    let x=document.querySelector(id) as HTMLElement;
    x.classList.add("actives")
  
  }
}
