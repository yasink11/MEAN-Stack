import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { CategoryModel } from '../categories/model/category.model';
import { RequestModel } from 'src/app/common/models/request.model';
import { ProductModel } from '../products/models/product.model';
import { CategoryService } from '../categories/service/category.service';
import { ProductService } from '../products/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from '../baskets/services/basket.service';
import { BasketModel } from '../baskets/models/basket.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: CategoryModel[] = [];
  request: RequestModel = new RequestModel();
  products: ProductModel[] = [];

  constructor(
    private _categorysrv: CategoryService,
    private _productsrv: ProductService,
    private _basketsrv: BasketService,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getAll();
  }

  getAll(){
    this._productsrv.getAllForHomePage(this.request, res=> this.products = res);
  }

  getCategories() {
    this._categorysrv.getAll(res => this.categories = res);
  }

  changeCategory(categoryId: string, categoryName: string){
    this.request.categoryName = categoryName;
    this.request.categoryId = categoryId;
    this.getAll();
  }

  addBasket(productId: string, price: number){
    let model = new BasketModel();
    model.productId = productId;
    model.price = price;
    model.quantity = 1;
    this._basketsrv.add(model, res=> {
      this._toastr.success(res.message);
      this.getAll();
    });
  }

}
