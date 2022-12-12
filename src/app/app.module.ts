import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    CardComponentComponent,
    CardContainerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
