import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteConfig } from '../../core/config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  siteConfig = siteConfig;

  quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  servicesLinks = [
    'Business Websites',
    'E-Commerce Websites',
    'Landing Pages',
    'Portfolio Websites',
    'Website Redesign',
    'Website Maintenance'
  ];

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - 78;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}
