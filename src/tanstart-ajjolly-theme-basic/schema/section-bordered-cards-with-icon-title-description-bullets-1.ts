import { type IconProps } from '@tabler/icons-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

//

export type BorderedCardWithIconTitleDescriptionBulletsItem = {
  description: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  items: string[];
  title: string;
};

export type SectionBorderedCardsWithIconTitleDescriptionBullets1Props = {
  containerClassName?: string;
  items: BorderedCardWithIconTitleDescriptionBulletsItem[];
};
