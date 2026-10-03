import { type IconProps } from '@tabler/icons-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

//

export type CategoryCardCollectionItemType = {
  category: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  description: string;
  links: {
    name: string;
    href: string;
  }[];
};

export type SectionCardsInGridTitleContentLinks1Props = { items: CategoryCardCollectionItemType[] };
