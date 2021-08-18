import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgforComponent } from './components/ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    NgclassComponent,
    NgifComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
