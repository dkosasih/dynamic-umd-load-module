import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Test1CoreComponent } from './components/test1-core/test1-core.component';

const routes: Routes = [
  { path: '', component: Test1CoreComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

export const routerForChild = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
@NgModule({
  imports: [routerForChild],
  exports: [RouterModule],
})
export class SeamlessCoreRoutingModule {}
