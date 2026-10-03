import { FooterCompact1 } from '~/tanstart-ajjolly-theme-basic/components/footer-compact-1';
import { HeaderWithLogoNamePagesAndMobileMenu1 } from '~/tanstart-ajjolly-theme-basic/components/header-with-logo-name-pages-and-mobile-menu-1';
import { SectionBorderedCardsWithIconTitleDescriptionBullets1 } from '~/tanstart-ajjolly-theme-basic/components/section-bordered-cards-with-icon-title-description-bullets-1';
import { SectionFAQWithCollapsingAnswers1 } from '~/tanstart-ajjolly-theme-basic/components/section-faq-with-collapsing-answers-1';
import { SectionHeaderH1Compact1 } from '~/tanstart-ajjolly-theme-basic/components/section-header-h1-compact-1';
import { SectionHeroSplitWithImageOnRight1 } from '~/tanstart-ajjolly-theme-basic/components/section-hero-split-with-image-on-right-1';
import { FooterCompact1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/footer-compact-1';
import { HeaderWithLogoNamePagesAndMobileMenu1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/header-with-logo-name-pages-and-mobile-menu-1';
import { SectionBorderedCardsWithIconTitleDescriptionBullets1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/section-bordered-cards-with-icon-title-description-bullets-1';
import { SectionFAQWithCollapsingAnswers1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/section-faq-with-collapsing-answers-1';
import { SectionHeaderH1Compact1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/section-header-h1-compact-1';
import { SectionHeroSplitWithImageOnRight1Example } from '~/tanstart-ajjolly-theme-basic-examples/components/section-hero-split-with-image-on-right-1';

//

export function Page1() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <HeaderWithLogoNamePagesAndMobileMenu1 {...HeaderWithLogoNamePagesAndMobileMenu1Example} />

      <main className="flex-1 px-4 py-12 md:py-16 lg:py-20">
        <SectionHeroSplitWithImageOnRight1 {...SectionHeroSplitWithImageOnRight1Example} />

        <section className="mt-16 md:mt-24">
          <SectionHeaderH1Compact1 {...SectionHeaderH1Compact1Example} />
        </section>

        <SectionFAQWithCollapsingAnswers1 {...SectionFAQWithCollapsingAnswers1Example} />

        <SectionBorderedCardsWithIconTitleDescriptionBullets1
          {...SectionBorderedCardsWithIconTitleDescriptionBullets1Example}
        />
      </main>

      <FooterCompact1 {...FooterCompact1Example} />
    </div>
  );
}
