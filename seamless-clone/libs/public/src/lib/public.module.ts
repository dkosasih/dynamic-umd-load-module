import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { Test1PublicComponent } from './components/test1-public/test1-public.component';
import { CoreModule, SeamlessCoreRoutingModule, SomeServiceService } from '@seamless-clone/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, CoreModule, SeamlessCoreRoutingModule],
  declarations: [AppShellComponent, Test1PublicComponent],
  providers:[SomeServiceService],
  exports: [AppShellComponent, Test1PublicComponent],
})
export class PublicModule {}
