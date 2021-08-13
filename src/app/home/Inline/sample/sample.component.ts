import { Component } from "@angular/core";

@Component({
    selector:'app-sample',
    template:`<img src='{{imagePath}}'/>
    <div>{{data}}</div>
    
    `,
    // <div [innerHTML]={{date}}></div>
    // <img [src]='imagePath' width="200px/>
    // <button [disabled]='isDesable'>Click</button>
    
    styles:[]
})
export class SampleComponent{
imagePath="./assets/download.png";
isDesable:boolean=false;
data:string="<h1>karan singh</h1>"
}