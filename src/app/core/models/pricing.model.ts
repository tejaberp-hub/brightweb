export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  isPopular?: boolean;
  icon: string;
  iconBgColor: string;
  features: string[];
  ctaText: string;
}
