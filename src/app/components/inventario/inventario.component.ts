import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  listProdInv: any[] = [];

  constructor(private _productoService: ProductoService) {
    this.subscription = this._productoService.getProduInv().subscribe(data => {
      this.listProdInv.push(data);
      console.log(data);
    })
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
