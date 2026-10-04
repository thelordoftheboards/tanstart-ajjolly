import {
  IconPentagonNumber1,
  IconPentagonNumber2,
  IconPentagonNumber3,
  IconPentagonNumber4,
  IconPentagonNumber5,
  IconPentagonNumber6,
} from '@tabler/icons-react';
import { type SectionCardsInGridTitleContentLinks1Props } from '../../tanstart-ajjolly-theme-basic/schema/section-cards-in-grid-title-content-links-1';

//

export const SectionCardsInGridTitleContentLinks1Example: SectionCardsInGridTitleContentLinks1Props = {
  cards: [
    {
      content:
        'Vivamus turpis lectus, sollicitudin id purus eget, pharetra varius dolor. Sed sit amet tristique dolor. Nam tincidunt tempus mauris id dapibus.',
      links: [{ href: 'https://example.com/', name: 'Lacinia vel' }],
      title: 'Category 1',
      titleIcon: IconPentagonNumber1,
    },
    {
      content:
        'Cras eros dolor, suscipit non placerat sodales, vestibulum id est. Nullam viverra fringilla orci, eget sodales nibh malesuada laoreet. Sed volutpat fringilla fringilla.',
      links: [
        { href: 'https://example.com/', name: 'Justo' },
        { href: 'https://example.com/', name: 'Duis commodo' },
      ],
      title: 'Category 2',
      titleIcon: IconPentagonNumber2,
    },
    {
      content:
        'Quisque elementum, eros quis malesuada malesuada, lacus massa malesuada libero, sed volutpat nisi orci feugiat magna. Aliquam eu sapien sed odio rhoncus varius.',
      links: [],
      title: 'Category 3',
      titleIcon: IconPentagonNumber3,
    },
    {
      content:
        'Curabitur nec efficitur mi. Aenean vestibulum diam in purus mattis ornare. Suspendisse vitae eros metus. ',
      links: [{ href: 'https://example.com/', name: 'Vivamus lobortis' }],
      title: 'Category 4',
      titleIcon: IconPentagonNumber4,
    },
    {
      content:
        'Sed aliquet urna vel enim luctus, a iaculis risus sollicitudin. Nunc in imperdiet velit. Mauris posuere ac felis ut malesuada.',
      links: [{ href: 'https://example.com/', name: 'Phasellus semper' }],
      title: 'Category 5',
      titleIcon: IconPentagonNumber5,
    },
    {
      content:
        'Nunc vel augue a lectus pharetra faucibus eu id dolor. Ut nec ultricies risus. Sed id nisi augue. Integer dictum mauris quis elit rhoncus sagittis.',
      links: [],
      title: 'Category 6',
      titleIcon: IconPentagonNumber6,
    },
  ],
};
