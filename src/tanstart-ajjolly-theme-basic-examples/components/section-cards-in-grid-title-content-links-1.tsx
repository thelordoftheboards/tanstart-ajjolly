import {
  IconPentagonNumber1,
  IconPentagonNumber2,
  IconPentagonNumber3,
  IconPentagonNumber4,
  IconPentagonNumber5,
  IconPentagonNumber6,
} from '@tabler/icons-react';
import { type SectionCardsInGridTitleContentLinks1Props } from '../../tanstart-ajjolly-theme-basic/schema/section-cards-in-grid-title-content-links-1';

export const SectionCardsInGridTitleContentLinks1Example: SectionCardsInGridTitleContentLinks1Props = {
  items: [
    {
      category: 'Category 1',
      description:
        'Vivamus turpis lectus, sollicitudin id purus eget, pharetra varius dolor. Sed sit amet tristique dolor. Nam tincidunt tempus mauris id dapibus.',
      icon: IconPentagonNumber1,
      links: [{ href: 'https://example.com/', name: 'Lacinia vel' }],
    },
    {
      category: 'Category 2',
      description:
        'Cras eros dolor, suscipit non placerat sodales, vestibulum id est. Nullam viverra fringilla orci, eget sodales nibh malesuada laoreet. Sed volutpat fringilla fringilla.',
      icon: IconPentagonNumber2,
      links: [
        { href: 'https://example.com/', name: 'Justo' },
        { href: 'https://example.com/', name: 'Duis commodo' },
      ],
    },
    {
      category: 'Category 3',
      description:
        'Quisque elementum, eros quis malesuada malesuada, lacus massa malesuada libero, sed volutpat nisi orci feugiat magna. Aliquam eu sapien sed odio rhoncus varius.',
      icon: IconPentagonNumber3,
      links: [],
    },
    {
      category: 'Category 4',
      description:
        'Curabitur nec efficitur mi. Aenean vestibulum diam in purus mattis ornare. Suspendisse vitae eros metus. ',
      icon: IconPentagonNumber4,
      links: [{ href: 'https://example.com/', name: 'Vivamus lobortis' }],
    },
    {
      category: 'Category 5',
      description:
        'Sed aliquet urna vel enim luctus, a iaculis risus sollicitudin. Nunc in imperdiet velit. Mauris posuere ac felis ut malesuada.',
      icon: IconPentagonNumber5,
      links: [{ href: 'https://example.com/', name: 'Phasellus semper' }],
    },
    {
      category: 'Category 6',
      description:
        'Nunc vel augue a lectus pharetra faucibus eu id dolor. Ut nec ultricies risus. Sed id nisi augue. Integer dictum mauris quis elit rhoncus sagittis.',
      icon: IconPentagonNumber6,
      links: [],
    },
  ],
};
