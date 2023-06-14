import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{provideHttpClient} from "@angular/common/http"
import { importProvidersFrom } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


import { AppComponent } from "./app/app.component";
import { routes } from "./app/router";

import {ToastrModule} from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";

bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
      NgxSpinnerModule,
      ToastrModule.forRoot({
        closeButton:true,
        progressBar:true
      }),
      RouterModule.forRoot(routes)
    )
  ]
})
