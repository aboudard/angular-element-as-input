import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PresetComponent } from './preset/preset.component';
import { PresetBtnComponent } from './preset-btn/preset-btn.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PresetComponent, PresetBtnComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
