import { Routes } from '@angular/router';
import {AngularConcepts} from './angular-concepts/angular-concepts';

export const routes: Routes = [
  { path: '', redirectTo: '/angular', pathMatch: 'full' },
  {
    path: 'angular',
    component: AngularConcepts,
    children: [
      {
        path: 'projection',
        loadComponent: () => import('./angular-concepts/content-projection/content-projection').then(c => c.ContentProjection),
      },
      {
        path: 'context-guard',
        loadComponent: () => import('./angular-concepts/template-context-guard/template-context-guard').then(c => c.TemplateContextGuard),
      }
    ]
  }

];
