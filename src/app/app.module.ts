import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NKDatetimeModule } from 'ngx-datetime';
import { FormsModule } from '@angular/forms';
import { ToggleDirective } from './toggle.directive';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleDirective,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NKDatetimeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
