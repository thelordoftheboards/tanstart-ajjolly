import {
  IconPentagonNumber1,
  IconPentagonNumber2,
  IconPentagonNumber3,
  IconPentagonNumber4,
  IconPentagonNumber5,
  IconPentagonNumber6,
} from '@tabler/icons-react';
import { CardsWithBulletsCollection } from '~/tanstart-ajjolly-theme-basic/components/cards-with-bullets-collection';
import { CategoryCardCollection } from '~/tanstart-ajjolly-theme-basic/components/category-card-collection';
import { FooterCompact } from '~/tanstart-ajjolly-theme-basic/components/footer-compact';
import { HeaderWithMobileMenu } from '~/tanstart-ajjolly-theme-basic/components/header-with-burger-menu';
import { HeroH1Compact } from '~/tanstart-ajjolly-theme-basic/components/hero-h1-compact';
import { SectionHeaderH1Compact } from '~/tanstart-ajjolly-theme-basic/components/section-header-h1-compact';

export function PageHome() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <HeaderWithMobileMenu
        links={[
          { title: 'Page 1', to: '/page-1' },
          { title: 'Page 2', to: '/page-2' },
        ]}
      />

      <main className="flex-1 px-4 py-12 md:py-16 lg:py-20">
        <HeroH1Compact />

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CategoryCardCollection
            items={[
              {
                category: 'Category 1',
                icon: IconPentagonNumber1,
                description:
                  'Vivamus turpis lectus, sollicitudin id purus eget, pharetra varius dolor. Sed sit amet tristique dolor. Nam tincidunt tempus mauris id dapibus.',
                links: [{ name: 'Lacinia vel', href: 'https://tailwindcss.com/' }],
              },
              {
                category: 'Category 2',
                icon: IconPentagonNumber2,
                description:
                  'Cras eros dolor, suscipit non placerat sodales, vestibulum id est. Nullam viverra fringilla orci, eget sodales nibh malesuada laoreet. Sed volutpat fringilla fringilla.',
                links: [
                  { name: 'Justo', href: 'https://ui.shadcn.com/' },
                  { name: 'Duis commodo', href: 'https://tailwindcss.com/' },
                ],
              },
              {
                category: 'Category 3',
                icon: IconPentagonNumber3,
                description:
                  'Quisque elementum, eros quis malesuada malesuada, lacus massa malesuada libero, sed volutpat nisi orci feugiat magna. Aliquam eu sapien sed odio rhoncus varius.',
                links: [],
              },
              {
                category: 'Category 4',
                icon: IconPentagonNumber4,
                description:
                  'Curabitur nec efficitur mi. Aenean vestibulum diam in purus mattis ornare. Suspendisse vitae eros metus. ',
                links: [{ name: 'Vivamus lobortis', href: 'https://tailwindcss.com/' }],
              },
              {
                category: 'Category 5',
                icon: IconPentagonNumber5,
                description:
                  'Sed aliquet urna vel enim luctus, a iaculis risus sollicitudin. Nunc in imperdiet velit. Mauris posuere ac felis ut malesuada.',
                links: [{ name: 'Phasellus semper', href: 'https://ui.shadcn.com/' }],
              },
              {
                category: 'Category 6',
                icon: IconPentagonNumber6,
                description:
                  'Nunc vel augue a lectus pharetra faucibus eu id dolor. Ut nec ultricies risus. Sed id nisi augue. Integer dictum mauris quis elit rhoncus sagittis.',
                links: [],
              },
            ]}
          />
        </section>

        <section className="mt-16 md:mt-24">
          <SectionHeaderH1Compact
            subtitle="Urus quam laoreet massa, et pharetra lectus neque a enim. Nullam diam arcu, vulputate quis magna vitae, tempor porta mauris"
            title="Praesent euismod, nisi et efficitur rhoncus"
          />

          <CardsWithBulletsCollection />
        </section>
      </main>

      <FooterCompact />
    </div>
  );
}
