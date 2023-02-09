import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { StrengthPipe } from './strength/strength.pipe';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';
import { ProductsService } from './services/products.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule, Routes } from '@angular/router';
import { Dataffects } from './store/effects/formly-table.effects';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductService1 } from './products-list/product1.service';
import { InMemoryDataService } from './in-memory-data.service';
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'product', component: ProductsListComponent },
  {
    path: 'lazy-module',
    loadChildren: () =>
      import('./lazy-module/lazy-module.module').then(
        (m) => m.LazyModuleModule
      ),
  },
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    StrengthPipe,
    HeroComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    RouterModule.forRoot([]),
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([Dataffects]),
    // StoreModule.forFeature('tableReducer', tableReducer),
  ],
  providers: [HeroService, MessageService, ProductsService, ProductService1],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
