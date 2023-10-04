import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Maquina1Component } from './components/maquina1/maquina1.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { DesayunoComponent } from './components/desayuno/desayuno.component';

const routes: Routes =
  [
    {
      path: "",     
      component: VentasComponent,
      pathMatch: "full"
    },
    {
      path: "maquina1",
      component: Maquina1Component,     
    },
    {
      path: "inventario",
      component: InventarioComponent,
    },
    {
      path: "ventas",
      component: VentasComponent,
    },
    {
    path: "producto",
      component: ProductoComponent,
    },
    {
      path: "desayuno",
      component: DesayunoComponent,
    },

    {
      path: "login",
      component: LoginComponent,
    },
    {
      path: "**",
      pathMatch: "full",
      redirectTo: "ventas"
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
