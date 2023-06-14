import { Routes } from "@angular/router";

export const routes: Routes = [
{
  path:'login',
  loadComponent:()=>import("./Components/auth/components/login/login.component").then(x=>x.LoginComponent)
},
{
  path:'register',
  loadComponent:()=>import("./Components/auth/components/register/register.component").then(x=>x.RegisterComponent)
},
{
    path:'',loadComponent:()=>import('./Components/layouts/layouts.component').then(x=>x.LayoutsComponent),
  children:[
    {
      path:'',loadComponent:()=>import('./Components/home/home.component').then(x=>x.HomeComponent)
    },
    {
      path:'categories', loadComponent:()=>import('./Components/categories/categories.component').then(x=>x.CategoriesComponent)
    },
    {
      path:'products',loadComponent:()=>import('./Components/products/components/products/products.component').then(x=>x.ProductsComponent)
    },
    {
      path:'products/add',loadComponent:()=>import('./Components/products/components/product-add/product-add.component').then(x=>x.ProductAddComponent)
    },
    {
      path:'products/update/:value',loadComponent:()=>import('./Components/products/components/product-update/product-update.component').then(x=>x.ProductUpdateComponent)
    },
    {
      path:'baskets',loadComponent:()=>import('./Components/baskets/components/baskets/baskets.component').then(x=>x.BasketsComponent)
    },
    {
      path:'orders',loadComponent:()=>import('./Components/orders/components/orders/orders.component').then(x=>x.OrdersComponent)
    }
  ]
}
]
