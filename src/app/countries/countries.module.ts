import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomePageComponent,
    DetailPageComponent
  ],
  imports: [
    CountriesRoutingModule,
    CommonModule,
    MatIconModule,
    SharedModule
  ]
})
export class CountriesModule { }
