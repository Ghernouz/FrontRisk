import { Component } from '@angular/core';
//import { NgForm } from "@angular/forms";
import { ConnexionService} from "./connexion.service";
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-connect-form',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css'],
    providers:[ConnexionService]
})





export class ConnectForm {
    private title = "Risk-IO";
    constructor(private ConnexionService: ConnexionService,private router: Router){}
    private a=3;
    private RedirectorBool: Boolean;


    checkpass(form : any) {
        console.log(form.value);
        let current_instance : ConnectForm = this;
        this.ConnexionService.PostConnexion(form).then( function(bool){
            if(bool){
            current_instance.redirect();
        }
        else{
            console.log('FALSE');
        }
        });
        
    };

    private redirect(){
        this.router.navigateByUrl('home');
        return 0;
    };



}
