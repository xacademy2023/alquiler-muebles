import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces/orders';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private myAppUrl: string;
    private myApiUrl: string;

    constructor(private http: HttpClient) {
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = 'orders';
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.myAppUrl}${this.myApiUrl}` ) 
    }

    cancelOrder(id: number): Observable<void> {
        return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
    }

    acceptOrder(order: Order): Observable<void> {
        return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, order)
    }

    getOrder(id: number): Observable<Order> {
        return this.http.get<Order>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
    }

    rejectOrder(id: number, orderStatus: string): Observable<void> {
        return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, orderStatus)
    }
}
