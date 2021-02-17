import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faCalculator, faLaptop, faRobot, faAddressBook, faBook, faDotCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public faInicio: IconDefinition;
  public faLogMat: IconDefinition;
  public faCieCom: IconDefinition;
  public faIntArt: IconDefinition;
  public faContato: IconDefinition;
  public faCentralizador: IconDefinition;
  public faReferencia: IconDefinition;

  constructor(public router: Router) {
    this.faInicio = faHome;
    this.faLogMat = faCalculator;
    this.faCieCom = faLaptop;
    this.faIntArt = faRobot;
    this.faReferencia = faBook;
    this.faCentralizador = faDotCircle;
    this.faContato = faAddressBook;
  }

  ngOnInit(): void {
  }

}
