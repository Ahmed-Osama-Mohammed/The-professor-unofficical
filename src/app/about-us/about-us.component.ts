import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
seeAllInfo(){
  let x=document.querySelector(".plus-text") as HTMLElement;
  let y=document.querySelector(".see-all") as HTMLElement;
  x.style.display="block" 
  y.style.display="none" 
}
setActiveTab(id:string){
  let a=document.querySelector(".profile") as HTMLElement;
  let b=document.querySelector(".customer") as HTMLElement;
  let c=document.querySelector(".achievement") as HTMLElement;
  let d=document.querySelector(".accreditation") as HTMLElement;

  a.classList.remove("active");
  b.classList.remove("active");
  c.classList.remove("active");
  d.classList.remove("active");

  let x=document.querySelector(id) as HTMLElement;
x.classList.add("active")

}


openContent(id: string){
  let a=document.querySelector(".company-profile-content") as HTMLElement;
  let b=document.querySelector(".customers-content") as HTMLElement;
  let c=document.querySelector(".achievements-content") as HTMLElement;
  let d=document.querySelector(".accreditation-content") as HTMLElement;

  a.style.display="none";
  b.style.display="none";
  c.style.display="none";
  d.style.display="none";


  let x=document.querySelector(id) as HTMLElement;
    x.style.display="block" 
}
}
