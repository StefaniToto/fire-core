import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
    path: 'mapping',
    loadChildren: () =>
      import('./mapping-module/custom-web.module').then(
        (m) => m.CustomWebelementModule
      ),
  },
];
@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavComponent],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
