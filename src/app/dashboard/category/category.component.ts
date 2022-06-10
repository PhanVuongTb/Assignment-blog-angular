import { Component, OnInit } from '@angular/core';
import { ICategory } from './../../../../models/category.models';
import { CategoryService } from 'src/app/server/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys! : ICategory[]

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }
  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categorys = data;
    })
  }
  onHandleRemove(id: number) {
    this.categoryService.xoaCategory(id).subscribe(() => {
      this.categorys = this.categorys.filter(item => item.id !== id);
      alert("Xóa thành công!")
    })
  
  }
}

