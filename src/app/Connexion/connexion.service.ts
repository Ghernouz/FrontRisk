import {Injectable} from "@angular/core";
import {  Http } from '@angular/http';
//import { CommonModule } from '@angular/common';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/toPromise';


@Injectable()


export class ConnexionService{
    private url : string = " url ";
    constructor(private http:Http){}

    PostConnexion(form:NgForm): Promise<Boolean>{
            if(form.value.email==="yanis@ghernouz.fr" && form.value.password==="dev"){
                return (Promise.resolve(true));
            }
            else{
                return (Promise.resolve(false));
            }
    }
}