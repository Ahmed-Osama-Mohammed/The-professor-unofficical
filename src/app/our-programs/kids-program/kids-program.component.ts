import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-program',
  templateUrl: './kids-program.component.html',
  styleUrls: ['./kids-program.component.css']
})
export class KidsProgramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openContent(id: string){
    let a=document.querySelector(".summer-content") as HTMLElement;
    let b=document.querySelector(".french-content") as HTMLElement;

  
    a.style.display="none";
    b.style.display="none";

  
    let x=document.querySelector(id) as HTMLElement;
      x.style.display="block" 
  }
  setActiveTab(id:string){
    
    let a=document.querySelector(".summer") as HTMLElement;
    let b=document.querySelector(".french") as HTMLElement;
  
    a.classList.remove("actives");
    b.classList.remove("actives");

    let x=document.querySelector(id) as HTMLElement;
  x.classList.add("actives")
  
  }
}
