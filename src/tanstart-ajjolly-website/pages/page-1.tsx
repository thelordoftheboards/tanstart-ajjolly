import { FooterCompact1 } from '~/tanstart-ajjolly-theme-basic/components/footer-compact-1';
import { HeaderWithLogoNamePagesAndMobileMenu1 } from '~/tanstart-ajjolly-theme-basic/components/header-with-logo-name-pages-and-mobile-menu-1';
import { SectionCardsInGridWithHalfCardImageTitleAndText1 } from '~/tanstart-ajjolly-theme-basic/components/section-cards-in-grid-with-half-card-image-title-and-text-1';
import { SectionFAQWithCollapsingAnswers1 } from '~/tanstart-ajjolly-theme-basic/components/section-faq-with-collapsing-answers-1';
import { SectionHeaderH2Compact1 } from '~/tanstart-ajjolly-theme-basic/components/section-header-h2-compact-1';
import { FooterCompact1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/footer-compact-1';
import { HeaderWithLogoNamePagesAndMobileMenu1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/header-with-logo-name-pages-and-mobile-menu-1';
import { SectionCardsInGridWithHalfCardImageTitleAndText1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/section-cards-in-grid-with-half-card-image-title-and-text-1';
import { SectionFAQWithCollapsingAnswers1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/section-faq-with-collapsing-answers-1';
import { SectionHeaderH2Compact1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/section-header-h2-compact-1';

//

export function Page1() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <HeaderWithLogoNamePagesAndMobileMenu1 {...HeaderWithLogoNamePagesAndMobileMenu1Example} />

      <main className="flex-1 px-4 py-12 md:py-16 lg:py-20">
        <SectionCardsInGridWithHalfCardImageTitleAndText1
          {...SectionCardsInGridWithHalfCardImageTitleAndText1Example}
        />

        <SectionFAQWithCollapsingAnswers1 {...SectionFAQWithCollapsingAnswers1Example} />

        <section className="mt-16 md:mt-24">
          <SectionHeaderH2Compact1 {...SectionHeaderH2Compact1Example} />
        </section>
      </main>

      <FooterCompact1 {...FooterCompact1Example} />
    </div>
  );
}
