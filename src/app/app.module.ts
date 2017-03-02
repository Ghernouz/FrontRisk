import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ConnexionPage } from './Connexion/connexion.module';
import { MapModule} from './Map/map.module';

import { ConnectForm } from './Connexion/connexion.component';

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
    HttpModule,
    MapModule,
    ConnexionPage,
    RouterModule.forRoot([
      {path : '', component: ConnectForm},
    ])],
    
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
