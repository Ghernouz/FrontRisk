import {NgModule} from '@angular/core';
import{ JeuComponent } from '../Jeu/jeu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapComponent } from '../Map/map.component';
import { Jeu } from '../Jeu/jeu.module';
import {ConnectForm } from '../Connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../Menu/menu.module';
import { MenuComponent} from '../Menu/menu.component'
@NgModule({
imports: [
         CommonModule,
         Jeu,
         MenuModule,
         FormsModule,
         RouterModule.forRoot([
        {path : 'home', component: MenuComponent},{path : 'game', component : JeuComponent}
])
],
declarations: [ ConnectForm ],

})


export class ConnexionPage{

}
