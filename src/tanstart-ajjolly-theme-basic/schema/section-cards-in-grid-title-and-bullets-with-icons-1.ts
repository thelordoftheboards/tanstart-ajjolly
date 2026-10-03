import { type IconProps } from '@tabler/icons-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

//

export type BulletWithIconItem = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  iconClassName?: string;
  text: string;
};

export type CardWithBulletsItem = {
  bullets: BulletWithIconItem[];
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  iconClassName?: string;
  title: string;
};

export type SectionCardsInGridTitleAndBulletsWithIcons1Props = {
  cards: CardWithBulletsItem[];
  className?: string;
};
