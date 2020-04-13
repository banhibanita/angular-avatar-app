import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GetUserDetailsService } from './get-user-details.service';
import { UserNameComponent } from './user-name/user-name.component';
import { UserImageComponent } from './user-image/user-image.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, UserNameComponent, UserImageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GetUserDetailsService]
})
export class AppModule { }
