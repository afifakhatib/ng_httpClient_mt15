import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../model/posts.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  BASE_URL = `${environment.BASE_URL}`;
  POST_URL = `${this.BASE_URL}/posts.json`

  constructor(
    private _http: HttpClient
  ) { }

  fetchAllPosts(): Observable<Ipost[]> {
    // return this.
    return this._http.get<Ipost[]>(this.POST_URL)
      .pipe(
        map(res => {
          let postArr = []
          for (const key in res) {
            postArr.push({ ...res[key], id: key })
          }
          return postArr
        })
      )
  }

  fetchPost(id: string): Observable<Ipost> {
    const SINGLE_POST_URL = `${this.BASE_URL}/posts/${id}.json`
    return this._http.get<Ipost>(SINGLE_POST_URL)
  }

  createPost(newPost: Ipost): Observable<{ name: string }> {
    return this._http.post<{ name: string }>(this.POST_URL, newPost)
  }

  updatePost(updatedPost: Ipost): Observable<Ipost> {
    const UPDATE_URL = `${this.BASE_URL}/posts/${updatedPost.id}.json`
    return this._http.patch<Ipost>(UPDATE_URL, updatedPost)
  }


  removePost(id : string) : Observable<null> {
    const REMOVE_URL = `${this.BASE_URL}/posts/${id}.json`
    return this._http.delete<null>(REMOVE_URL)
  }



}
