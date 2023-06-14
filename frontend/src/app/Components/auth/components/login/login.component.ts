import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LoginModel } from '../../models/login.model';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 constructor(
  private srv:AuthService,
  private toastr:ToastrService,
  private router:Router
  ){

 }

  login(form:NgForm){
    if(form.valid){
      let model = new LoginModel();
      model.email=form.controls["email"].value;
      model.password=form.controls["password"].value;

      this.srv.login(model,res=>{
        this.toastr.success("Giriş Başarılı");
        localStorage.setItem("token",res.token);
        localStorage.setItem("user",JSON.stringify(res.user));
        this.router.navigateByUrl("/");
      })
    }

  }
}
