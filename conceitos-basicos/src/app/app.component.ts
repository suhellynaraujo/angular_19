import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { helloWorldComponent } from './helloworld/helloworld.component'
//import { MinhapaginaComponent } from './minhapagina/minhapagina.component'
//import{CalculadoraComponent} from './calculadora/calculadora.component'
import {ListacomprasComponent} from './listacompras/listacompras.component';

@Component({
  selector: 'app-root',
  imports: [ListacomprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
