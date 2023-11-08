import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { MatIconModule } from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    SearchBoxComponent,
    NavbarComponent,
    SelectBoxComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    SearchBoxComponent,
    NavbarComponent,
    SelectBoxComponent
  ]
})
export class SharedModule { }
