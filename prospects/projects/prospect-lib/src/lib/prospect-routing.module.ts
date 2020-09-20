import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProspectHomeComponent } from './components/prospect-home/prospect-home.component';
import { ProspectLazyComponent } from './components/prospect-lazy/prospect-lazy.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProspectHomeComponent },
      { path: 'prospect-list', component: ProspectLazyComponent}
    ])
  ],
  declarations: [ProspectHomeComponent, ProspectLazyComponent]
})
export class ProspectRoutingModule { }
