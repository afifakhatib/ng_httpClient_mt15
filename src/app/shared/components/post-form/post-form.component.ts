import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from '../../model/posts.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../service/posts.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  isInEditMode : boolean = false

  postForm !: FormGroup
  postId !: string;
  postObj !: Ipost

  userIdArr : number[] = [1,2,3,4,5,6,7,8,9,10]

  constructor(
    private _route : ActivatedRoute,
    private _postServcie : PostsService,
    private _router : Router,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.createPostForm()
    this.editModehandling()
  }

  createPostForm(){
    this.postForm = new FormGroup({
       content : new FormControl(null , [Validators.required]),
       title : new FormControl(null , [Validators.required]),
       userId : new FormControl(null , [Validators.required]),
    })
  }

  editModehandling(){
       this.postId = this._route.snapshot.params['postId']
       if(this.postId){
        this._postServcie.fetchPost(this.postId)
         .subscribe(res => {
          this.postObj = res
         this.postForm.patchValue(this.postObj)
         })
         this.isInEditMode = true
       }else{
        this.isInEditMode = false
       }
  }

  getControls(control:string){
    return this.postForm.get(control) as FormControl
  }

get getContent(){
  return this.postForm.get('content') as FormControl
}

get getTitle(){
  return this.postForm.get('title') as FormControl
}

get getUserId(){
  return this.postForm.get('userId') as FormControl
}
  

onPostAddUpdate(){
  if(this.postForm.valid){
    //api call for add post
    if(!this.isInEditMode){
       let newPost = this.postForm.value
       this._postServcie.createPost(newPost)
         .subscribe(res => {
            console.log(res);
            this._router.navigate(['posts'])
            this._snackbar.openSnackbar(`New Post ${newPost.title} added successfully!!`)
       })
    }
    //api call for update post
    else{
      let updatedObj = {...this.postForm.value , id : this.postId}
      this._postServcie.updatePost(updatedObj)
        .subscribe(res => {
          console.log(res);
          this._router.navigate(['posts'])
          this._snackbar.openSnackbar(`Post ${this.postObj.title} is updated to ${updatedObj.title} successfully!!!`)
        })
    }
  }
}


}
