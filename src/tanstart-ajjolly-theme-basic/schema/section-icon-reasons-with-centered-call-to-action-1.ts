export interface FeatureIconListItem {
  description: string;
  href?: string;
  icon?: React.ReactNode;
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

export interface FeatureIconListProps {
  bottomButtoms?: BottomButtons;
  containerClassName?: string;
  features?: FeatureIconListItem[];
  title: string;
}

export interface SectionIconReasonsWithCenteredCallToAction1Props extends FeatureIconListProps {}
