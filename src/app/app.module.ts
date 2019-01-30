import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    AboutMeComponent,
    SkillsComponent,
    PortafolioComponent,
    FooterComponent,
    CounterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PortafolioComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
