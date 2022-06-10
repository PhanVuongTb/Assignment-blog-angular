import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/server/pots.service';
import { IPost } from './../../../../models/post.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
  onHandleRemove(id: number) {
    this.potService.xoaPost(id).subscribe(() => {
      this.pots = this.pots.filter(item => item.id !== id);
    })
  }

}
