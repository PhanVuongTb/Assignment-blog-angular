import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../../../models/category.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URL = `http://localhost:3000/category/`

  constructor(private http: HttpClient) { }

  getCategory(id: any): Observable<ICategory>{
    return this.http.get<ICategory>(`${this.URL}/${id}`);
  }
  getCategoryList(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${this.URL}`);
  }
  xoaCategory(id: any): Observable<ICategory>{
    return this.http.delete<ICategory>(`${this.URL}/${id}`);
  }
  addCategory(post: ICategory): Observable<ICategory>{
    return this.http.post<ICategory>(`${this.URL}`,post);
  }
  putCategory(post: ICategory): Observable<ICategory>{
    return this.http.put<ICategory>(`${this.URL}/${post.id}`,post );
  }
}
