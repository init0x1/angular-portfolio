import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from './portfolio/portfolio.component';


@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent, SkillsComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
