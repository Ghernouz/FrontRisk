import {NgModule} from '@angular/core';
import{ ConnectForm } from './connexion.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConnexionService} from './connexion.service';
import { RouterModule } from '@angular/router';
import { MapModule } from '../Map/map.module';
import { MapComponent } from '../Map/map.component';

@NgModule({
imports: [FormsModule,
         CommonModule,
         RouterModule.forRoot([
        {path : 'home', component: MapComponent},
])
],
declarations: [ ConnectForm ],
providers:  [ConnexionService],

})


export class ConnexionPage{



}