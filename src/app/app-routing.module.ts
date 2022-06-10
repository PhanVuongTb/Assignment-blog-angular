import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './dashboard/category-add/category-add.component';
import { CategoryEditComponent } from './dashboard/category-edit/category-edit.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsAddComponent } from './dashboard/products-add/products-add.component';
import { ProductsEditComponent } from './dashboard/products-edit/products-edit.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { UsersEditComponent } from './dashboard/users-edit/users-edit.component';
import { UsersComponent } from './dashboard/users/users.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ProductPageDetailComponent } from './page/product-page-detail/product-page-detail.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { SigninPageComponent } from './page/signin-page/signin-page.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';

const routes: Routes = [
  // layout
  { path: '', component: HomePageComponent  },
  { path: 'signup', component: SignupPageComponent  },
  { path: 'signin', component: SigninPageComponent  },
  { path: 'products', component: ProductPageComponent },
  { path: 'products/:id', component: ProductPageDetailComponent },
  { path: "**", component: PageNotFoundComponent },

  // dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/posts', component: ProductsComponent },
  { path: 'dashboard/posts/add', component: ProductsAddComponent },
  { path: 'dashboard/posts/edit/:id', component: ProductsEditComponent },

  { path: 'dashboard/category', component: CategoryComponent },
  { path: 'dashboard/category/add', component: CategoryAddComponent },
  { path: 'dashboard/category/edit/:id', component: CategoryEditComponent},

  { path: 'dashboard/users', component: UsersComponent },
  { path: 'dashboard/users/edit/:id', component: UsersEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
