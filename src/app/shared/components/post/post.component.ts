import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { Ipost } from '../../model/posts.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';
import { DailogService } from '../../service/dailog.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postId !: string;
  postObj !: Ipost | undefined;

  constructor(
    private _postService : PostsService,
    private _route : ActivatedRoute,
    private _dailogService : DailogService,
    private _snackbar : SnackbarService,
    private _router : Router
  ) { }

  ngOnInit(): void {
      this.getSinglePost()
  }

  getSinglePost(){
      this.postId = this._route.snapshot.params['postId']
      if(this.postId){
        this._postService.fetchPost(this.postId)
           .subscribe((res : Ipost) => {
            this.postObj = res
           })
      }
  }

  onRemovePost(){
    this._dailogService.openDialog(`Are You Sure ?` , `Do you want to remove this post ${this.postObj?.title}`)
         .subscribe(res=>{
          if(res){
             this._postService.removePost(this.postId)
             .subscribe(res=> console.log(res));
             this._router.navigate(['posts'])
             this._snackbar.openSnackbar(`${this.postObj?.title} removed successfully`)
          }
         })
  }

}
