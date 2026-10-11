import { PricingPlan } from '../core/models/pricing.model';

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For individuals and very small businesses',
    price: '₹4,999',
    icon: 'diamond',
    iconBgColor: '#e7f6ee',
    features: [
      'Responsive Website (up to 5 pages)',
      'Basic Contact Form',
      'Mobile Friendly',
      '1 Month Support'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For growing businesses',
    price: '₹9,999',
    badge: 'Most Popular',
    isPopular: true,
    icon: 'crown',
    iconBgColor: '#e7f6ee',
    features: [
      'Responsive Website (up to 10 pages)',
      'Contact Form',
      'SEO Basic Setup',
      'Google Maps Integration',
      '3 Months Support'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'For businesses needing advanced features',
    price: '₹14,999',
    icon: 'gem',
    iconBgColor: '#FFF3EB',
    features: [
      'Custom Design (up to 20 pages)',
      'Advanced Features',
      'SEO Optimization',
      'Analytics Integration',
      '6 Months Support'
    ],
    ctaText: 'Get Started'
  }
];
