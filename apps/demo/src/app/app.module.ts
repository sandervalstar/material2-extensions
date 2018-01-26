import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { MatChipInputModule } from 'material2-extensions';

@NgModule({
  imports: [
    BrowserModule,
    MatChipInputModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
