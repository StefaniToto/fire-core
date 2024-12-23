import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuxilaryPageComponent } from './angular/angular-routing/auxilary-page/auxilary-page.component';
import { AngularRoutingComponent } from './angular/angular-routing/angular-routing.component';
import { HttpClientModule } from '@angular/common/http';
import ComponentOneComponent from './angular/angular-routing/component-one';
import ComponentTwoComponent from './angular/angular-routing/component-two';
export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  // },

  { path: '', redirectTo: 'angular-router/users', pathMatch: 'full' },
  {
    path: 'angular-router',
    loadChildren: () =>
      import('./angular/angular-main.module').then((m) => m.AngularMainModule),
  },

  {
    path: 'design',
    loadChildren: () =>
      import('./design-module/design.module').then((m) => m.DesignModule),
  },
  {
    path: 'custom-web-elements',
    loadChildren: () =>
      import('./custom-web-elemenets-module/custom-web.module').then(
        (m) => m.CustomWebelementModule
      ),
  },
  {
    path: 'rxjs',
    loadComponent: () =>
      import('./rxjs-tutorial/rxjs-tutorial.component').then(
        (m) => m.RxjsTutorialComponent
      ),
  },

  {
    path: 'reactive-forms',
    loadComponent: () =>
      import('./reactive-forms/reactive-forms.component').then(
        (m) => m.ReactiveFormsComponent
      ),
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    AngularRoutingComponent,
    AuxilaryPageComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
    }),

    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
