import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/server/pots.service';
import { IPost } from './../../../../models/post.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page-detail',
  templateUrl: './product-page-detail.component.html',
  styleUrls: ['./product-page-detail.component.css']
})
export class ProductPageDetailComponent implements OnInit {

  post: IPost={
    id: 0,
    title: "",
    photo: "",
    date: "",
    description: "",
    category: ""
  }

  constructor(private postsService: PostsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     // lấy id trên url
     const id = this.activatedRoute.snapshot.paramMap.get('id');

     // nếu có id thì call service get product để lấy thông tin trả về form
     // this.productService.getProduct(id).subscribe(data => this.product = data);
     if (id) {
       // nếu có id thì call service get product để lấy thông tin trả về form
       this.postsService.getPost(id).subscribe(data => this.post = data);
     }
  }

}
