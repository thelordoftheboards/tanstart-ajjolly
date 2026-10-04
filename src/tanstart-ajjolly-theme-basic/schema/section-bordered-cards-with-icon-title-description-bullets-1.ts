import { type IconProps } from '@tabler/icons-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

//

export type BorderedCardWithIconTitleDescriptionBulletsItem = {
  description: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  items: string[];
  title: string;
};

/**
 * The component properties describe a section consisting of cards in a grid 1-2 cards wide.
 * Each card has three sections separated vertically:
 * - On top: a large title with an icon left of the text.
 * Recommendation: Text to be up to 25-35 characters.
 * - In the middle: a content section with smaller font.
 * Recommendation: Similar length of content for all cards, 100-200 characters.
 * - At the bottom: Bulleted list of items with smaller font but with higher contrast.
 * Recommendation: 2-4 links with 35-45 chatacter titles.
 */
export type SectionBorderedCardsWithIconTitleDescriptionBullets1Props = {
  containerClassName?: string;
  cards: BorderedCardWithIconTitleDescriptionBulletsItem[];
};
