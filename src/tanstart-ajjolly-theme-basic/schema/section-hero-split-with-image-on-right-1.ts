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

/**
 * The component properties describe a hero section
 * split with title, content and buttons on the left, and image on the right.
 */
export interface SectionHeroSplitWithImageOnRight1Props {
  buttons?: Buttons;
  containerClassName?: string;
  description: string;
  heading: string;
  image: Image;
}
