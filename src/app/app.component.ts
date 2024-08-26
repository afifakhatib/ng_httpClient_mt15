import { Component, inject, OnInit } from '@angular/core';
import { LoaderService } from './shared/service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'http_mt15';

  isLoading : boolean = false

  private _loader = inject(LoaderService)

  ngOnInit(): void {
       this._loader.loaderStatus$.subscribe(res => {
        this.isLoading = res
       })
   }
}
