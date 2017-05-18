import {NgModule} from '@angular/core';
import{ JeuComponent } from './jeu.component';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../Map/map.component';
import { MapModule } from '../Map/map.module';
import {FormsModule} from '@angular/forms';


@NgModule({
imports: [
         CommonModule,
         MapModule,
         FormsModule
],
declarations: [ JeuComponent, MapComponent ],

})


export class Jeu{



}


