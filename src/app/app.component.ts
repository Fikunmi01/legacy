import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhyUsComponent } from '../components/why-us/why-us.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { ServicesComponent } from '../components/services/services.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { CtaComponent } from '../components/cta/cta.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WhyUsComponent,NavbarComponent,HeroComponent,ServicesComponent,AboutUsComponent,ContactFormComponent,CtaComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'legacy';
}
