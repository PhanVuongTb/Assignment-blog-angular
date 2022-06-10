import { Component, OnInit } from '@angular/core';
import { ICategory } from './../../../../models/category.models';
import { CategoryService } from 'src/app/server/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categorys: ICategory = {
    id: 0,
    name: "",
  }
  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // nếu có id thì call service get product để lấy thông tin trả về form
      this.categoryService.getCategory(id).subscribe(data => this.categorys = data);
    }
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
     this.categoryService.addCategory(this.categorys).subscribe(data => {
      console.log(data);
      
      // chuyển hướng router
      this.router.navigateByUrl('/dashboard/category');
      alert("Thêm thành công!")
    })
  }

}
