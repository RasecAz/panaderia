import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticService {

  private ingresar: boolean = false;

  constructor() { }

  public ingresarAplicativo(obj: any): boolean {
    this.ingresar = obj.user == 'CLSolution@Victor.com' && obj.pass == '1234';
    return this.ingresar
  }

  public habilLogin() {
    return this.ingresar;
  }
}
