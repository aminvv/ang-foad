import { Ipost } from './module/postModule';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAcounnt } from './account.iterface';
import { AccountsService } from './accounts.service';
import { LoginService } from './login.service';
import { PostService } from './services/post.service';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = "Hello world";
  accounts: IAcounnt[] = [];
  postArray;

  @ViewChild('postTitle') postTitle!: ElementRef;
  @ViewChild('postBody') postBody!: ElementRef;
  @ViewChild('postId') postId!: ElementRef;
  @ViewChild('a')InputForm!:NgForm


  constructor(private LogingService: LoginService, private accounyservice: AccountsService,
    private postservice: PostService) {


    this.accounyservice.useradded.subscribe(
      (account: IAcounnt) =>
        alert(account.name
          + account.password)
    )
  }


  ngOnInit(): void {
    this.LogingService.logMessag(this.message)
    this.accounts = this.accounyservice.iacount
    this.postservice.getPost().subscribe(q => this.postArray = q)

  }

  addpost() {
    let post: Ipost = { userId: 10, title: '', body: "", id: 0 };
    post.userId = 10
    post.body = this.postBody.nativeElement.value
    post.title = this.postTitle.nativeElement.value

    this.postservice.postpost(post).subscribe
      (response => console.log(response))
  }
  putpost() {
    let post: Ipost = { userId: 10, title: '', body: "", id: 0 };
    post.userId = 10
    post.body = this.postBody.nativeElement.value
    post.title = this.postTitle.nativeElement.value
    let id = +this.postId.nativeElement.value

    this.postservice.putpost(post, id).subscribe(
      (response => console.log(response)))
  }
  OnSubmit(from:NgForm){
    console.log(this.InputForm);
    
  }
}
