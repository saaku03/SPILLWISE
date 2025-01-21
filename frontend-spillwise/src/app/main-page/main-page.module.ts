import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPageComponent } from './view-page/view-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'spill-wise',
    component: ViewPageComponent,
    data: {
      title: 'Spill Wise'
    }
  },]

@NgModule({
  declarations: [
    ViewPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]

})
export class MainPageModule { }
