import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Blog } from './Blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  constructor(private _http: HttpClient) { }
getBlogs():Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf- 8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("/blogs",requestOptions).pipe(
map(res=>JSON.parse(res) as Array<Blog>),
retry(3),
catchError(this.handleError))
}

  getBlog(blogId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/blogs/" + blogId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Blog>),
      retry(3),
      catchError(this.handleError))
  }

  postBlog(ablog: Blog): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.post<any>("/blogs", JSON.stringify(ablog), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Blog>),
      retry(3),
      catchError(this.handleError))
  }

  putBlog(ablog: Blog): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.put<any>("/blogs", JSON.stringify(ablog), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Blog>),
      retry(3),
      catchError(this.handleError))
  }


  deleteBlog(blogId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.delete<any>("/blogs/" + blogId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Blog>),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

  

}