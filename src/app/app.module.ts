import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FooterFinalComponent } from './componentes/footer-final/footer-final.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    CabecalhoComponent,
    BannerComponent,
    ProdutosComponent,
    CatalogoComponent,
    FooterComponent,
    FooterFinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
