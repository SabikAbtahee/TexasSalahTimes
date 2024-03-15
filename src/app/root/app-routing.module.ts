import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'timings',
    pathMatch:'full'
  },
  {
    path: 'timings',
    loadChildren: () =>
      import('../salah-timings/salah-timings.module').then(
        (x) => x.SalahTimingsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
