import { Component, OnInit } from '@angular/core';
import { IUser } from './../../../../models/users.models';
import { UsersService } from './../../server/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {

  user: IUser = {
    id: 0,
    name: "",
    email: "",
    password: "",
    mobile: 0,
    role: 1
   }

  constructor(
    private usersService : UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.usersService.signin(this.user).subscribe(data => {
      localStorage.setItem("user", JSON.stringify(this.user));
      alert(' ĐĂng nhập thành công')
      localStorage.setItem("user", JSON.stringify(data))
      setTimeout(()=>{
        if (JSON.parse(localStorage.getItem("user")!).user.role == 2) {
          this.router.navigateByUrl(`/dashboard`)
              console.log("admin");
        }else{
          this.router.navigateByUrl(`/`)
              console.log("user");
        }
      },2000)
    })
}
}
