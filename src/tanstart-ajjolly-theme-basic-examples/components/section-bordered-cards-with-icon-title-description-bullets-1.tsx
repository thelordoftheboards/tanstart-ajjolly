import { IconCode, IconPalette, IconPlant, IconSettings } from '@tabler/icons-react';
import { SectionBorderedCardsWithIconTitleDescriptionBullets1Props } from '~/tanstart-ajjolly-theme-basic/schema/section-bordered-cards-with-icon-title-description-bullets-1';

//

export const SectionBorderedCardsWithIconTitleDescriptionBullets1Example: SectionBorderedCardsWithIconTitleDescriptionBullets1Props =
  {
    heading: 'Services',
    services: [
      {
        description:
          'Strategic planning and market positioning to ensure your product meets user needs and business goals.',
        icon: IconSettings,
        items: ['Market Research', 'User Personas', 'Competitive Analysis'],
        title: 'Product Strategy',
      },
      {
        description: 'Beautiful, user-centered designs that create engaging experiences across all platforms.',
        icon: IconPalette,
        items: ['UI/UX Design', 'Prototyping', 'Interaction Design'],
        title: 'Design',
      },
      {
        description: 'Modern, scalable web applications built with the latest technologies and best practices.',
        icon: IconCode,
        items: ['Frontend Dev', 'Backend Dev', 'API Integration'],
        title: 'Web Development',
      },
      {
        description: 'Data-driven strategies to launch successfully and scale your product efficiently.',
        icon: IconPlant,
        items: ['SEO Strategy', 'Analytics & Data', 'A/B Testing'],
        title: 'Marketing',
      },
    ],
    subtitle: 'We craft digital experiences that captivate and convert, bringing your vision to life.',
  };
