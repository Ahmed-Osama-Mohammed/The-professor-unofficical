import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private viewportScroller:ViewportScroller) { }

  ngOnInit(): void {
  }
  goUp() {
    //this.scroller.scrollToAnchor("targetGreen");
   let x= document.querySelector("nav") as HTMLElement
   x.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
