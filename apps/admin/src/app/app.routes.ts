import { Routes } from '@angular/router';
import { ROUTER_TOKENS } from './app-route.constants';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ROUTER_TOKENS.DESIGN,
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
    path: 'firebase',
    loadComponent: () =>
      import('./fire-comp/fire-comp.component').then(
        (c) => c.FireCompComponent
      ),
  },
  {
    path: 'angular-basics',
    loadChildren: () =>
      import('./angular-basics/angular-basics.module').then(
        (c) => c.AngularBasicsModule
      ),
  },
  // {
  //   path: 'mapping',
  //   loadChildren: () =>
  //     import('./mapping-module/custom-web.module').then(
  //       (m) => m.CustomWebelementModule
  //     ),
  // },
];
