import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroducaoComponent } from './paginas/introducao/introducao.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LogMatComponent } from './paginas/conteudo/log-mat/log-mat.component';
import { LogMatFluxogramaComponent } from './paginas/conteudo/log-mat/log-mat-fluxograma/log-mat-fluxograma.component';
import { CieComComponent } from './paginas/conteudo/cie-com/cie-com.component';
import { CieComFluxogramaComponent } from './paginas/conteudo/cie-com/cie-com-fluxograma/cie-com-fluxograma.component';
import { IntArtComponent } from './paginas/conteudo/int-art/int-art.component';
import { IntArtFluxogramaComponent } from './paginas/conteudo/int-art/int-art-fluxograma/int-art-fluxograma.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { ReferenciaComponent } from './paginas/referencia/referencia.component';
import { CentralizadorComponent } from './paginas/centralizador/centralizador.component';
import { MenuComponent } from './estrutura/menu/menu.component';
import { TopoComponent } from './estrutura/topo/topo.component';
import { RodapeComponent } from './estrutura/rodape/rodape.component';
import { CarrosselComponent } from './componentes/carrossel/carrossel.component';
import { WizardComponent } from './componentes/wizard/wizard.component';
import { BotaoComponent } from './componentes/carrossel/botao/botao.component';
import { ConteudoComponent } from './componentes/carrossel/conteudo/conteudo.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroducaoComponent,
    InicioComponent,
    LogMatComponent,
    LogMatFluxogramaComponent,
    CieComComponent,
    CieComFluxogramaComponent,
    IntArtComponent,
    IntArtFluxogramaComponent,
    ContatoComponent,
    ReferenciaComponent,
    CentralizadorComponent,
    MenuComponent,
    TopoComponent,
    RodapeComponent,
    CarrosselComponent,
    WizardComponent,
    BotaoComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
