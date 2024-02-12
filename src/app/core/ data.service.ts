import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { ICustomer, IOrder, IProduct } from '../../app/shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(catchError(this.handleError));
  }

  getCustomer(id: number): Observable<ICustomer | null> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json').pipe(
      map((customers) => {
        let customer = customers.filter((cust: ICustomer) => cust.id === id);
        return customer && customer.length ? customer[0] : null;
      }),
      catchError(this.handleError)
    );
  }

  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('../../assets/orders.json').pipe(
      map((orders) => {
        let custOrders = orders.filter(
          (order: IOrder) => order.customerId === id
        );
        return custOrders;
      }),
      catchError(this.handleError)
    );
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http
      .get<any[]>('https://dummyjson.com/products')
      .pipe(catchError(this.handleError));
  }

  setProduct(value: string): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://dummyjson.com/products/add', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: value,
          /* other product data */
        }),
      })
      .pipe(catchError(this.handleError));
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http
      .get<IProduct>(`https://dummyjson.com/products/${id}`)
      .pipe(catchError(this.handleError));
  }

  getProductCategories(): Observable<any[]> {
    return this.http
      .get<any>('https://dummyjson.com/products/categories')
      .pipe(catchError(this.handleError));
  }

  getProductsBySearch(value: string): Observable<IProduct[] | IProduct> {
    return this.http
      .get<IProduct[] | IProduct>(
        `https://dummyjson.com/products/search?q=${value}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => new Error(errMessage));
    }
    return throwError(() => new Error(error || 'Node.js server error'));
  }
}
