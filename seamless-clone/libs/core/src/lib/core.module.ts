import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1CoreComponent } from './components/test1-core/test1-core.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { SomeServiceService } from '../lib/services/some-service.service';

@NgModule({
  imports: [CommonModule],
  declarations: [Test1CoreComponent, NotFoundComponent],
  // providers:[SomeServiceService],
  exports: [Test1CoreComponent]
})
export class CoreModule {
  // public static forRoot(): ModuleWithProviders<CoreModule> {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       {
  //         provide: SomeServiceService,
  //         useExisting: SomeServiceService
  //       }
  //     ]
  //   };
  // }
}
