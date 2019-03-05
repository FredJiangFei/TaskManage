import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Product } from "../products/product";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductResolve implements Resolve<Product> {
    constructor(private route: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Product | Observable<Product> | Promise<Product> {
        let id: number = route.params['id'];

        if (id == 1) {
            return new Product(1, 'iphone');
        }
        else {
            this.route.navigate(['/home']);
            return undefined;
        }
    }
}