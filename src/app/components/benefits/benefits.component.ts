import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  benefits = [
    {
      icon: '₹',
      iconBg: '#F97316',
      title: 'Affordable',
      description: 'No unnecessary costs'
    },
    {
      iconType: 'mobile',
      iconBg: '#3B82F6',
      title: 'Mobile Responsive',
      description: 'Looks great on every device'
    },
    {
      iconType: 'search',
      iconBg: '#F59E0B',
      title: 'SEO Friendly',
      description: 'Built to help customers find you'
    },
    {
      iconType: 'lightning',
      iconBg: '#42A5F5',
      title: 'Quick Delivery',
      description: 'Launch your website quickly'
    }
  ];
}
