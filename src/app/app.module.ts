import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { ProductsAddComponent } from './dashboard/products-add/products-add.component';
import { ProductsEditComponent } from './dashboard/products-edit/products-edit.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductPageDetailComponent } from './page/product-page-detail/product-page-detail.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { CategoryEditComponent } from './dashboard/category-edit/category-edit.component';
import { CategoryAddComponent } from './dashboard/category-add/category-add.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { SigninPageComponent } from './page/signin-page/signin-page.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { HeaderAdminComponent } from './dashboard/header-admin/header-admin.component';
import { UsersComponent } from './dashboard/users/users.component';
import { UsersEditComponent } from './dashboard/users-edit/users-edit.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { WebsiteComponent } from './layout/website/website.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ProductsComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductPageComponent,
    ProductPageDetailComponent,
    HomePageComponent,
    CategoryEditComponent,
    CategoryAddComponent,
    CategoryComponent,
    PageNotFoundComponent,
    SigninPageComponent,
    SignupPageComponent,
    HeaderAdminComponent,
    UsersComponent,
    UsersEditComponent,
    BlogPageComponent,
    ContactPageComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
