import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  producto: string;
  precio: number;
  cantidad: number


  constructor(private _productoService: ProductoService) {

    this.producto = '';
    this.precio = 0;
    this.cantidad = 0
  }

  agregarProd() {

    const PRODUC = {
      producto: this.producto,
      precio: this.precio,
      cantidad: this.cantidad
    }
    this._productoService.agregarProd(PRODUC);
    console.log(PRODUC)
  }
}
