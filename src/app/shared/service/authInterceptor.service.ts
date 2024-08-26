import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { delay, finalize, Observable } from "rxjs";
import { LoaderService } from "./loader.service";
import { inject, Injectable } from "@angular/core";


@Injectable({
    providedIn : 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(
        private _loader: LoaderService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this._loader.loaderStatus$.next(true)

        const token = `JWT token get from LS`

        const reqClone = req.clone({
            setHeaders: {
                "content-type": "application/json",
                "Token": token
            }
        })
        return next.handle(reqClone)
            .pipe(
                delay(500),
                finalize(() => {
                    this._loader.loaderStatus$.next(false)
                })
            )

    }

}