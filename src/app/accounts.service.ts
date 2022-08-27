import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { IAcounnt } from './account.iterface';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }
  iacount:IAcounnt[]=[
    {name:'foad',password:"1234"},
    {name:'mobin',password:"12355"},
    {name:'amin',password:"1234"},
    {name:'mmad',password:"12554"},
  ]
  addAccount(account:IAcounnt){
    this.iacount.push(account)
  }
}
