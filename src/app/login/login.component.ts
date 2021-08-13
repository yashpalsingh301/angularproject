import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  checklogin(){
    if(this.userName=="Yashpal" && this.password=="Yashant1234"){
     this.router.navigate(['/clientLink']);
     sessionStorage.setItem("uname",this.userName)
    }
    else{
      this.router.navigate(['/loginLink'])
    }
  }

}
