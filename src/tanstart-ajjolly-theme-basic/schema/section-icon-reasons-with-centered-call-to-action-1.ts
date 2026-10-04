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
 *
 */
export interface SectionIconReasonsWithCenteredCallToAction1Props {
  bottomButtoms?: BottomButtons;
  cards: CardWithIcon[];
  containerClassName?: string;
  title: string;
}
