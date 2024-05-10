import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AngularIntroComponent } from './components/angular-intro/angular-intro.component';
import { AngularBasicsComponent } from './angular-basics.component';
import { A1TemplatesComponent } from './components/content-projection/a1-templates.component';

export const angularRoutes: Route[] = [
  {
    path: '',
    component: AngularBasicsComponent,
  },
  { path: 'intro', component: AngularIntroComponent },
  { path: 'templates', component: A1TemplatesComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(angularRoutes)],
  exports: [RouterModule],
})
export class AngularBasicsModule {}
