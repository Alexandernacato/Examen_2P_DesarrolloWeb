import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-interfaz',
  imports: [],
  templateUrl: './interfaz.html',
  styleUrl: './interfaz.css'
})
export class Interfaz {
  @Input() speed!: number;

  getClaseVelocidad(): string {
  const velocidad = this.speed;

  if (velocidad <= 30) {
    return 'velocimetro low-speed';
  } else if (velocidad <= 70) {
    return 'velocimetro medium-speed';
  } else if (velocidad <= 120) {
    return 'velocimetro high-speed';
  } else {
    return 'velocimetro danger-speed';
  }
  }
}
