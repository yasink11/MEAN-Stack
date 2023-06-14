import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { BasketService } from '../../baskets/services/basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    public _basketsrv: BasketService,
    private router:Router
  ){
    this._basketsrv.getCount();
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login')

  }
}
