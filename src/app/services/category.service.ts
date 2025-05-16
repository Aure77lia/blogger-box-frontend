import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {POSTS, Post} from '../data/post';
import { catchError } from 'rxjs/operators';


@Injectable()
export class CategoryService {
  private categoriesUrl = `${environment.apiUrl}v1/categories`;
  constructor(private http: HttpClient) {}
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`,error);
      return of(result as T);
    };
  }

  getAll() : Observable<Category[]>{
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, category);
  }
  update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.categoriesUrl}/${category.id}`, category)
    .pipe(
      catchError(this.handleError<Category>('update',category))
    );
  }
  delete(category: Category): Observable<boolean> {
    return this.http.delete<boolean>(`${this.categoriesUrl}/${category.id}`);
  }


}


