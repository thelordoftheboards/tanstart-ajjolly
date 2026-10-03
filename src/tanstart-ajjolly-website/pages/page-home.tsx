import { FooterCompact1 } from '~/tanstart-ajjolly-theme-basic/components/footer-compact-1';
import { HeaderWithLogoNamePagesAndMobileMenu1 } from '~/tanstart-ajjolly-theme-basic/components/header-with-logo-name-pages-and-mobile-menu-1';
import { SectionCardsInGridTitleAndBulletsWithIcons1 } from '~/tanstart-ajjolly-theme-basic/components/section-cards-in-grid-title-and-bullets-with-icons-1';
import { SectionCardsInGridTitleContentLinks1 } from '~/tanstart-ajjolly-theme-basic/components/section-cards-in-grid-title-content-links-1';
import { SectionHeaderH1Compact1 } from '~/tanstart-ajjolly-theme-basic/components/section-header-h1-compact-1';
import { SectionHeroTitleSubtitle1 } from '~/tanstart-ajjolly-theme-basic/components/section-hero-title-subtitle-1';
import { SectionIconReasonsWithCenteredCallToAction1 } from '~/tanstart-ajjolly-theme-basic/components/section-icon-reasons-with-centered-call-to-action-1';
import { FooterCompact1Example } from '~/tanstart-ajjolly-theme-basic/examples/footer-compact-1';
import { HeaderWithLogoNamePagesAndMobileMenu1Example } from '~/tanstart-ajjolly-theme-basic/examples/header-with-logo-name-pages-and-mobile-menu-1';
import { SectionCardsInGridTitleAndBulletsWithIcons1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-cards-in-grid-title-and-bullets-with-icons-1';
import { SectionCardsInGridTitleContentLinks1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-cards-in-grid-title-content-links-1';
import { SectionHeaderH1Compact1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-header-h1-compact-1';
import { SectionHeroTitleSubtitle1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-hero-title-subtitle-1';
import { SectionIconReasonsWithCenteredCallToAction1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-icon-reasons-with-centered-call-to-action-1';

export function PageHome() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <HeaderWithLogoNamePagesAndMobileMenu1 {...HeaderWithLogoNamePagesAndMobileMenu1Example} />

      <main className="flex-1 px-4 py-12 md:py-16 lg:py-20">
        <SectionHeroTitleSubtitle1 {...SectionHeroTitleSubtitle1Example} />

        <SectionCardsInGridTitleContentLinks1 {...SectionCardsInGridTitleContentLinks1Example} />

        <section className="mt-16 md:mt-24">
          <SectionHeaderH1Compact1 {...SectionHeaderH1Compact1Example} />

          <SectionCardsInGridTitleAndBulletsWithIcons1 {...SectionCardsInGridTitleAndBulletsWithIcons1Example} />
        </section>

        <SectionIconReasonsWithCenteredCallToAction1 {...SectionIconReasonsWithCenteredCallToAction1Example} />
      </main>

      <FooterCompact1 {...FooterCompact1Example} />
    </div>
  );
}
