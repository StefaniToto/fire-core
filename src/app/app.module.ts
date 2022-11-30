import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { StrengthPipe } from './strength/strength.pipe';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';
import { LazyModuleRoutingModule } from './lazy-module/lazy-module-routing.module';
import { ProductsService } from './services/products.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Dataffects } from './store/effects/formly-table.effects';
import { tableReducer } from './store/reducers/formly-table.reducers';

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
    LazyModuleRoutingModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    EffectsModule.forFeature([Dataffects]),
    StoreModule.forFeature('tableReducer', tableReducer),
  ],
  providers: [HeroService, MessageService, ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
