import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  // rand:number=0;
  public rand=0;
  public textvalue="";
  public bool=false;
  name:string="";
  

  constructor() { }

  ngOnInit(): void {
  }
sayhello(){
  console.log("hello friend");}
divClick(){
    console.log("div was used");
  }
luckyno() {
     this.rand = Math.floor((Math.random() * 10) + 1);
    
  }

getText(event:any){
  this.textvalue=event.target.value;
}

getBool(event:any){
  this.bool=event.target.value;
}

onClick(){
  return this.name;
}


}

