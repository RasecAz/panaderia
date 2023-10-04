import { Component } from '@angular/core';
import { AuthenticService } from './services/authentic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cacino';

  constructor(private loginApp: AuthenticService) {

  }

  public visualizarMenu() {
    return this.loginApp.habilLogin();
  }
}
