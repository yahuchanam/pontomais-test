import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarvelInterceptor } from './security/marvel.interceptor';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MarvelInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
