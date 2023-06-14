import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidDirective } from '../directives/valid.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BlankComponent } from '../components/blank/blank/blank.component';
import { TableComponent } from '../components/table/table/table.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ValidDirective,
    NgxSpinnerModule,
    BlankComponent,
    TableComponent,
  ],
  exports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ValidDirective,
    NgxSpinnerModule,
    BlankComponent,
    TableComponent
  ]
})
export class SharedModule { }
