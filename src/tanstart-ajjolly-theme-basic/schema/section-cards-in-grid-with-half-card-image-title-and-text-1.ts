import { type IconProps } from '@tabler/icons-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

//

interface CardListItem {
  content: string;
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

/**
 * The component properties describe a section consisting a header and
 * of cards in a grid 1-3 cards wide.
 * The header has title with larger font and subtitle with smaller font.
 * Each card has three sections separated vertically:
 * - On top: taking more than half the vertical space on the card, an image.
 * Recommendation: The viewable area is square.
 * - In the middle: A title with medium sized bold font.
 * Recommendation: 15-20 characters.
 * - At the bottom: Content with smaller font.
 * Recommendation: 200-300 characters, keep the length similar across cards.
 */
export interface SectionCardsInGridWithHalfCardImageTitleAndText1Props {
  buttons?: Buttons;
  cards: CardListItem[];
  containerClassName?: string;
  subtitle?: string;
  title: string;
}

// Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
