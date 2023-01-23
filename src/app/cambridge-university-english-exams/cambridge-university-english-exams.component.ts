import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambridge-university-english-exams',
  templateUrl: './cambridge-university-english-exams.component.html',
  styleUrls: ['./cambridge-university-english-exams.component.css']
})
export class CambridgeUniversityEnglishExamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openContent(id: string){
    let a=document.querySelector(".english-content") as HTMLElement;
    let b=document.querySelector(".general-content") as HTMLElement;
    let c=document.querySelector(".teaching-content") as HTMLElement;
   
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";

  
    let x=document.querySelector(id) as HTMLElement;
      x.style.display="block" 
  }
  setActiveTab(id:string){
    
    let a=document.querySelector(".english") as HTMLElement;
    let b=document.querySelector(".general") as HTMLElement;
    let c=document.querySelector(".teaching") as HTMLElement;
   
    a.classList.remove("actives");
    b.classList.remove("actives");
    c.classList.remove("actives");
  
  
    let x=document.querySelector(id) as HTMLElement;
  x.classList.add("actives")
  
  }
}