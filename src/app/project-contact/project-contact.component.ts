import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-contact',
  templateUrl: './project-contact.component.html',
  styleUrls: ['./project-contact.component.css']
})
export class ProjectContactComponent implements OnInit {
  Name:String;
  Email:String;
  Mobile:String;
  patternCheck:String="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  mobPattCheck:String="(0/91)?[7-9][0-9]{9}";

 
  constructor() { }

  ngOnInit(): void {
  }

  add(contactForm:NgForm){
    console.log(JSON.stringify(contactForm.value));
  }

}
