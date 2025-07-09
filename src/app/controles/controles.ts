import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-controles',
  imports: [],
  templateUrl: './controles.html',
  styleUrl: './controles.css'
})
export class Controles {
  @Input() onAcelerar!: () => void;
  @Input() onFrenar!: () => void;
  @Input() onReiniciar!: () => void;
}
