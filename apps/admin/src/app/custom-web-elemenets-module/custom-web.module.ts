import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomWebElementComponent } from './custom-web-element.component';
export const appRoutes: Route[] = [
  { path: '', component: CustomWebElementComponent },
  {
    path: 'dropdown',
    loadComponent: () =>
      import('./dropdown/dropdown.component').then(
        (m) => m.DropdownPageComponent,
      ),
  },
  {
    path: 'view-ref',
    loadComponent: () =>
      import('./view-ref/view-ref.component').then((m) => m.ViewRefComponent),
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoutes), FormsModule, OverlayModule],
  exports: [RouterModule],
})
export class CustomWebelementModule {}
