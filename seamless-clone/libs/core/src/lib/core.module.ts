import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1CoreComponent } from './components/test1-core/test1-core.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Test1CoreComponent, NotFoundComponent],
  exports: [Test1CoreComponent]
})
export class CoreModule {}
