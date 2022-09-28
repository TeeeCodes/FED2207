import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { LocationsComponent } from './locations/locations.component';
import { MiddleComponent } from './about/about-scooter-explanation/middle.component';
import { FAQsComponent } from './about/about-faqs/faqs.component';
import { JoinUsComponent } from './careers/why-join-us/join-us.component';
import { ValuesComponent } from './about/about-our-values/values.component';
import { LearnMoreComponent } from './home/home-learn-more/learn-more.component';
import { ScooterHowtoComponent } from './home/home-scooter-howto/scooter-howto.component';
import { ApplicationsComponent } from './careers/job-applications/applications.component';
import { SayHelloComponent } from './careers/say-hello/say-hello.component';
import { WorldMapComponent } from './locations/world-map/world-map.component';
import { MessageUsComponent } from './locations/message-us/message-us.component';
import { StatesComponent } from './locations/states/states.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';


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
    NavComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
