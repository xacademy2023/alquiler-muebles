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

    deleteOrder(id: string): Observable<void> {
        return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
    }

    getOrder(id: number): Observable<Order> {
        return this.http.get<Order>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
    }

    updateOrder(id: string, updatedOrder: Order): Observable<void> {
        return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, updatedOrder)
    }
}
