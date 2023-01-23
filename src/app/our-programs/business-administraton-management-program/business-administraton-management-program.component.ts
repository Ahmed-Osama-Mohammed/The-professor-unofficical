import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-administraton-management-program',
  templateUrl: './business-administraton-management-program.component.html',
  styleUrls: ['./business-administraton-management-program.component.css'],
})
export class BusinessAdministratonManagementProgramComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openContent(id: string) {
    let a = document.querySelector('.bmd-content') as HTMLElement;
    let b = document.querySelector('.hrm-content') as HTMLElement;
    let c = document.querySelector('.dmm-content') as HTMLElement;
    let d = document.querySelector('.smd-content') as HTMLElement;
    let e = document.querySelector('.pmp-content') as HTMLElement;
    let f = document.querySelector('.scm-content') as HTMLElement;
    let g = document.querySelector('.hmd-content') as HTMLElement;

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
    f.style.display = 'none';
    g.style.display = 'none';

    let x = document.querySelector(id) as HTMLElement;
    x.style.display = 'block';
  }
  setActiveTab(id: string) {
    let a = document.querySelector('.bmd') as HTMLElement;
    let b = document.querySelector('.hrm') as HTMLElement;
    let c = document.querySelector('.dmm') as HTMLElement;
    let d = document.querySelector('.smd') as HTMLElement;
    let e = document.querySelector('.pmp') as HTMLElement;
    let f = document.querySelector('.scm') as HTMLElement;
    let g = document.querySelector('.hmd') as HTMLElement;

    a.classList.remove('actives');
    b.classList.remove('actives');
    c.classList.remove('actives');
    d.classList.remove('actives');
    e.classList.remove('actives');
    f.classList.remove('actives');
    g.classList.remove('actives');

    let x = document.querySelector(id) as HTMLElement;
    x.classList.add('actives');
  }
}
