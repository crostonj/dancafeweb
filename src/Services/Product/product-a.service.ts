import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { InventoryItem } from 'src/Model/models';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductAService {

  private ProductUrl: string;
  private items: InventoryItem[];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
      this.ProductUrl = 'https://virtserver.swaggerhub.com/crostonj/Product/1.0.0/inventory';
  }

  getProducts(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.ProductUrl, this.httpOptions);
  }

  getProductDetails(id: number): Observable<InventoryItem>{
    return this.http.get<InventoryItem>(this.ProductUrl, this.httpOptions)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
