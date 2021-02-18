import { Component, OnInit } from '@angular/core';
import { faEnvelopeSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsappSquare, IconDefinition as IconDefinitionBrands } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  public faEnvelopeSquare: IconDefinition = faEnvelopeSquare;
  public faLinkedin: IconDefinitionBrands = faLinkedin;
  public faWhatsappSquare: IconDefinitionBrands = faWhatsappSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
