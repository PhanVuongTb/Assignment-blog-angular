import { Component, OnInit } from '@angular/core';
import { IUser } from './../../../../models/users.models';
import { UsersService } from './../../server/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
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
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // nếu có id thì call service get product để lấy thông tin trả về form
      this.usersService.getUser(id).subscribe(data => this.user = data);
    }
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.usersService.putUser(this.user).subscribe(data =>{
      console.log(data);
      // chuyển hướng router
      this.router.navigateByUrl('dashboard/users');
    })
  }

}
