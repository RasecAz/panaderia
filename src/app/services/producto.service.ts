import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private prodInventario$ = new Subject<any>()

  constructor() { }

  agregarProd(producto: any) {
    this.prodInventario$.next(producto);
  }

  getProduInv(): Observable<any> {
    return this.prodInventario$.asObservable();
  }
}
