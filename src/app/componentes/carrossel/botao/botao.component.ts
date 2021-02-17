import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faEmptyCircle, IconDefinition as EmptyIconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() valor: number = -1;

  @Input() atual: number = -1;

  @Output() valorEmitido: EventEmitter<number> = new EventEmitter<number>();

  public faCirculo: IconDefinition = faCircle;

  public faCirculoOco: EmptyIconDefinition = faEmptyCircle;

  constructor() { }

  ngOnInit(): void {
  }

  public mudarCena(): void {
    this.valorEmitido.emit(this.valor);
  }

}
