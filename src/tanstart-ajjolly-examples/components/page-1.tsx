import { CardsWithBulletsCollection } from '~/tanstart-ajjolly-theme-basic/components/cards-with-bullets-collection';
import { FooterCompact } from '~/tanstart-ajjolly-theme-basic/components/footer-compact';
import { HeaderWithMobileMenu } from '~/tanstart-ajjolly-theme-basic/components/header-with-burger-menu';
import { SectionHeaderH1Compact } from '~/tanstart-ajjolly-theme-basic/components/section-header-h1-compact';

export function Page1() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <HeaderWithMobileMenu
        links={[
          { title: 'Page 1', to: '/page-1' },
          { title: 'Page 2', to: '/page-2' },
        ]}
      />

      <main className="flex-1 px-4 py-12 md:py-16 lg:py-20">
        <section className="mt-16 md:mt-24">
          <SectionHeaderH1Compact subtitle="Here goes page 1" title="Page 1" />

          <CardsWithBulletsCollection />
        </section>

        <section className="mt-16 md:mt-24">
          <CardsWithBulletsCollection />
        </section>

        <section className="mt-16 md:mt-24">
          <CardsWithBulletsCollection />
        </section>

        <section className="mt-16 md:mt-24">
          <CardsWithBulletsCollection />
        </section>

        <section className="mt-16 md:mt-24">
          <CardsWithBulletsCollection />
        </section>

        <section className="mt-16 md:mt-24">
          <CardsWithBulletsCollection />
        </section>
      </main>

      <FooterCompact />
    </div>
  );
}
