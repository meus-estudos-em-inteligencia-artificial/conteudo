import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralizadorComponent } from './paginas/centralizador/centralizador.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { CieComComponent } from './paginas/conteudo/cie-com/cie-com.component';
import { IntArtComponent } from './paginas/conteudo/int-art/int-art.component';
import { LogMatComponent } from './paginas/conteudo/log-mat/log-mat.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { IntroducaoComponent } from './paginas/introducao/introducao.component';
import { ReferenciaComponent } from './paginas/referencia/referencia.component';

const routes: Routes = [
  { path: 'introducao', component: IntroducaoComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'log-mat', component: LogMatComponent},
  { path: 'cie-com', component: CieComComponent},
  { path: 'int-art', component: IntArtComponent},
  { path: 'centralizador', component: CentralizadorComponent},
  { path: 'referencia', component: ReferenciaComponent},
  { path: 'contato', component: ContatoComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, 
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }