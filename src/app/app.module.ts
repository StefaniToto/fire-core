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
import { AppData } from './models/app-data';
import { RouterModule, Routes } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsListComponent } from './products-list/products-list.component';
import { environment } from 'src/environments/environment';
import { dataReducer } from './store/reducers/formly-table.reducers';
import { Dataffects } from './store/effects/formly-table.effects';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { DialogModule } from './custom-modal/dialog.module';
export const routes: Routes = [
  { path: '', redirectTo: 'modal', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'product', component: ProductsListComponent },
  { path: 'modal', component: CustomModalComponent },
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
  ],
  imports: [
    DialogModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ dataReducer: dataReducer }),
    EffectsModule.forRoot([Dataffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientInMemoryWebApiModule.forRoot(AppData, {
      delay: 1000,
      dataEncapsulation: false,
    }),
  ],
  providers: [HeroService, MessageService, ProductsService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
