import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../register';


@Component({
  selector: 'app-tdfdemo',
  templateUrl: './tdfdemo.component.html',
  styleUrls: ['./tdfdemo.component.css']
})
export class TdfdemoComponent implements OnInit {
  reg:Register=new Register();

  constructor() {
    this.reg.userName="Simant";
    this.reg.userPassword="Simant1234@"
    this.reg.userEmail="syashpal"
    this.reg.userPhone="3647585898"
   }

  ngOnInit(): void {
    console.log(this.reg);
  }

  registerUser(myForm:NgForm){
    // console.log(JSON.stringify(this.reg));
    console.log(JSON.stringify(myForm.value));
  }

}
