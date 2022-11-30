import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureMarqueeComponent } from './components/feature-marquee/feature-marquee.component';
import { EditTypesComponent } from './components/edit-types/edit-types.component';
import { LearnTableComponent } from './components/learn-table/learn-table.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureMarqueeComponent,
    EditTypesComponent,
    LearnTableComponent,
    EditTeamComponent,
    GetStartedComponent,
    WhyUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
