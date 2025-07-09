import { Component, InputSignalWithTransform,signal } from '@angular/core';
import { Interfaz } from '../interfaz/interfaz';
import { Controles } from '../controles/controles';

@Component({
  selector: 'app-velocimetro',
  imports: [Interfaz, Controles],
  templateUrl: './velocimetro.html',
  styleUrl: './velocimetro.css'
})
export class Velocimetro {
   speed = signal(0);

  acelerar = () => this.speed.update(v => v + 5);
  frenar = () => {
  const velocidadActual = this.speed();        
  let nuevaVelocidad = velocidadActual - 3;     
  if (nuevaVelocidad < 0) {
    nuevaVelocidad = 0;                         
  }
  this.speed.set(nuevaVelocidad);              
};
  reiniciar = () => this.speed.set(0);
}
