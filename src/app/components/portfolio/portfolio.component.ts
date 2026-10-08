import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioItems = PORTFOLIO_DATA;

  scrollToContact(event: Event) {
    event.preventDefault();
    const element = document.getElementById('contact');
    if (!element) return;
    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - 78;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}
