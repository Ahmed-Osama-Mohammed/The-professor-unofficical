import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-center',
  templateUrl: './test-center.component.html',
  styleUrls: ['./test-center.component.css']
})
export class TestCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openContent(id: string){
    let a=document.querySelector(".tofel-content") as HTMLElement;
    let b=document.querySelector(".icdl-content") as HTMLElement;

  
    a.style.display="none";
    b.style.display="none";

  
    let x=document.querySelector(id) as HTMLElement;
      x.style.display="block" 
  }
  setActiveTab(id:string){
    
    let a=document.querySelector(".tofel") as HTMLElement;
    let b=document.querySelector(".icdl") as HTMLElement;
  
    a.classList.remove("actives");
    b.classList.remove("actives");

    let x=document.querySelector(id) as HTMLElement;
  x.classList.add("actives")
  
  }
}