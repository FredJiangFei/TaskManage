import { NewCommentCommand } from './../_commands/newComment.command';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Comment } from '../_models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentsSubject = new BehaviorSubject<Comment[]>([]);
  comments$ = this.commentsSubject.asObservable().pipe(map(comments => comments.sort((a: Comment, b: Comment) => {
    if (a.created < b.created) {
      return 1;
    }
    if (a.created > b.created) {
      return -1;
    }
    return 0;
  })));

  constructor(private http: HttpClient) { }

  add(comment: NewCommentCommand) {
    return this.http.post<Comment>(`${environment.baseUrl}/comments`, comment)
      .pipe(
        tap(c => {
          const currentValue = this.commentsSubject.value;
          const updatedValue = [...currentValue, c];
          this.commentsSubject.next(updatedValue);
        })
      );
  }

  delete(id: number) {
    return this.http.delete<Comment>(`${environment.baseUrl}/comments/${id}`)
      .pipe(
        tap(_ => {
          const currentValue = this.commentsSubject.value;
          const updatedValue = currentValue.filter(c => c.id !== id);
          this.commentsSubject.next(updatedValue);
        })
      );
  }

  getCommentsByTaskId(id: number) {
    return this.http.get<Comment[]>(`${environment.baseUrl}/comments/${id}`)
      .pipe(
        tap(comments => this.commentsSubject.next(comments))
      );
  }
}
