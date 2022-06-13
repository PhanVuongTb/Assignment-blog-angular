import { Component, OnInit } from '@angular/core';
import { IPost } from './../../../../models/post.models';
import { PostsService } from 'src/app/server/pots.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  product: IPost = {
    id: 0,
    title: "",
    photo: "",
    date: "",
    description: "",
    category: ""
  }

  constructor(private potService: PostsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // lấy id trên url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // nếu có id thì call service get product để lấy thông tin trả về form
    // this.productService.getProduct(id).subscribe(data => this.product = data);
    if (id) {
      // nếu có id thì call service get product để lấy thông tin trả về form
      this.potService.getPost(id).subscribe(data => this.product = data);
    }
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
     this.potService.addPost(this.product).subscribe(data => {
      console.log(data);

      // chuyển hướng router
      this.router.navigateByUrl('/dashboard/posts');
      alert("Thêm thành công!")
    })
  }

}
