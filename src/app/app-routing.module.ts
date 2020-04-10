import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'visibility',
    loadChildren: () => import('./pages/visibility/visibility.module').then(m => m.VisibilityModule)
  },
  {
    path: 'required',
    loadChildren: () => import('./pages/requis/requis.module').then(m => m.RequisModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then(m => m.ConfirmationModule)
  },
  {
    path: 'limitations',
    loadChildren: () => import('./pages/limitations/limitations.module').then(m => m.LimitationsModule)
  },
  {
    path: 'filetype',
    loadChildren: () => import('./pages/filetype/filetype.module').then(m => m.FiletypeModule)
  },
  {
    path: 'disposition',
    loadChildren: () => import('./pages/disposition/disposition.module').then(m => m.DispositionModule)
  },
  {
    path: 'step',
    loadChildren: () => import('./pages/step/step.module').then(m => m.StepModule)
  },
  {
    path: 'steppopup',
    loadChildren: () => import('./pages/steppopup/steppopup.module').then(m => m.SteppopupModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
