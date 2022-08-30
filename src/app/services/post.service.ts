import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost } from '../module/postModule';


@Injectable({
  providedIn: 'root'
})
export class PostService {

   url="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getPost(){
    
    return this.http.get(this.url)
  }
  postpost(post:Ipost){
    const header = new HttpHeaders({'content-type':'aplication/json'})
    return this.http.post(this.url,post,{headers:header})
  }

  putpost(post:Ipost,id:number){
    return this.http.put(this.url+"/"+ id,post)

  }
}
