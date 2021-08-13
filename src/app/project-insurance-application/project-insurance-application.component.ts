import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-insurance-application',
  templateUrl: './project-insurance-application.component.html',
  styleUrls: ['./project-insurance-application.component.css']
})
export class ProjectInsuranceApplicationComponent implements OnInit {
  Season:string;
  Year:String;
  Crop:String;
  Sum:String;
  Area:String;

  constructor() { }

  ngOnInit(): void {
  }

  add(Inssurance:NgForm){
    // console.log(JSON.stringify(this.reg));
    console.log(JSON.stringify(Inssurance.value));
  }

}
