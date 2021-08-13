import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  emp:Employee= new Employee();

  constructor() { }

  ngOnInit(): void {
  }

  showEmployee(){
   return  console.log(this.emp);
  }

}
