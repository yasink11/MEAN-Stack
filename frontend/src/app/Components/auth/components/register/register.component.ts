import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NgForm } from '@angular/forms';
import { RegisterModel } from '../../models/register.model';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: RegisterModel = new RegisterModel();

  constructor(
    private srv:AuthService,
    private toastr:ToastrService,
    private router:Router
    ){

  }

  register(form:NgForm){
    if(form.valid){
      this.srv.register(this.model,res=>{
        localStorage.setItem("token",res.token);
        localStorage.setItem("user",JSON.stringify(res.user));
        this.toastr.success("Kayıt başarıyla oluşturuldu");
        this.router.navigateByUrl("/login");
      })

    }

  }



}
