import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                "x-rapidapi-key": "YOUR RAPID API KEY",
                "x-rapidapi-host": "YOUR APIDAPI HOST",
            },
            setParams: {
                key: 'YOUR RAWG.IO KEY'
            }
        });
        return next.handle(req);
    }
}