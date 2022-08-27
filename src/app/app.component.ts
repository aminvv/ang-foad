import { Component, OnInit } from '@angular/core';
import { IAcounnt } from './account.iterface';
import { AccountsService } from './accounts.service';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message="Hello world";
  accounts:IAcounnt[]=[];
  constructor( private LogingService:LoginService ,private accounyservice:AccountsService){
    this.accounyservice.useradded.subscribe(
      (account:IAcounnt)=>
      alert(account.name
        +account.password)
      )
  }


  ngOnInit(): void {
  this.LogingService.logMessag(this.message)
    this.accounts=this.accounyservice.iacount


 }
}
