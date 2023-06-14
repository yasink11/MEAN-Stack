import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './common/shared/shared.module';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  <ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "medium" color = "#fff"
  type = "ball-clip-rotate-multiple" [fullScreen] = "true"><p style="color: white" > Yükleniyor... </p></ngx-spinner>`,
  standalone: true,
  imports: [RouterModule, NgxSpinnerModule,SharedModule]
})
export class AppComponent {
  title = 'E-Ticaret Uyglaması Frontend';
}
