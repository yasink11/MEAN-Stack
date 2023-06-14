import { CategoryModel } from "src/app/Components/categories/model/category.model";

export class ProductModel{
  _id: string = "";
  name: string = "";
  categories: CategoryModel[] = [];
  stock: number = 0;
  price: number = 0;
  isActive: boolean = true;
  createdDate: string = "";
  imageUrls: any[] = [];
}
