import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import ComponentOneComponent from './angular-routing/component-one';
import { AuxilaryPageComponent } from './angular-routing/auxilary-page/auxilary-page.component';
import { AngularRoutingComponent } from './angular-routing/angular-routing.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'users',
    component: AngularRoutingComponent,

    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'users',
      // },
      // { path: 'users', component: ComponentOneComponent },
      {
        path: 'user/:id',
        component: AuxilaryPageComponent,
        outlet: 'sidebar',
      },
    ],
  },
  // {
  //   path: 'user/:id',
  //   component: AuxilaryPageComponent,
  //   outlet: 'sidebar',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularMainModule {}
