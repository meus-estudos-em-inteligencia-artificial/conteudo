import { Component, OnInit, Input } from '@angular/core';
import { faAngleDoubleLeft, faAngleDoubleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {

  @Input() nomeBase: string = '';

  @Input() extensao: string = '';

  public faAnguloEsq: IconDefinition = faAngleDoubleLeft; 

  public faAnguloDir: IconDefinition = faAngleDoubleRight;

  public atual: number = 1;

  public incrementarAtual(): void {
    this.atual++;
  }

  public decrementarAtual(): void {
    if (this.atual > 1) { this.atual-- } else { return };
  }

  public mudarAtual(valor: number): void {
    this.atual = valor;
  }

  constructor() { }



  ngOnInit(): void {
  }

}
