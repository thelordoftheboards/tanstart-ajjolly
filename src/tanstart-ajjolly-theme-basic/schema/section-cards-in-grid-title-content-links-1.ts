import { type IconProps } from '@tabler/icons-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

//

export type CategoryCardCollectionItemType = {
  title: string;
  titleIcon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  content: string;
  links: {
    name: string;
    href: string;
  }[];
};

/**
 * The component properties describe a section consisting of cards in a grid 1-4 cards wide.
 * Each card has three sections separated vertically:
 * - On top: a title with an icon left of the text.
 * Recommendation: Text to be up to 15-20 characters.
 * - In the middle: a content section with smaller font.
 * Recommendation: Similar length of content for all cards, 150-400 characters.
 * - At the bottom: List of lnks in clickable badges in even smaller font.
 * Recommendation: 2-4 links with 10-20 chatacter titles.
 */
export type SectionCardsInGridTitleContentLinks1Props = {
  items: CategoryCardCollectionItemType[];
  containerClassName?: string;
};
