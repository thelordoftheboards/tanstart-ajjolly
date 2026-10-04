import { IconCode, IconPalette, IconPlant, IconSettings } from '@tabler/icons-react';
import { SectionBorderedCardsWithIconTitleDescriptionBullets1Props } from '~/tanstart-ajjolly-theme-basic/schema/section-bordered-cards-with-icon-title-description-bullets-1';

//

export const SectionBorderedCardsWithIconTitleDescriptionBullets1Example: SectionBorderedCardsWithIconTitleDescriptionBullets1Props =
  {
    items: [
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        icon: IconSettings,
        items: ['Consectetur Elit', 'Sed Eiusmod', 'Incididunt Ut Labore'],
        title: 'Dolor Sit Amet',
      },
      {
        description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        icon: IconPalette,
        items: ['Eiusmod Tempor', 'Magna Aliqua', 'Veniam Quis Nostrud'],
        title: 'Sit Amet',
      },
      {
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
        icon: IconCode,
        items: ['Dolore Magna', 'Ut Enim Ad', 'Exercitation'],
        title: 'Ullamco Laboris',
      },
      {
        description: 'Ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation.',
        icon: IconPlant,
        items: ['Cillum Fugiat', 'Nulla Pariatur', 'Eu Fugiat'],
        title: 'Irure Dolor',
      },
    ],
  };
