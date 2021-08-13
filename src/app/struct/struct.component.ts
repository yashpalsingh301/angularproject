import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-struct',
  template: `
  <div *ngIf="showDiv">
  this is div</div>
  <button (click)="toggleDiv()">show/hide</button>
  <br><br>
  <div *ngIf="showDiv2 else elseblock">Div2 is visible</div>
  <ng-template #elseblock>
    <div>Div2 id hidden </div>
    </ng-template>
    <input type="radio" name="rad" (click)="showHideDiv(true)" checked>Show
    <input type="radio" name="rad" (click)="showHideDiv(false)">hide
    <div *ngFor="let nm of name">
    {{nm}}
    </div>
    <table>
    <thead>
        <tr>
            <th>Emp id</th>
            <th>Emp Nmae</th>
            <th>Emp Salary</th>
            <th>Emp desig</th>
            <th>isFirst</th>
            <th>isLast</th>
            <th>isEven</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let e of employees  let isFirst=first; let isLast=last; let isEven=even">
            <td>{{e.userId}}</td>
            <td>{{e.empName|uppercase}}</td>
            <td>{{e.empdesign}}</td>
            <td>{{e.empSalary|currency:'INR':true}}</td>
            <td>{{isFirst}}</td>
            <td>{{isLast}}</td>
            <td>{{isEven}}</td>


        </tr>
    </tbody>
</table><br>  <br> <br>
<div>{{today|date}}</div>
<div>{{today|date:'fullDate'}}</div>
<div>{{today|date:'dd/MM/YYYY'}}</div>

<div *ngFor="let e of employees;">
  
  `,
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  today:number=Date.now()
  showDiv:boolean=true;
  showDiv2:boolean=true;
  name:string[]=["karan","abhishek","prince","nishu"]
  employees:Employee[]=[
    {
      userId:1,empName:"john",empSalary:41542,empdesign:"teacher"
    },
    {
      userId:2,empName:"mark",empSalary:418442,empdesign:"manager"
    },
    {
      userId:3,empName:"bisu",empSalary:4156142,empdesign:"ceo"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleDiv(){
    this.showDiv=!this.showDiv;
  }

  showHideDiv(isShown:boolean){
    this.showDiv2=isShown;
  }
}
