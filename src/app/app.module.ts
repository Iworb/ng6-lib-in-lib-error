import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ApplaComponentsModule } from 'appla-components';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { PipDrilldownListModule } from 'pip-webui2-buttons-temp';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // ApplaComponentsModule
    MatButtonModule, MatIconModule,
    PipDrilldownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
