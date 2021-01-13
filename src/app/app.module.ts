import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LgComponent } from './lg/lg.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LgComponent, GameboardComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
