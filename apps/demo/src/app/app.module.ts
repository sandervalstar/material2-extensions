import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import {NgxTabsLibModule} from 'ngx-tabs-lib';
import { MatChipInputModule } from 'material2-extensions-lib';

@NgModule({
  imports: [
    BrowserModule,
    NgxTabsLibModule,
    MatChipInputModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
