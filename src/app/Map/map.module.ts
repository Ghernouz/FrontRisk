import {NgModule } from '@angular/core';
import {MapComponent} from './map.component';
import { AgmCoreModule } from 'angular2-google-maps/core'
import {CommonModule} from '@angular/common'
@NgModule({
    imports : [ 
        CommonModule,
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDgfJOKpy9MJKcr5xaVmZC4ZqbBCq83vuc'
        }),
    ],
    declarations: [ MapComponent ],
    providers: []
})

export class MapModule{





}