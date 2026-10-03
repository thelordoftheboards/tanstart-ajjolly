import { HeaderWithMobileMenu } from '~/tanstart-ajjolly-theme-basic/components/header-with-burger-menu';
import { SectionFooterCompact1 } from '~/tanstart-ajjolly-theme-basic/components/section-footer-copact-1';
import { SectionHeaderH1Compact1 } from '~/tanstart-ajjolly-theme-basic/components/section-header-h1-compact-1';
import { HeaderWithBurgerMenuExample } from '~/tanstart-ajjolly-theme-basic/examples/header-with-burger-menu';
import { SectionFooterCompact1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-footer-copact-1';
import { SectionHeaderH1Compact1Example } from '~/tanstart-ajjolly-theme-basic/examples/section-header-h1-compact-1';

export function Page2() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <HeaderWithMobileMenu {...HeaderWithBurgerMenuExample} />

      <main className="flex-1 px-4 py-12 md:py-16 lg:py-20">
        <section className="mt-16 md:mt-24">
          <SectionHeaderH1Compact1 {...SectionHeaderH1Compact1Example} />
        </section>
      </main>

      <SectionFooterCompact1 {...SectionFooterCompact1Example} />
    </div>
  );
}
