interface Image {
  alt: string;
  src: string;
  srcDark?: string;
}

interface HeroButton {
  icon?: React.ReactNode;
  text: string;
  url: string;
}

interface Buttons {
  primary?: HeroButton;
  secondary?: HeroButton;
}

export interface SectionHeroSplitWithImageOnRight1Props {
  buttons?: Buttons;
  className?: string;
  description: string;
  heading: string;
  image: Image;
}
