import { type IconProps } from '@tabler/icons-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

export type TablerIconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

export type BulletWithIconItem = {
  icon: TablerIconComponent;
  iconClassName?: string;
  text: string;
};

export type CardWithBulletsItem = {
  bullets: BulletWithIconItem[];
  icon: TablerIconComponent;
  iconClassName?: string;
  title: string;
};

export type SectionCardsInGridTitleAndBulletsWithIcons1Props = {
  cards: CardWithBulletsItem[];
  className?: string;
};
