import { Component, OnInit } from '@angular/core';
import { IUser } from './../../../../models/users.models';
import { UsersService } from './../../server/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  user: IUser = {
    id: 0,
    name: "",
    email: "",
    password: "",
    mobile: 0
   }
  constructor(
    private usersService : UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
     this.usersService.addUser(this.user).subscribe(data => {
      console.log(data);

      // chuyển hướng router
      this.router.navigateByUrl('/signin');
    })
  }

}
