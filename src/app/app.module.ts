import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LightComponent } from './light/light.component';
import { LightswitchComponent } from './lightswitch/lightswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    LightComponent,
    LightswitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
