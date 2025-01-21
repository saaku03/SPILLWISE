import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  {
    path: 'main-page',
    loadChildren: () => import('../app/main-page/main-page.module').then(m => m.MainPageModule)
  },
  { path: '**', redirectTo: '/main-page', pathMatch: 'full' }, 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
