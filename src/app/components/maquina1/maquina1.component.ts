import { Component } from '@angular/core';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-maquina1',
  templateUrl: './maquina1.component.html',
  styleUrls: ['./maquina1.component.css']
})
export class Maquina1Component {
  id = 0;
  nombreProd = '';
  precio = 0;
  formulario: boolean
  textIncorrec: string


  constructor(private _ventasService: VentasService) {
    this.formulario = false
    this.textIncorrec = 'Debes ingresar un precio que corresponda'
  }


  agregarVenta() {

    if (this.precio <= 0) {
      this.formulario = true;
    } else {

      const VENTAS = {
        id: this.id,
        nombreProd: this.nombreProd,
        precio: this.precio
      }
      this._ventasService.agregarVentas(VENTAS);

      this.formulario = false;
      this.nombreProd = '';
      this.precio = 0;
    }
  }
}



