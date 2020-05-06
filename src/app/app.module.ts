import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { Body1ComponentComponent } from './body1-component/body1-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { RechercheComponentComponent } from './recherche-component/recherche-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    HeaderComponentComponent,
    Body1ComponentComponent,
    FooterComponentComponent,
    ButtonComponentComponent,
    RechercheComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
