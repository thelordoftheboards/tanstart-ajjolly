import { type LucideIcon } from 'lucide-react';

export type BorderedCardWithIconTitleDescriptionBulletsItem = {
  description: string;
  icon: LucideIcon;
  items: string[];
  title: string;
};

export type SectionBorderedCardsWithIconTitleDescriptionBullets1Props = {
  className?: string;
  heading: string;
  services: BorderedCardWithIconTitleDescriptionBulletsItem[];
  subtitle: string;
};
