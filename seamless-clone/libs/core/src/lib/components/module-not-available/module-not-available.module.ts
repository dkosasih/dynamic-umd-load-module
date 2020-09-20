import { NgModule } from '@angular/core';
import { ModuleNotAvailableComponent } from './module-not-available.component';
import { RouterModule } from '@angular/router';

export const moduleNotAvailable = RouterModule.forChild([{ path: '', component: ModuleNotAvailableComponent }]);
@NgModule({
  imports: [moduleNotAvailable],
  exports: [RouterModule]
})
export class ModuleNotAvailableModule { }
