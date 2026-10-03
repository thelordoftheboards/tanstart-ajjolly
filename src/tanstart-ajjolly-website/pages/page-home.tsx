import { HeaderWithMobileMenu } from '~/tanstart-ajjolly-theme-basic/components/header-with-burger-menu';
import { SectionCardsInGridTitleAndBulletsWithIcons1 } from '~/tanstart-ajjolly-theme-basic/components/section-cards-in-grid-title-and-bullets-with-icons1';
import { SectionCardsInGridTitleContentLinks1 } from '~/tanstart-ajjolly-theme-basic/components/section-cards-in-grid-title-content-links-1';
import { SectionFooterCompact1 } from '~/tanstart-ajjolly-theme-basic/components/section-footer-copact-1';
import { SectionHeaderH1Compact1 } from '~/tanstart-ajjolly-theme-basic/components/section-header-h1-compact-1';
import { SectionHeroTitleSubtitle1 } from '~/tanstart-ajjolly-theme-basic/components/section-hero-title-subtitle-1';
import { SectionIconReasonsWithCenteredCallToAction1 } from '~/tanstart-ajjolly-theme-basic/components/section-icon-reasons-with-centered-call-to-action-1';
import { SectionCardsInGridTitleAndBulletsWithIcons1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-cards-in-grid-title-and-bullets-with-icons1';
import { SectionCardsInGridTitleContentLinks1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-cards-in-grid-title-content-links-1';
import { SectionIconReasonsWithCenteredCallToAction1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-icon-reasons-with-centered-call-to-action-1';
import { copyrightName } from '~/tanstart-ajjolly-theme-basic-config/client/footer-compact';

export function PageHome() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <HeaderWithMobileMenu
        links={[
          { title: 'Page 1', to: '/page-1' },
          { title: 'Page 2', to: '/page-2' },
          { title: 'Example', url: 'https://example.com' },
        ]}
      />

      <main className="flex-1 px-4 py-12 md:py-16 lg:py-20">
        <SectionHeroTitleSubtitle1
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in urna vestibulum, eleifend orci non, porta neque. Donec et ullamcorper nibh."
          title="Pest Pentagon"
        />

        <SectionCardsInGridTitleContentLinks1 {...SectionCardsInGridTitleContentLinks1Example} />

        <section className="mt-16 md:mt-24">
          <SectionHeaderH1Compact1
            subtitle="Urus quam laoreet massa, et pharetra lectus neque a enim. Nullam diam arcu, vulputate quis magna vitae, tempor porta mauris"
            title="Praesent euismod, nisi et efficitur rhoncus"
          />

          <SectionCardsInGridTitleAndBulletsWithIcons1 {...SectionCardsInGridTitleAndBulletsWithIcons1Example} />
        </section>

        <SectionIconReasonsWithCenteredCallToAction1 {...SectionIconReasonsWithCenteredCallToAction1Example} />
      </main>

      <SectionFooterCompact1 copyrightName={copyrightName} />
    </div>
  );
}
