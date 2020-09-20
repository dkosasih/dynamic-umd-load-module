import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { Test1PublicComponent } from './components/test1-public/test1-public.component';
import { CoreModule, SeamlessCoreRoutingModule } from '@seamless-clone/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, CoreModule, SeamlessCoreRoutingModule],
  declarations: [AppShellComponent, Test1PublicComponent],
  exports: [AppShellComponent, Test1PublicComponent],
})
export class PublicModule {}
