import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/server/pots.service';
import { IPost } from './../../../../models/post.models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pots!: IPost[]
  constructor(private potService: PostsService) { }

  ngOnInit(): void {
    // chạy
    this.getPostList();
  }

  // khai báo
  getPostList() {
    this.potService.getPostList().subscribe(data => {
      this.pots = data;
    })
  }

}
