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
import { WebsiteComponent } from './layout/website/website.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ProductPageDetailComponent } from './page/product-page-detail/product-page-detail.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { SigninPageComponent } from './page/signin-page/signin-page.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { AdminGuard } from './server/admin.guard';

const routes: Routes = [
  // layout
  {
    path: '', component: WebsiteComponent, children: [
      { path: "", component: HomePageComponent },
      { path: 'blog', component: BlogPageComponent },
      { path: 'posts', component: ProductPageComponent },
      { path: 'posts/:id', component: ProductPageDetailComponent },
      { path: 'contact', component: ContactPageComponent },
    ]
  },
  { path: 'signup', component: SignupPageComponent },
  { path: 'signin', component: SigninPageComponent },



  // dashboard
  {
    path: 'dashboard', canActivate: [AdminGuard], component: DashboardComponent,
    children: [
      {
        path: 'posts', children: [
          { path: '', component: ProductsComponent },
          { path: 'add', component: ProductsAddComponent },
          { path: 'edit/:id', component: ProductsEditComponent },
        ]
      },
      {
        path: 'category', children: [
          { path: '', component: CategoryComponent },
          { path: 'add', component: CategoryAddComponent },
          { path: 'edit/:id', component: CategoryEditComponent },
        ]
      },
      {
        path: 'users', children: [
          { path: '', component: UsersComponent },
        ]
      },
    ]
  },
  { path: "**", component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
