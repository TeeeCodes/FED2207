import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { LocationsComponent } from './locations/locations.component';
import { MiddleComponent } from './about/middle/middle.component';
import { FAQsComponent } from './about/faqs/faqs.component';
import { JoinUsComponent } from './careers/join-us/join-us.component';
import { ValuesComponent } from './about/values/values.component';
import { LearnMoreComponent } from './home/learn-more/learn-more.component';
import { ScooterHowtoComponent } from './home/scooter-howto/scooter-howto.component';
import { ApplicationsComponent } from './careers/applications/applications.component';
import { SayHelloComponent } from './careers/say-hello/say-hello.component';
import { WorldMapComponent } from './locations/world-map/world-map.component';
import { MessageUsComponent } from './locations/message-us/message-us.component';
import { StatesComponent } from './locations/states/states.component';
import { HeaderComponent } from './home/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareersComponent,
    LocationsComponent,
    MiddleComponent,
    FAQsComponent,
    JoinUsComponent,
    ValuesComponent,
    LearnMoreComponent,
    ScooterHowtoComponent,
    ApplicationsComponent,
    SayHelloComponent,
    WorldMapComponent,
    MessageUsComponent,
    StatesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
