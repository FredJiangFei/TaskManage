import { UnsavedGuard } from './guard/unsave.guard';
import { LoginGuard } from './guard/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductDescComponent } from './product/product-desc/product-desc.component';
import { ProductNameComponent } from './product/product-name/product-name.component';
import { ChatComponent } from './chat/chat.component';
import { ProductResolve } from './guard/product.resolve';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent, outlet: 'aux' },
  {
    path: 'products',
    component: ProductsComponent,
    // canActivate: [LoginGuard],
    // canDeactivate: [UnsavedGuard]
  },
  {
    path: 'products/:id', component: ProductComponent,
    children: [
      { path: '', component: ProductDescComponent },
      { path: ':name', component: ProductNameComponent }
    ],
    resolve: {
      product: ProductResolve
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard,ProductResolve]
})
export class AppRoutingModule { }
