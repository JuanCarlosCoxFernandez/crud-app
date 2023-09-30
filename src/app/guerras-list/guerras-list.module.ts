import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuerrasListPageRoutingModule } from './guerras-list-routing.module';

import { GuerrasListPage } from './guerras-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuerrasListPageRoutingModule
  ],
  declarations: [GuerrasListPage]
})
export class GuerrasListPageModule {}
