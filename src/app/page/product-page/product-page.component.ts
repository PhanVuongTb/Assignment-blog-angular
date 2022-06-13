import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/server/pots.service';
import { IPost } from './../../../../models/post.models';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
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
