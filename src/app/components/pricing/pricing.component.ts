import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRICING_DATA } from '../../data/pricing.data';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  pricingPlans = PRICING_DATA;

  scrollToContact(event: Event) {
    event.preventDefault();
    const element = document.getElementById('contact');
    if (!element) return;
    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - 78;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}
