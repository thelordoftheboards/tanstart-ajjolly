import { type IconProps } from '@tabler/icons-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

//

interface CardListItem {
  description: string;
  href?: string;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  image: Image;
  label?: string;
  title: string;
}

interface Image {
  alt: string;
  src: string;
  srcDark?: string;
}

interface BelowHeaderButton {
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  text: string;
  url: string;
}

interface Buttons {
  primary?: BelowHeaderButton;
  secondary?: BelowHeaderButton;
}

export interface SectionCardsInGridWithHalfCardImageTitleAndText1Props {
  buttons?: Buttons;
  cards: CardListItem[];
  containerClassName?: string;
  description?: string;
  heading: string;
}
