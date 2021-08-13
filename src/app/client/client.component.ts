import { Component, OnInit } from '@angular/core';
import { MyComment } from '../comment';
import { MyapiService } from '../myapi.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  comments:MyComment[]=[];
  commentuser:MyComment[]=[];
  userId:number;
  userName:string;

  constructor(private myApiService:MyapiService) { }

  ngOnInit(): void {

    this.userName=sessionStorage.getItem("uname");
    this.myApiService.getAllComments().subscribe(
      userComments=>{
       // console.log(JSON.stringify(userComments));
       this.comments=userComments;

      }
    );
  }

  OnClick(){
    this.myApiService.getCommentsByUserId(this.userId).subscribe(
      userComments=>{
        this.commentuser=userComments;
      }
    )
  }

}
