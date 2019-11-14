import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { ChicagoComponent } from './chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    SeattleComponent,
    DallasComponent,
    DcComponent,
    SanJoseComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
