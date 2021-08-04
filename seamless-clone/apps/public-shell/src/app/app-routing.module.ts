import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleNotAvailableModule } from '@seamless-clone/core';
import { Test1PublicComponent } from '@seamless-clone/public';
import { loadModule } from './externals-utils';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'test', component: Test1PublicComponent },
      {
        path: 'prospects',
        loadChildren: () => loadRemoteModule({
            // remoteEntry: 'http://localhost:4500/remoteEntry.js',
            remoteName: 'prospects',
            exposedModule: './Module'
          })
          .then(m => m.AppModule)
      },
      // {
      //   path: 'prospects',
      //   loadChildren: () => loadModule('assets/prospect-lib.umd.min.js')
      //     .then(g => { console.log(g); return g['prospect-lib'] ? g['prospect-lib'].ProspectLibModule : ModuleNotAvailableModule; })
      // }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
