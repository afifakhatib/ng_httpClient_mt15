import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashComponent } from './shared/components/post-dash/post-dash.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostComponent } from './shared/components/post/post.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { GetConfirmationComponent } from './shared/components/get-confirmation/get-confirmation.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './shared/service/authInterceptor.service';
 
@NgModule({
  declarations: [
    AppComponent,
    PostDashComponent,
    PostCardComponent,
    PostFormComponent,
    PostComponent,
    HomeComponent,
    NavbarComponent,
    GetConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
