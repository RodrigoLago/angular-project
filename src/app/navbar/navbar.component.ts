import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  texto:string = 'Mi primer aplicación';
  texto2:string = '';

  cambiarTexto():void{
    this.texto = "El texto cambio"
  }
}

