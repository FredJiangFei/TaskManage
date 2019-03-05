import { CanDeactivate } from "@angular/router";
import { ProductsComponent } from "../products/products.component";

export class UnsavedGuard implements CanDeactivate<ProductsComponent>{

    canDeactivate(component: ProductsComponent) {
        return window.confirm('not saved');
    }
}