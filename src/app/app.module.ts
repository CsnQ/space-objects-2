import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestMapComponent } from './components/test-map/test-map.component';
import {FireballInfoComponent} from './components/fireball-info/fireball-info.component'

import{FireballDataService } from  './services/fireball-data.service'

import {key} from '../config/gMaps';




@NgModule({
  declarations: [
    AppComponent,
    TestMapComponent,
    FireballInfoComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: key,
    }),
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [FireballDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
