import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  sumpro: number;
  private venta$ = new Subject<any>();
  listProd: any[] = [];

  constructor() {
    this.sumpro = 0;
  }

  agregarVentas(ventas: any) {
    this.sumpro = this.sumpro - parseInt(ventas.precio)
    this.venta$.next(ventas);
  }

  getVentas(): Observable<any> {
    return this.venta$.asObservable();
  }

  elimnarPro(venta: any) {
    this.sumpro = this.sumpro - parseInt(venta.precio)
  }
}
