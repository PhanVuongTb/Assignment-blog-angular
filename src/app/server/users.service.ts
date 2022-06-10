import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../../../models/users.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = `http://localhost:3000/users/`

  constructor(private http: HttpClient) { }

  getUser(id: any): Observable<IUser>{
    return this.http.get<IUser>(`${this.URL}/${id}`);
  }
  getUserList(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.URL}`);
  }
  xoaUser(id: any): Observable<IUser>{
    return this.http.delete<IUser>(`${this.URL}/${id}`);
  }
  addUser(post: IUser): Observable<IUser>{
    return this.http.post<IUser>(`${this.URL}`,post);
  }
  putUser(post: IUser): Observable<IUser>{
    return this.http.put<IUser>(`${this.URL}/${post.id}`,post );
  }

  signin(user : IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3000/signin`, user)
  }
}
