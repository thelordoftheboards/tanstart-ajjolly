export interface CardWithIcon {
  content: string;
  href?: string;
  icon: React.ReactNode;
  title: string;
}

export interface BottomButton {
  icon?: React.ReactNode;
  text: string;
  url: string;
}

export interface BottomButtons {
  primary?: BottomButton;
  secondary?: BottomButton;
}

/**
 * A section with a grid of cards, 1-3 cards wide.
 * Each card has a large icon, title in hight contrast medium font
 * and content with duller smaller font in the bottom.
 */
export interface SectionIconReasonsWithCenteredCallToAction1Props {
  bottomButtoms?: BottomButtons;
  cards: CardWithIcon[];
  containerClassName?: string;
  title: string;
}
