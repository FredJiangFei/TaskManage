import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../_models/item';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.baseUrl}/items`);
  }

  add(item: Item): Observable<Item> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Item>(`${environment.baseUrl}/items`, item, { headers: headers })
      .pipe(
        tap(data => console.log('createItem: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  update(item: Item): Observable<Item> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Item>(`${environment.baseUrl}/items/${item.id}`, item, { headers: headers })
      .pipe(
        tap(data => console.log('updateItem: ' + JSON.stringify(data))),
        map(() => item),
        catchError(this.handleError)
      );
  }

  delete(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<Item>(`${environment.baseUrl}/items/${id}`, { headers: headers })
      .pipe(
        tap(data => console.log('deleteItem: ' + id)),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
