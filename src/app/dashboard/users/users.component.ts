import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../server/users.service';
import { IUser } from './../../../../models/users.models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users! : IUser[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.usersService.getUserList().subscribe(data => {
      this.users = data;
    })
  }
  onHandleRemove(id: number) {
    this.usersService.xoaUser(id).subscribe(() => {
      this.users = this.users.filter(item => item.id !== id);
      alert("Xóa thành công!")
    })
  
  }

}
