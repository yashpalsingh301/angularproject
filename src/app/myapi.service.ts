import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MyComment } from "./comment";

@Injectable()
export class MyapiService {

  // httpClient:HttpClient=new HttpClient();
  //dependency injection
  constructor(private httpClient: HttpClient) { }


  getAllComments():Observable<MyComment[]> {
    return this.httpClient.get<MyComment[]>("https://jsonplaceholder.typicode.com/posts/1/comments");
  }

  getCommentsByUserId(userId:number):Observable<MyComment[]>{
    return this.httpClient.get<MyComment[]>("https://jsonplaceholder.typicode.com/posts?userId="+userId);
 }
}
