import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuerrasListPage } from './guerras-list.page';

const routes: Routes = [
  {
    path: '',
    component: GuerrasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuerrasListPageRoutingModule {}
