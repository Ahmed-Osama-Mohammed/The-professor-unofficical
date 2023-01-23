import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  imageObject: Array<object> = [{
    image: '../../assets/image/p1.png',
    thumbImage: '../../assets/image/p1.png',
    alt: 'Al Ahly Club FC',
}, {
  image: '../../assets/image/p2.png',
  thumbImage: '../../assets/image/p2.png',
  alt: 'Pepsi',
}, {
  image: '../../assets/image/p3.png',
  thumbImage: '../../assets/image/p3.png',
  alt: 'Mercedes',
}, {
  image: '../../assets/image/p4.png',
  thumbImage: '../../assets/image/p4.png',
  alt: 'BMW',
}, {
  image: '../../assets/image/p5.png',
  thumbImage: '../../assets/image/p5.png',
  alt: 'Egyption Steel',
}, {
  image: '../../assets/image/p6.png',
  thumbImage: '../../assets/image/p6.png',
  alt: 'Nestle',}
];






}
