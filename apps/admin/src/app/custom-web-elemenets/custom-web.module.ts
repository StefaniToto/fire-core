import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DropdownComponentPage } from './dropdown/dropdown.component';
export const appRoutes: Route[] = [
  // {
  //   path: 'main',
  //   loadComponent: () =>
  //     import('./design.component').then((m) => m.DesignComponent),
  // },
  {
    path: 'dropdown',
    loadComponent: () =>
      import('./dropdown/dropdown.component').then(
        (m) => m.DropdownComponentPage
      ),
  },
];
@NgModule({
  declarations: [],
  imports: [DropdownComponentPage, RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class CustomWebelementModule {}
