import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/server/pots.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPost } from './../../../../models/post.models';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

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
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // nếu có id thì call service get product để lấy thông tin trả về form
      this.potService.getPost(id).subscribe(data => this.product = data);
    }
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.potService.putPost(this.product).subscribe(data =>{
      console.log(data);
      // chuyển hướng router
      this.router.navigateByUrl('/dashboard/posts');
    })
  }

}
