import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import  jsPDF from 'jspdf';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('impPdf', { static: true }) el!: ElementRef

  subscription: Subscription;
  sumpro: number;
  precio: number;
  id: number;
  listProd: any[] = [];
  

  constructor(private _ventasService: VentasService) {
    this.sumpro = 0;
    this.precio = 0;
    this.id = 0;
    this.subscription = this._ventasService.getVentas().subscribe(data => {
      this.listProd.push(data)
      this.sumpro = this.sumpro + parseInt(data.precio)
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.sumpro = this._ventasService.sumpro;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  elimnarPro(precio: any): void {
    /*this.sumpro = 0;*/
    /*this.precio = 0;*/
    var answer = confirm("Desea eliminar este item?")
    if (answer) {
      this.listProd.splice(precio - 1 )
      this.sumpro = this.sumpro - parseInt(precio)
      this.sumpro = this.precio
    }
  }

  ImprimirPdf() {
    let pdf = new jsPDF('p', 'pt', 'letter');
    var margin = 15;
    var scale = (pdf.internal.pageSize.width - margin * 2) / document.body.scrollWidth;

    pdf.html(this.el.nativeElement, {
      x: margin,
      y: margin,
      html2canvas: {
        scale: scale,
      },
      callback: (pdf) => {
        pdf.save("Factura")
      }
    })

  }
  
}
