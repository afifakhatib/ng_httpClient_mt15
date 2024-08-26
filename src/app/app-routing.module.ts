import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PostDashComponent } from './shared/components/post-dash/post-dash.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostComponent } from './shared/components/post/post.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'posts',
    component : PostDashComponent
  },
  {
    path : 'posts/addpost',
    component : PostFormComponent
  },
  {
   path : 'posts/:postId',
   component : PostComponent
  },
  {
    path : 'posts/:postId/editpost',
    component  : PostFormComponent
  },
  {
    path : '',
    redirectTo : 'posts',
    pathMatch : 'full'
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
