import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { Ipost } from '../../model/posts.interface';

@Component({
  selector: 'app-post-dash',
  templateUrl: './post-dash.component.html',
  styleUrls: ['./post-dash.component.scss']
})
export class PostDashComponent implements OnInit {

  postArr !: Ipost[] 

  constructor(
    private _postService : PostsService
  ) { }

  ngOnInit(): void {
     this.getPostArr()
  }

  getPostArr(){
    this._postService.fetchAllPosts()
       .subscribe((data : Ipost[]) => {
          // console.log(data);
          this.postArr = data
       })
  }


}
