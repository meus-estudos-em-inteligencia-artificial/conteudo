import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {

  @Input() nomeBase: string = '';

  @Input() extensao: string = '';

  @Input() atual: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}
