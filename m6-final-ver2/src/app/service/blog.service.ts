import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Blog} from '../model/blog';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getAllBlog(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(`${API_URL}/blog`);
  }
  getBlogById(id): Observable<Blog> {
    return this.httpClient.get<Blog>(`${API_URL}/blog/${id}`);
  }
  getAllBlogByUserId(id): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(`${API_URL}/blog/user/${id}`);
  }
  addNewBlog(data): Observable<Blog> {
    return this.httpClient.post<Blog>(`${API_URL}/blog/create`, data);
  }
  updateBlog(id, data): Observable<Blog> {
    return this.httpClient.put<Blog>(`${API_URL}/blog/update/${id}`, data);
  }
  removeBlog(id): Observable<Blog> {
    return this.httpClient.delete<Blog>(`${API_URL}/blog/${id}`);
  }
  removeAllBlogByUserId(id): Observable<Blog> {
    return this.httpClient.delete<Blog>(`${API_URL}/blog/remove/${id}`);
  }
  removeAll(): Observable<Blog> {
    return this.httpClient.delete(`${API_URL}/blog/remove`);
  }
}
