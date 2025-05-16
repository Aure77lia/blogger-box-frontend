import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {POSTS, Post} from '../data/post';
import { catchError } from 'rxjs/operators';
import { environment } from '../environment/environment';

@Injectable()
export class PostService {
  private postsUrl =`${environment.apiUrl}v1/posts`;
  constructor(private http: HttpClient) {}
//   constructor() {}

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`,error);
      return of(result as T);
    };
  }

  getPosts() : Observable<Post[]>{
//     return of(POSTS);
    return this.http.get<Post[]>(this.postsUrl);
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post);
  }
  update(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postsUrl}/${post.id}`, post)
    .pipe(
      catchError(this.handleError<Post>('update',post))
    );
  }
  delete(post: Post): Observable<boolean> {
    return this.http.delete<boolean>(`${this.postsUrl}/${post.id}`);
  }

}

