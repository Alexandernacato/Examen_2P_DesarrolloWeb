import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Velocimetro } from './velocimetro/velocimetro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Velocimetro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Nacato_Freddy_C';
}
