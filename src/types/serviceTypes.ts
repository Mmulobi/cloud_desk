import { LucideIcon } from 'lucide-react';

export type IconType = LucideIcon;

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: IconType;
  features: ServiceFeature[];
  benefits: string[];
  imageSrc: string;
}

export interface SubService {
  title: string;
  description: string;
} 