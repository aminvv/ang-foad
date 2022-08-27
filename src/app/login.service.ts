import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
 
    logMessag(M:String){
        console.log("log="+M);
        
    }

}
