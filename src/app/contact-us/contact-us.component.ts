import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  openContent(id: string){
    
    let a=document.querySelector(".contact-btns") as HTMLElement;
    let b=document.querySelector(".complain-content") as HTMLElement;
    let c=document.querySelector(".head-content") as HTMLElement;
    let d=document.querySelector(".maadi-content") as HTMLElement;
 
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
  
    if(id==".head-content"||id==".maadi-content")
    {a.style.display="block"}
    let x=document.querySelector(id) as HTMLElement;
      x.style.display="block" 
  }
  setActiveTab(id:string){
    
    let a=document.querySelector(".maadi") as HTMLElement;
    let b=document.querySelector(".head") as HTMLElement;
    let c=document.querySelector(".complain") as HTMLElement;
    let d=document.querySelector(".contact") as HTMLElement;

    a.classList.remove("actives");
    b.classList.remove("actives");
    c.classList.remove("actives");
    d.classList.remove("actives");
  
  
    if(id==".head" || id==".maadi" ){
      d.classList.add("actives")
    }

    let x=document.querySelector(id) as HTMLElement;
    x.classList.add("actives")
  
  }
}

