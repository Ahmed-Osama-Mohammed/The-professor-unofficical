import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openContent(id: string){
    let a=document.querySelector(".montessori-content") as HTMLElement;
    let b=document.querySelector(".teaching-english") as HTMLElement;
    let c=document.querySelector(".math-science") as HTMLElement;
    let d=document.querySelector(".tefl-content") as HTMLElement;
   
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";

  
    let x=document.querySelector(id) as HTMLElement;
      x.style.display="block" 
  }
  setActiveTab(id:string){
    
    let a=document.querySelector(".montessori") as HTMLElement;
    let b=document.querySelector(".teaching") as HTMLElement;
    let c=document.querySelector(".ms") as HTMLElement;
    let d=document.querySelector(".tefl") as HTMLElement;
   
    a.classList.remove("actives");
    b.classList.remove("actives");
    c.classList.remove("actives");
    d.classList.remove("actives");
  
  
    let x=document.querySelector(id) as HTMLElement;
  x.classList.add("actives")
  
  }
}