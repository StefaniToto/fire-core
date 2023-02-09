import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModuleComponent } from './lazy-module.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from '../models/app-data';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: LazyModuleComponent }];
@NgModule({
  declarations: [LazyModuleComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(AppData, {
      delay: 1000,
      dataEncapsulation: false,
    }),
  ],
  providers: [ProductsService],
  exports: [RouterModule],
})
export class LazyModuleModule {}
