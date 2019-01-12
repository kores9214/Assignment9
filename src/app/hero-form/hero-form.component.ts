import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  eDepts = ['Hign', 'Low',];
  model = new Hero(18, '','', '','');
  
  submitted = false;

  onSubmit() { this.submitted = true; }
  
  constructor() { 
    console.log('choose',event);
  }

  ngOnInit() {
  }

}
