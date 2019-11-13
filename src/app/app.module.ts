import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestMapComponent } from './components/test-map/test-map.component';
import {FireballInfoComponent} from './components/fireball-info/fireball-info.component'

import{FireballDataService } from  './services/fireball-data.service'

import {key} from '../config/gMaps';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    TestMapComponent,
    FireballInfoComponent,
    SearchBarComponent,
    DatePickerComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: key,
    }),
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [FireballDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
