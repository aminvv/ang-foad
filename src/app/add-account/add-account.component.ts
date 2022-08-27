import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAcounnt } from '../account.iterface';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  @ViewChild('username')username!:ElementRef;
  @ViewChild('password')password!: ElementRef;
  constructor(private accountservice:AccountsService ) { }

  ngOnInit(): void {
  }
 addNewAccount(){
 let a:IAcounnt={name:this.username.nativeElement.value,password:this.password.nativeElement.value}
 this.accountservice.addAccount(a)
 console.log("ss");

 console.log(a);
 this.accountservice.useradded.emit(a)


 }
}
