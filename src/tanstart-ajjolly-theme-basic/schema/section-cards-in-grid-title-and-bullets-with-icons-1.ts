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

/**
 * The component properties describe an in-section grid of cards 1-3 cards wide.
 * Each card has two sections separated vertically:
 * - On top: a title with an icon left of the text.
 * Recommendation: Text to be up to 25-35 characters.
 * - At the bottom: List of items with icons on left and text on right, like bulleted list.
 * Recommendation: Lines can start to wrap around 45 characters. Keep
 * the cards with similar length and number of characters.
 */
export type SectionCardsInGridTitleAndBulletsWithIcons1Props = {
  cards: CardWithBulletsItem[];
  containerClassName?: string;
};
