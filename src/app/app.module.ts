import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './Components/navbar-top/navbar-top.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ButtonGralComponent } from './Components/Reutils/button-gral/button-gral.component';
import { HeroComponent } from './Components/hero/hero.component';
import { TitlesComponent } from './Components/Reutils/titles/titles.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FeaturesComponent } from './Components/features/features.component';
import { AboutComponent } from './Components/about/about.component';
import { IconTextComponent } from './Components/Reutils/icon-text/icon-text.component';
import { About2Component } from './Components/about2/about2.component';
import { IntegracionesComponent } from './Components/integraciones/integraciones.component';
import { ScreenshotsComponent } from './Components/screenshots/screenshots.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { PricesComponent } from './Components/prices/prices.component';
import { FaqsComponent } from './Components/faqs/faqs.component';
import { RedesComponent } from './Components/redes/redes.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ButtonScrollComponent } from './Components/button-scroll/button-scroll.component';
import { PreloadingComponent } from './Components/preloading/preloading.component';
import { FormContactComponent } from './Components/form-contact/form-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarComponent,
    ButtonGralComponent,
    HeroComponent,
    TitlesComponent,
    ClientesComponent,
    FeaturesComponent,
    AboutComponent,
    IconTextComponent,
    About2Component,
    IntegracionesComponent,
    ScreenshotsComponent,
    TestimonialsComponent,
    PricesComponent,
    FaqsComponent,
    RedesComponent,
    FooterComponent,
    ButtonScrollComponent,
    PreloadingComponent,
    FormContactComponent,
    DemoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
