import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FlexboxComponent } from './flexbox/flexbox.component';
export const appRoutes: Route[] = [
  // {
  //   path: 'main',
  //   loadComponent: () =>
  //     import('./design.component').then((m) => m.DesignComponent),
  // },
  {
    path: 'flexbox',
    loadComponent: () =>
      import('./flexbox/flexbox.component').then((m) => m.FlexboxComponent),
  },
];
@NgModule({
  declarations: [],
  imports: [FlexboxComponent, RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class DesignModule {}
