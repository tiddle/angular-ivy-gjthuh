import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormlyTestComponent } from './formly-component/formly-component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, FormlyModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, FormlyTestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
