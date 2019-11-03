import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestMapComponent } from './components/test-map/test-map.component';

import{FireballDataService } from  './services/fireball-data.service'

import {key} from '../config/gMaps';


@NgModule({
  declarations: [
    AppComponent,
    TestMapComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: key,
    }),
    AppRoutingModule
  ],
  providers: [FireballDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
