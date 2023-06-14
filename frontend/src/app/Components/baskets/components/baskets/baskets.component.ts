import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { BasketService } from '../../services/basket.service';
import { ToastrService } from 'ngx-toastr';
import { SwalService } from 'src/app/common/services/swal.service';
import { BasketModel } from '../../models/basket.model';
import { OrderService } from 'src/app/Components/orders/services/order.service';

@Component({
  selector: 'app-baskets',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent {

  baskets: BasketModel[] = [];
sum: number = 0;

constructor(
  private srv: BasketService,
  private _toastr: ToastrService,
  private _swal: SwalService,
  private _ordersrv: OrderService
){}

  ngOnInit(): void {
    this.getAll();
  }

getAll(){
  this.srv.getAll(res=> {
    this.baskets = res;
    this.calculate();
  });
}

calculate(){
  this.sum = 0;
  this.baskets.forEach(element=> {
    this.sum += (element.price * element.quantity)
  });
}

removeById(_id: string){
  this._swal.callSwal("Ürünü sepetten silmek istiyor musunuz?","Ürünü Sil","Sil",()=>{
    let model = {_id: _id};
    this.srv.removeById(model, res=> {
      this._toastr.info(res.message);
      this.getAll();
    });
  })
}

createOrder(){
  this._swal.callSwal("Ürünleri almak istiyor musunuz?","Ürünleri Al","Ödeme Yap", ()=> {
    this._ordersrv.create(res=> {
      this._toastr.success(res.message);
      this.getAll();
    });
  });
}

}
