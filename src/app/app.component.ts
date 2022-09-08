import { Ipost } from './module/postModule';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAcounnt } from './account.iterface';
import { AccountsService } from './accounts.service';
import { LoginService } from './login.service';
import { PostService } from './services/post.service';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = "Hello world";
  accounts: IAcounnt[] = [];
  postArray;
  defulteGender = "Female";
  color = '';
  animals = ['dog', 'horse', 'cat', 'bee', 'elephant',];
  User={
    username:'',
    email:'',
    gender:'',
    color:'',
    animal:'',
  }
  ISsubmitted=false;
  gender=['male','female'];
  inputForm!:FormGroup;

  @ViewChild('postTitle') postTitle!: ElementRef;
  @ViewChild('postBody') postBody!: ElementRef;
  @ViewChild('postId') postId!: ElementRef;
  @ViewChild('a') InputForm!: NgForm


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

    this.inputForm= new FormGroup({
      'Info' :new FormGroup({
        'Username': new FormControl(null ,Validators.required),
        'Email':new FormControl(null,[Validators.required, Validators.email]),
      }),

      'Gender' :new FormControl('male'),
      'Colors':new FormArray ([])
    })

  }

  OnAddColorClick(){
    const controle= new FormControl(null,Validators.required);
 return( this.inputForm.get('Colors')as FormArray).controls
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
  OnSubmit(from: NgForm) {
    console.log(this.InputForm);
    this.ISsubmitted=true
    this.User.username=this.InputForm.value.GroupUser.Username
    this.User.email=this.InputForm.value.GroupUser.Email
    this.User.gender=this.InputForm.value.Gender
    this.User.color=this.InputForm.value.color
    this.User.animal=this.InputForm.value.animal
    this.InputForm.reset()
  }
  onclick() {
    // this.InputForm.setValue({
    //   GroupUser: {
    //     Username: 'amin',
    //     Email: ''
    //   },
    //   Gender: '',
    //   color: '',
    //   animal: ''
    // });

    this.InputForm.form.patchValue({
            GroupUser:{ 
         Username: 'amin'
            }
    })
  }

  onsubmit(){
    console.log(this.inputForm);
    
  }
}
