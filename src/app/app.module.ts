import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureMarqueeComponent } from './components/feature-marquee/feature-marquee.component';
import { EditTypesComponent } from './components/edit-types/edit-types.component';
import { LearnTableComponent } from './components/learn-table/learn-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureMarqueeComponent,
    EditTypesComponent,
    LearnTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
