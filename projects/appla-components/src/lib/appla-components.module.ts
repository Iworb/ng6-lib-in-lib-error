import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { PipDrilldownListModule } from 'pip-webui2-buttons-temp';

import { ApplaComponentsComponent } from './appla-components.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule,
    PipDrilldownListModule
  ],
  declarations: [ApplaComponentsComponent],
  exports: [ApplaComponentsComponent]
})
export class ApplaComponentsModule { }
