import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActionsComponent, MapComponent, LegendComponent, CheckboxesComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LegendComponent,
    CheckboxesComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
