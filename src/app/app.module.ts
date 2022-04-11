import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { InfoSectionComponent } from './main/info-section/info-section.component';
import { IntroSectionComponent } from './main/intro-section/intro-section.component';
import { TestimonialSectionComponent } from './main/testimonial-section/testimonial-section.component';
import { StayProductiveSectionComponent } from './main/stay-productive-section/stay-productive-section.component';
import { EarlyAccessSectionComponent } from './main/early-access-section/early-access-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    InfoSectionComponent,
    IntroSectionComponent,
    TestimonialSectionComponent,
    StayProductiveSectionComponent,
    EarlyAccessSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
