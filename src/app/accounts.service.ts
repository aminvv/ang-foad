import { formatDate } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';
import { IAcounnt } from './account.iterface';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  
  iacount:IAcounnt[]=[
    {name:'foad',password:"1234"},
    {name:'mobin',password:"12355"},
    {name:'amin',password:"1234"},
    {name:'mmad',password:"12554"},
  ]
  constructor(private logingService:LoginService){}

  useradded =new EventEmitter<IAcounnt>();
  
  addAccount(account:IAcounnt){
    this.iacount.push(account)
    this.logingService.logMessag(account.name)
  }
}
