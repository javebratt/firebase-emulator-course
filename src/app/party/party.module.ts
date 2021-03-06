import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartyPageRoutingModule } from './party-routing.module';

import { PartyPage } from './party.page';
import { CreatePartyComponent } from './create-party/create-party.component';
import { DetailPartyComponent } from './detail-party/detail-party.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PartyPageRoutingModule],
  declarations: [PartyPage, CreatePartyComponent, DetailPartyComponent],
})
export class PartyPageModule {}
