import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../../../models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL = `http://localhost:3000/posts/`

  constructor(private http: HttpClient) { }

  getPost(id: any): Observable<IPost>{
    return this.http.get<IPost>(`${this.URL}/${id}`);
  }
  getPostList(): Observable<IPost[]>{
    return this.http.get<IPost[]>(`${this.URL}`);
  }
  xoaPost(id: any): Observable<IPost>{
    return this.http.delete<IPost>(`${this.URL}/${id}`);
  }
  addPost(post: IPost): Observable<IPost>{
    return this.http.post<IPost>(`${this.URL}`,post);
  }
  putPost(post: IPost): Observable<IPost>{
    return this.http.put<IPost>(`${this.URL}/${post.id}`,post );
  }
}
